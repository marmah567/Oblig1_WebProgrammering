let movie = document.getElementsByName("movieOption");
let number = document.getElementsByName("quantity");
let fname = document.getElementsByName("firstname");
let lname = document.getElementsByName("lastname");
let telephone = document.getElementsByName("telephone");
let email = document.getElementsByName("email");
let allTickets = [];
let tickets = {
    fname, lname,
    telephone, email,
    movie, number
};
const bookticket =()=>{
    allTickets.push(tickets);
    tickets = {
        fname, lname,
        telephone, email,
        movie, number
    };
}
function deleteticket(){
    deleteticket.addEventListener("click", function (){
        bookticket.length=0;
        bookticket();
    })
}
document.write(allTickets);