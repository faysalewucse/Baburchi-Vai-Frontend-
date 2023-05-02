import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import googleIcon from "../assets/google.png";
import githubIcon from "../assets/github.png";

export default function SignupForm() {
  //styles
  const inputStyle =
    "border border-secondary2 rounded-lg md:p-2 p-1 md:text-xl focus:outline-secondary2";

  //Initialize Variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login, googleSignIn } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError("Failed to Login! Try again");
    }
  }

  return (
    <form
      className="flex flex-col gap-3 border border-secondary2 p-10 rounded-xl"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        required
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        className={inputStyle}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        required
        placeholder="Enter password"
        icon="lock"
        value={password}
        className={inputStyle}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button loading={loading} text="Login" />

      {error && <p className="error text-red-600 text-xl">{error}</p>}

      <div className="md:text-2xl font-bold text-center text-primary">
        Don't have an account?{" "}
        <Link to="/register" className="text-secondary hover:text-secondary2">
          Sign Up
        </Link>{" "}
        instead.
      </div>
      <div className="text-center">
        <h1 className="font-bold">OR</h1>
        <h1 className="font-semibold text-2xl text-secondary">Continue with</h1>
        <div className="flex items-center justify-center gap-3 mt-3">
          <img
            onClick={() => googleSignIn()}
            className="hover:scale-110 transition-all duration-200 w-12 h-12 bg-orange-100 p-2"
            src={googleIcon}
            alt="google"
          />
          <img
            className="hover:scale-110 transition-all duration-200 w-12 bg-orange-100"
            src={githubIcon}
            alt="github"
          />
        </div>
      </div>
    </form>
  );
}
