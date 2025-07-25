import React from "react";
import Banner from "../../components/sports/Banner";
import BannerScoreLayout from "../../layout/BannerScoreLayout";
import SportsNavigator from "../../components/sports/SportsNavigator";

export default function HomePage() {
  return (
    <div>
      <BannerScoreLayout>
        <Banner />
      </BannerScoreLayout>
      <SportsNavigator/>
      <div className="text-center">Welcome to the Home Page</div>
    </div>
  );
}
