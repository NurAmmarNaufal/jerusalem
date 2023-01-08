import videoBg from "../assets/bg.mp4";
import logo from "../assets/logo-white.png";
import dome from "../assets/dome-of-rock2.webp";
import wall from "../assets/western-wall.jpg";
import church from "../assets/The-Church.jpg";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className="h-full w-full bg-black opacity-50 absolute top-0"></div>
      <video
        src={videoBg}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      ></video>
      <div className="absolute top-[30px] left-[30px]" >
        <img src={logo} alt="logo" className="h-[40px] drop-shadow-lg"/>
      </div>
      <div className="absolute top-0  h-full w-full text-white flex justify-center items-center flex-col -mt-10">
        <p className="text-[60px] md:text-[100px]">Jerusalem</p>
        <p className="-mt-2 md:-mt-5 text-sm md:text-base">
          the <span className="font-semibold">hometown</span> of 3{" "}
          <span className="font-semibold text-[#E5AD7E]">religions</span>
        </p>
      </div>
      <div className="absolute gap-2 md:gap-0 w-full bottom-5 flex justify-evenly items-start">
        <div
          className="flex flex-col md:flex-row items-center gap-2 cursor-pointer group"
          title="klick to read more"
          onClick={() => {window.open('/domeofrock', '_self')}}
        >
          <div className="w-[42px] h-[42px] relative">
            <div className="w-[42px] h-[42px] rounded-full border-[3px] border-dashed border-[#E5AD7E] flex justify-center items-center group-hover:animate-putar absolute"></div>
            <img
              src={dome}
              alt="dome"
              className="w-[30px] h-[30px] rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            />
            <div className="w-[200px] h-[100px] bg-white p-2 absolute -top-[120px] -left-1 sm:left-[30px] sm:-translate-x-1/2 rounded-lg hidden opacity-0 md:group-hover:inline group-hover:opacity-100 ">
              <p className="text-[11px]">
              Dome of the Rock, Arabic (قبة الصخرة) Qubbat al-Ṣakhrah, shrine in Jerusalem built by the Umayyad caliph ʿAbd al-Malik ibn Marwān in the late 7th century CE. It's...
                <span className="md:hidden text-blue-500 underline">
                  Read more
                </span>
              </p>
              <div className="w-[15px] h-[15px] bg-white absolute rotate-45 -bottom-2 left-8 sm:left-1/2 -translate-x-[17px]"></div>
            </div>
          </div>
          <p className="font-semibold text-[15px] text-white">Dome of Rock</p>
        </div>
        <div
          className="flex flex-col md:flex-row items-center gap-2 cursor-pointer group"
          title="klick to read more"
        >
          <div className="w-[42px] h-[42px] relative">
            <div className="w-[42px] h-[42px] rounded-full border-[3px] border-dashed border-[#E5AD7E] flex justify-center items-center group-hover:animate-putar absolute"></div>
            <img
              src={wall}
              alt="wall"
              className="w-[30px] h-[30px] rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            />
            <div className="w-[200px] h-[100px] bg-white p-2 absolute -top-[120px] left-[30px] -translate-x-1/2 rounded-lg hidden opacity-0 group-hover:inline group-hover:opacity-100 ">
              <p className="text-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate vel sed dignissimos temporibus reprehenderit
                reiciendis sit molestiae ab distinctio ut...
                <span className="md:hidden text-blue-500 underline">
                  Read more
                </span>
              </p>
              <div className="w-[15px] h-[15px] bg-white absolute rotate-45 -bottom-2 left-1/2 -translate-x-[17px]"></div>
            </div>
          </div>
          <p className="font-semibold text-[15px] text-white">Wailing Wall</p>
        </div>
        <div
          className="flex flex-col md:flex-row items-center gap-2 cursor-pointer group"
          title="klick to read more"
        >
          <div className="w-[42px] h-[42px] relative">
            <div className="w-[42px] h-[42px] rounded-full border-[3px] border-dashed border-[#E5AD7E] flex justify-center items-center group-hover:animate-putar absolute"></div>
            <img
              src={church}
              alt="church"
              className="w-[30px] h-[30px] rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            />
            <div className="w-[200px] h-[100px] bg-white p-2 absolute -top-[120px] -right-2 sm:right-[30px] sm:translate-x-1/2 rounded-lg hidden opacity-0 group-hover:inline group-hover:opacity-100 ">
              <p className="text-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate vel sed dignissimos temporibus reprehenderit
                reiciendis sit molestiae ab distinctio ut...{" "}
                <span className="md:hidden text-blue-500 underline">
                  Read more
                </span>
              </p>
              <div className="w-[15px] h-[15px] bg-white absolute rotate-45 -bottom-2 right-1 sm:right-[66px] -translate-x-[17px]"></div>
            </div>
          </div>
          <p className="font-semibold text-[15px] text-white text-center md:text-left">
            The Church <br /> of Holy Sepulchre
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
