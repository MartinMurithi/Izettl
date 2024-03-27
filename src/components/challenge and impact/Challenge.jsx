import React, { useState, useEffect } from "react";
import "./Challenge.css";

function Challenge() {
  const [counts, setCounts] = useState([0, 0, 0]);
  useEffect(() => {
    const targetCounts = [67, 70, 95];
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) => {
          const step = Math.ceil(targetCounts[index] / 100);
          return count + step > targetCounts[index]
            ? targetCounts[index]
            : count + step;
        })
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="challenge-impact-section">
      <div className="challenge-section">
        <h4 className="challenge-title">The Challenge</h4>
        <p className="challenge-text">
          THE challenge 75% of the global population relies on making a living
          through agriculture, and the sector accounts for more than a fourth of
          Kenya’s GDP. These farmers are mostly small-holder farmers who then
          convert to micro and small businesses when they sell their surplus
          produce to cater to other basic needs. over half of Africa’s Micro,
          Small, and Medium Enterprises (MSMEs) lack the finance necessary to
          grow. $170B is needed to bridge the financial inclusion gap for the
          500 million micro and small businesses around the world. 50% of
          smallholder farmers are women and 56% of the unbanked adults are also
          women. Kenya’s MSME finance gap is $19B, making it the largest in East
          Africa. Adoption of transformative financial technologies and
          innovations focuses on addressing the financial inclusion and gender
          gap for smallholder farmers, micro, small and medium businesses, and
          women.
        </p>
      </div>

      <div className="impact-section">
        <h4 className="impact-title">Our Impact</h4>
        <div className="impact-content">
          <div className="impact-image">
            <img
              src="/assets/our-impact.jpeg"
              alt="Our Impact"
              className="impact-img"
            />
          </div>

          <div className="impact-text-parent">
            <p className="impact-text">
              Our loans have strict affordability limits, which when well used
              create wealth. 67% of women traders 70% smallholder farmers 95% of
              Rural markets in agriculture, FMCG, and service value chains
            </p>
            <div className="count-data">
              <div className="count">
                {counts[0]}%<p className="count-title">Women Traders</p>
              </div>
              <div className="count">
                {counts[1]}%<p className="count-title">Smallholder farmers</p>
              </div>
              <div className="count">
                {counts[2]}%
                <p className="count-title">Rural Markets in Agriculture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
