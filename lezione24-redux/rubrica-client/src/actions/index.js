import axios from 'axios';

function getAllContacts() {
    return function(dispatch) {
        return axios.get('http://localhost:3000/contacts')
            .then(response => {
                if(response.status !== 200) { throw new Error('Error: ' + response.status) }
                return dispatch({ type: "LOADED_ALL_CONTACTS", payload: response.data })
            }).catch(error => { throw new Error('Error: ' + error) })
    }
}

function removeContact(id) {
    return function(dispatch) {
        return axios.delete('http://localhost:3000/contacts/'+id)
        .then(response => {
            if(response.status !== 200) { throw new Error('Error: ' + response.status) }
            return dispatch({ type: "REMOVE_CONTACT", id: id })
        }).catch(error => { throw new Error('Error: ' + error) })
    }
}

function addContact(obj) {
    return function(dispatch) {
        return axios.post('http://localhost:3000/contacts', obj)
        .then(response => {
            if(response.status !== 201) { throw new Error('Error: ' + response.status) }
            return dispatch({ type: "ADD_CONTACT", contact: response.data })
        }).catch(error => { throw new Error('Error: ' + error) })
    }
}

function updateContact(obj) {
    return function(dispatch) {
        return axios.put('http://localhost:3000/contacts/'+obj.id, obj)
        .then(response => {
            if(response.status !== 200) { throw new Error('Error: ' + response.status) }
            return dispatch({ type: "UPDATE_CONTACT", contact: response.data })
        }).catch(error => { throw new Error('Error: ' + error) })
    }
}

export  { getAllContacts, removeContact, addContact, updateContact }