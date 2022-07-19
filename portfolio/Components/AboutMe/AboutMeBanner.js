import Style from "./AboutMe.module.css"

export default function AboutMeBanner ({children}){
    return (
        <>
        <div className={Style.AboutMeContainer}>{children}</div>
        </>
)

}