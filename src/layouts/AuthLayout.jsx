import logo from "@/assets/logos/logo.png";
import appDetails from "@/utils/appDetails";

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-green-700 via-green-600 to-green-500 p-10 text-white">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="School Logo"
              className="h-16 w-16 rounded-full bg-white object-cover p-1 shadow-lg"
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
              Modern Solutions for Smarter Organizations
            </h2>

            <p className="max-w-lg text-lg text-white/80">
              Build efficient workflows, improve productivity, and deliver exceptional user experiences through scalable web applications.
            </p>
          </div>

          <p className="text-sm text-white/70">
            © 2026 - React Template
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