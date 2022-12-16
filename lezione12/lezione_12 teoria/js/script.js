/* function test(e) {
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    console.log(email, password);
} */

function func(e) {
    console.log(e);
}

/*console.dir(document);

let btn = document.querySelector('#btn2');
btn.onclick = func;

let btnListner = document.querySelector('#btn3');
btnListner.addEventListener('click', func)

let email = document.querySelector('#email');
email.addEventListener('change', testEmail)

let pass = document.querySelector('#password');
pass.addEventListener('change', testPassword)

let age = document.querySelector('#age');
age.addEventListener('change', testAge);

function testEmail() {
    if(email.value.length < 5) {
        document.querySelector('#error').innerHTML = '<div class="alert alert-danger" role="alert">Email non valida!!!</div>';
    } else {
        console.log('Email OK!!!!!!!!!!!!');
    }
} 

function testPassword() {
    if(pass.value.trim() === '' && pass.value.trim().length >= 6) {
        document.querySelector('#errorpass').innerHTML = '<div class="alert alert-danger" role="alert">Password non valida!!!</div>';
    }
}

function testAge() {
    if(age.value.trim() === '' && typeof(age.value) === 'number') {}
}
*/

// JSON format

let arr = [
    { 
        name: 'Mario',
        lastname: 'Super',
        city: 'San Francisco'
    }, {
        name: 'John',
        lastname: 'Smith',
        city: 'London'
    }, {
        name: 'Mario',
        lastname: 'Rossi',
        city: 'Roma'
    }
];

let j = JSON.stringify(arr);
console.log(j);

let arrObj = JSON.parse(j);
console.log(arrObj);


// Ajax format
// GET POST PUT/PATH DELETE

/* let url = 'https://jsonplaceholder.typicode.com/users/';
let xhr = new XMLHttpRequest();

// GET -> lettura di dati da un server
xhr.open('GET', url);
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        let data = xhr.responseText;
        let mioArr = JSON.parse(data);
        console.log(mioArr);
    }
} */


// GET -> lettura di un Oggetto
/* xhr.open('GET', url+5);
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        let data = xhr.responseText;
        let mioArr = JSON.parse(data);
        console.log(mioArr);
    }
} */


// POST -> invio di dati ad un server
/* let u = { 
    email : "m.rossi@gmail.com",
    name : "Mario Rossi",
    phone : "1-770-736-8031 x56442",
    username : "Rossino",
    website : "mrossi.org"
}

let json = JSON.stringify(u);

xhr.open('POST', url);
xhr.send(json)
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);        
    }
} */

// PUT -> modifica completa di dati su un server
/* let u = { 
    id: 2,
    email : "m.rossi@gmail.com",
    name : "Mario Rossi",
    phone : "1-770-736-8031 x56442",
    username : "Rossino",
    website : "mrossi.org"
}

let json = JSON.stringify(u);

xhr.open('PUT', url+2);
xhr.send(json)
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);        
    }
} */

// PATCH -> modifica parziale di dati su un server

/* let u = { 
    email : "m.rossi@gmail.com",
}

let json = JSON.stringify(u);

xhr.open('PATCH', url+2);
xhr.send(json)
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);        
    }
} */

// DELETE -> eleiminare un dato dal server
/* xhr.open('DELETE', url+2);
xhr.send()
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);        
    }
} */



// PROMISE

let users = [];

let url = 'https://jsonplaceholder.typicode.com/users/';
/* let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        let data = xhr.responseText;
        let mioArr = JSON.parse(data);
        console.log(mioArr);
        users = mioArr;
    }
}

console.log(users); */




// GET Fetch
url = 'https://jsonplaceholder.typicode.com/users/';
fetch(url, {method: 'GET'})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => alert(err.message))

// POST fetch

let u = { 
    email : "m.rossi@gmail.com",
    name : "Mario Rossi",
    phone : "1-770-736-8031 x56442",
    username : "Rossino",
    website : "mrossi.org"
}

fetch(url, {
            method: 'POST', 
            body: JSON.stringify(u),
            headers: {
                    'Content-type': 'application/json; charset=UTF-8'
    }})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => alert(err.message))

// PUT fetch

fetch(url+2, { 
            method: 'PUT', 
            body: JSON.stringify(u),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
    }})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => alert(err.message))

// PATCH fetch
fetch(url+2, { 
            method: 'PATCH', 
            body: JSON.stringify({ email : "m.rossi@gmail.com" }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
    }})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => alert(err.message))


// DELETE fetch
fetch(url+2, { method: 'DELETE'})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => alert(err.message))

/* let p = fetch(url).then(response => response.json());

document.addEventListener('DOMContentLoaded', () => {
    let titolo = document.querySelector('.container h1');
    p.then(users => {
         titolo.innerHTML = 'Numero di risultati: ' + users.length;         
    });
}) */



