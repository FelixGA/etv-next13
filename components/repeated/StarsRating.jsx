import { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
const StarsRating = ({ stars }) => {
  /*   const [fullStar, setFullStar] = useState(0);
  const [halfStar, setHalfStar] = useState(0);
  const [emptyStar, setEmptyStar] = useState(0);
  const [sumOfStars, setSumOfStars] = useState(0);
  
  const ratingCount = (stars) => {
    // check value function
    function checkNumber(x) {
      // check if the passed value is a number
      if (typeof x == "number" && !isNaN(x)) {
        // check if it is integer
        if (Number.isInteger(x)) {
          console.log(`${x} is integer.`);
          setFullStar(x);
        } else {
          console.log(`${x} is a float value.`);
          setHalfStar(1);
        }
      } else {
        console.log(`${x} is not a number`);
        setEmptyStar(1);
      }
      setSumOfStars(fullStar + halfStar);
      return console.log(sumOfStars);
    }
    console.log(ratingCount(stars));
    checkNumber(stars);
    let result = 0;
    if (checkNumber(stars) == Number.isInteger(stars)) {
      setFullStar(stars);
    } else setHalfStar(1);
    result = fullStar + halfStar;
    console.log(result);
    return result;
  };
 */
  const [fullStar, setFullStar] = useState(0);
  const [halfStar, setHalfStar] = useState(0);
  const [emptyStar, setEmptyStar] = useState(0);

  useEffect(() => {
    Number.isInteger(stars)
      ? (setFullStar(stars), setEmptyStar(5 - stars))
      : (setFullStar(Math.floor(stars)),
        setEmptyStar(4 - Math.floor(stars)),
        setHalfStar(1));
  }, []);

  return (
    <div className="flex pt-1 pl-2">
      {/*  <BsStarHalf size={25} color="#FFAB00" />
      <BsStar size={25} color="#FFAB00" /> */}
      {[...Array(fullStar)].map((e, i) => (
        <BsStarFill size={25} color="#FFAB00" key={i} />
      ))}
      {halfStar ? <BsStarHalf size={25} color="#FFAB00" /> : null}
      {[...Array(emptyStar)].map((e, i) => (
        <BsStar size={25} color="#FFAB00" key={i} />
      ))}
      <p>{`we have ${fullStar}full, ${halfStar} half ${emptyStar} empty`}</p>
    </div>
  );
};

export default StarsRating;
