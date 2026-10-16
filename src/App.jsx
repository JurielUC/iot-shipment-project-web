import { BrowserRouter as Router } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "@/routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <TooltipProvider>
      <Router>
        <AppRoutes />
        <Toaster position="top-right" />
      </Router>
    </TooltipProvider>
  );
}

export default App;