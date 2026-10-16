import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function ConfirmDialog({
  open,
  onOpenChange,
  title = "Confirm Action",
  description = "Are you sure you want to continue?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  danger = false,
  onConfirm,
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-md rounded-2xl">
        <DialogHeader>
          <div
            className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full ${
              danger
                ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300"
                : "bg-accent text-primary"
            }`}
          >
            <AlertTriangle className="h-6 w-6" />
          </div>

          <DialogTitle>{title}</DialogTitle>

          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="outline"
            className="rounded-md"
            onClick={() => onOpenChange(false)}
          >
            {cancelText}
          </Button>

          <Button
            type="button"
            variant={danger ? "destructive" : "default"}
            className="rounded-md"
            onClick={onConfirm}
          >
            {confirmText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmDialog;