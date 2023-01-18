function storeRoducer(state=[], action) {
    switch (action.type) {
        case "LOADED_ALL_CONTACTS":
            return [...action.payload]
        case "REMOVE_CONTACT":
            return state.filter(ele => ele.id !== action.id)
        case "ADD_CONTACT":
            return [...state, action.contact]
        default:
            return state
    }
}

export default storeRoducer