function getFullname() {
  let txt = prompt('Напишите свои фамилию, имя и отчество');
  let txt1 = txt.toLowerCase().trim(txt);
let names = txt1.split(" ");
let filteredNames = names.filter(el=>el !== '');
let newnames = filteredNames.map(name => name.charAt(0).toUpperCase() + name.slice(1));

function putVinput() {
    let surname = document.querySelector('#surname');
    surname.value = newnames[0]
    let username = document.querySelector('#name');
    username.value = newnames[1]
    let patronymic = document.querySelector('#patronymic');
    patronymic.value = newnames[2]
}
putVinput();
}
getFullname();