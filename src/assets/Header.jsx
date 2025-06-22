import { useContext } from "react"
import { DataContext } from "../contexts/Context";

export default function Header() {

    const {langData, handleClick} = useContext(DataContext);

    return (
    <>
    <div className="headercomponent">
        <div className="leftcomp">
            <button onClick={handleClick}>DİL</button>
            <h1 className="hi">
                {langData.headerSection.greeting}
            </h1>
            <p>{langData.headerSection.intro}</p>
            
            
            <p>{langData.headerSection.currentHTML}</p>
        </div>
    </div>
    </>
    )
}