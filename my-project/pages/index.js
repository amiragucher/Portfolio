import MainTitle from '../Components/MainTitle/MainTitle';
import Avatar from '../Components/Avatar/Avatar';
import AboutMe from '../Components/AboutMe/AboutMe';
import UIUX from '../Components/UIUX/UIUX';
import Style from "../Components/MainTitle/Text.module.css"
import Toolbox from '../Components/ToolBox/ToolBox';
import Toggle from '../Components/Navbar/Toggle';
import Projects from '../Components/Projects/Projects';
import Footer from '../Components/Footer/Footer';
import Contact from '../Components/Contact/Contact';



export default function Home() {
  return (
    <div className="bg-[#02979D]">
      <Toggle />
      <div className="sm:flex h-[50em] sm:h-[100%]">
        <MainTitle />
        <Avatar />
      </div>
      <div>
        <div>
          <AboutMe />
        </div>
      </div>
      <div className={Style.Titles}>
        <h1 className="flex justify-center text-6xl mb-4 mt-[1em] font-extrabold text-[#FFC44D]">UI/UX Designs</h1>
      </div>
      <UIUX />
      <div className={Style.Titles}>
        <h1 className="flex justify-center text-6xl mb-4 mt-5 font-extrabold text-[#FFC44D]">ToolBox</h1>
      </div>
      <Toolbox />
      <Projects />
      <div className={Style.Titles}>
        <h1 className="flex justify-center text-6xl mb-4 mt-5 font-extrabold text-[#FFC44D]">Contact Me</h1>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}
