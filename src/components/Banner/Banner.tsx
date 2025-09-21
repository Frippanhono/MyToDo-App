import "./Banner.css";
import mountain from "../../assets/mountain.jpg";

export default function Banner() {
  return (
    <div className="banner">
      <img src={mountain} alt="Mountain" className="banner-img" />
    </div>
  );
}
