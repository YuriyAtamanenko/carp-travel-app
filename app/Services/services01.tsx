import Image from "next/image";
import ImgServices01 from "../../public/ImgServices01.jpg";

interface ISlideToProps {
  slideTo: (index: number) => void;
}

export default function Services01({ slideTo }: ISlideToProps) {
  return (
    <section className="services01 section py-20" id="services">
      <div className="flex container h-full mx-auto max-w-7xl p-6">
        <div className="w-1/2">
          <h2 className="text-8xl font-thin uppercase leading-tight tracking-[-3.92px] mb-[18px]">
            WE <span className="font-medium">OFFER</span>
          </h2>
          <Image src={ImgServices01} alt="ATVs Traveling" />
        </div>
        <div className="flex justify-between w-1/2 pl-2">
          <div>
            <span className="text-8xl font-thin leading-tight">
              01/<span className="text-white/20">05</span>
            </span>
            <ul className="flex flex-col gap-6 mt-5 text-[28px] font-extralight leading-6 w-56">
              <li className="relative">
                <button onClick={() => slideTo(0)} className="font-medium">
                  ATVs Traveling
                </button>
                <p className="absolute text-xs font-extralight tracking-[2.4px] top-0 left-[315px] w-[300px]">
                  Feel the adrenaline rush
                </p>
              </li>
              <li>
                <button onClick={() => slideTo(1)} className="opacity-50">
                  Rock climbing
                </button>
              </li>
              <li>
                <button
                  onClick={() => slideTo(2)}
                  className="opacity-50 text-left"
                >
                  Hot air ballooning
                </button>
              </li>
              <li>
                <button onClick={() => slideTo(3)} className="opacity-50">
                  Skydiving
                </button>
              </li>
              <li>
                <button onClick={() => slideTo(4)} className="opacity-50">
                  Rafting
                </button>
              </li>
            </ul>
          </div>

          <p className="text-lg font-extralight leading-6 w-[294px] text-justify mt-auto ml-auto">
            Join exciting rafting expeditions on the waterways of the
            Carpathians. Go through challenging waterways and overcome gusty
            waves, feel the adrenaline, and enjoy the incredible views of the
            surrounding mountains.
          </p>
        </div>
      </div>
    </section>
  );
}
