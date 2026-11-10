const logo = "/dried-food-mark.svg";
import appDetails from "@/utils/appDetails";

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="relative hidden overflow-hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#10261f] via-[#1e4939] to-[#b8792f] p-10 text-white">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-16 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="School Logo"
              className="h-20 w-20 rounded-2xl bg-white/10 object-contain p-2 shadow-xl ring-1 ring-white/20"
            />

            <div>
              <h1 className="text-2xl font-bold">
                {appDetails().heading}
              </h1>

              <p className="text-sm text-white/80">
                {appDetails().sub_heading}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="max-w-xl text-5xl font-bold leading-tight">
              One image.<br />Five product classes.
            </h2>

            <p className="max-w-lg text-lg text-white/80">
              Capture tabletop images with ESP32-CAM and preview camera-based identification for selected dried food products.
            </p>
          </div>

          <p className="text-sm text-white/70">
            © 2026 · IoT, Computer Vision & Machine Learning
          </p>
        </section>

        <main className="flex items-center justify-center px-6 py-10 bg-muted">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AuthLayout;
