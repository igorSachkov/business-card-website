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
    paragraph: ["Ссылка на мой профиль https://www.codewars.com/users/Igordada", "На данный момент заработал 5 Кю (разряд) (минимальный 8). Сложнее 5го Кю задачи, пока еще, не решал."] },

    { image: javascript, title: "HTML, CSS, JavaScript, React", icon: jsLogo, typography: "В мир программирования решил вкатиться с Фронтенда.", 
    paragraph: ["HTML и в последствие CSS изучал по кусру `developer.mozilla.org`.", "JavaScript также изучал по мозиловским гайдам, `learn.javascript.ru` и книге Эрика Фримена и Элизабет Робсон `Изучаем программирование на JavaScript`.",
    "На данный момент изучаю React, Redux, Material-UI, React-Redux, Redux-Form. Учебные материалы, помимо документации: `Алекс Бэнкс, Ева Порселло <React и Redux. Функциональная веб-разработка>`; youtube источники (Владилен Минин, канал IT-KAMASUTRA)."] },

    { image: graphic, title: "Графические редакторы. Adobe Photoshop и GIMP", icon: canvas, typography: "Есть опыт использования данных графических редакторов", 
    paragraph: ["Какое-то время выполнял различные работы в редакторе Adobe Photoshop. Например редактирование дипломных работ. Удалял из изображения раличные `помарки`. Либо дописывал пропущенные детали. Отделял фигуры от заднего слоя.", 
    "В данный момент изучаю графический редактор GIMP."] }
]