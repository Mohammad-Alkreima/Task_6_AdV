import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [menuVisible, setMenuVisible] = useState(false);

    const handleMenuToggle = () => {
        setMenuVisible(prev => !prev);
    };

    return (
        <header className="dark:bg-[#090D1F] bg-white px-4 sm:px-6 py-4 relative z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                
                <div className="text-xl font-bold text-black dark:text-white">
                    Your Name
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-4 sm:gap-6">
                    <NavLink
                        to="/"
                        className="px-3 py-2 font-medium text-black dark:text-white "
                    >
                        Blog
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className="px-3 py-2 font-medium text-black dark:text-white "
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        to="/about"
                        className="px-3 py-2 font-medium text-black dark:text-white "
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/newsletter"
                        className="px-3 py-2 font-medium text-black dark:text-white "
                    >
                        Newsletter
                    </NavLink>

                    {/* Theme Switch */}
                    <button
                        onClick={toggleTheme}
                        className="ml-2 sm:ml-4 h-8 w-24 flex items-center justify-between bg-[#090D1F] dark:bg-white rounded-full px-4 transition relative"
                    >
                        <div className="relative">
                            <img src="/assets/sun.svg" alt="" className="w-5 h-5" />
                            {theme === "dark" && (
                                <span className="absolute inset-0 rounded-full ring-2 bg-[#090D1F]"></span>
                            )}
                        </div>

                        <div className="relative">
                            <img src="/assets/moon.svg" alt="" className="w-5 h-5" />
                            {theme === "light" && (
                                <span className="absolute inset-0 rounded-full ring-2 bg-white"></span>
                            )}
                        </div>
                    </button>
                </nav>

                {/* Mobile Menu Icon */}
                <button onClick={handleMenuToggle} className="md:hidden">
                    <img
                        src={theme === "light" ? "/assets/menu-dark.svg" : "/assets/menu-light.svg"}
                        alt=""
                        className="w-6 h-6"
                    />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {menuVisible && (
                <div className="fixed inset-0 z-40 bg-white dark:bg-[#090D1F] flex flex-col items-center justify-center space-y-6">
                    <div className="text-lg font-bold text-black dark:text-white">
                        Your Name
                    </div>

                    <NavLink
                        to="/"
                        onClick={handleMenuToggle}
                        className="px-3 py-2 font-medium text-black dark:text-white "
                    >
                        Blog
                    </NavLink>

                    <NavLink
                        to="/projects"
                        onClick={handleMenuToggle}
                        className="px-3 py-2 font-medium text-black dark:text-white "
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={handleMenuToggle}
                        className="px-3 py-2 font-medium text-black dark:text-white "
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/newsletter"
                        onClick={handleMenuToggle}
                        className="px-3 py-2 font-medium text-black dark:text-white "
                    >
                        Newsletter
                    </NavLink>

                    {/* Mobile Theme Switch */}
                    <button
                        onClick={toggleTheme}
                        className="h-8 w-24 px-4 flex items-center justify-between bg-[#090D1F] dark:bg-white rounded-full transition relative"
                    >
                        <div className="relative">
                            <img src="/assets/sun.svg" alt="" className="w-5 h-5" />
                            {theme === "dark" && (
                                <span className="absolute inset-0 rounded-full ring-2 bg-[#090D1F]"></span>
                            )}
                        </div>

                        <div className="relative">
                            <img src="/assets/moon.svg" alt="" className="w-5 h-5" />
                            {theme === "light" && (
                                <span className="absolute inset-0 rounded-full ring-2 bg-white"></span>
                            )}
                        </div>
                    </button>

                    {/* Close Button */}
                    <button onClick={handleMenuToggle} className="absolute bottom-6">
                        <img
                            src={theme === "light" ? "/assets/close-dark.svg" : "/assets/close-light.svg"}
                            alt=""
                            className="w-6 h-6"
                        />
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
