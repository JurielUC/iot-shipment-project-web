import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Home,
  ArrowLeft,
  SearchX,
  LayoutDashboard,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import useAuth from "@/hooks/use-auth";
import logo from "@/assets/logos/logo-bantay-biyahe.png";
import appDetails from "@/utils/appDetails";

function NotFoundPage() {
  const { user } = useAuth();

  const getDashboardLink = () => {
    if (!user) return "/";

    if (user.role === "Student") {
      return "/student/dashboard";
    }

    if (user.role === "Faculty") {
      return "/faculty/dashboard";
    }

    if (user.role === "Admin") {
      return "/admin/dashboard";
    }

    if (user.role === "Registrar") {
      return "/registrar/dashboard";
    }

    return "/";
  };

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>

      <div className="flex min-h-screen items-center justify-center bg-background px-6 py-10">
        <div className="w-full max-w-xl text-center">
          {/* Logo */}
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white p-2 shadow-2xl ring-1 ring-border">
            <img
              src={logo}
              alt="School Logo"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent text-primary">
              <SearchX className="h-10 w-10" />
            </div>

            <h1 className="mt-6 text-5xl font-bold text-card-foreground">
              404
            </h1>

            <h2 className="mt-2 text-2xl font-semibold text-card-foreground">
              Page Not Found
            </h2>

            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              The page you are looking for does not exist,
              may have been moved, or the link is incorrect.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {!user ? (
                <Button
                  asChild
                  className="h-11 rounded-md"
                >
                  <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Go to Login
                  </Link>
                </Button>
              ) : (
                <Button
                  asChild
                  className="h-11 rounded-md"
                >
                  <Link to={getDashboardLink()}>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Go to Dashboard
                  </Link>
                </Button>
              )}

              <Button
                type="button"
                variant="outline"
                className="h-11 rounded-md"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </div>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            © 2026 - {appDetails().heading}
          </p>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
