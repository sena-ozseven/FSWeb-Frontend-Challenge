import { useContext } from "react"
import { DataContext } from "../contexts/Context"

export default function Profile() {
    
    const {langData} = useContext(DataContext);

    return (
    <>
        <h1>{langData.profileSection.title}</h1>
    </>
    )
}