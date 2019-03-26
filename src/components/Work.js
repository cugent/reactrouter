import React from "react";

const Work = props => {
  let num = props.object.time;
  let hours = num / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);

  let sortedArray = props.object.array.sort(function(a, b) {
    return b.minutes - a.minutes;
  });

  return (
    <div>
      <h1>Work {rhours > 0 || rminutes > 0 ? `${rhours}:${rminutes < 10 ? `0${rminutes}` : rminutes}` : null}</h1>
      {sortedArray.map((item, index) => {
        let num = item.minutes;
        let hours = num / 60;
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);

        return (
          <p key={index}>
            <span className="bold">{`${rhours}:${rminutes < 10 ? `0${rminutes}` : rminutes}`}</span> <span className="red">{item.description}</span>
          </p>
        );
      })}
    </div>
  );
};

export default Work;
