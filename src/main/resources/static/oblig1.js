
const movie = document.getElementsByName("movieOption");
const number = document.getElementById("quantity");
const fname = document.getElementById("firstname");
const lname = document.getElementById("lastname");
const telephone = document.getElementById("telephone");
const email = document.getElementById("email");

const allTickets = [];
const tickets = {
    firstname: fname,
    lastname: lname,
    telephone: telephone,
    email: email,
    movie: movie,
    number: number
};
allTickets.push(tickets);
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
document.getElementById("quantity").value = "";
document.getElementById("firstname").value = "";
document.getElementById("lastname").value = "";
document.getElementById("telephone").value = "";
document.getElementById("email").value = "";

function deleteticket(){
    deleteticket.addEventListener("click", function (){
        allTickets.length=0;
        allTickets();
    })
}
