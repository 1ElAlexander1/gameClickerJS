import {abbreviateNumber, abbreviateScoreBoard, abbreviatePowerClick, abbreviatePriceFirst, abbreviatePriceTwo, abbreviatePriceThree} from './remakeAbbrev.js'
// Импортировали функции которые сокращают значения наших чисел

let MoneyValue = 100000; // Наши стартовые деньги
let Experience = 0; // Наш опыт заработанный
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
        let updateTableExperience= document.querySelector(".ExperienceTd")
    
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
// Написать функцию обновление таблицы рабочих
export function buyUpgradeWorkGuys(target){
    // let buttonNegritenok = document.querySelector(".negritenok")
    // let buttonRaznorabochiy = document.querySelector(".Raznorabochiy")
    // let buttonTSP = document.querySelector(".Tsp")
    // let buttonKuznec = document.querySelector(".Kuznec")
    // let buttonMiner = document.querySelector(".Miner")
    // let buttonTntMan = document.querySelector("TntMan")
    
    if(target == 1) { // Негритенок
        if(MoneyValue >= PriceWorkGuysFirst && MoneyValue > 0) {
            MoneyValue -= PriceWorkGuysFirst
            PowerWorksGuys++
        }
        
    }
    if (target == 2){ // Разнорабочий
        if(MoneyValue >= PriceWorkGuysTwo && MoneyValue > 0) {
            MoneyValue -= PriceWorkGuysTwo
            PowerWorksGuys += 3
        }
    }
    if (target == 3){ // TSPша
        if(MoneyValue >= PriceWorkGuysThree && MoneyValue > 0) {
            MoneyValue -= PriceWorkGuysThree
            PowerWorksGuys += 12
        }
    }
    if (target == 4){ // Кузнец 
        if(MoneyValue >= PriceWorkGuysFour && MoneyValue > 0) {
            MoneyValue -= PriceWorkGuysFour
            PowerWorksGuys += 70
        }
    }
    if (target == 5){ // Шахтер
        if(MoneyValue >= PriceWorkGuysFive && MoneyValue > 0) {
            MoneyValue -= PriceWorkGuysFive
            PowerWorksGuys += 390
        }
    }
    if (target == 6){ // Подрывник (Тротильщик)
        if(MoneyValue >= PriceWorkGuysSix && MoneyValue > 0) {
            MoneyValue -= PriceWorkGuysSix
            PowerWorksGuys += 2480
        }
    }
    // Обновление денег
    let tableMoneyTd = document.querySelector(".MoneyTd")
    tableMoneyTd.textContent = MoneyValue

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
            tableMoneyTd.textContent = MoneyValue;
            // localStorage.setItem('Money', MoneyValue);
        }, 2000);
        }
        
        
}
