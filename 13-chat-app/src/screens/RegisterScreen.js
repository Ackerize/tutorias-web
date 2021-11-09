import React from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../components/Buttons/Button";
import Input from "../components/Input";
import SplashImage from "../components/SplashImage";
import Title from "../components/Title";
import { app as firebase } from "../firebase/firebase";
import { useForm } from "../hooks/useForm";

const RegisterScreen = () => {
  const [formValues, onChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
    if(formValues.password.length < 6){
      alert("Password must be at least 6 characters long");
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(formValues.email, formValues.password)
    .then(async (auth) => {
        await auth.user.updateProfile({
            displayName: formValues.name,
        });
        history.push("/login");
    })
  }

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <SplashImage />

      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <Title>Create your account</Title>

          <form className="mt-6" onSubmit={handleSubmit}>
            <Input
              label="Name"
              placeholder="Enter Name"
              name="name"
              value={formValues.name}
              onChange={onChange}
            />
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
            <Button>Register</Button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <p className="mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterScreen;
