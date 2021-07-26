import DenseAppBar from "./Content/AppMenu/DenseAppBar";
import ProfileInfo from "./Content/ProfileInfo/Profileinfo";
import style from "./App.module.css"
import Main from "./Content/Main/Main";
function App() {
  return (
    <div className={style.body}>
      <DenseAppBar />
      <div className={style.wrapper}>
        <ProfileInfo />
          <Main />
      </div>
    </div>
  );
}


export default App;
