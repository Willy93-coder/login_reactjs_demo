import { Route, Routes } from "react-router";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { CreateAccount } from "./pages/create-account";
import { Toaster } from "./components/ui/toaster";
import { ResetPassword } from "./pages/reset-password";

function App() {
  return (
    <div className="flex h-lvh items-center justify-center">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/update-password" element={<ResetPassword />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
