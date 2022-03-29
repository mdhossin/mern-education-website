import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const ActivationEmail = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { addToast } = useToasts();
  console.log(activation_token, "token");
  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(
            "https://mern-education.herokuapp.com/user/activation",
            {
              activation_token,
            }
          );
          // console.log(res, "res");
          setSuccess(res.data.message);
        } catch (error) {
          error.response &&
            setError(
              error.response.data.message
                ? error.response.data.message
                : error.message
            );
        }
      };
      activationEmail();
    }
  }, [activation_token, error.response, error.message]);

  useEffect(() => {
    if (error) {
      addToast(error, { appearance: "error", autoDismiss: true });
    } else if (success) {
      addToast(success, {
        appearance: "success",
        autoDismiss: true,
      });
      // history.push(redirect);
    }
  }, [success, error, addToast]);
  return (
    <div className="activation section">
      <div>
        <h1 className="activation__error">{error && error}</h1>
        <h1 className="activation__success">{success && success}</h1>

        <div>
          <Link to="/login">
            {" "}
            <button className="button-secondary">Back to Login Page</button>
          </Link>
        </div>
      </div>
      {/* {error && showErrorMessage(error)}
      {success && showSuccessMessage(success)} */}
    </div>
  );
};

export default ActivationEmail;
