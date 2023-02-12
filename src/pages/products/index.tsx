import Layout from "@/components/Layout";
import Product from "@/components/Product";
import prodcuctItems from "../../../data/products.json"

interface IProductsPageProps extends React.PropsWithChildren {
}

const ProductsPage: React.FunctionComponent<IProductsPageProps> = (props): JSX.Element => {
    return (
        <Layout title="Products Page">
            <div className="grid content-center grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
                {
                    prodcuctItems.map(
                        product => (<Product key={product.slug} item={product}/>)
                    )
                }
            </div>
        </Layout>
    );
};

export default ProductsPage;
