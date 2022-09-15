import Link from "next/link";
import Style from "../MainTitle/Text.module.css"

export default function Navbar() {
    
    return (
        <div className={Style.NavText}>
        <div className="fixed z-[1002]">
            <div className="flex justify-between w-[100vw] h-[5em] bg-[#F24E1E] text-[white]  px-[4em] py-[1em] uppercase font-bold drop-shadow-2xl	">
                <Link href="#aboutme">
                    <a className="text-[#FFC44D] hidden md:flex items-center text-xl font-bold">
                        About Me
                    </a>
                </Link>
                <Link href="/cv.pdf" >

                    <a className="text-[#FFC44D] hidden md:flex items-center text-xl font-bold">
                        CV
                    </a>
                </Link>
                <Link href="#projects" >  
                <a className="text-[#FFC44D] hidden md:flex items-center text-xl font-bold">
                    Projects
                </a>
                </Link>
                <Link href="#contact">
                <a className="text-[#FFC44D] hidden md:flex items-center text-xl font-bold">
                    Contact
                </a>
                </Link>
            </div>
            </div>
        </div>
    )
}