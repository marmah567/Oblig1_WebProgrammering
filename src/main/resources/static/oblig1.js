function movieValidation(){
    const movie = document.getElementById("movies").value;
    const errorMovie = document.getElementById("errorMovie");

    if (movie === "default") {
        errorMovie.innerText = "Please pick a movie";
        return false;
    } else {
        errorMovie.innerText = "";
        return true;
    }
}
function numberValidation(){
    const number = document.getElementById("quantity").value;
    const errorNumber = document.getElementById("errorQuantity");

    if (number === "") {
        errorNumber.innerText ="Please fill out number of tickets";
        return false;
    } else if (number < 1){
        errorNumber.innerText ="Please fill out a valid number";
        return false;
    } else {
        errorNumber.innerText = "";
        return true;
    }
}
function firstnameValidation(){
    const fname = document.getElementById("firstname").value;
    const errorFname = document.getElementById("errorFname");

    if (fname === "") {
        errorFname.innerText ="Please fill out your firstname";
        return false;
    } else {
        errorFname.innerText ="";
        return true;
    }
}
function lastnameValidation(){
    const lname = document.getElementById("lastname").value;
    const errorLname = document.getElementById("errorLname");

    if (lname === "") {
        errorLname.innerText ="Please fill out your lastname";
        return false;
    } else {
        errorLname.innerText ="";
        return true;
    }
}
function telephoneValidation(){
    const telephone = document.getElementById("telephone").value;
    const errorTelephone = document.getElementById("errorTlf");
    const telephoneRegex = /^[0-9]{8}$/

    if (telephone === "") {
        errorTelephone.innerText ="Please fill out your telephone number";
        return false;
    } else if (!telephoneRegex.test(telephone)){
        errorTelephone.innerText ="Please fill a valid phone number";
        return false;
    } else {
        errorTelephone.innerText ="";
        return true;
    }
}
function emailValidation(){
    const email = document.getElementById("email").value;
    const errorEmail = document.getElementById("errorEmail");
    const emailRegex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/

    if (email === "") {
        errorEmail.innerText ="Please fill out your email";
        return false;
    }else if (!emailRegex.test(email)){
        errorEmail.innerText ="Please fill a valid email";
        return false;
    } else {
        errorEmail.innerText ="";
        return true;
    }
}

function checkValidation(){
    movieValidation();
    numberValidation();
    firstnameValidation();
    lastnameValidation();
    telephoneValidation();
    emailValidation();


    const validationError =document.getElementById("errorMovie").innerText ||
        document.getElementById("errorQuantity").innerText ||
        document.getElementById("errorFname").innerText ||
        document.getElementById("errorLname").innerText ||
        document.getElementById("errorTlf").innerText ||
        document.getElementById("errorEmail").innerText;
    return !validationError;
}

let allTickets = [];

function validateForm() {
    if (!checkValidation()) {
        return ;
    }
}
validateForm();

function showTicket() {
    const tickets = {
        movie: document.getElementById("movies").value,
        number: document.getElementById("quantity").value,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        telephone: document.getElementById("telephone").value,
        email: document.getElementById("email").value,
    };
    allTickets.push(tickets);

    let out = "<table><tr>" +
        "<th>Name</th><th>E-mail</th><th>Telephone</th><th>Movie</th><th>Number of tickets</th>" +
        "</tr>";
    for (let t of allTickets){
        out += "<tr>";
        out += "<td>"+t.firstname+" "+t.lastname+"</td><td>"+t.email+"</td><td>"+
            t.telephone+"</td><td>"+t.movie+"</td><td>"+t.number+"</td>";
        out += "</tr>";
    }
    out += "</table>";
    document.getElementById("allTickets").innerHTML = out;

    document.getElementById("movieOption").value = "default";
    document.getElementById("quantity").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("email").value = "";
}

function deleteticket(){
    allTickets = [];
    document.getElementById("allTickets").innerHTML = "";
}
