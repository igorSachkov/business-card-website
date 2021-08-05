import DenseAppBar from "./Content/AppMenu/DenseAppBar";
import ProfileInfo from "./Content/ProfileInfo/Profileinfo";
import style from "./App.module.css"
import Main from "./Content/Main/Main";
import { Paper, Typography } from "@material-ui/core";
import {state} from "./state/state"
import Footer from "./Content/Footer/Footer";
function App() {
  return (
    <div className={style.body}>
      <DenseAppBar />
      <div className={style.wrapper}>
        <ProfileInfo />

        <Main state={state}/>
      </div>
      
      <Footer />
    </div>
  );
}


export default App;
