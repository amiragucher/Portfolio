// import Link from "next/link";

export default function Navbar(){
    return (
        <div className="fixed z-[1002]">
        <div className="flex justify-between w-[100vw] h-[5em] bg-[#F24E1E] text-[white]  px-[4em] py-[1em] uppercase font-bold drop-shadow-2xl	">
            {/* <Link href="/#home">   */}
            <a className="text-[#FFC44D] hidden md:flex items-center text-xl font-bold">
              About Me
            </a>
          {/* </Link> */}
          {/* <Link href="/#home">   */}
          <a className="text-[#FFC44D] hidden md:flex items-center text-xl font-bold">
             CV
            </a>
          {/* </Link> */}
          {/* <Link href="/#home">   */}
          <a className="text-[#FFC44D] hidden md:flex items-center text-xl font-bold">
             Portfolio
            </a>
          {/* </Link> */}
          {/* <Link href="/#home">   */}
          <a className="text-[#FFC44D] hidden md:flex items-center text-xl font-bold">
              Contact
            </a>
          {/* </Link> */}
        </div>
        </div>
    )
}