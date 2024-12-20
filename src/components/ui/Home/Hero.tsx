import SwiperSlider from "@/components/Slider/SwiperSlider";
import { baseApi } from "@/config/api";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { IApiResponse } from "@/interfaces/apiResponse";
import styles from "@/styles/Home.module.css";
import { Spin } from "antd";

const Hero = async () => {
  const res = await axiosInstance.get(
    `${baseApi}/events?limit=${3}&sortBy=startDate&sortOrder=asc`
  );
  const result: IApiResponse = await res.data
  const data = result?.data;

  if (!data.length) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className={styles.heroSection}>
      <div className={`container`}>
        <SwiperSlider events={data} />
      </div>
    </div>
  );
};

export default Hero;
