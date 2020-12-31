import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "modules";
import { composeWithDevTools } from "redux-devtools-extension"; // 리덕스 개발자 도구
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk))); // 스토어를 만듭니다.

ReactDOM.render( 
    <Provider store = { store } >
        <App/ >
    </Provider>,
    document.querySelector("#root")
);