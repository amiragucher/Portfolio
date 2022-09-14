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
                <h1 className="flex-col text-center text-xl">Project Clean-Up</h1>
                <img src="./ToDoList.png"/>
                <h2>This project was my teams final app for our four week project at the School of Code. 
                    We created this app to provide individuals with a platform that enables them to get 
                    involved with cleaning up their local area. 
                </h2>
            </div>
            <div className="bg-white rounded-md m-2 p-1">
                <h1 className="flex-col text-center text-xl">Project Clean-Up</h1>
                <img src="./ProjectCleanup.png"/>
                <h2>This project was my teams final app for our four week project at the School of Code. 
                    We created this app to provide individuals with a platform that enables them to get 
                    involved with cleaning up their local area. 
                </h2>
            </div>
        </div>
        </div>
    )
}