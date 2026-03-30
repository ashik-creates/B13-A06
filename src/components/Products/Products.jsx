import ProductsCard from "./ProductsCard/ProductsCard";

const Products = () => {
    return (
        <div className="w-11/12 mx-auto grid sm:grid-cols-2 lg:grid-cols-3">
            <ProductsCard></ProductsCard>
        </div>
    );
};

export default Products;