import { Route, Routes } from "react-router";
import { LoginScreen } from "./pages/login-screen";
import { HomeScreen } from "./pages/home-screen";

function App() {
  return (
    <div className="grid h-lvh items-center justify-items-center">
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
