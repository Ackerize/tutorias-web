import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import SplashImage from "../components/SplashImage";
import Title from "../components/Title";
import firebase from "../firebase/firebase";
import { useForm } from "../hooks/useForm";

const LoginScreen = () => {
  const [formValues, onChange] = useForm({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(formValues.email, formValues.password)
      .then((auth) => {
        localStorage.setItem("user", auth.user.displayName)
      })
      .catch((error) => {
        console.log("Error logging in");
      });
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <SplashImage />

      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <Title>Log in to your account</Title>

          <form className="mt-6" onSubmit={onSubmit}>
            <Input
              label="Email address"
              type="email"
              placeholder="Enter Email Address"
              name="email"
              value={formValues.email}
              onChange={onChange}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter a password"
              name="password"
              value={formValues.password}
              onChange={onChange}
            />
            <Button>Log in</Button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <Button type="google"> Log in with Google</Button>

          <p className="mt-8">
            Need an account?{" "}
            <Link
              to="/register"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;
