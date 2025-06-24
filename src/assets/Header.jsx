import { useContext } from "react"
import { DataContext } from "../contexts/Context";

export default function Header() {

    const {lang, langData, handleClick} = useContext(DataContext);

    return (
    <>
    <header className="relative w-full min-h-screen flex items-center bg-[#4731D3]">
        <div className="absolute right-0 top-0 w-[30%] h-full bg-[#CBF281]" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
                <div className="flex justify-between items-center w-full mb-20 md:mb-24">
                    <p className="text-[#CBF281] font-bold text-[64px]">sena</p>
                    <div className="flex gap-50">
                        <button className="text-[#CBF281] font-bold text-[32px]" onClick={handleClick}>{lang === "en" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}</button>
                        <button className="text-[#CBF281] font-bold text-[32px]" >DARKMODE</button>
                    </div>
                </div>

                <div className="max-w-3xl">
                    <h1 className="text-[#CBF281] font-bold text-[108px]">
                            {langData.headerSection.greeting}
                    </h1>
                    <p className="text-white mt-4 text-[48px]">{langData.headerSection.intro}</p>
                   
                </div>
        </div>
    </header>
    </>
    )
}