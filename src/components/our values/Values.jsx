import React from "react";
import "./Values.css";

function Values() {
  return (
    <div className="our-values-parent-section">
      <div className="our-values-section">
        <h2 className="our-values-title">Our Values</h2>
      </div>

      <div class="values-parent-list">
        {/* value one */}
        <div class="value-card">
          <img
            src="/assets/growth-icon.png"
            alt="Growth Icon"
            loading="lazy"
            width="55px"
            height="55px"
            class="value-icon"
          />
          <h3 class="value-title">Growth</h3>
          <p class="value-text">
            We are dedicated to fostering the growth and success of our
            customers. By understanding their unique needs and challenges, we
            provide tailored financial solutions and support that empower them
            to thrive
          </p>
        </div>

        {/* value two */}
        <div class="value-card">
          <img
            src="/assets/reliable-icon.png"
            alt="Reliability Icon"
            loading="lazy"
            width="55px"
            height="55px"
            class="value-icon"
          />
          <h3 class="value-title">Reliability</h3>
          <p class="value-text">
            Our commitment to reliability extends across every aspect of our
            operations, from transparent communication to dependable support,
            making us a trusted partner in their journey towards financial
            prosperity
          </p>
        </div>

        {/* value three */}
        <div class="value-card">
          <img
            src="/assets/innovative-icon.png"
            alt="Innovative Icon"
            loading="lazy"
            width="55px"
            height="55px"
            class="value-icon"
          />
          <h3 class="value-title">Opportunities and Innovativeness</h3>
          <p class="value-text">
            By staying at the forefront of financial technology and exploring
            innovative solutions, we strive to create new pathways to success
            for smallholder farmers, micro-business owners, and underserved
            communities
          </p>
        </div>

        {/* value four */}
        <div class="value-card">
          <img
            src="/assets/wealth-creation-icon.png"
            alt="Wealth Creation Icon"
            loading="lazy"
            width="55px"
            height="55px"
            class="value-icon"
          />
          <h3 class="value-title">Wealth creation and Prosperity</h3>
          <p class="value-text">
            By offering accessible and tailored financial products and services,
            we empower our customers to build wealth, expand their
            opportunities, and secure a brighter future for themselves and their
            communities
          </p>
        </div>

        {/* value five */}
        <div class="value-card">
          <img
            src="/assets/team-work-icon.png"
            alt="Team Work Icon"
            loading="lazy"
            width="55px"
            height="55px"
            class="value-icon"
          />
          <h3 class="value-title">Team Work</h3>
          <p class="value-text">
            Through open communication, mutual support, and a collaborative
            spirit, we harness the collective strength of our team to overcome
            challenges, innovate solutions, and deliver exceptional results for
            our customers
          </p>
        </div>

        {/* value six */}
        <div class="value-card">
          <img
            src="/assets/humane-icon.png"
            alt="Humane Icon"
            loading="lazy"
            width="55px"
            height="55px"
            class="value-icon"
          />
          <h3 class="value-title">Humane business practices</h3>
          <p class="value-text">
            We prioritize the well-being of our customers, employees, and
            communities, ensuring that our business decisions are guided by
            principles of social responsibility and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Values;
