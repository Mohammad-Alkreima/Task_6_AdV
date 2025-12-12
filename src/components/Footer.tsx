const Footer = () => {
    return (
        <div className="max-w-full py-8 mx-8 xl:mx-[112px]">
            <footer className=" pt-6 text-sm text-center text-black dark:text-white flex flex-col sm:flex-row-reverse flex-wrap justify-center  items-center md:justify-end">
                <div className="flex flex-col sm:flex-row gap-4 mt-2 sm:mt-0">
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Email</a>
                    <a href="#">RSS feed</a>
                    <a href="#">Add to Feedly</a>
                </div>
                <p className="m-5">© 2023</p>
            </footer>
        </div>
    );
};

export default Footer;
