import Style from "./HomePageContainer.module.css";

export default function HomePageContainer ({children}){
    return (
        <>
        <div className={Style.HomePageContainer}>{children}</div>
        </>
    )
}