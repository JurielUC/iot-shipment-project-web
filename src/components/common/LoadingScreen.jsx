import logo from "@/assets/logos/logo-bantay-biyahe.png";
import appDetails from "@/utils/appDetails";

function LoadingScreen({
  title = appDetails().heading,
  subtitle = appDetails().sub_heading,
  message = "Loading...",
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-white p-2 shadow-2xl ring-1 ring-border">
          <img
            src={logo}
            alt="School Logo"
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold text-primary">
          {title}
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          {subtitle}
        </p>

        <div className="mt-6 flex justify-center gap-2">
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary" />
        </div>

        <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">
          {message}
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
