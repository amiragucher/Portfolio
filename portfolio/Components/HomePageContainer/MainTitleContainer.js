import Style from "./HomePageContainer.module.css"

export default function MainTitleContainer ({children}){
    return (
        <div className={Style.MainTitleContainer}>{children}</div>
    )
}