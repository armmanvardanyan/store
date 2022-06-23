import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import './shop.styles.scss';



const Shop = () => {
    
    const {categoriesMap} = useContext(CategoriesContext)

    console.log(categoriesMap);
    return (
        <div className="products-container">
            {/*products.map((product) => {
                return (
                    <ProductCard key={product.id} product = {product} />
                )
            })*/}
        </div>
    )
}

export default Shop;