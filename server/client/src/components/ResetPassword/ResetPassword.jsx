import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useToasts } from "react-toast-notifications";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import { isLength, isMatch } from "../../utils/validation";
const ResetPassword = () => {
  const [data, setData] = useState({
    password: "",
    cf_password: "",
    error: "",
    success: "",
  });
  const { token } = useParams();
  const { addToast } = useToasts();

  const [typePass, setTypePass] = useState(false);
  const [typeCfPass, setTypeCfPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const { password, cf_password, error, success } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, error: "", success: "" });
  };

  const handleResetPass = async () => {
    if (isLength(password))
      return setData({
        ...data,
        error: "Password must be at least 6 characters.",
        success: "",
      });

    if (!isMatch(password, cf_password))
      return setData({
        ...data,
        error: "Password did not match.",
        success: "",
      });

    try {
      setLoading(true);
      const res = await axios.post(
        "https://mern-education.herokuapp.com/user/reset",
        { password },
        {
          headers: { Authorization: token },
        }
      );
      setLoading(false);

      return setData({ ...data, error: "", success: res.data.message });
    } catch (error) {
      setLoading(false);
      error.response.data.message &&
        setData({ ...data, error: error.response.data.message, success: "" });
    }
  };

  useEffect(() => {
    if (error) {
      addToast(error, { appearance: "error", autoDismiss: true });
    } else if (success) {
      addToast(success, {
        appearance: "success",
        autoDismiss: true,
      });
    }
  }, [error, success, addToast]);

  return (
    <section className="section">
      <div className="contact">
        <div className="contact__container">
          <h2 className="contact__title">Reset Your Password</h2>

          <div className="contact__form__div">
            <label htmlFor="password" className="contact__form__div-tag">
              Password
            </label>
            <input
              className="contact__form__div-input"
              type={typePass ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={handleChangeInput}
              placeholder="Your password"
            />
            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </small>
          </div>
          <div className="contact__form__div">
            <label htmlFor="cf_password" className="contact__form__div-tag">
              Confirm Password
            </label>
            <input
              className="contact__form__div-input"
              type={typeCfPass ? "text" : "password"}
              name="cf_password"
              id="cf_password"
              value={cf_password}
              onChange={handleChangeInput}
              placeholder="Confirm password"
            />
            <small onClick={() => setTypeCfPass(!typeCfPass)}>
              {typeCfPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </small>
          </div>

          <button className="button-secondary" onClick={handleResetPass}>
            {loading ? (
              <Spinner animation="border" size="sm" />
            ) : (
              "Reset Password"
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
