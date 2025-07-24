import React, { useState } from "react";
import Sidebarbtn from "./Sidebarbtn";
import { imgUrl } from "../../api/baseUrl";
import { FaPlay } from "react-icons/fa";
import { Images } from "../../images/images";
import { Carousel } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

function Banner() {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  const [inplayImages, setInplayImages] = useState([]);

  const defaultBanners = isMobile
    ? [Images.banner2, Images.banner2]
    : [Images.banner1, Images.banner1];

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
                        <div className="">
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="/fallback-image.jpg"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              display: "block",
                            }}
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
                                padding: "0px",
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
        </>
      ) : (
        <div className="px-2 d-flex flex-between w-100 gap-2">
          <div className="d-flex flex-between gap-2 w-100">
            <div className="sidebar-btn">
              <Sidebarbtn />
            </div>
            <div className="w-100">
              <div className="w-100">
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
                            <div className="">
                              <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster="/fallback-image.jpg"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  display: "block",
                                }}
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Banner;
