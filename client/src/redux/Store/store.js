const { createStore } = require("redux");
const { default: rootReducer } = require("../Reducers");




const store=createStore(rootReducer)
export default store