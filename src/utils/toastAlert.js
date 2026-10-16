import toast from "react-hot-toast";

function ToastAlert({
  type = "success",
  message = "Success",
}) {
  if (type === "success") {
    toast.success(message);
  }

  if (type === "error") {
    toast.error(message);
  }

  if (type === "loading") {
    toast.loading(message);
  }

  if (type === "warning") {
    toast(message, {
      icon: "⚠️",
    });
  }

  if (type === "defaultError") {
    toast.error("Something went wrong. Please try again.");
  }
}

export default ToastAlert;