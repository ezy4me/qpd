import Image from "next/image";
import { LavaBackground } from "./LavaBackground";

export const HomePreview = () => {
  return (
    <div className="preview home-preview">
      <LavaBackground />
      <div className="preview__container">
        <h1 className="title">
          Превратим вашу <span>идею в</span> цифровую <span>реальность</span>
        </h1>
        <button className="button button--filled">
          Заказать
          <Image src={"/images/arrow.svg"} width={60} height={60} alt="" />
        </button>
      </div>
    </div>
  );
};
