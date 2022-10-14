import { Flip, ToastContainer } from "react-toastify";
import { AuthenticationProvider } from "./contexts/UserContext/AuthContext";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import { RoutesMain } from "./routes";

function App() {
  return (
    <>
      <AuthenticationProvider>
        <RoutesMain />
      </AuthenticationProvider>

      <ToastContainer autoClose={1500} transition={Flip} />
    </>
  );
}

export default App;
