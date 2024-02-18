
let movie = document.getElementsByName("movieOption");
let number = document.getElementsByName("quantity");
let fname = document.getElementsByName("firstname");
let lname = document.getElementsByName("lastname");
let telephone = document.getElementsByName("telephone");
let email = document.getElementsByName("email");

showTicket();
let allTickets = [];
const tickets = {
    firstname: fname,
    lastname: lname,
    telephone: telephone,
    email: email,
    movie: movie,
    number: number
};
allTickets = allTickets.push(tickets);
function showTicket(){

    let out = "<table><tr>" +
        "<th>Name</th><th>E-mail</th><th>Telephone</th><th>Movie</th><th>Number of tickets</th>" +
        "</tr>";
    for (let t of allTickets){
        out += "<tr>";
        out += "<td>"+t.firstname+" "+t.lastname+"</td><td>"+t.email+"</td><td>"+
            t.telephone+"</td><td>"+t.movie+"</td><td>"+t.number+"</td>";
        out += "</tr>";
    }
    document.getElementById(allTickets).innerHTML = out;
}

document.getElementsByName("movieOption").value = "";
document.getElementsByName("quantity").value = "";
document.getElementsByName("firstname").value = "";
document.getElementsByName("lastname").value = "";
document.getElementsByName("telephone").value = "";
document.getElementsByName("email").value = "";

function deleteticket(){
    deleteticket.addEventListener("click", function (){
        allTickets.length=0;
        allTickets();
    })
}
