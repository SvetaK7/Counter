import {combineReducers, compose, legacy_createStore} from "redux";
import {startValueReducer} from "./startValue-reducer";
import {maxValueReducer} from "./maxValue-reducer";
import {counterReducer} from "./counter-reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}


// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    // value: valueReducer,
    // color: colorReducer,
    maxValue: maxValueReducer,
    startValue: startValueReducer,
    countValue: counterReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let preloadedState;
const persistedTodosString = localStorage.getItem('app-state')
if (persistedTodosString){
    preloadedState = JSON.parse(persistedTodosString)
}

// непосредственно создаём store
export const store = legacy_createStore(rootReducer, preloadedState, composeEnhancers());

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

//сохраняем пару ключ-значение
store.subscribe(() => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;