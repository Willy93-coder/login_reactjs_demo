import { Route, Routes } from "react-router";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { CreateAccount } from "./pages/create-account";

function App() {
  return (
    <div className="grid h-lvh items-center justify-items-center">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
