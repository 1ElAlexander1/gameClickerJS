import {abbreviateNumber, abbreviateScoreBoard, abbreviatePowerClick, abbreviatePriceFirst, abbreviatePriceTwo, abbreviatePriceThree} from './remakeAbbrev.js'
// Импортировали функции которые сокращают значения наших чисел
//! Проверка local stor
let MoneyValueLocalStorage = JSON.parse(localStorage.getItem("MoneyValue"))
let ExperienceLocalStorage = JSON.parse(localStorage.getItem("Experience"))

let MoneyValue = MoneyValueLocalStorage; // Наши стартовые деньги
let Experience = ExperienceLocalStorage; // Наш опыт заработанный
let PowerClick = 1; // Сила нашего клика
let PowerWorksGuys = 0 // Сила наших работяг

let autoMoneyInterval;
// Сумма покупки клика
let PriceClick__lvlFirst = 30; // Цена на +1 клик
let PriceClick__lvlTwo = 240; // Цена на +10 клик
let PriceClick__lvlThree = 2000; // Цена на +100 клик

// Цены рабочих
let PriceWorkGuysFirst = 50;
let PriceWorkGuysTwo = 120;
let PriceWorkGuysThree = 420;
let PriceWorkGuysFour = 1999;
let PriceWorkGuysFive = 10999;
let PriceWorkGuysSix =  60999;




// Функция обновления таблицы счета и денег
export function updateTableMoneyExperience()  {
        Experience ++
        MoneyValue += PowerClick

        // Получаем TD элементы для их махинаций
        let updateTableMoney = document.querySelector(".MoneyTd")
        let updateTableExperience = document.querySelector(".ExperienceTd")
    
        // Прибавляем деньги
        updateTableMoney == MoneyValue
        // updateTableMoney.textContent = abbreviateNumber(MoneyValue)
        updateTableMoney.textContent = abbreviateNumber(MoneyValue)
        // Прибавляем опыт
        updateTableExperience == Experience
        // updateTableExperience.textContent = abbreviateScoreBoard(Experience)
        updateTableExperience.textContent = abbreviateScoreBoard(Experience)
 
    }
