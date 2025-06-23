import { useContext } from "react"
import { DataContext } from "../contexts/Context";

export default function HeadNav() {
    const {langData, handleClick} = useContext(DataContext);
    
    return (
    <>
        <p className="name">sena</p>
        <button onClick={handleClick}>DİL</button>
    </>
    );
}