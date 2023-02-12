interface IFooterProps extends React.PropsWithChildren {
}

const Footer: React.FunctionComponent<IFooterProps> = (props): JSX.Element => {
    return (
        <footer className="flex justify-center items-center h-10">
            Footer
        </footer>
    );
};

export default Footer;