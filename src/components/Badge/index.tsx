import {useContext} from "react";

interface IBadgeProps extends React.PropsWithChildren{
    count: number,
}
const Badge:React.FunctionComponent<IBadgeProps> = ({count}):JSX.Element => {

    return (
        <div className={`flex justify-center absolute top-0 right-0 rounded-full w-6 h-6 bg-gray-900 text-white ${!count && "hidden"}`}>
            {count}
        </div>
    );
};

export default Badge;