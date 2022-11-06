    let btn = document.querySelector('#send').addEventListener('click',checkSpam);
    let btnClean = document.querySelector('#clean').addEventListener('click',cleanComment);
     let comment = document.querySelector('#comment');
     let checked = document.querySelector('.checkedcomment');
             
     function checkSpam() {
let string = comment.value;
const re = /viagra/gi;
const re2 = /xxx/gi;
let newstr = string.replace(re, "***");
let checkstr = newstr.replace(re2, "***");
let div = document.createElement('div');

// if (str2.search('viagra') != -1 || str2.search('xxx')!= -1 ) { 
//     let str3 = str2.replace('/viagra/g', '***');
//     } else {
//         div.innerHTML = str2;
//         checked.append(div);
//     }

div.innerHTML = checkstr;
checked.append(div);
comment.value = " ";
    }

    function cleanComment() {
checked.innerHTML = " ";
    }