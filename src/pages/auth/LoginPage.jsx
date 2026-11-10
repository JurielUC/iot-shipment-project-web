import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import AuthLayout from "@/layouts/AuthLayout";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import authService from "@/services/authService";
import useAuth from "@/hooks/use-auth";

const logo = "/dried-food-mark.svg";
import { Helmet } from "react-helmet-async";
import ToastAlert from "@/utils/toastAlert";

import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";
import userResponse from "@/data/mock/userResponse";

import { USE_MOCK_AUTH } from "@/config/auth";

function LoginPage() {
  const navigate = useNavigate();

  const { user, loading: authLoading, refreshUser } = useAuth();
  const { login } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const [form, setForm] = useState({
    email: "admin@driedfoodvision.test",
    password: "demo1234",
    remember: false,
  });

  useEffect(() => {
    if (!authLoading && user) {
      redirectByRole(user.role);
    }
  }, [user, authLoading]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRemember = (checked) => {
    setForm({
      ...form,
      remember: checked,
    });
  };

  const redirectByRole = (role) => {
    if (role === "Admin") {
      navigate("/admin/dashboard", {
        replace: true,
      });
    } else {
      navigate("/login", {
        replace: true,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    setLoading(true);
    setErrors([]);
  
    if (USE_MOCK_AUTH) {
      if (form.email !== "admin@driedfoodvision.test" || form.password !== "demo1234") {
        setErrors(["Use the demo credentials shown below."]);
        setLoading(false);
        return;
      }
      const user = userResponse.data.user;
  
      login(user);
  
      ToastAlert({
        type: "success",
        message: "Login successful.",
      });
  
      redirectByRole(user.role);
  
      setLoading(false);
      return;
    }
  
    authService
      .csrf()
      .then(() => authService.login(form))
      .then(() => refreshUser())
      .then(() => authService.me())
      .then((response) => {
        const user = response.data.data.user;
  
        ToastAlert({
          type: "success",
          message: "Login successful.",
        });
  
        redirectByRole(user.role);
      })
      .catch((error) => {
        const responseErrors = error.response?.data?.errors;
  
        if (responseErrors) {
          setErrors(
            Array.isArray(responseErrors)
              ? responseErrors
              : Object.values(responseErrors).flat()
          );
        } else {
          setErrors(["Login failed."]);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (authLoading) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <AuthLayout>
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:hidden">
            <img
              src={logo}
              alt="Dried Food Vision logo"
              className="mx-auto mb-4 h-24 w-24 rounded-2xl bg-slate-950 object-contain p-2 shadow-lg"
            />

            <h1 className="text-2xl font-bold text-primary">
              Dried Food Vision
            </h1>

            <p className="text-sm text-muted-foreground">
              IoT Inspection System
            </p>
          </div>

          <Card className="border-0 shadow-2xl">
            <CardHeader className="space-y-2 text-center">
              <CardTitle className="text-3xl font-bold">
                Inspector login
              </CardTitle>

              <CardDescription>
                Access the static inspection prototype
              </CardDescription>
            </CardHeader>

            <CardContent>
              {errors.length > 0 && (
                <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600">
                  {errors.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="space-y-2">
                  <Label>Email</Label>

                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="h-11"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Password</Label>

                  <div className="relative">
                    <Input
                      name="password"
                      type={
                        showPassword ? "text" : "password"
                      }
                      value={form.password}
                      onChange={handleChange}
                      className="h-11 pr-10"
                      required
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={form.remember}
                    onCheckedChange={handleRemember}
                  />
                  Remember me
                </label>

                <Button
                  type="submit"
                  className="h-11 w-full"
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-3 text-left text-xs text-blue-900">
                  <p className="font-semibold">Presentation account</p>
                  <p className="mt-1">admin@driedfoodvision.test · demo1234</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </AuthLayout>
    </>
  );
}

export default LoginPage;
