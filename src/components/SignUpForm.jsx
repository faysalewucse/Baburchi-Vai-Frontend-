import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";

export default function SignupForm({ notify }) {
  //styles
  const inputStyle =
    "border border-secondary p-2 md:text-xl focus:outline-secondary2 rounded-lg";

  //Initialize Variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return notify("Passwords don't match!");
    } else if (password.length < 6) {
      return notify("Password should be at least 6 characters.");
    }

    try {
      setLoading(true);
      await signup(email, password, username, photoUrl);
      navigate("/");
    } catch (err) {
      setLoading(false);
      notify(err.message);
    }
  }

  const emailHandler = (e) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
      setValidEmail(true);
    else setValidEmail(false);

    setEmail(e.target.value);
  };
  return (
    <form
      className="flex flex-col gap-3 border border-secondary2 md:p-10 p-5 rounded-xl"
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
        onChange={emailHandler}
      />

      {email && !validEmail && (
        <p className="text-red-500">Not a Valid Email</p>
      )}

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
      <Button loading={loading} text="Register" />

      <div className="md:text-2xl font-bold">
        Already have an account?{" "}
        <Link to="/login" className="text-secondary2 hover:text-primary">
          Login
        </Link>{" "}
        instead.
      </div>
    </form>
  );
}
