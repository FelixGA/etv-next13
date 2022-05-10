import { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const StarsRating = () => {
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
  const [sumOfStars, setSumOfStars] = useState(0);

  const ratingCount = (stars) => {
    let result;

    // check if value is INT
    Number.isInteger(stars)
      ? setFullStar(stars) && console.log(fullStar, "full stars")
      : setHalfStar(1) && setFullStar(Math.floor(stars) - 1);

    setSumOfStars(fullStar - halfStar);

    result = sumOfStars;
    setEmptyStar(5 - sumOfStars);
    // console.log(fullStar, "full stars");
    console.log(halfStar, "half stars");
    console.log(emptyStar, "empty stars");
    console.log(`${sumOfStars} sum of stars`);
    return `${sumOfStars}`;
  };

  useEffect(() => {
    ratingCount(4);
  }, []);

  // console.log(` ${Math.ceil(fullStar)}, ${halfStar}`);

  return (
    <div className="flex pt-1 pl-2">
      <BsStarFill size={25} color="#FFAB00" />
      <BsStarHalf size={25} color="#FFAB00" />
      <BsStar size={25} color="#FFAB00" />
    </div>
  );
};

export default StarsRating;
