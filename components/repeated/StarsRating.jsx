import { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const StarsRating = ({ stars }) => {
  const [fullStar, setFullStar] = useState(0);
  const [halfStar, setHalfStar] = useState(0);
  const [emptyStar, setEmptyStar] = useState(0);
  useEffect(() => {
    Number.isInteger(stars)
      ? (setFullStar(stars), setEmptyStar(5 - stars))
      : (setFullStar(Math.floor(stars)),
        setEmptyStar(4 - Math.floor(stars)),
        setHalfStar(1));
  }, [stars]);

  return (
    <div className="flex">
      {/*  <BsStarHalf size={25} color="#FFAB00" />
      <BsStar size={25} color="#FFAB00" /> */}
      {[...Array(fullStar)].map((e, i) => (
        <BsStarFill size={20} color="#FFAB00" key={i} />
      ))}
      {halfStar ? <BsStarHalf size={20} color="#FFAB00" /> : null}
      {[...Array(emptyStar)].map((e, i) => (
        <BsStar size={20} color="#FFAB00" key={i} />
      ))}
      {/* <p>{`we have ${fullStar}full, ${halfStar} half ${emptyStar} empty`}</p> */}
    </div>
  );
};

export default StarsRating;
