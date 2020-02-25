import {useLocalStorage} from './useLocalStorage.js';
import {useEffect} from 'react';


export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("darkModeStatus")
    console.log(darkMode)

    useEffect(() => {
     const pagebody = document.getElementsByTagName("body")[0];

     darkMode ? pagebody.classList.add("dark-mode") : pagebody.classList.remove("dark-mode");

    }, [darkMode]);

return [darkMode, setDarkMode];

}
