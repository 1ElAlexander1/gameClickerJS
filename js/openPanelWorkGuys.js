// Импорт функции по возвращению генерации блока
import {generateElementsTwoBlockDOM} from './generateBlockTwo.js'
export function clearMainBlockTwo(){
    //Создаем переменную которая очистит наш второй блок
    let clearBlock = document.querySelector(".main__Block__Two")
    let parent = clearBlock.parentNode  // Обращаемся к отцу
    parent.removeChild(clearBlock)  // Говорим отцу убрать своего ребенка.
//! ----------------------------------------------------- 
    //?--------------------------------------------------
    let containerWorkGuys = document.createElement("div")
    containerWorkGuys.setAttribute("class", "containerNavWorkGuys") // Создаем блок в котором будем хранить элементы 
    parent.append(containerWorkGuys)
    //?--------------------------------------------------
    // Создаем первый блок для хранения текса
    let blockFirstWorkersText = document.createElement("div")
    blockFirstWorkersText.setAttribute("class", "blockFirstWorkersTextStyle")
    containerWorkGuys.append(blockFirstWorkersText)
    // Создали заголовки (абзацы) 
    let pTextFirst = document.createElement("p")
    pTextFirst.setAttribute("class", "pTextFirst")
    pTextFirst.textContent = "Магазин"
    let pTextTwo = document.createElement("p")
    pTextTwo.setAttribute("class", "pTextTwo")
    pTextTwo.textContent = "Рабочих"
    blockFirstWorkersText.append(pTextFirst , pTextTwo)
//! -----------------------------------------------------
    //! Создаем второй блок для хранения рабочих трех (группа 1)
    let blockTwoWorkersBuy = document.createElement("div")
    blockTwoWorkersBuy.setAttribute("class", "blockTwoWorkersBuyStyle")
    containerWorkGuys.append(blockTwoWorkersBuy)
    //todo Создаем таблицу где будем хранить рабочих с ценой
    let tableWorkersFirst = document.createElement("table")
    tableWorkersFirst.setAttribute("class", "tableWorkersFirstStyle")
    blockTwoWorkersBuy.append(tableWorkersFirst)
    //? Первая линия по таблице <===>
    let tableTrFirst = document.createElement("tr")
    tableTrFirst.setAttribute("class", "tableTrFirstStyle")
    // Чертим таблицу первая линия
    let tableTd__First__left = document.createElement("td")
    tableTd__First__left.setAttribute("class", "tdElements zaglavie")
    tableTd__First__left.textContent = "Группа 1: "
    let tableTd__First__right = document.createElement("td")
    tableTd__First__right.setAttribute("class","tdElements zaglavie")
    tableTd__First__right.textContent = "Цена: "
    //append таблицы в блок + первой линии в таблицу
    tableWorkersFirst.append(tableTrFirst)
    tableTrFirst.append(tableTd__First__left, tableTd__First__right)
    //? Вторая линия таблицы <===>
    let tableTrTwo = document.createElement("tr")
    tableTrTwo.setAttribute("class", "tableTrFirstStyle")
    // Чертим таблицу вторая линия
    let tableTd__Two__left = document.createElement("td")
    tableTd__Two__left.setAttribute("class", "tdElements tdButton")
    tableTd__Two__left.textContent = "Негритенок‎ ‎ ‎ ‎  +1"
    let tableTd__Two__right = document.createElement("td")
    tableTd__Two__right.setAttribute("class","tdElements")
    tableTd__Two__right.textContent = "50 ‎ ‎ $"
    //append таблицы в блок + вторая линия в таблицу
    tableWorkersFirst.append(tableTrTwo)
    tableTrTwo.append(tableTd__Two__left, tableTd__Two__right)
    //? Третья линия таблицы <===>
    let tableTrThree = document.createElement("tr")
    tableTrThree.setAttribute("class", "tableTrFirstStyle")
    // Чертим таблицу третья линия
    let tableTd__Three__left = document.createElement("td")
    tableTd__Three__left.setAttribute("class", "tdElements tdButton")
    tableTd__Three__left.textContent = "Разнорабочий +3"
    let tableTd__Three__right = document.createElement("td")
    tableTd__Three__right.setAttribute("class","tdElements")
    tableTd__Three__right.textContent = "120 $"
    //append таблицы в блок + вторая линия в таблицу
    tableWorkersFirst.append(tableTrThree)
    tableTrThree.append(tableTd__Three__left, tableTd__Three__right)
    //? Четвертая линия таблицы <===>
    let tableTrFour = document.createElement("tr")
    tableTrFour.setAttribute("class", "tableTrFirstStyle")
    // Чертим таблицу четвертая линия
    let tableTd__Four__left = document.createElement("td")
    tableTd__Four__left.setAttribute("class", "tdElements tdButton")
    tableTd__Four__left.textContent = "TSP ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎      +12"
    let tableTd__Four__right = document.createElement("td")
    tableTd__Four__right.setAttribute("class","tdElements")
    tableTd__Four__right.textContent = "420 $"
    // append таблицы в блок + вторая линия в таблицу
    tableWorkersFirst.append(tableTrFour)
    tableTrFour.append(tableTd__Four__left, tableTd__Four__right)
    // Создаем третий блок для хранения рабочих трех (группа 2)
    //TODO  ДОДЕЛАТЬ ТУТ ЖЕ ПОТОМ ЕЩЕ 3 РАБОЧИХ
    // Создаем четвертый блок для хранения рабочих трех (группа 3)
    //TODO  ДОДЕЛАТЬ ТУТ ЖЕ ПОТОМ ЕЩЕ 3 РАБОЧИХ
    // Создаем пятый блок для выхода
    let exitBlockWorkGuys = document.createElement("div")
    exitBlockWorkGuys.setAttribute("class", "exitBlockWorkGuysStyle")
    // Название кнопки
    let exitText = document.createElement("h1")
    exitText.setAttribute("class", "exitTextStyle")
    exitText.textContent = "Назад"
    // append блока и во внутрь h1
    containerWorkGuys.append(exitBlockWorkGuys)
    exitBlockWorkGuys.append(exitText)
    //! Делаем кнопки активными
    // Кнопка Назад
    exitText.addEventListener("click", function(){
        if(document.querySelector(".containerNavWorkGuys")){
            //Создаем переменную которая очистит наш второй блок
            let clearBlock = document.querySelector(".containerNavWorkGuys")
            let parent = clearBlock.parentNode  // Обращаемся к отцу
            parent.removeChild(clearBlock)  // Говорим отцу убрать своего ребенка. (рабочих)
            generateElementsTwoBlockDOM()
        } 
    })
    // Первая кнопка негра
    tableTd__Two__left.addEventListener("click", () => console.log("Я НЕГР"))
    // Вторая кнопка разнорабочего
    tableTd__Three__left.addEventListener("click", () => console.log("Я Разнорабочий"))
    // Третья кнопка TSP
    tableTd__Four__left.addEventListener("click", () => console.log("Я TSP"))
}