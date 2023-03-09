import profilePicture from "../images/img_avatar3.png"

export default function Header() {
  return(

    <header>

      <img src={profilePicture} alt="profile_picture"></img>
      <h1 className="header--name">Konrad Krukowski</h1>
      <h3 className="header--job">PLC Engineer</h3>
      <h4 className="header--additional">Additional info</h4>

    </header>

  );

}
