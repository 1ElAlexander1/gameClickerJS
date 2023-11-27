import {abbreviateNumber, abbreviateScoreBoard} from './remakeAbbrev.js'

let MoneyValue = 0; // Наши стартовые деньги
let Experience = 0; // Наш опыт заработанный
let PowerClick = 100; // Сила нашего клика
let PowerWorksGuys = 0 // Сила наших работяг

// Сумма покупки клика
let PriceClick__lvlFirst = 30; // Цена на +1 клик
let PriceClick__lvlTwo = 120; // Цена на +5 клик
//todo =======================================================================
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
        

        PowerClick++   
        let PowerClickSchet = document.querySelector(".PowerClick")
        PowerClickSchet == PowerClick
        PowerClickSchet.textContent = PowerClick
        updateTableMoney.textContent = abbreviateNumber(MoneyValue);  // Используем функцию abbreviateNumber для обновления отображаемой суммы
        // updateTableMoney.textContent = MoneyValue;
    }
}

// Функция увеливает значение на +5
export function buyUpgradeClickLvlFive(){
    if(MoneyValue > 0 && MoneyValue >= PriceClick__lvlTwo) {
        // Получаем TD элементы для их махинаций
        let updateTableMoney = document.querySelector(".MoneyTd")
        MoneyValue -= PriceClick__lvlTwo
        updateTableMoney.textContent = MoneyValue
        

        PowerClick+=5   
        let PowerClickSchet = document.querySelector(".PowerClick")
        PowerClickSchet == PowerClick
        PowerClickSchet.textContent = PowerClick
        updateTableMoney.textContent = abbreviateNumber(MoneyValue);  // Используем функцию abbreviateNumber для обновления отображаемой суммы
        // updateTableMoney.textContent = MoneyValue
    }
}