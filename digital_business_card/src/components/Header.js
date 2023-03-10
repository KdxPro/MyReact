import profile_picture from "../images/img_avatar3.png"
import icon_email from "../images/icon_email.png"
import icon_linkedin from "../images/icon_linkedin.png"

export function Header() {
  return(

    <header>

      <img className="header--picture" src={profile_picture} alt="profile_picture"></img>
      <h1 className="header--name">Konrad Krukowski</h1>
      <h3 className="header--job">PLC Engineering</h3>
      <p className="header--additional">Additional info</p>

      <div className="header--buttons">

        <button className="btn_email">
          <img src={icon_email} alt="icon_email"></img>
          <span>Email</span>
        </button>

        <button className="btn_linkedin">
          <img src={icon_linkedin} alt="icon_linkedin"></img>
          <span>Linkedin</span>
        </button>

      </div>

    </header>

  );

}
