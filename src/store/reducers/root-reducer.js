import {combineReducers} from "redux";
import {NameSpace} from "../../const";
import {appState} from "./app-state/app-state";
import {loadedData} from "./loaded-data/loaded-data";
import {user} from "./user/user";

export default combineReducers({
  [NameSpace.DATA]: loadedData,
  [NameSpace.APP_STATE]: appState,
  [NameSpace.USER]: user,
});
