import logo from "@/assets/logos/logo.png";
import appDetails from "@/utils/appDetails";

function Loader({
  variant = "section", // "section" | "screen" | "inline"
  title = "Loading...",
  subtitle = "Please wait while we load the data.",
  rows = 4,
  showLogo = false,
}) {
  if (variant === "screen") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-white p-2 shadow-2xl ring-1 ring-border">
            <img src={logo} alt="Logo" className="h-full w-full rounded-full object-cover" />
          </div>

          <h1 className="text-2xl font-bold text-primary">{appDetails().heading}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{appDetails().sub_heading}</p>

          <BouncingDots />

          <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">
            {title}
          </p>
        </div>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className="flex items-center justify-center gap-3 py-6 text-sm text-muted-foreground">
        <Spinner />
        <span>{title}</span>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-3">
        {showLogo ? (
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
        ) : (
          <Spinner />
        )}

        <div>
          <h3 className="font-semibold text-card-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      <div className="mt-6 animate-pulse space-y-3">
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="rounded-xl border border-border p-4">
            <div className="h-4 w-40 rounded bg-muted" />
            <div className="mt-2 h-3 w-64 rounded bg-muted" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
  );
}

function BouncingDots() {
  return (
    <div className="mt-6 flex justify-center gap-2">
      <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
      <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
      <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary" />
    </div>
  );
}

export default Loader;