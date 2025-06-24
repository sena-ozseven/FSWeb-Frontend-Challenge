import { useContext } from "react"
import { DataContext } from "../contexts/Context";

export default function HeadNav() {
    const {langData, handleClick} = useContext(DataContext);
    
    return (
    <>
        <p className="text-red-500">sena</p>
        <button onClick={handleClick}>DİL</button>
    </>
    );
}