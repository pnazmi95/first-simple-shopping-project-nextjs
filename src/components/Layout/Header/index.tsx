import Link from "next/link";
import Badge from "@/components/Badge";
interface IHeaderProps extends React.PropsWithChildren {
}

const Header: React.FunctionComponent<IHeaderProps> = (props): JSX.Element => {
    return (
        <header>
            <nav className="flex h-14 px-8 justify-between items-center border-b-4 bg-white">
                <Link href="/" className="text-lg font-bold">
                    Shopping
                </Link>
                <div className="flex justify-center items-center">
                    {/*<div className="relative">*/}
                    {/*    <Link className="p-2" href="/cart">*/}
                    {/*        Cart*/}
                    {/*    </Link>*/}
                    {/*    <Badge count={2} />*/}
                    {/*</div>*/}
                    <Link className="p-2" href="/cart">Cart</Link>
                    <Link className="p-2" href="/products">Products</Link>
                    <Link className="p-2" href="/login">Login</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
