import React, { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import MoreSidebar from "./moreSidebar";
import { getPageBanners } from "../../api/apiMethods";
import { decryptData } from "../../utils/cryptoUtils";
import { imgUrl } from "../../api/baseUrl";
import { FaPlay } from "react-icons/fa";
import { Images } from "../../images/images";
import { Carousel } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

function MoreHome() {
  console.log("opened");
  const navigate = useNavigate();
  const [dropdown, setdropdown] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 991 });

  const getUserData = () => {
    const storedData = localStorage.getItem("user_data");
    return decryptData(storedData);
  };
  const userDetails = getUserData();
  const hasFetched = useRef(false);
  const [inplayImages, setInplayImages] = useState([]);

  const defaultBanners = isMobile
    ? [Images.banner2, Images.banner2]
    : [Images.banner1, Images.banner1];

  const getBanners = async () => {
    const params = {
      userId: userDetails?.userId,
      page: 1,
      place: 1,
    };

    try {
      const response = await getPageBanners(params);

      if (response.status === 200) {
        const formattedBanners = response.banner
          .map((item) => {
            if (item.video && item.video_banner) {
              return {
                video: item.video,
                video_banner: item.video_banner,
              };
            } else if (item.image) {
              return {
                image: item.image,
              };
            }
            return null;
          })
          .filter(Boolean);

        setInplayImages(formattedBanners);
      }
    } catch (error) {
      console.error("Error fetching banners:", error);
    }
  };

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    getBanners();
  }, []);

  const [videoPopup, setVideoPopup] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleFullScreen = (url) => {
    setVideoUrl(url);
    setVideoPopup(true);
    // setVideoUrl(index);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await getFromIndexedDB(id);

  //       if (Array.isArray(result) && result.length > 0) {
  //         setInplayImages(result);
  //       }
  //     } catch (error) {
  //       console.error("Error retrieving from IndexedDB:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="d-flex w-100 flex-column">
      {isMobile ? (
        <>
          <div className="d-flex flex-between w-100">
            <div className="w-100">
              {inplayImages?.length > 0 ? (
                <Carousel
                  interval={5000}
                  controls={inplayImages.length > 1}
                  indicators={inplayImages.length > 1}
                >
                  {inplayImages.map((item, index) => (
                    <Carousel.Item key={index}>
                      {isVideoBanner ? (
                        <div className="w-100">
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="/fallback-image.jpg"
                          >
                            <source src={mediaUrl} type="video/mp4" />
                          </video>

                          {videoUrl && (
                            <FaPlay
                              onClick={() => handleFullScreen(videoUrl)}
                              style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                fontSize: "2rem",
                                color: "white",
                                cursor: "pointer",
                                background: "rgba(0, 0, 0, 0.5)",
                                padding: "10px",
                                borderRadius: "50%",
                              }}
                            />
                          )}
                        </div>
                      ) : (
                        <img
                          loading="lazy"
                          className="w-100"
                          src={mediaUrl}
                          alt="Game Banner"
                        />
                      )}
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <Carousel interval={5000} controls indicators>
                  {defaultBanners.map((banner, index) => (
                    <Carousel.Item key={index} className=" ">
                      <img
                        loading="lazy"
                        className="w-100"
                        src={banner}
                        alt="Default Game Banner"
                        style={{ objectFit: "cover" }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              )}
            </div>
          </div>
          <div className="p-2">
            <div className="d-flex flex-row w-100 scroll-xaxis white-bg blue-color6 medium-font py-2">
              <div className="scroll-card">
                <img
                  src={Images.cricket2}
                  className="w-100 p-1"
                  alt="Cricket"
                  // onClick={() => navigate("/cricket")}
                />
                <div className="flex-center fw-600">Cricket</div>
              </div>
              <div className="scroll-card">
                <img
                  src={Images.football2}
                  className="w-100 p-1 "
                  alt="Tennis"
                  // onClick={() => navigate("/tennis")}
                />
                <div className="flex-center fw-600">Football</div>
              </div>
              <div className="scroll-card">
                <img
                  src={Images.tennis2}
                  className="w-100 p-1"
                  alt="Tennis"
                  // onClick={() => navigate("/tennis")}
                />
                <div className="flex-center fw-600">Tennis</div>
              </div>
              <div className="scroll-card">
                <img
                  src={Images.casino2}
                  className="w-100 p-1"
                  alt="Casino"
                  // onClick={() => navigate("/badmaintaininplay")}
                />
                <div className="flex-center fw-600">Casino</div>
              </div>
              <div className="scroll-card">
                <img
                  src={Images.casino2}
                  className="w-100 p-1"
                  alt="Casino"
                  // onClick={() => navigate("/badmaintaininplay")}
                />
                <div className="flex-center fw-600">Casino</div>
              </div>
              <div className="scroll-card">
                <img
                  src={Images.casino2}
                  className="w-100 p-1"
                  alt="Casino"
                  // onClick={() => navigate("/badmaintaininplay")}
                />
                <div className="flex-center fw-600">Casino</div>
              </div>
              <div className="scroll-card">
                <img
                  src={Images.casino2}
                  className="w-100 p-1"
                  alt="Casino"
                  // onClick={() => navigate("/badmaintaininplay")}
                />
                <div className="flex-center fw-600">Casino</div>
              </div>
              <div className="scroll-card">
                <img
                  src={Images.casino2}
                  className="w-100 p-1"
                  alt="Casino"
                  // onClick={() => navigate("/badmaintaininplay")}
                />
                <div className="flex-center fw-600">Casino</div>
              </div>
            </div>
          </div>

          <div className="w-100 white-font blue-color13-bg">
            <div className="d-flex flex-row flex-center py-1 mx-1">
              <img src={Images.bellIcon1} className="bell-icon" />
              <marquee
                behavior=""
                direction=""
                className="large-font mx-1 w-100"
              >
                Welcom to 9-exchange
              </marquee>
            </div>
          </div>
        </>
      ) : (
        <div
          className="p-2 d-flex flex-between w-100 gap-2"
          style={{ height: "30rem" }}
        >
          <div className="w-20 h-100">
            <MoreSidebar />
          </div>
          <div className="w-80 h-100 grey-color1-bg">
            <Outlet /> {/* This will render the nested routes */}
          </div>
        </div>
      )}

      {/* <FullVideoPopup
        setVideoPopup={setVideoPopup}
        videoPopup={videoPopup}
        setVideoUrl={setVideoUrl}
        videoUrl={videoUrl}
      /> */}
    </div>
  );
}

export default MoreHome;
