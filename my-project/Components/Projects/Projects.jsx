import Style from "../MainTitle/Text.module.css"

export default function (){
    return (
        <div id="projects">
            <div className={Style.Titles}>
            <h1 className="flex justify-center text-6xl mb-4 font-extrabold text-[#FFC44D]">My Projects</h1>
            </div>
        <div className="sm:flex p-10  bg-[#F24E1E] rounded-md mr-5 ml-5">
            <div className=" bg-[#FFC44D] rounded-md m-2 p-1">
                <h1 className="flex-col text-center text-xl text-[#F24E1E]">Project Clean-Up</h1>
                <img src="./ProjectCleanup.png"/>
                <h2 className="text-[#F24E1E] font-bold">The Project Clean-Up app was created 
                during the School of Code final four week project. My team and I created this 
                app to provide individuals with a platform that enables them to participate in 
                clean up in their local area. View here: <a className="underline text-[#02979D] "href="https://projectcleanup.netlify.app/">Project Clean-Up</a>
                </h2>
            </div>
            <div className="bg-[#FFC44D] rounded-md m-2 p-1">
                <h1 className="flex-col text-center text-xl text-[#F24E1E]">To-Do List App</h1>
                <img src="./ToDoList.png"/>
                <h2 className="text-[#F24E1E] font-bold">During a Hackathon I learnt how to create a 
                to-do-list app in React. Following the Hackathon I decided to re-create the to-do list 
                app on my own to help me practice what I had learnt and created this all which allows the 
                user to add to the list, delete from the list and edit the list.View here:  <a className="underline text-[#02979D] "href="https://github.com/amiragucher/To-Do-List-App">To-Do-List</a>
                </h2>
            </div>
            <div className="bg-[#FFC44D] rounded-md m-2 p-1">
                <h1 className="flex-col text-center text-xl text-[#F24E1E]">Global News App</h1>
                <img src="./NewsApp.png"/>
                <h2 className="text-[#F24E1E] font-bold">This app was created as a side project 
                and was created using a Global News API. Whilst creating this app I was able to 
                improve my CSS skills and became more familiar with using. View here: <a className="underline text-[#02979D] "href="https://github.com/amiragucher/News-App">Global News</a>
                </h2>
            </div>
        </div>
        </div>
    )
}