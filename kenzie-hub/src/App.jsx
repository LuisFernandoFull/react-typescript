import { Flip, ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import { RoutesMain } from "./routes";

function App() {
  return (
    <>
      <RoutesMain />
      <ToastContainer autoClose={1500} transition={Flip} />
    </>
  );
}

export default App;
