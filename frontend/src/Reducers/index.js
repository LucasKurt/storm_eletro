import { combineReducers } from "redux";

let sacola = []
let qtd = []
if (localStorage.getItem("sacola") && localStorage.getItem("sacola")) {
    sacola = JSON.parse(localStorage.getItem("sacola"))
    qtd = JSON.parse(localStorage.getItem("qtd"))
}

function sacolaReducer(state = sacola, action) {
    if (action.type === 'ADICIONAR') {
        state.push(action.value);
        return [...state];
    } else if(action.type === 'REMOVER'){
        state.splice(action.value,1);
        return [...state];
    } else if(action.type === 'ATUALIZAR'){
        state[action.value[0]].qtd = action.value[1];
        return [...state];
    // } else if (action.type === 'SOMAR') {
    //     state[action.value]++ 
    //     return [...state];
    // } else if(action.type === 'SUBTRAIR'){
    //     state[action.value]-- 
    //     return [...state];
    } else {
        return state;
    }
}

function qtdReducer(state = qtd,action) {
    if (action.type === 'PUSH') {
        state.push(action.value);
        return [...state];
    } else if(action.type === 'SPLICE'){
        state.splice(action.value,1);
        return [...state];
    } else if (action.type === 'SOMAR') {
        state[action.value]++ 
        return [...state];
    } else if(action.type === 'SUBTRAIR'){
        state[action.value]-- 
        return [...state];
    } else {
        return state;
    }
}

const reducers = combineReducers({sacolaReducer,qtdReducer});

export default reducers;