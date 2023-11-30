import {abbreviateNumber, abbreviateScoreBoard, abbreviatePowerClick, abbreviatePriceFirst, abbreviatePriceTwo, abbreviatePriceThree} from './remakeAbbrev.js'


let MoneyValue = 0; // Наши стартовые деньги
let Experience = 0; // Наш опыт заработанный
let PowerClick = 10000000; // Сила нашего клика
let PowerWorksGuys = 0 // Сила наших работяг

// Сумма покупки клика
let PriceClick__lvlFirst = 30; // Цена на +1 клик
let PriceClick__lvlTwo = 240; // Цена на +10 клик
let PriceClick__lvlThree = 2000; // Цена на +100 клик



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