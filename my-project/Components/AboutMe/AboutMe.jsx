import Style from "../MainTitle/Text.module.css"

export default function AboutMe (){
    return (
       
        <div id="aboutme" className="flex-col pt-[4em] bg-[#F24E1E] drop-shadow-lg text-[#FFC44D] font-bold p-5 h-full  w-full">
            <div className={Style.Titles}>
            <h1 className="text-5xl  sm:text-7xl w-[100%] drop-shadow-2xl text-[#FFC44D]">About Me</h1>
            </div>
            <p>Prior to studying at the School of Code my studies evolved around
                Art and Design, and then Psychology. During the bootcamp I found
                a true passion for coding which has only grown over time. I have
                experience of working with people from all walks of life and have
                gained the ability to work within a team and in an agile framework.
                Through the School of Code, I have developed both leadership and
                team work skills and the ability to problem solve and come up with
                solutions. I am committed, hard working, pro-active and passionate
                and am ready to contribute to a companies successes.

            </p>
        </div>
     
    )
}