// Функция реализации магазина
// Функция увеливает значение на +1
export function buyUpgradeClick(){
    if(MoneyValue > 0 && MoneyValue >= PriceClick__lvlFirst) {
        // Получаем TD элементы для их махинаций
        let updateTableMoney = document.querySelector(".MoneyTd")
        MoneyValue -= PriceClick__lvlFirst
        updateTableMoney.textContent = MoneyValue
        //Усилили клик
        PowerClick++   
        let PowerClickSchet = document.querySelector(".PowerClick")
        PowerClickSchet == PowerClick
        PowerClickSchet.textContent = abbreviatePowerClick(PowerClick)
        updateTableMoney.textContent = abbreviateNumber(MoneyValue);  // Используем функцию abbreviateNumber для обновления отображаемой суммы
        //Прибавили цену  (можно с формулой)
        PriceClick__lvlFirst += 10 + (PowerClick)
        
        //Обновление таблички
        let liPriceFirst = document.querySelector(".lipFirst")  
        liPriceFirst.textContent  = `Цена: ${abbreviatePriceFirst(PriceClick__lvlFirst) + "$"}`

        
    }
}
// Функция увеливает значение на +10
export function buyUpgradeClickLvlTen(){
    if(MoneyValue > 0 && MoneyValue >= PriceClick__lvlTwo) {
        // Получаем TD элементы для их махинаций
        let updateTableMoney = document.querySelector(".MoneyTd")
        MoneyValue -= PriceClick__lvlTwo
        updateTableMoney.textContent = MoneyValue
        //Усилили клик
        PowerClick+=10
        let PowerClickSchet = document.querySelector(".PowerClick")
        PowerClickSchet == PowerClick
        PowerClickSchet.textContent = abbreviatePowerClick(PowerClick)
        updateTableMoney.textContent = abbreviateNumber(MoneyValue);  // Используем функцию abbreviateNumber для обновления отображаемой суммы
        //Прибавили цену  (можно с формулой)
        PriceClick__lvlTwo += 80 + (PowerClick)
        //Обновление таблички
  
        let liPriceFirst = document.querySelector(".lipTwo")
        liPriceFirst.textContent  = `Цена: ${abbreviatePriceTwo(PriceClick__lvlTwo) + "$"}`
    }
}
// Функция увеливает значение на +100
export function buyUpgradeClickLvlOneHundred(){
    if(MoneyValue > 0 && MoneyValue >= PriceClick__lvlThree) {
        // Получаем TD элементы для их махинаций
        let updateTableMoney = document.querySelector(".MoneyTd")
        MoneyValue -= PriceClick__lvlThree
        updateTableMoney.textContent = MoneyValue
        
        PowerClick+=100
        let PowerClickSchet = document.querySelector(".PowerClick")
        PowerClickSchet == PowerClick
        PowerClickSchet.textContent = abbreviatePowerClick(PowerClick)
        updateTableMoney.textContent = abbreviateNumber(MoneyValue);  // Используем функцию abbreviateNumber для обновления отображаемой суммы
        //Прибавили цену  (можно с формулой)    
        PriceClick__lvlThree += 800 + (PowerClick)
        //Обновление таблички

        let liPriceFirst = document.querySelector(".lipThree")
        liPriceFirst.textContent  = `Цена: ${abbreviatePriceThree(PriceClick__lvlThree) + "$"}`
    }
}
// Функция обновления таблицы рабочих
export function buyUpgradeWorkGuys(target){
    // Получаем сначало цены рабочих для их увелечения цены!
    // let priceFirst = document.querySelector(".")
    // let priceTwo = document.querySelector(".")
    // let priceThree = document.querySelector(".")
    // let priceFour = document.querySelector(".")
    // let priceFive = document.querySelector(".")
    // let priceSix = document.querySelector(".")

    if(target == 1) { // Негритенок 50 
        if(MoneyValue >= PriceWorkGuysFirst && MoneyValue > 0) {
            MoneyValue -= PriceWorkGuysFirst
            PowerWorksGuys++
            // Увелечение цены рабочего 
            PriceWorkGuysFirst += (15 + PowerWorksGuys) 
            let priceFirst = document.querySelector(".tdPriceFirst")
            priceFirst.textContent = `${PriceWorkGuysFirst} $`
        }
    }
    if (target == 2){ // Разнорабочий 120
        if(MoneyValue >= PriceWorkGuysTwo && MoneyValue > 0) {
            MoneyValue -= PriceWorkGuysTwo
            PowerWorksGuys += 3
            // Увелечение цены рабочего
            PriceWorkGuysTwo += (30 + PowerWorksGuys) 
            let priceTwo = document.querySelector(".tdPriceTwo")
            priceTwo.textContent = `${PriceWorkGuysTwo} $`
        }
    }
    if (target == 3){ // TSPша 420
        if(MoneyValue >= PriceWorkGuysThree && MoneyValue > 0) {
            MoneyValue -= PriceWorkGuysThree
            PowerWorksGuys += 12
            // Увелечение цены рабочего
            PriceWorkGuysThree += (110 + PowerWorksGuys) 
            let priceThree = document.querySelector(".tdPriceThree")
            priceThree.textContent = `${PriceWorkGuysThree} $`
        }
    }
    if (target == 4){ // Кузнец  1999
        if(MoneyValue >= PriceWorkGuysFour && MoneyValue > 0) {
            MoneyValue -= PriceWorkGuysFour
            PowerWorksGuys += 70
            // Увелечение цены рабочего
            PriceWorkGuysFour += (698 + PowerWorksGuys) 
            let priceFour = document.querySelector(".tdPriceFour")
            priceFour.textContent = `${PriceWorkGuysFour} $`
        }
    }
    if (target == 5){ // Шахтер 10999
        if(MoneyValue >= PriceWorkGuysFive && MoneyValue > 0) {
            MoneyValue -= PriceWorkGuysFive
            PowerWorksGuys += 390
            // Увелечение цены рабочего
            PriceWorkGuysFive += (4498 + PowerWorksGuys) 
            let priceFive = document.querySelector(".tdPriceFive")
            priceFive.textContent = `${PriceWorkGuysFive} $`
        }
    }
    if (target == 6){ // Подрывник (Тротильщик) 60999
        if(MoneyValue >= PriceWorkGuysSix && MoneyValue > 0) {
            MoneyValue -= PriceWorkGuysSix
            PowerWorksGuys += 2480
            // Увелечение цены рабочего
            PriceWorkGuysSix += (20498 + PowerWorksGuys) 
            let priceSix = document.querySelector(".tdPriceSix")
            priceSix.textContent = `${PriceWorkGuysSix} $`
        }
    }
    // Обновление денег
    let tableMoneyTd = document.querySelector(".MoneyTd")
    tableMoneyTd.textContent = abbreviateNumber(MoneyValue) 

    //Получение таблицы
    let tableWorkGuys = document.querySelector(".PowerWorkguys")
    tableWorkGuys.textContent = PowerWorksGuys

    generateAutoMoneyWorkGuys()
   
}
// Реализация функции автоклика
export function generateAutoMoneyWorkGuys(){
    if(PowerWorksGuys > 0) {
        //Получение таблицы
        let tableWorkGuys = document.querySelector(".PowerWorkguys")
        let tableMoneyTd = document.querySelector(".MoneyTd")
        
        if (autoMoneyInterval) {
            clearInterval(autoMoneyInterval); // Если интервал уже установлен, останавливаем его
        }

        autoMoneyInterval = setInterval(function() {
            MoneyValue += PowerWorksGuys;
            tableWorkGuys.textContent = PowerWorksGuys;
            tableMoneyTd.textContent = abbreviateNumber(MoneyValue);
        }, 2000);
        }
        
        
}


  //! Обновление local storage
  document.body.onclick = () => { 
    localStorage.setItem("MoneyValue", JSON.stringify(MoneyValue)); 
    localStorage.setItem("Experience", JSON.stringify(Experience));
}



