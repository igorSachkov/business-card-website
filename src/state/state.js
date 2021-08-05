import weldRepair from "./../Content/images/cardsImages/weldRepair.jpeg"
import sats from "./../Content/images/cardsImages/sats.jpg"
import codeWars from "./../Content/images/cardsImages/codeWars.jpeg"
import javascript from "./../Content/images/cardsImages/javascript.jpg"
import graphic from "./../Content/images/cardsImages/graphic.jpg"

import global from "./../Content/images/icons/global.png"
import welder from "./../Content/images/icons/welder.png"
import logo from "./../Content/images/icons/logo.svg"
import jsLogo from "./../Content/images/icons/javascript.png"
import canvas from "./../Content/images/icons/canvas.png"



export const state = [
    { image: weldRepair, title: "Наладчик сварочного и газоплазморезательного оборудования 6 разряд", icon: welder, typography: "Занимался ремонтом сварочных аппаратов. Различного электроинструмента.", 
    paragraph: ["В основном ремонт электроинструмента. Обслуживание сварочного оборудования, кабелей, трехфазных переносок.",
        "Иногда, даже, приходилось производить легкий ремонт промышленного рентгеновоского аппарата `Памир-300`", 
    "Контроль за наличием и учёт расходного материала, сварочного оборудования;", "Организация приема, хранения и выдачи оборудования и сварочного материала;", 
    "Техническое обслуживание производственного оборудования (электроинструмент, сварочное оборудование и пр.);", "Обеспечение бесперебойной работы оборудования;"] },
    
    { image: sats, title: "Мастер по обслуживанию абонентов", icon: global, typography: "Диагностика и устранение различных неисправностей.", 
    paragraph: ["Выезд к абоненту. Диагностика и устранение различных повреждений.", "Приходилось настраивать различное оборудование. Перепрошивать роутеры, настраивать абонентский ПК. Решать проблемы: с драйверами, вирусными ОС, сломанным `железом`", 
    "Обслуживал изберательные участки. Обеспечивал бесперебойный интернет канал. Производил монтаж и настройку видеонаблюдения."] },

    { image: codeWars, title: "Профиль в `codewars`", icon: logo, typography: "Тренируюсь в создании JS функций на ресурсе `codewars.com`", 
    paragraph: ["Ссылка на мой профиль https://www.codewars.com/users/Igordada", "На данный момент заработал 5 Кю (разряд) (минимальный 8). Обязательно буду совершенствовать свой профиль."] },

    { image: javascript, title: "HTML, CSS, JavaScript, React", icon: jsLogo, typography: "все по вершкам", 
    paragraph: [""] },

    { image: graphic, title: "Графические редакторы", icon: canvas, typography: "совсем чуть чуть", 
    paragraph: [""] }
]