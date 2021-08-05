import style from "./ProfileInfo.module.css"
import DemoCarousel from "./Carousel/Carousel"
export default function ProfileInfo() {
    return (
        <div>
            <div className={style.profileContainer}>
                <div className={style.basicInfo}>
                    <div className={style.basicInfo__container}>
                        <h2>Сачков Игорь Александрович</h2>
                        <hr></hr>
                        <p>1990 года рождения</p>
                    </div>

                </div>
                <div className={style.basicPhoto}>
                    <DemoCarousel />
                </div>

            </div>

        </div>

    )
}