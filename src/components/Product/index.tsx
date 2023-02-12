import Link from "next/link";
import Image from "next/image";

interface IProductProps extends React.PropsWithChildren {
    item: {
        slug: string,
        image: string,
        title: string,
        price: number,
        description: string,
        count: number,
        cat: string
    }
}

const Product: React.FunctionComponent<IProductProps> = ({item}): JSX.Element => {
    return (
        <div className="bg-white rounded-xl mb-5 block">
            <Link href={`/products/product/${item.slug}`}>
                <Image className="rounded-t-xl " src={item.image} alt={"Book Product Pic"} width={800}
                       height={800}/>
            </Link>
            <div className="flex flex-col items-center justify-center p-5">
                <Link href={`/products/product/${item.slug}`}>
                    <h2 className="text-lg">
                        {item.title}
                    </h2>
                </Link>
                <p className="p-2">
                    {item.price}
                </p>
                <button className="rounded-xl bg-gray-700 text-white px-4 py-2">Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;