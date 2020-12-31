import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import country from "modules/country";

const rootReducer = combineReducers({
    country,
    form: formReducer,
});

export default rootReducer;