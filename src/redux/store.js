import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers";


// Custom Middleware
// import { customLogger } from "./customMiddleware";
// export default createStore(rootReducer, applyMiddleware(customLogger));


// Redux Thunk
// import thunk from "redux-thunk";
// export default createStore(rootReducer, applyMiddleware(logger, thunk));


// Redux Saga
import createSagaMiddleware from "redux-saga";
import { todosSaga } from "./actions/sagaMiddleware";

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(todosSaga)
export default createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));


