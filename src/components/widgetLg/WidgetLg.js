import React from "react";
import "./widgetLg.css";

const widgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widget-lg-btn " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widget-lg-title">Latest Transactions</h3>
      <table className="widget-lg-table">
        <tr className="widget-lg-tr">
          <th className="widget-lg-th">Customer</th>
          <th className="widget-lg-th">Date</th>
          <th className="widget-lg-th">Amount</th>
          <th className="widget-lg-th">Status</th>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img
              src="https://res.cloudinary.com/marusofteamwork/image/upload/v1625065903/frontendassessment/Photo_mnwpfg.png"
              alt="customer"
              className="widget-lg-img"
            />
            <span className="widget-lg-name">Abdullah Aisha</span>
          </td>
          <td className="widget-lg-date">24 July 2021</td>
          <td className="widget-lg-amount">$202.01</td>
          <td className="widget-lg-status">
            {" "}
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img
              src="https://res.cloudinary.com/marusofteamwork/image/upload/v1625065903/frontendassessment/Photo_mnwpfg.png"
              alt="customer"
              className="widget-lg-img"
            />
            <span className="widget-lg-name">Abdullah Aisha</span>
          </td>
          <td className="widget-lg-date">24 July 2021</td>
          <td className="widget-lg-amount">$202.01</td>
          <td className="widget-lg-status">
            {" "}
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img
              src="https://res.cloudinary.com/marusofteamwork/image/upload/v1625065903/frontendassessment/Photo_mnwpfg.png"
              alt="customer"
              className="widget-lg-img"
            />
            <span className="widget-lg-name">Abdullah Aisha</span>
          </td>
          <td className="widget-lg-date">24 July 2021</td>
          <td className="widget-lg-amount">$202.01</td>
          <td className="widget-lg-status">
            {" "}
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img
              src="https://res.cloudinary.com/marusofteamwork/image/upload/v1625065903/frontendassessment/Photo_mnwpfg.png"
              alt="customer"
              className="widget-lg-img"
            />
            <span className="widget-lg-name">Abdullah Aisha</span>
          </td>
          <td className="widget-lg-date">24 July 2021</td>
          <td className="widget-lg-amount">$202.01</td>
          <td className="widget-lg-status">
            {" "}
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default widgetLg;
