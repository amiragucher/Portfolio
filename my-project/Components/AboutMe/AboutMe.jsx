import Style from "../MainTitle/Text.module.css"

export default function AboutMe (){
    return (
       
        <div id="aboutme" className="flex-col pt-[4em] bg-[#F24E1E] drop-shadow-lg text-[#FFC44D] font-bold p-5 h-full  w-full">
            <div className={Style.Titles}>
            <h1 className="text-5xl  sm:text-7xl w-[100%] drop-shadow-2xl font-extrabold text-[#FFC44D]">About Me</h1>
            </div>
            <p className="pr-[5em] pl-[5em]">Hi, my name is Amira! Welcome to my portfolio. 
            Recently I graduated from the School of Code sixteen week intensive boot camp, 
            during this time I learnt a wide variety of technologies which have given me the 
            knowledge and skills to begin my career in tech. Before I began learning code I 
            studied art and design whilst at college and then moved on to study Psychology 
            at University. I am a highly creative individual and I take joy in learning, 
            designing and thinking outside the box. Due to my background my interests lie in 
            UI/UX design and front-end development.

            </p>
        </div>
     
    )
}