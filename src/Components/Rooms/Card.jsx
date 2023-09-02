import { Link } from "react-router-dom";
import HeartButton from "../Button/HeartButton";
import ImageSlider from "./ImageSlider";

const Card = ({ room }) => {
  return (
    <Link className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <ImageSlider images={room?.images} />

          <div
            className="
            absolute
            top-3
            right-3
            z-10
          "
          >
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">{room.location}</div>
        <div className="font-light text-neutral-500">
          5 nights . {room.dateRange}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {room.price}</div>
          <div className="font-light">night</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
