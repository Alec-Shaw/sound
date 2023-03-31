import { useState } from "react";
import { Logo, MenuIcon, XMarkIcon } from "./constants/assets";

const Menu = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <div className="flex justify-between  items-center  h-[80px] ">
      <div>
        <Logo />
      </div>

      <div className="flex text-base max-md:hidden  ">
        <div className="lg:mr-[64px] mx-5">Алиса</div>
        <div className="lg:mr-[64px] mx-5">Умные колонки</div>
        <div className="lg:mr-[64px] mx-5">Яндекс ТВ</div>
        <div>Умный дом</div>
      </div>
      <button className="md:w-[136px] md:h-11 px-5 pb-1 bg-[#6337FF] rounded-[46px] text-white">
        Купить
      </button>

      <div
        onClick={() => setIsMenuToggled(true)}
        className="md:hidden cursor-pointer"
      >
        <MenuIcon />
      </div>
      {isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-white drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="flex flex-col ml-12 gap-8 text-base ">
            <div className="">Алиса</div>
            <div className="">Умные колонки</div>
            <div className="">Яндекс ТВ</div>
            <div>Умный дом</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
