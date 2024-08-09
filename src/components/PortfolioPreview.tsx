import Image from "next/image";
import { LavaBackground } from "./LavaBackground";

export const PortfolioPreview = () => {
  return (
    <div className="preview about-preview">
      <LavaBackground />
      <div className="preview__container">
        <h1 className="title">Портфолио</h1>
        <button className="button button--filled">
          Заказать
          <Image src={"/images/arrow.svg"} width={60} height={60} alt="" />
        </button>
      </div>
    </div>
  );
};
