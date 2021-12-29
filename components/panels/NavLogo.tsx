import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

const Logo = (props: any) => {
  if (props.name == "facebook") {
    return <FaFacebookF className="text-white text-lg mr-1" />;
  } else if (props.name == "twitter") {
    return <FaTwitter className="text-white text-lg mr-1" />;
  } else {
    return <FaYoutube className="text-white text-lg mr-1" />;
  }
};

export default Logo;
