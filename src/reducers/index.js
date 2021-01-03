import { combineReducers } from "redux"; // хранит все редьюсеры с приложения
import { createStore, applyMiddleware } from "redux";
import reposReducer from "./reposReducers"; // создание стора и подключает thunk
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  //корневой редюссер
  reposReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
