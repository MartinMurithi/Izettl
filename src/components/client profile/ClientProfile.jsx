import React from "react";
import "./ClientProfile.css"; // Import CSS file for styling

const ClientProfile = () => {
  return (
    <div className="client-profile">
      <h2>Client Profile</h2>
      <ul>
        <li>
          <span className="check-icon">&#10003;</span> Owner-operators of
          micro-businesses in low-income informal markets.
        </li>
        <li>
          <span className="check-icon">&#10003;</span> Smallholder farmers with
          30-60-day planting cycles.
        </li>
        <li>
          <span className="check-icon">&#10003;</span> $2-5 per day net income
          but with high buy-at / sell-at margins.
        </li>
        <li>
          <span className="check-icon">&#10003;</span> Very short business
          cycles of 1 to 45 days.
        </li>
        <li>
          <span className="check-icon">&#10003;</span> 67% of Female traders
          seeking to provide for family needs.
        </li>
        <li>
          <span className="check-icon">&#10003;</span> 95% rural markets in
          agriculture, FMCG, household goods, and service value chains.
        </li>
        <li>
          <span className="check-icon">&#10003;</span> Highly entrepreneurial
          outlook with strong work ethic.
        </li>
        <li>
          <span className="check-icon">&#10003;</span> Highly resilient and
          aspirational, seeking a better future for themselves and their
          families.
        </li>
      </ul>
    </div>
  );
};

export default ClientProfile;
