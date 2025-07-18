import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Sidebarbtn from "./Sidebarbtn";
import { getPageBanners } from "../../api/apiMethods";
import { decryptData } from "../../utils/cryptoUtils";
import { imgUrl, imgUrlMain } from "../../api/baseUrl";
import { FaPlay } from "react-icons/fa";
import { Images } from "../../images/images";
import { Carousel } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

function Banner() {
  const navigate = useNavigate();
  const [dropdown, setdropdown] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const getUserData = () => {
    const storedData = localStorage.getItem("user_data");
    return decryptData(storedData);
  };
  const userDetails = getUserData();
  const hasFetched = useRef(false);
  const [inplayImages, setInplayImages] = useState([]);

  const defaultBanners = [Images.Banner, Images.Banner];
 
  function toggleMenu() {
    const menu = document.getElementById("sidebarMenu");
    const arrow = document.getElementById("arrow");
    
    menu.classList.toggle("hidden");
    arrow.classList.toggle("rotate");
  }



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
  const categories = [
    { title: "Cricket", image: Images.cricket3 },
    { title: "Football", image: Images.football5 },
    { title: "Tennis", image: Images.tennis3 },
    { title: "Casino", image: Images.casino3 },
  ];
  return (
    <>
      {isMobile ? (
        <div className="skyblue-bg">
          <div className="mobile-banner-wrapper">
            <img
              src={Images.banner1}
              alt="Mobile Banner"
              className="mobile-banner-image"
            />
          </div>
          <div className="category-wrapper">
            <div className="category-scroll justify-content-evenly">
              {categories.map((item, index) => (
                <div className="d-flex flex-column justify-content-center" key={index}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="category-image"
                  />
                  <div className="text-center category-title">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        


        </div>
      ) : (
        <>
          <div className="d-flex w-100 flex-column">
            <div className="d-flex flex-between w-100 gap-2">
              <div className="w-5 h-100">
                <Sidebarbtn />
              </div>
              <div className="w-95">
                {inplayImages?.length > 0 ? (
                  <Carousel
                    interval={5000}
                    controls={inplayImages.length > 1}
                    indicators={inplayImages.length > 1}
                  >
                    {inplayImages.map((item, index) => {
                      let mediaUrl = "";
                      let isVideoBanner = false;
                      let videoUrl = "";

                      if (item.video_banner) {
                        mediaUrl = `${imgUrl}/banner/${item.video_banner}`;
                        videoUrl = item.video
                          ? `${imgUrl}/banner/${item.video}`
                          : "";
                        isVideoBanner = true;
                      } else if (item.image) {
                        mediaUrl = `${imgUrl}/banner/${item.image}`;
                      }

                      return (
                        <Carousel.Item key={index}>
                          {isVideoBanner ? (
                            <div className="w-100 h-100">
                              <video
                                // className="w-100 h-100"
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
                              className="w-100 h-100"
                              src={mediaUrl}
                              alt="Game Banner"
                            />
                          )}
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                ) : (
                  <Carousel interval={5000} controls indicators>
                    {defaultBanners.map((banner, index) => (
                      <Carousel.Item key={index}>
                        <img
                          loading="lazy"
                          className="w-100"
                          src={banner}
                          alt="Default Game Banner"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                )}
              </div>
            </div>

            <div className="w-100 overflow-x-auto">
              <div className="d-flex flex-nowrap px-2 py-2 scroll-wrapper">
                <div
                  className="col-6 col-md-4 col-lg-3 cricket-card me-3 mb-3"
                  onClick={() => navigate("/cricket")}
                >
                  <img
                    src={Images.cricket2}
                    className="cricket-image"
                    alt="Cricket"
                  />
                  <div className="cricket-label">Cricket</div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 cricket-card me-3 mb-3">
                  <img
                    src={Images.football2}
                    className="cricket-image"
                    alt="Football"
                    onClick={() => navigate("/footballinplay")}
                  />
                  <div className="cricket-label">Football</div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 cricket-card me-3 mb-3">
                  <img
                    src={Images.tennis2}
                    className="cricket-image"
                    alt="Tennis"
                    onClick={() => navigate("/tennis")}
                  />
                  <div className="cricket-label">Tennis</div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 cricket-card me-3 mb-3">
                  <img
                    src={Images.casino2}
                    className="cricket-image"
                    alt="Casino"
                    onClick={() => navigate("/badmaintaininplay")}
                  />
                  <div className="cricket-label">Casino</div>
                </div>
              </div>
            </div>

            <div className="w-100 white-font">
              <div className="play-sec-bg  d-flex w-100 px-1">
                <div className="flex-row  d-flex col-12 align-items-center py-1 mx-1">
                  <img src={Images.BellIcon1} className="bell-icon" />
                  <div className="notification-text font-14 mx-1 yellow-font">
                    <marquee behavior="" direction="">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      ghteo printer...
                    </marquee>
                  </div>
                </div>
              </div>
            </div>
            {/* <FullVideoPopup
        setVideoPopup={setVideoPopup}
        videoPopup={videoPopup}
        setVideoUrl={setVideoUrl}
        videoUrl={videoUrl}
      /> */}
          </div>
        </>
      )}
    </>
  );
}

export default Banner;
