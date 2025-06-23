import { useContext } from "react";
import { DataContext } from "../contexts/Context";

export default function Projects() {
    const {langData} = useContext(DataContext);
    return (
    <>
        <h1>{langData.projectSection.title}</h1>
    </>
    );
}