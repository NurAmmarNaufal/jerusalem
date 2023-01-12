import { useState } from "react";
import logo from "../assets/logo-white.png";
import wall from "../assets/western-wall.webp";
import church from "../assets/The-Church.webp";
import DomeRockStructure from "../assets/DomeRockStructure.jpg";
import DomeRockStructure2 from "../assets/DomeRockStructure2.jpg";
import innerDom from "../assets/inner-dom.jpg";
import outerDec from "../assets/outer-decoration.jpg";
import Domegallery from "./gallery/Domegallery";

const WailingWall = () => {
  const [state, setState] = useState({ h: 1, e: 0, g: 0 });

  const active = "text-white border-white text-right";
  const inActive =
    "text-[#818181] border-[#818181] text-left cursor-pointer hover:animate-geser";

  return (
    <div className="bg-[#222123] h-screen w-screen relative md:flex md:pt-[50px]">
      {/* logo */}
      <div
        className="absolute top-[30px] left-[30px] cursor-pointer"
        onClick={() => {
          window.open("/", "_self");
        }}
        title="Home"
      >
        <img src={logo} alt="logo" className="h-[40px] drop-shadow-lg" />
      </div>

      {/* content menu */}
      <div className="text-white pt-[40px] flex-1 md:self-center md:-mt-[150px]">
        <div id="left" className="flex justify-center items-center flex-col">
          <p className="font-bold text-xl md:text-[40px]">Wailing Wall</p>
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
            <img src={wall} alt="wall" />
          </div>
          <div className="mt-3">
            <p className="indent-5">
            The Western Wall (Hebrew: הַכּוֹתֶל הַמַּעֲרָבִי, romanized: HaKotel HaMa'aravi, lit. 'the western wall', often shortened to the Kotel or Kosel), known in the West as the Wailing Wall, and in Islam as the Buraq Wall (Arabic: حَائِط ٱلْبُرَاق, Ḥā'iṭ al-Burāq), is a portion of ancient limestone wall in the Old City of Jerusalem that forms part of the larger retaining wall of the hill known to Jews and Christians as the Temple Mount. Just over half the wall's total height, including its 17 courses located below street level, dates from the end of the Second Temple period, and is believed to have been begun by Herod the Great, The very large stone blocks of the lower courses are Herodian, the courses of medium-sized stones above them were added during the Umayyad period, while the small stones of the uppermost courses are of more recent date, especially from the Ottoman period.
            </p>
            <p className="indent-5">
            The Western Wall plays an important role in Judaism due to its proximity to the Temple Mount. Because of the Temple Mount entry restrictions, the Wall is the holiest place where Jews are permitted to pray outside the previous Temple Mount platform, as the presumed site of the Holy of Holies, the most sacred site in the Jewish faith, lies just behind it. The original, natural, and irregular-shaped Temple Mount was gradually extended to allow for an ever-larger Temple compound to be built at its top. The earliest source mentioning this specific site as a place of Jewish worship is from the 17th century. It also has a place in Muslim tradition, in which it is believed to be the site where the Islamic Prophet Muhammad tied his winged steed, al-Buraq, on his Isra and Mi'raj to Jerusalem before ascending to paradise, and constitutes the western border of al-Haram al-Sharif ("the Noble Sanctuary"), or the Al-Aqsa compound.
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
            <img src={DomeRockStructure} alt="wall" />
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
              <img src={DomeRockStructure2} alt="wall" />
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
              by the name of Abbasid caliph Al-Ma'mun (r. 813–833) during whose
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
          <Domegallery props={'wailing wall'} />
        </div>
      </div>
    </div>
  );
};

export default WailingWall;
