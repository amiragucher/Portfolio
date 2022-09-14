import Style from "../MainTitle/Text.module.css"

export default function (){
    return (
        <div >
            <div className={Style.Titles}>
            <h1 className="flex justify-center text-6xl mb-4 mt-5 text-[#FF9D00]">My Projects</h1>
            </div>
        <div className="sm:flex p-10  bg-[#F24E1E] rounded-md	">
            <div className=" bg-white rounded-md m-2 p-1">
                <h1 className="flex-col text-center text-xl">Project Clean-Up</h1>
                <img src="./ProjectCleanup.png"/>
                <h2>This project was my teams final app for our four week project at the School of Code. 
                    We created this app to provide individuals with a platform that enables them to get 
                    involved with cleaning up their local area. 
                </h2>
            </div>
            <div className="bg-white rounded-md m-2 p-1">
                <h1 className="flex-col text-center text-xl">To-Do List App</h1>
                <img src="./ToDoList.png"/>
                <h2>During a hackathon I learn how to created a to do list in react. Following the hackathon I decided to 
                    re-create the to do list app and created this app which allows the user to add to the list, edit the list
                    and delete from the list. 
                </h2>
            </div>
            <div className="bg-white rounded-md m-2 p-1">
                <h1 className="flex-col text-center text-xl">Global News App</h1>
                <img src="./NewsApp.png"/>
                <h2>I created this app in react as a side project and used a global news api. Whilst creating this app
                    I was able to improve my css skills and I became more familiar with how to use react.
                </h2>
            </div>
        </div>
        </div>
    )
}