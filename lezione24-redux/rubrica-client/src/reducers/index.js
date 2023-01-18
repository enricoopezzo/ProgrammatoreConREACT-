function storeRoducer(state=[], action) {
    switch (action.type) {
        case "LOADED_ALL_CONTACTS":
            return [...action.payload]
        case "REMOVE_CONTACT":
            return state.filter(ele => ele.id !== action.id)
        case "ADD_CONTACT":
            return [...state, action.contact]
        case "UPDATE_CONTACT":
            let prevState = Object.assign([], state);
            let index = prevState.findIndex(ele => ele.id === action.contact.id);
            prevState[index] = action.contact;
            return [...prevState]
        default:
            return state
    }
}

export default storeRoducer