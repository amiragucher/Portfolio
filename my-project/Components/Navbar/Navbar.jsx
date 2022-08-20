import Link from "next/link";

export default function Navbar (){
  return (
    //My Logo
  
    <div className="fixed z-[1002]">
      <div className=" flex justify-between w-[100vw] bg-[#004F54] text-[white] ml-[0px] px-[1em] py-[1em]">
        <div className="h-10 w-10 sm:h-14 sm:w-14 relative">
          <Image
            src="/logo-app.png"
            alt="Project Clean-up logo"
            layout="fill"
            objectFit="cover"
          />
          
        </div>
        <Link href="#home">
          <a className="text-[white] hidden md:flex items-center text-xl">
            Home
          </a>
        </Link>
       
        <Link href="#home">
          <a className="text-[white] hidden md:flex items-center text-xl">
            Home
          </a>
        </Link>

        <Link href="#home">
          <a className="text-[white] hidden md:flex items-center text-xl">
            Home
          </a>
        </Link>

        <Link href="#home">
          <a className="text-[white] hidden md:flex items-center text-xl">
            Home
          </a>
        </Link>
      </div>
      </div>
    
       
  );
};

