import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Card({ imgSrc, title, description, likes }) {
  return (
    <div className="card w-30 h-48 rounded-[2rem] bg-white border-gray-200 border-solid border-4 relative overflow-hidden">
      <div className="card-image rounded-t-3xl w-31 h-22 overflow-hidden">
        <img src={imgSrc.src} className="h-full w-full object-cover " />
      </div>
      <div className="card-title mt-3 ml-3">
        <h3 className="font-medium text-2xl">{title}</h3>
      </div>
      <div className="card-description ml-3 mt-3">
        <p className="">{description}</p>
      </div>
      <div className="card-footer ml-3 absolute bottom-2">
        <FontAwesomeIcon icon={faHeart} />
        <span className="ml-2">{likes}</span>
      </div>
    </div>
  );
}
