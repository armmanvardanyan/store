import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";

const Navigation = () => {
   return (
     <div>
          <div>
            <h1>i am the Navigation bar</h1>
          </div>
          <Outlet/>
     </div>
   )
}

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
      </Route>
    </Routes>
    </>
  );
};

export default App;
