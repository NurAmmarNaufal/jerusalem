import { useState } from "react";
import logo from "../assets/logo-white.png";
import { Icon } from "@iconify/react";
import DomeRockStructure from "../assets/DomeRockStructure.jpg";
import DomeRockStructure2 from "../assets/DomeRockStructure2.jpg";
import innerDom from "../assets/inner-dom.jpg";
import outerDec from "../assets/outer-decoration.jpg";
import Gallery from "./gallery/Gallery";

const dom =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/%D7%94%D7%A8_%D7%94%D7%91%D7%99%D7%AA_%D7%9E%D7%93%D7%A8%D7%95%D7%9D_%D7%9E%D7%A2%D7%A8%D7%91.jpg/1280px-%D7%94%D7%A8_%D7%94%D7%91%D7%99%D7%AA_%D7%9E%D7%93%D7%A8%D7%95%D7%9D_%D7%9E%D7%A2%D7%A8%D7%91.jpg";

const DomOfRock = () => {
  const [state, setState] = useState({ h: 1, e: 0, g: 0 });

  const active = "text-white border-white text-right";
  const inActive =
    "text-[#818181] border-[#818181] text-left cursor-pointer hover:animate-geser";

  return (
    <div className="bg-[#222123] h-screen w-screen relative md:flex md:pt-[50px]">
      {/* logo */}
      <div
        className="absolute top-[30px] left-[30px]"
        title="Home"
      >
        <img
          src={logo}
          alt="logo"
          className="h-[40px] drop-shadow-lg cursor-pointer"
          onClick={() => {
            window.open("/", "_self");
          }}
        />
        <div className="opacity-30 cursor-default">
          <Icon
            icon="material-symbols:arrow-right-alt-rounded"
            color="white"
            className="-rotate-90 -ml-1 mt-2"
            width="25"
          />
          <p className="text-white rotate-90 -ml-2 mt-1">back</p>
        </div>
      </div>

      {/* content menu */}
      <div className="text-white pt-[40px] flex-1 md:self-center md:-mt-[150px]">
        <div id="left" className="flex justify-center items-center flex-col">
          <p className="font-bold text-xl md:text-[40px]">Dome of Rock</p>
          <div className="mt-[50px] md:mt-[100px] flex gap-2 md:flex-col">
            <div
              className={`w-auto md:w-[250px] border-b-4 py-2 ${
                state.h ? active : inActive
              }`}
              onClick={() => {
                setState({ h: 1, e: 0, g: 0 });
              }}
            >
              <p className="text-lg font-semibold mx-3">History</p>
            </div>
            <div
              className={`w-auto md:w-[250px] border-b-4 py-2 ${
                state.e ? active : inActive
              }`}
              onClick={() => {
                setState({ h: 0, e: 1, g: 0 });
              }}
            >
              <p className="text-lg font-semibold mx-3">Description</p>
            </div>
            <div
              className={`w-auto md:w-[250px] border-b-4 py-2 ${
                state.g ? active : inActive
              }`}
              onClick={() => {
                setState({ h: 0, e: 0, g: 1 });
              }}
            >
              <p className="text-lg font-semibold mx-3">Gallery</p>
            </div>
          </div>
        </div>
      </div>

      {/* content doc  */}
      <div className=" flex-1 mt-10 mx-[30px] h-[400px] md:h-[450px] text-white overflow-y-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent relative">
        {/* history */}
        <div
          className={`flex flex-col items-center ${
            state.h ? "inline" : "hidden"
          }`}
        >
          <div className="w-full md:w-1/2">
            <img src={dom} alt="dom" />
          </div>
          <div className="mt-3">
            <p className="indent-5">
              Dome of the Rock, Arabic (?????? ????????????) Qubbat al-???akhrah, shrine in
              Jerusalem built by the Umayyad caliph ??Abd al-Malik ibn Marw??n in
              the late 7th century CE. It is the oldest extant Islamic monument.
            </p>
            <p className="indent-5">
              The structure is situated on a flat elevated plaza known to
              Muslims as al-???aram al-Shar??f (???The Noble Sanctuary???) and to Jews
              as the Temple Mount (the site where the Temple of Jerusalem once
              stood). According to Muslims, the rock above which the dome is
              constructed is the spot from which the Prophet Muhammad was taken
              up into heaven for an encounter with God (an event known as the
              Mi??r??j). Nearby, on the southern extreme of the plaza, is Al-Aq?????
              Mosque. Muslims believe the Prophet was miraculously transported
              there from Mecca on the night of his encounter{" "}
              <span
                className="hover:underline"
                title="Isra and Mi'raj, also known as Al Isra' wal Miraj, is observed on the 27th day of the month of Rajab, the seventh month in the Islamic calendar. This event marks the night that Allah (God) took Mohammad (also known as Mohamed or Muhammed) on a journey from Mecca to Jerusalem and then to heaven."
              >
                (Isr????)
                {/* <div cl>

              </div> */}
              </span>
              . The term ???Al-Aq????? Mosque??? is commonly extended to denote the
              entire plaza and, consequently, to the Dome of the Rock itself.
            </p>
          </div>
        </div>
        {/* description */}
        <div
          className={`flex flex-col items-center ${
            state.e ? "inline" : "hidden"
          }`}
        >
          <div className="w-full md:w-1/2">
            <img src={DomeRockStructure} alt="dom" />
          </div>
          <div className="mt-3 flex flex-col items-center">
            <p className="font-bold self-start">Basic Structure</p>
            <p className="indent-5 mt-1">
              The structure is basically octagonal. It is capped at its centre
              by a dome, approximately 20 m (66 ft) in diameter, mounted on an
              elevated circular drum standing on 16 supports (4 tiers and 12
              columns).Surrounding this circle is an octagonal arcade of 24
              piers and columns. The octagonal arcade and the inner circular
              drum create an inner ambulatorium that encircles the holy rock.
              The outer walls are also octagonal. They each measure
              approximately 18 m (60 ft) wide and 11 m (36 ft) high. The outer
              and inner octagon create a second, outer ambulatorium surrounding
              the inner one. Both the circular drum and the exterior walls
              contain many windows.
            </p>
            <div className="w-full mt-3 md:w-1/2">
              <img src={DomeRockStructure2} alt="dom" />
            </div>
            <p className="font-bold mt-3 self-start">Interior decoration</p>
            <p className="indent-5 mt-1">
              The interior of the dome is lavishly decorated with mosaic,
              faience and marble, much of which was added several centuries
              after its completion. It also contains Qur'anic inscriptions. They
              vary from today's standard text (mainly changes from the first to
              the third person) and are mixed with pious inscriptions not in the
              Quran.
            </p>
            <div className="w-full mt-3 md:w-1/2">
              <img src={innerDom} alt="innerDom" />
            </div>
            <p className="indent-5 mt-2">
              The dedicatory inscription in Kufic script placed around the dome
              contains the date believed to be the year the Dome was first
              completed, AH 72 (691/2 CE), while the name of the corresponding
              caliph and builder of the Dome, al-Malik, was deleted and replaced
              by the name of Abbasid caliph Al-Ma'mun (r. 813???833) during whose
              reign renovations took place.
            </p>
            <p className="font-bold mt-3 self-start">Exterior decoration</p>
            <p className="indent-5 mt-1">
              The decoration of the outer walls went through two major phases:
              the initial Umayyad scheme comprised marble and mosaics, much like
              the interior walls. Sixteenth-century Ottoman sultan Suleyman the
              Magnificent replaced it with Turkish faience tiles. The Ottoman
              tile decoration was replaced in the 1960s with faithful copies
              produced in Italy. Surah Ya Sin (the 'Heart of the Quran') is
              inscribed across the top of the tile work and was commissioned in
              the 16th century by Suleiman the Magnificent. Al-Isra, the Surah
              17 which tells the story of the Isra or Night Journey, is
              inscribed above this.
            </p>
            <div className="w-full mt-3 md:w-1/2">
              <img src={outerDec} alt="douterDec" />
            </div>
          </div>
        </div>
        {/* gallery */}
        <div
          className={`flex flex-col items-center ${
            state.g ? "inline" : "hidden"
          }`}
        >
          <Gallery props={"al aqsa"} />
        </div>
      </div>
    </div>
  );
};

export default DomOfRock;
