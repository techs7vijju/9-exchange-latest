import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import { Images } from "../../images/images";

const defaultBanners = [
  Images.banner1,
  Images.banner3,
  Images.banner4,
  Images.banner5,
  Images.banner6,
  Images.banner7,
];

const inplayImages = [];

const Banner = () => {
  const [imgHeight, setImgHeight] = useState("15.625rem");
  return (
    <div className="br-10">
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
              videoUrl = item.video ? `${imgUrl}/banner/${item.video}` : "";
              isVideoBanner = true;
            } else if (item.image) {
              mediaUrl = `${imgUrl}/banner/${item.image}`;
              isVideoBanner = false;
            }

            return (
              <Carousel.Item key={index} style={{ position: "relative" }}>
                {isVideoBanner ? (
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "15.625rem",
                    }}
                  >
                    <video
                      className="w-100"
                      style={{ height: "15.625rem" }}
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster="/fallback-image.jpg"
                      id={`video-banner-${index}`}
                    >
                      <source src={mediaUrl} type="video/mp4" />
                      Your browser does not support the video tag.
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
                    style={{ height: "15.625rem" }}
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
                style={{ minHeight: imgHeight }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Banner;
