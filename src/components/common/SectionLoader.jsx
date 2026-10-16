function SectionLoader({
    title = "Loading Data...",
    rows = 4,
  }) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div className="animate-pulse space-y-5">
          {/* Header */}
          <div>
            <div className="h-5 w-40 rounded bg-muted" />
            <div className="mt-2 h-4 w-64 rounded bg-muted" />
          </div>
  
          {/* Cards / Rows */}
          <div className="space-y-3">
            {Array.from({ length: rows }).map(
              (_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl border border-border p-4"
                >
                  <div className="space-y-2">
                    <div className="h-4 w-40 rounded bg-muted" />
                    <div className="h-3 w-28 rounded bg-muted" />
                  </div>
  
                  <div className="h-10 w-10 rounded-xl bg-muted" />
                </div>
              )
            )}
          </div>
  
          {/* Footer */}
          <div className="h-4 w-32 rounded bg-muted" />
        </div>
  
        <p className="mt-5 text-sm text-muted-foreground">
          {title}
        </p>
      </div>
    );
  }
  
  export default SectionLoader;