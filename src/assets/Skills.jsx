import { useContext } from "react"
import { DataContext } from "../contexts/Context";

export default function Skills () {
    const {langData} = useContext(DataContext);

    
    return (
    <>
        <h1>{langData.skillsSection.title}</h1>
    </>
    )
}