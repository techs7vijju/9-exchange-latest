import React from "react";
import { Images } from "../../images/images";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

const SportsNavigator = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 991 });
  const sportsListMobile = [
    { name: "Cricket", image: Images.cricket2, link: "/cricket" },
    { name: "Football", image: Images.football2, link: "/tennis" },
    { name: "Tennis", image: Images.tennis2, link: "/tennis" },
    { name: "Casino", image: Images.casino2, link: "/badmaintaininplay" },
    { name: "Casino", image: Images.casino2, link: "/badmaintaininplay" },
    { name: "Casino", image: Images.casino2, link: "/badmaintaininplay" },
    { name: "Casino", image: Images.casino2, link: "/badmaintaininplay" },
    { name: "Casino", image: Images.casino2, link: "/badmaintaininplay" },
  ];
  const sportsListWeb = [
    {
      name: "Cricket",
      image: Images.cricket1,
      link: "/cricket",
    },
    {
      name: "Cricket",
      image: Images.cricket1,
      link: "/cricket",
    },
    {
      name: "Football",
      image: Images.football1,
      link: "/footballinplay",
    },
    {
      name: "Tennis",
      image: Images.tennis1,
      link: "/footballinplay",
      rounded: true,
    },
    {
      name: "Casino",
      image: Images.casino1,
      link: "/footballinplay",
    },
    {
        name: "Tennis",
        image: Images.tennis1,
        link: "/footballinplay",
        rounded: true,
      },
      {
        name: "Casino",
        image: Images.casino1,
        link: "/footballinplay",
      },
  ];

  const sportsData = isMobile ? sportsListMobile  : sportsListWeb;

  return (
    <div className="sports-navigator h-100">
      <div className="d-flex w-100 scroll-xaxis1 py-2 gap-2">
        {sportsData.map((sport, index) => (
          <div key={index} className="scroll-card flex flex-col">
            <img
              src={sport.image}
              alt={sport.name}
              onClick={() => navigate(sport.link)}
            />
            <p className={`flex-center fw-600 py-2 ${isMobile ? "text-black" : "text-white"}`}>{sport.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsNavigator;
