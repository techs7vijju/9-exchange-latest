import React from "react";
import Banner from "../../components/sports/Banner";
import BannerScoreLayout from "../../layout/BannerScoreLayout";

export default function HomePage() {
  return (
    <div>
      <BannerScoreLayout>
        <Banner />
      </BannerScoreLayout>
      <div className="text-center">Welcome to the Home Page</div>
    </div>
  );
}
