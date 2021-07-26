
import { Grid, Typography } from "@material-ui/core";
import CardItem from "./Card/CardItem";
import weldRepair from "./../images/cardsImages/weldRepair.jpeg"
import sats from "./../images/cardsImages/sats.jpg"
import codeWars from "./../images/cardsImages/codeWars.jpeg"
import javascript from "./../images/cardsImages/javascript.jpg"
import graphic from "./../images/cardsImages/graphic.jpg"


import global from "./../images/icons/global.png"
import welder from "./../images/icons/welder.png"
import logo from "./../images/icons/logo.svg"
import jsLogo from "./../images/icons/javascript.png"
import canvas from "./../images/icons/canvas.png"


import c from "./Main.module.css"


function Main() {
    const myCardsArray = [
        { image: weldRepair, title: "Наладчик сварочного и газоплазморезательного оборудования 6 разряд", icon: welder, typography: "Занимался ремонтом сварочных аппаратов. Различного электроинструмента.", 
        paragraph: ["Контроль за наличием и учёт расходного материала, сварочного оборудования;", "Организация приема, хранения и выдачи оборудования и сварочного материала;", 
        "Техническое обслуживание производственного оборудования (электроинструмент, сварочное оборудование и пр.);", "Обеспечение бесперебойной работы оборудования;"] },
        
        { image: sats, title: "Мастер по обслуживанию абонентов", icon: global, typography: "бегал туда сюда", 
        paragraph: ["Контроль за наличием и учёт расходного материала, сварочного оборудования;", "Организация приема, хранения и выдачи оборудования и сварочного материала;", 
        "Техническое обслуживание производственного оборудования (электроинструмент, сварочное оборудование и пр.);", "Обеспечение бесперебойной работы оборудования;"] },

        { image: codeWars, title: "Профиль в `codewars`", icon: logo, typography: "что то там, что то тут", 
        paragraph: ["Контроль за наличием и учёт расходного материала, сварочного оборудования;", "Организация приема, хранения и выдачи оборудования и сварочного материала;", 
        "Техническое обслуживание производственного оборудования (электроинструмент, сварочное оборудование и пр.);", "Обеспечение бесперебойной работы оборудования;"] },

        { image: javascript, title: "HTML, CSS, JavaScript, React", icon: jsLogo, typography: "все по вершкам", 
        paragraph: ["Контроль за наличием и учёт расходного материала, сварочного оборудования;", "Организация приема, хранения и выдачи оборудования и сварочного материала;", 
        "Техническое обслуживание производственного оборудования (электроинструмент, сварочное оборудование и пр.);", "Обеспечение бесперебойной работы оборудования;"] },

        { image: graphic, title: "Графические редакторы", icon: canvas, typography: "совсем чуть чуть", 
        paragraph: ["Контроль за наличием и учёт расходного материала, сварочного оборудования;", "Организация приема, хранения и выдачи оборудования и сварочного материала;", 
        "Техническое обслуживание производственного оборудования (электроинструмент, сварочное оборудование и пр.);", "Обеспечение бесперебойной работы оборудования;"] }
    ]
    return (
        <main className={c.wrapper}>
            <Grid container spacing={1}>
                
                    {myCardsArray.map((everyCard, i) => {
                        return (
                            <Grid key={i} item lg={3} sm={6} >
                                <CardItem  image={everyCard.image} title={everyCard.title} icon={everyCard.icon} typography={everyCard.typography} typographyArray={everyCard.paragraph}/>
                            </Grid>
                        )
                    })}
                

            </Grid>
        </main>
    )
}

export default Main