import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SidebarLayout from "./layouts/sidebar";
import NavbarLayout from "./layouts/navbar";
import { navItems } from "./nav-items";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route element={<SidebarLayout />}>
              <Route path="/dashboard" element={navItems.find(item => item.to === "/dashboard").page} />
            </Route>
            <Route element={<NavbarLayout />}>
              {navItems.filter(item => item.to !== "/dashboard").map((item) => (
                <Route key={item.to} path={item.to} element={item.page} />
              ))}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;