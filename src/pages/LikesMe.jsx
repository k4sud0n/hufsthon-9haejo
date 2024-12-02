import { Link } from "react-router-dom";
import image from "../img/image-3.png";

function LikesMe() {
  return (
    <Link to="/message">
      <img src={image} alt="LikesMe" />
    </Link>
  );
}

export default LikesMe;
