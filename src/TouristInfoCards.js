import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="main-section">
      <div className="card">
        <img
          src="https://peoplemakeglasgow.com/templates/people/helper/timthumb.php?w=260&h=260&src=images/Glasgow_City_Sightseeing_Bus_at_Glasgow_Cathedral.jpg"
          alt="Glasgow CityBus"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Visit Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://www.visitmanchester.com/imageresizer/?image=%2fdmsimgs%2fshoppingfeature2_722842512.jpg&action=FeaturedItems1x1"
          alt="Cheshire Oaks Designer Outlet"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Visit Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/whats-on/special-events/new-years-eve-fireworks/fireworks1920x1080.jpg?h=174&la=en&w=310&hash=252DE886319929035E283B5CD4A05F08CA6F07DC"
          alt="London logo"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitlondon.com/" className="btn btn-primary">
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
