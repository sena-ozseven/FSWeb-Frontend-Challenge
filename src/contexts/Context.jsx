import data from "../data";
import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const DataContext = createContext();

export const DataContextProvider = ({children}) => {

    const [lang, setLang] = useState("en");
    const [langData, setLangData] = useState(data.en);
    const [darkMode, setDarkMode] = useState("");

    const handleClick = () => {
        if (lang === "en") {
            setLang("tr");
        } else {
            setLang("en");
        };
    };
    

    useEffect(() => {
        axios
        .post("https://reqres.in/api/workintech", data[lang], {
            headers: {"x-api-key": "reqres-free-v1"}
        }
        )
        .then((res) => setLangData(res.data))
        .catch((err) => console.error(err));

    }, [lang]);

    return (
        <DataContext.Provider value={{lang, langData, handleClick}}>
            {children}
        </DataContext.Provider>
    );
}

