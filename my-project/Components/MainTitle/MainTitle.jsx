import Style from "./Text.module.css"
export default function MainTitle() {
    return (
        <>
            <div>
                <div className="flex-col justify-center text-2xl  mt-[10em] ml-[4em] w-[100%] uppercase">
                    <div className={Style.Titles}>
                    <h1 className="text-5xl sm:text-7xl w-[100%] drop-shadow-2xl text-[#E49315]" >Amira Gucher-Blackman</h1>
                    <h2 className="text-4xl sm:text-5xl drop-shadow-8xl text-[#a83028]">Full-Stack Developer</h2>
                </div>
                </div>
                <div className="flex justify-center items-center">
                <img src="./QRCode.png" className="flex items-center mt-[3.5em]" />
                </div>
            </div>

        </>
    )
}