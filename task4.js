//так и не смогла понять, почему у меня все работает до нажатия кнопки, просто при загрузке страницы уже есть все результаты, а после нажатия какой-то треш

const btn = document.querySelector('button').addEventListener('click', getGenerator);
const numbers = [];

const showResult = () => {
    const resultBlock = document.querySelector('#result');
    resultBlock.innerHTML=(`сгенерировали: ${numbers}`)
    }

    const getSubtasks = () => {
        const numbers2 = numbers.sort((a,b)=> a - b);
    const min = numbers2.slice(0,1);
    const max = numbers2.slice(9,10);
    const summ = numbers.reduce((sum,current) => sum + current, 0);
    const average = summ/numbers.length;
    const mult = numbers.reduce((a,b)=>a*b);
        subtasks.innerHTML=(`минимальное: ${min}<br> максимальное: ${max}<br>среднее арифметическое: ${average}<br>cумма чисел: ${summ}<br>произведение чисел: ${mult}`)
     }
  
function getGenerator(min, max) {
    for (i=0; i<10; i++) { 
        let number = Math.round(min - 0.5 + Math.random() * (max - min + 1));
        numbers.push(number);
    } 
    
    showResult();
    getSubtasks();
}
getGenerator(-10, 10)

