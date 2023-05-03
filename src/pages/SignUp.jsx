import Illustration from "../components/Illustration";
import SignupForm from "../components/SignUpForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const notify = (msg) => {
    if (msg === "Firebase: Error (auth/email-already-in-use).")
      msg = "Email already in use. Try another email.";
    toast.error(msg);
  };
  return (
    <div className="bg-orange-100">
      <div className="max-w-7xl mx-auto px-2 md:px-0 md:flex justify-between gap-20 items-center min-h-screen md:py-0 py-10">
        <Illustration heading={"Create an Account"} />
        <div className="mt-[10%] md:mt-0">
          <SignupForm notify={notify} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
