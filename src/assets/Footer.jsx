import { useContext } from "react";
import { DataContext } from "../contexts/Context";

export default function Footer() {

    const {langData} = useContext(DataContext);

    return (
        <div>
         <h1>{langData.footerSection.title}</h1>
        </div>
    );
}