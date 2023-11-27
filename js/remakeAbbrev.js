// Функции для сокращения числа 1 - Деньги ; 2 - Счет ; 3 - Сила клика ; 4 - Сила Рабочих
// 1 Money - Деньги
export function abbreviateNumber(MoneyValue){
        if (MoneyValue < 1e3) {
            return MoneyValue 
          }
          if (MoneyValue >= 1e3 && MoneyValue < 1e6) {
            return (MoneyValue / 1e3).toFixed(1) + " K"
            // Тут проверяем 100 > ? тогда остается.  Если 1.000 есть и она менее 6 нулей (лям) то К после М
          }
          if (MoneyValue >= 1e6 && MoneyValue < 1e9) {
            return (MoneyValue / 1e6).toFixed(1) + " M";
          }
          if (MoneyValue >= 1e9 && MoneyValue < 1e12) {
            return (MoneyValue / 1e9).toFixed(1) + " Md";
          }
          if (MoneyValue >= 1e12 && MoneyValue < 1e15) {
            return (MoneyValue / 1e12).toFixed(1) + " B";
          }
          if (MoneyValue >= 1e15 && MoneyValue < 1e18) {
            return (MoneyValue / 1e15).toFixed(1) + " Bd";
          }
          if (MoneyValue >= 1e18 && MoneyValue < 1e21) {
            return (MoneyValue / 1e18).toFixed(1) + " T";
          }
          if (MoneyValue >= 1e21 && MoneyValue < 1e24) {
            return (MoneyValue / 1e21).toFixed(1) + " Td";
          }
          if (MoneyValue >= 1e24 && MoneyValue < 1e27) {
            return (MoneyValue / 1e24).toFixed(1) + " Q";
          }
          if (MoneyValue >= 1e27 && MoneyValue < 1e30) {
            return (MoneyValue / 1e27).toFixed(1) + " Qd";
          }
          if (MoneyValue >= 1e30 && MoneyValue < 1e33) {
            return (MoneyValue / 1e30).toFixed(1) + " Qn";
          }
          if (MoneyValue >= 1e33 && MoneyValue < 1e36) {
            return (MoneyValue / 1e33).toFixed(1) + " Qnd";
          }
          if (MoneyValue >= 1e36 && MoneyValue < 1e39) {
            return (MoneyValue / 1e36).toFixed(1) + " Sxn";
          }
          if (MoneyValue >= 1e39 && MoneyValue < 1e42) {
            return (MoneyValue / 1e39).toFixed(1) + " Sxd";
          }
          if (MoneyValue >= 1e42 && MoneyValue < 1e45) {
            return (MoneyValue / 1e42).toFixed(1) + " Spn";
          }
          if (MoneyValue >= 1e45 && MoneyValue < 1e48) {
            return (MoneyValue / 1e45).toFixed(1) + " Spd";
          }
          if (MoneyValue >= 1e48 ) {
            return " Очень много бабла чувак…";
          }
  
}
// 2 Experiance - Опыт
export function abbreviateScoreBoard(Experience){
    if (Experience < 1e3) {
        return Experience 
      }
      if (Experience >= 1e3 && Experience < 1e6) {
        return (Experience / 1e3).toFixed(1) + " K"
        // Тут проверяем 100 > ? тогда остается.  Если 1.000 есть и она менее 6 нулей (лям) то К после М
      }
      if (Experience >= 1e6 && Experience < 1e9) {
        return (Experience / 1e6).toFixed(1) + " M";
      }
      if (Experience >= 1e9 && Experience < 1e12) {
        return (Experience / 1e9).toFixed(1) + " Md";
      }
      if (Experience >= 1e12 && Experience < 1e15) {
        return (Experience / 1e12).toFixed(1) + " B";
      }
      if (Experience >= 1e15 && Experience < 1e18) {
        return (Experience / 1e15).toFixed(1) + " Bd";
      }
      if (Experience >= 1e18 && Experience < 1e21) {
        return (Experience / 1e18).toFixed(1) + " T";
      }
      if (Experience >= 1e21 && Experience < 1e24) {
        return (Experience / 1e21).toFixed(1) + " Td";
      }
      if (Experience >= 1e24 && Experience < 1e27) {
        return (Experience / 1e24).toFixed(1) + " Q";
      }
      if (Experience >= 1e27 && Experience < 1e30) {
        return (Experience / 1e27).toFixed(1) + " Qd";
      }
      if (Experience >= 1e30 && Experience < 1e33) {
        return (Experience / 1e30).toFixed(1) + " Qn";
      }
      if (Experience >= 1e33 && Experience < 1e36) {
        return (Experience / 1e33).toFixed(1) + " Qnd";
      }
      if (Experience >= 1e36 && Experience < 1e39) {
        return (Experience / 1e36).toFixed(1) + " Sxn";
      }
      if (Experience >= 1e39 && Experience < 1e42) {
        return (Experience / 1e39).toFixed(1) + " Sxd";
      }
      if (Experience >= 1e42 && Experience < 1e45) {
        return (Experience / 1e42).toFixed(1) + " Spn";
      }
      if (Experience >= 1e45 && Experience < 1e48) {
        return (Experience / 1e45).toFixed(1) + " Spd";
      }
      if (Experience >= 1e48 ) {
        return " Очень много опыта чувак…";
      }
}
//3 Power-Click - Сила-Клика
function abbreviatePowerClick(PowerClick){
}
//4 Power-Click-Guys - Сила-Клика-Рабочих
function abbreviatePowerWork(PowerWorksGuys) {
}