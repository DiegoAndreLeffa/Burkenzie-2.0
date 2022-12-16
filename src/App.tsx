import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { StyledBody } from "./components/styles/styledBody";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import { DashBoard } from "./pages/DashBoard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <StyledBody>
      <UserProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
        </CartProvider>
      </UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </StyledBody>
  );
}

export default App;
