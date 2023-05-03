import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignupForm() {
  //styles
  const inputStyle =
    "border border-secondary md:p-2 p-1 md:text-xl focus:outline-secondary2 rounded-lg";

  //Initialize Variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return notify("Passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username, photoUrl);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }

  const notify = (msg) => toast.error(msg, { autoClose: 1000 });

  return (
    <form
      className="flex flex-col gap-3 border border-secondary2 p-10 rounded-xl"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter name"
        required
        value={username}
        className={inputStyle}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="text"
        required
        placeholder="Enter email"
        value={email}
        className={inputStyle}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        required
        placeholder="Enter password"
        value={password}
        className={inputStyle}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        required
        placeholder="Confirm password"
        value={confirmPassword}
        className={inputStyle}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <input
        required
        placeholder="Enter Photo URL"
        value={photoUrl}
        className={inputStyle}
        onChange={(e) => setPhotoUrl(e.target.value)}
      />

      <div>
        <input
          type="checkbox"
          id="condition"
          required
          name="condition"
          value={agree}
          onChange={(e) => setAgree(e.target.value)}
        />
        <label htmlFor="condition"> I Agree to the Terms and Condition</label>
      </div>

      <Button loading={loading} text="Register" />

      {error && <p className="error">{error}</p>}

      <div className="md:text-2xl font-bold">
        Already have an account?{" "}
        <Link to="/login" className="text-secondary2 hover:text-primary">
          Login
        </Link>{" "}
        instead.
      </div>
      <ToastContainer />
    </form>
  );
}
