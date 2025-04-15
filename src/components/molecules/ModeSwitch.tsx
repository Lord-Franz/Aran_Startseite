import SunIcon from "../atoms/SunIcon.tsx";
import MoonIcon from "../atoms/MoonIcon.tsx";
import {useEffect, useState} from "react";


const ModeSwitch = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');

    useEffect(() => {
        // Add or remove dark mode class on <html> tag
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Store user preference in localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };


    return (
        <div className={"absolute right-10 top-5"}>
            <div>

            </div>
            <input
                className={`sr-only peer`}
                type="checkbox"
                checked={(theme === 'dark')}
                id="switch" />
            {theme === 'dark' ? <SunIcon/> : <MoonIcon/>}

            <div
                onClick={toggleTheme}
                className={`w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600`}
            >
            </div>
        </div>
    );
}; export default ModeSwitch