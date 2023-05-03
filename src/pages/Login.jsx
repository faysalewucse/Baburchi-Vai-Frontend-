import Illustration from "../components/Illustration";
import LoginForm from "../components/LoginForm";
import ScrollToTop from "../utils/ScrollToTop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  ScrollToTop();
  const notify = ({ message }) => {
    if (message === "Firebase: Error (auth/wrong-password).")
      message = "Wrong password";
    else if (message === "Firebase: Error (auth/user-not-found).")
      message = "User not found";
    toast.error(message);
  };

  return (
    <div className="bg-orange-100">
      <div className="max-w-7xl mx-auto p-10 md:flex gap-20 justify-center items-center min-h-screen">
        <Illustration heading={"Login to Your Account"} />
        <div className="md:mt-0 mt-[10%]">
          <LoginForm notify={notify} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
