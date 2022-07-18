import Style from "./NavBar.module.css";

export default function NavBar(){
    return (
        <div className={Style.Sticky}>
    <div className={Style.container}>
    <header className={Style.header}>
      <ul className={Style.mainnav}>
          <li><a className={Style.Cv} href="#">CV</a></li>
          <li><a className={Style.About} href="#">About Me</a></li>
          <li><a className={Style.Portfolio} href="#">My Portfolio</a></li>
          <li><a className={Style.Contact} href="https://www.linkedin.com/feed/">Get in Touch</a></li>
      </ul>
	</header> 
    </div>
    </div>)
    }