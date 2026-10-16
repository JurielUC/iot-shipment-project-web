import { SearchX } from "lucide-react";

function NoRecordsFound({
  title = "No Records Found",
  message = "There are currently no records available to display.",
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card px-6 py-12 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primary">
        <SearchX className="h-8 w-8" />
      </div>

      <h3 className="text-lg font-semibold text-card-foreground">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {message}
      </p>
    </div>
  );
}

export default NoRecordsFound;