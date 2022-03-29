import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import "./styles/styles.scss";

import axios from "axios";
import {
  dispatchGetUser,
  dispatchLogin,
  fetchUser,
} from "./redux/actions/authActions";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import { ToastProvider } from "react-toast-notifications";
import ActivationEmail from "./components/ActivationEmail/ActivationEmail";
import Login from "./pages/Login/Login";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Contact from "./pages/Contact/Contact";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Notfound from "./components/Notfound/Notfound";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  console.log(token, "token");
  const auth = useSelector((state) => state.auth);

  const userLogin = useSelector((state) => state?.userLogin);
  const { loading } = userLogin;
  //t esting
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const getToken = async () => {
        try {
          const res = await axios.post("/user/refresh_token");
          // console.log(res, "res");
          dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
        } catch (error) {
          alert(
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
          );
          localStorage.removeItem("firstLogin");
        }
      };

      getToken();
    }
  }, [auth.isLogged, dispatch, loading]);

  useEffect(() => {
    if (token) {
      const getUser = () => {
        dispatch(dispatchLogin());

        return fetchUser(token).then((res) => {
          dispatch(dispatchGetUser(res));
        });
      };
      getUser();
    }
  }, [token, dispatch]);
  return (
    <ToastProvider placement="top-right">
      <Router>
        <Navigation />
        {/* <Body /> */}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route
            path="login"
            element={auth.isLogged ? <Notfound /> : <Login />}
          ></Route>
          <Route
            path="/activate/:activation_token"
            element={<ActivationEmail />}
          />

          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>

          <Route path="/user/reset/:token" element={<ResetPassword />} />
          <Route
            path="contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          ></Route>

          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </Router>
    </ToastProvider>
  );
}

export default App;
