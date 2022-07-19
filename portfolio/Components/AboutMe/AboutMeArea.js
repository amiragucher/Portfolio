import AboutMeTitle from "./AboutMeTitle";
import AboutMeText from "./AboutMeText";
import AboutMeBanner from "./AboutMeBanner";
import Style from "./AboutMe.module.css"

export default function AboutMeArea (){
    return (
        <div>
            <AboutMeBanner>
            <AboutMeTitle className={Style.AboutMeContainer}/>
            <AboutMeText className={Style.AboutMeContainer}/>
            </AboutMeBanner> 
        </div>
    )
}