import Layout from "@/components/Layout";
import {useRouter} from "next/router";
import prodcuctItems from "../../../../data/products.json"
import Image from "next/image";


interface IProductDetailPageProps extends React.PropsWithChildren {
}

const ProductDetailPage: React.FunctionComponent<IProductDetailPageProps> = (props): JSX.Element => {
    const {query} = useRouter()
    const {slug} = query

    const product = prodcuctItems.find(product => product.slug === slug)

    if (!product) {
        return (
            <div>
                <h1>
                    product not found :(
                </h1>
            </div>
        )
    }

    return (
        <Layout title={product.title}>
            <div className="grid md:grid-cols-4 md:gap-3 bg-white rounded-xl p-10">
                <div className="md:cols-span-2">
                    <Image className="rounded-xl" src={product.image} alt={product.description} width={800}
                           height={800}/>
                </div>
                <div>
                    <div className="text-lg">
                        <h2>
                            {product.title}
                        </h2>
                        <p>
                            {product.cat}
                        </p>
                        <p>
                            {product.description}
                        </p>
                    </div>
                </div>
                <div className="p-5">
                    <div className="mb-2 flex justify-between">
                        <div>Price:</div>
                        <div>{product.price}</div>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <div>Status:</div>
                        <div>{product.count > 0 ? "Available" : "Unavailable"}</div>
                    </div>
                    <button className="rounded-xl bg-gray-700 text-white px-4 py-2 w-full">
                        Add To Cart
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetailPage;
