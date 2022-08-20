import Link from "next/link";

export default function Navbar(){
    return (
        <div className="fixed z-[1002] flex-row">
        <div className=" flex justify-between  w-[100vw] bg-[#004F54] text-[white] ml-[0px] px-[1em] py-[1em]">
          <div className=" flex-row h-10 w-10 sm:h-14 sm:w-14 relative ">
            <Link href="/#home">
            <a className="text-[white] hidden md:flex items-center text-xl">
              About Me
            </a>
          </Link>
          <Link href="/#home">
            <a className="text-[white] hidden md:flex items-center text-xl">
              About Me
            </a>
          </Link>
          <Link href="/#home">
            <a className="text-[white] hidden md:flex items-center text-xl">
              About Me
            </a>
          </Link>
          <Link href="/#home">
            <a className="text-[white] hidden md:flex items-center text-xl">
              About Me
            </a>
          </Link>
        </div>
        </div>
        </div>
    )
}