import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import Input from "../../components/Input/Input";

import { register } from "../../redux/actions/usersActions";
import { USER_REGISTER_RESET } from "../../redux/constants/userConstants";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password } = values;
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Your name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];
  const userReg = useSelector((state) => state.userRegister);

  const { loading, error, userInfo: userRegInfo } = userReg;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      dispatch({ type: USER_REGISTER_RESET });
      addToast(error, { appearance: "error", autoDismiss: true });
    } else if (userRegInfo) {
      dispatch({ type: USER_REGISTER_RESET });
      addToast(userRegInfo?.message, {
        appearance: "success",
        autoDismiss: true,
      });
      // history.push("/");
    }
  }, [userRegInfo, error, addToast, dispatch]);

  return (
    <section className="section">
      <div className="contact">
        <div className="contact__container">
          <h3 className="contact__title">Register</h3>

          <form className="contact__form" onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <button className="button" type="submit">
              {loading ? <Spinner animation="border" size="sm" /> : "Register"}
            </button>

            <Link to="/login">
              {" "}
              <button
                style={{ fontSize: "15px" }}
                className="button-primary"
                type="submit"
              >
                Already have an account ? Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
