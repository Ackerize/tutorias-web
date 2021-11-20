import React, { useState } from "react";
import AuthButton from "../components/Buttons/AuthButton";
import AuthInput from "../components/Inputs/AuthInput";
import FooterLink from "../components/FooterLink";
import axios from "axios";
import { API_URL } from "../utils/constants";

const RegisterScreen = ({ setToken }) => {

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios.post(`${API_URL}/usuarios/register`, formValues)
    .then((response) => {
      const { data } = response;
      const { token } = data;
      setLoading(false);
      setToken(token);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-800">
      <form
        className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <label className="font-light text-4xl mb-4">
          Movie <span className="font-bold">APP</span>
        </label>
        <AuthInput placeholder="Fullname" name="name" onChange={handleChange} />
        <AuthInput
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <AuthInput
          type="password"
          placeholder="Password"
          name="Password"
          onChange={handleChange}
        />
        <AuthButton loading={loading}>Register</AuthButton>
        <FooterLink
          label="Already have an account?"
          path="/auth/login"
          link="Log In"
        />
      </form>
    </div>
  );
};

export default RegisterScreen;
