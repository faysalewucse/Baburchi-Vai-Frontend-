import Illustration from "../components/Illustration";
import SignupForm from "../components/SignUpForm";

export default function Signup() {
  return (
    <div className="bg-orange-100">
      <div className="max-w-7xl mx-auto px-2 md:px-0 md:flex justify-between gap-20 items-center h-[90vh]">
        <Illustration heading={"Create an Account"} />
        <div className="mt-[10%]">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
