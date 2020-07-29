import React from "react";

const Footer = props => {
  console.log(props);
  return (
    <div className="footer">
      <ul>
        {props.details.map((info, index) => {
          return <li key={index}>{info}</li>;
        })}
      </ul>
    </div>
  );
};
export default Footer;
