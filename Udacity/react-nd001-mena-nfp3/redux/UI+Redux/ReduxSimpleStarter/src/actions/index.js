import { FETCH, CREATE, DELETE } from "./types";

export function fetchItems() {
    return {
        type: FETCH,
    }
}

export function createItems(item) {
    let itemToAdd = {
        [Math.floor(Math.random() * 20)]: item
    }
    return {
        type: CREATE,
        payload: itemToAdd
    }
}

export function deleteItems(key) {
    return {
        type: DELETE,
        payload: key
    }
}