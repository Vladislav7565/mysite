
// const USER_LOGIN = "null";
// const USER_PASSWORD = "null";

// let inputLogin = prompt("Придумайте свій логін");
// (inputLogin === USER_LOGIN);
// let inputNumber = prompt ("Введіть свій номер телефону");
// (inputNumber === USER_PASSWORD);
// let result = (inputNumber === USER_PASSWORD);
// console.log(result);
function coments() {
    

const UserLogin = null;
    const UserNumber = null ;
   let inputLogin = prompt ("Введіть своє ім'я");
    (inputLogin === UserLogin);
   let inputNumber = prompt("Введіть свій номер телефону");
     let result = (inputNumber === UserNumber);
     alert ("Вітаю ви зареєструвались очікуйте повідомлення");

    console.log (inputLogin,inputNumber);  
} 
const listName = "Volodymer,Olexander,Denis";
const listNumber = "093-123-321-24,068-001-002-12,073-223-322-22";
function list() {
  

let namesArr = listName.split(',');
let phonesArr = listNumber.split(',');
for (let i = 0; i < namesArr.length; i +=1) {
    const listName = namesArr[i];
    const listNumber = phonesArr[i];
console.log(listName,listNumber);
alert(listName);
}
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
