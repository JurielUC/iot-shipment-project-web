import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ShieldAlert, Home, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import logo from "@/assets/logos/logo.png";
import appDetails from "@/utils/appDetails";

function UnauthorizedPage() {
  return (
    <>
      <Helmet>
        <title>Unauthorized Access</title>
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
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300">
              <ShieldAlert className="h-10 w-10" />
            </div>

            <h1 className="mt-6 text-3xl font-bold text-card-foreground">
              Unauthorized Access
            </h1>

            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              You do not have permission to access this page.
              Please contact the administrator if you
              believe this is a mistake.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Button asChild className="h-11 rounded-md">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go to Login
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-11 rounded-md"
              >
                <button onClick={() => window.history.back()}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </button>
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

export default UnauthorizedPage;