import { useContext } from "react"
import { DataContext } from "../contexts/Context";

export default function Header() {

    const {langData} = useContext(DataContext);

    return (
    <>
    <div className="headercomponent">
        <div className="leftcomp">
            <h1 className="hi">
                {langData.headerSection.greeting}
            </h1>
            <p>{langData.headerSection.intro}</p>
        </div>
    </div>
    </>
    )
}