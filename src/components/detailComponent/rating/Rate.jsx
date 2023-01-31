import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import "./rate.scss";
function Rate({ rate, tag }) {
  const [stars, setStars] = useState([]);
  const [firstTags, setFirstTags] = useState([]);
  const [test, setTest] = useState([]);
  useEffect(() => {
    star();
  }, [rate]);
  // TAG NOT WORKING
  useEffect(() => {
    setTest(tag);
    if (test !== undefined) {
      sliceTag();
    }
  }, [tag]);
  const star = () => {
    let arr = [];
    for (let i = 0; i < rate; i++) {
      arr.push(<AiFillStar className="stars" />);
    }
    return setStars(arr);
  };
  // TAG
  const sliceTag = () => {
    let arr = [...test];
    let newArr = arr.slice(2, 4);
    return setFirstTags(newArr);
  };
  return (
    <div className="rating">
      <div className="container_stars">
        {stars?.map((etoile, index) => {
          return <span key={index}>{etoile}</span>;
        })}
      </div>
      <span className="rating_number">
        <p>{rate}</p>
      </span>
      <div className="rating_tags">
        {firstTags?.map((slug, index) => {
          return <span key={index}>{slug.name}</span>;
        })}
      </div>
    </div>
  );
}

export default Rate;
