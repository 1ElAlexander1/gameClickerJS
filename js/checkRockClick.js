// function declOfNum(number, titles) {
//     // Массив порядковых числительных для выбора правильной формы слова "раз"
//     const cases = [2, 0, 1, 1, 1, 2];
//     // Возвращаем строку, соединяя число с соответствующей формой слова "раз"
//     return number + " " + titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
// }

// let clickMeHowMany = 0;
// let rockLvlFirst = document.querySelector(".attack__Img__Rock__LvlFirst");

// rockLvlFirst.addEventListener("click", function(){
//     // Инкрементируем счетчик кликов
//     clickMeHowMany++;
//     // Выводим сообщение о количестве кликов в правильной грамматической форме
//     console.log(`Я камушек, ты кликнул на меня: ${declOfNum(clickMeHowMany, ['раз', 'раза', 'раз'])}`);
//         if(clickMeHowMany == 100){
//             console.log("Тебе делать нехуй?)");
//         } 
// })

// export default declOfNum