import React from "react";
import union from "../assets/Union.png";
import video from "../assets/video.mp4";

const Sound = () => {
  return (
    <>
      <div className="flex max-md:mt-1 mt-10 mb-24">
        <div className="flex flex-col md:ml-32 ml-3 md:mt-5 md:mb-0 lg:mt-40 xs:mb-32 xl:mb-32 lg:mb-32">
          <p className=" md:text-[90px] text-7xl font-normal ">Звук</p>
          <p className=" w-[299px] md:text-lg text-base mt-6">
            Слушайте любимую музыку с чистым объёмным звучанием,
            куда бы ни поставили колонку
          </p>
          <p className="font-bold md:text-lg text-base md:mt-[42px] lg:mt-[142px] mt-8 w-[220px]">
            Апериодическая решётка
          </p>
          <p className="w-[186px] md:text-base text-sm mt-4">
            Защищает звук от искажений при воспроизведении
          </p>
          <p className="font-bold text-lg max-lg:mt-5 mt-10 ">
            Room Correction
          </p>
          <p className="w-[198px] text-base mt-4">
            Подстраивает звучание под размеры и форму помещения
          </p>
          <p className="font-bold text-lg mt-10 ">30 Вт</p>
        </div>
        <img
          className="absolute right-3 -z-10 w-[1600px] "
          src={union}
          alt=""
        />

        <video
          className="absolute md:h-[600px] lg:h-[1000px] xs:h-[400px] h-[300px] -z-10  right-0 max-md:bottom-0 mb-32 "
          autoPlay
          src={video}
        ></video>
      </div>
      <div className="w-full md:mt-32 lg:mt-32 mt-40 overflow-x-auto overflow-y-hidden mb-12">
        <div className="flex xl:justify-center  gap-5 max-md:w-[1050px] whitespace-nowrap">
          <div className="relative">
            <p className=" absolute left-16 top-16 text-[32px] font-normal">
              Мультирум
            </p>
            <div className="absolute bottom-16 left-12">
              <p className=" text-lg font-bold mb-4">
                Если у вас несколько
                <br /> разных колонок
              </p>
              <p className=" text-base font-normal">
                Включите одну песню сразу
                <br /> во всех комнатах — например,
                <br /> когда убираетесь в квартире.
              </p>
            </div>
            <div className="  md:w-[320px] w-[310px] content-img1"></div>
          </div>
          <div className="relative text-white">
            <p className=" absolute left-16 top-16 text-[32px] font-normal ">
              Стереопара
            </p>
            <div className="absolute bottom-16 left-12">
              <p className=" text-lg font-bold mb-4">
                Если есть две
                <br /> одинаковых колонки
              </p>
              <p className=" text-base font-normal">
                Соберите из них стереопару —
                <br /> и слушайте музыку в полном
                <br /> объёме.
              </p>
            </div>
            <div className="md:w-[320px] w-[310px] content-img2"></div>
          </div>
          <div className="relative text-white">
            <p className=" absolute left-16 top-16 text-[32px] font-normal ">
              Эквалайзер
            </p>
            <div className="absolute bottom-16 left-12">
              <p className=" text-lg font-bold mb-4">
                Если хочется
                <br /> больше басов
              </p>
              <p className=" text-base font-normal">
                <p className=" underline">Настройте</p> звук в приложении
                <br /> Дом с Алисой — колонка будет
                <br /> звучать, как скажете.
              </p>
            </div>
            <div className="md:w-[320px] w-[310px] content-img3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sound;
