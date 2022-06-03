import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/naviagation/navigation.component";
import SignIn from "./routes/sign-in/signin.component";

const Shop = () => {
    return <div>
      Shop component
    </div>
}

const App = () => {
  return (
    <>
    <Routes>
      <Route  path="/" element = {<Navigation/>} >
        <Route index  element = {<Home/>} /> {/** index means that Home component will match also for parent / path inside Navigation parent  */}
        <Route  path="shop" element = {<Shop/>} />
        <Route  path="signIn" element = {<SignIn/>} />
      </Route>
    </Routes>
    </>
  );
};

export default App;
