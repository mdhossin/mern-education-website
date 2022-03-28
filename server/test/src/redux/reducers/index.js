import { combineReducers } from "redux";
import {
  authReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./authReducer";
import tokenReducer from "./tokenReducer";
import token from "./tokenReducer";
import users from "./usersReducer";

export default combineReducers({
  auth: authReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  token,
  userToken: tokenReducer,
  users,
});
