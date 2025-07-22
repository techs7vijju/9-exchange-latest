import React from "react";
import { Images } from "../../images/images";

const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <div className="page-not-found-content  ">
        <img
          src={Images.pageNotFound}
          alt="404 "
          className="page-not-found-image"
        />
        <h1 className="h1-blue mt-4">Opps! Page Not Found</h1>
        <p className="">Sorry ,the page you are looking for doesn't exist.</p>
                
      </div>

     
    </div>
  );
};

export default PageNotFound;
