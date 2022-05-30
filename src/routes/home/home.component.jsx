import { Outlet } from "react-router-dom";
import Categories from "../../components/categories/categories.component";

const Home = () => {
    return <>
        <Categories/>
        <Outlet/> {/** this is Child Shop Route  postition in Home component */}
    </>
}



export default Home;