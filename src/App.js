import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/naviagation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";


const App = () => {
  return (
    <>
    <Routes>
      <Route  path="/" element = {<Navigation/>} >
        <Route index  element = {<Home/>} /> {/** index means that Home component will match also for parent / path inside Navigation parent  */}
        <Route  path="shop" element = {<Shop/>} />
        <Route  path="auth" element = {<Authentication/>} />
      </Route>
    </Routes>
    </>
  );
};

export default App;
