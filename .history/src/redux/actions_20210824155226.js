import {
    SET_HEAD_TITLE,
    RECEIVE_USER,
    SHOW_ERROR_MSG,
    RESET_USER,
  } from "./action-type";
  import { reqLogin } from "../api";
  import storageUtils from "../utils/storageUtils";

  