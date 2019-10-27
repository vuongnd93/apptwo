// import defaultDataKake from "./reducer/dataFakeReducer";


export function INCREMENT() {
    return { type: 'INCREMENT' };
}
export function DECREMENT() {
    return { type: 'DECREMENT' };
}
export function START() {
    return { type: 'START' };
}
export function END() {
    return { type: 'END' };
}
export function ToggleBtn(id) {
    return { 
        type: 'TOGGLE_BTNJOB',
        id,
     };
}

export function showCompleted() {
    return { type: 'FILTER_COMPLETED' };
}

export function showAll() {
    return { type: 'FILTER_SHOW_ALL' };
}

export function showProcessing() {
    return { type: 'FILTER_PROCESSING' };
}