import Style from "./Text.module.css"
export default function MainTitle() {
    return (
        <>
            <div className="justify-center w-[100%]">
                <div className="flex items-center justify-center mt-10 sm:flex-col sm:text-2xl  sm:mt-[10em] sm:ml-[4em] sm:w-[100%] uppercase">
                    <div className={Style.Titles}>
                    <h1 className="text-5xl text-center sm:text-left sm:text-7xl w-[100%] drop-shadow-2xl text-[#E49315]" >Amira Gucher-Blackman</h1>
                    <h2 className="text-4xl text-center sm:text-5xl sm:text-left drop-shadow-8xl text-[#a83028]">Full-Stack Developer</h2>
                </div>
                </div>
                <div className="flex justify-center items-center">
                <img src="./QRCode.png" className="flex items-center  mt-10 sm:mt-[2em]" />
                </div>
            </div>

        </>
    )
}