import { useState } from "react";
import { Icon } from '@iconify/react';
import logo from "../assets/logo-white.png";
import tamplemount from "../assets/tample mount.webp";
import wailing_wall from "../assets/wailing wall.webp";
import herod from "../assets/herod tample.webp";
import herod2 from "../assets/western-wall-design.webp";
import Gallery from "./gallery/Gallery";

const WailingWall = () => {
  const [state, setState] = useState({ d: 1, h: 0, g: 0 });

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
        <div className="opacity-30">
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
          <p className="font-bold text-xl md:text-[40px]">Wailing Wall</p>
          <div className="mt-[50px] md:mt-[100px] flex gap-2 md:flex-col">
            <div
              className={`w-auto md:w-[250px] border-b-4 py-2 ${
                state.d ? active : inActive
              }`}
              onClick={() => {
                setState({ d: 1, h: 0, g: 0 });
              }}
            >
              <p className="text-lg font-semibold mx-3">Description</p>
            </div>
            <div
              className={`w-auto md:w-[250px] border-b-4 py-2 ${
                state.h ? active : inActive
              }`}
              onClick={() => {
                setState({ d: 0, h: 1, g: 0 });
              }}
            >
              <p className="text-lg font-semibold mx-3">History</p>
            </div>

            <div
              className={`w-auto md:w-[250px] border-b-4 py-2 ${
                state.g ? active : inActive
              }`}
              onClick={() => {
                setState({ d: 0, h: 0, g: 1 });
              }}
            >
              <p className="text-lg font-semibold mx-3">Gallery</p>
            </div>
          </div>
        </div>
      </div>

      {/* content doc  */}
      <div className=" flex-1 mt-10 mx-[30px] h-[400px] md:h-[450px] text-white overflow-y-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent relative">
        {/* description */}
        <div
          className={`flex flex-col items-center ${
            state.d ? "inline" : "hidden"
          }`}
        >
          <div className="w-full md:w-1/2">
            <img src={wailing_wall} alt="wall" />
          </div>
          <div className="mt-3 flex flex-col items-center">
            <p className="indent-5">
              The Western Wall (Hebrew: הַכּוֹתֶל הַמַּעֲרָבִי, romanized:
              HaKotel HaMa'aravi, lit. 'the western wall', often shortened to
              the Kotel or Kosel), known in the West as the Wailing Wall, and in
              Islam as the Buraq Wall (Arabic: حَائِط ٱلْبُرَاق, Ḥā'iṭ
              al-Burāq), is a portion of ancient limestone wall in the Old City
              of Jerusalem that forms part of the larger retaining wall of the
              hill known to Jews and Christians as the Temple Mount. Just over
              half the wall's total height, including its 17 courses located
              below street level, dates from the end of the Second Temple
              period, and is believed to have been begun by Herod the Great, The
              very large stone blocks of the lower courses are Herodian, the
              courses of medium-sized stones above them were added during the
              Umayyad period, while the small stones of the uppermost courses
              are of more recent date, especially from the Ottoman period.
            </p>
            <p className="font-bold self-start mt-3">
              Prayer section vs. entire wall
            </p>
            <p className="indent-5 mt-1">
              The term Western Wall commonly refers to a 187-foot (57 m) exposed
              section of a much longer retaining wall, built by Herod on the
              western flank of the Temple Mount. Only when used in this sense is
              it synonymous with the term Wailing Wall. This section faces a
              large plaza and is set aside for prayer. In its entirety, the
              western retaining wall of the Herodian Temple Mount complex
              stretches for 1,600 feet (488 m), most of which is hidden behind
              medieval residential structures built along its length. There are
              only two other revealed sections: the southern part of the Wall
              (see Robinson's Arch area), which measures approximately 80 metres
              (262 ft), and is separated from the prayer area by just a narrow
              stretch of archaeological remains; and another, much shorter
              section, known as the Little Western Wall, which is located close
              to the Iron Gate. The entire western wall functions as a retaining
              wall, supporting and enclosing the ample substructures built by
              Herod the Great around 19 BCE. Herod's project was to create an
              artificial extension to the small quasi-natural plateau on which
              the First Temple stood, already widened in Hasmonean times during
              the Second Temple period, by finally transforming it into the
              almost rectangular, wide expanse of the Temple Mount platform
              visible today.
            </p>
            <div className="w-full mt-3 md:w-1/2">
              <img src={herod} alt="wall" />
            </div>
            <p className="font-bold mt-3 self-start">
              Height, courses, building stones
            </p>
            <p className="indent-5 mt-1">
              At the Western Wall Plaza, the total height of the Wall from its
              foundation is estimated at 105 feet (32 m), with the above-ground
              section standing approximately 62 feet (19 m) high. The Wall
              consists of 45 stone courses, 28 of them above ground and 17
              underground. The first seven above-ground layers are from the
              Herodian period. This section of wall is built from enormous
              meleke limestone blocks, possibly quarried at either Zedekiah's
              Cave situated under the Muslim Quarter of the Old City, or at
              Ramat Shlomo 4 kilometres (2.5 mi) northwest of the Old City. Most
              of them weigh between 2 and 8 short tons (1.8 and 7.3 tonnes)
              each, but others weigh even more, with one extraordinary stone
              located slightly north of Wilson's Arch measuring 13.55 metres
              (44.5 ft) long, 3.3 metres (11 ft) high, approximately 1.8 to 2.5
              metres (5.9 to 8.2 ft) deep, and weighing between 250 and 300
              tonnes (280 and 330 short tons). Each of these ashlars is framed
              by fine-chiseled borders. The margins themselves measure between 5
              and 20 centimetres (2 and 8 in) wide, with their depth measuring
              1.5 centimetres (0.59 in). In the Herodian period, the upper 10
              metres (33 ft) of wall were 1 metre (39 in) thick and served as
              the outer wall of the double colonnade of the Temple platform.
              This upper section was decorated with pilasters, the remainder of
              which were destroyed when the Byzantines reconquered Jerusalem
              from the Persians in 628. he next four courses, consisting of
              smaller plainly dressed stones, are Umayyad work (8th century,
              Early Muslim period). Above that are 16 to 17 courses of small
              stones from the Mamluk period (13th–16th centuries) and later.
            </p>
            <div className="w-full mt-3 md:w-1/2">
              <img src={herod2} alt="herod2" />
            </div>
          </div>
        </div>
        {/* history */}
        <div
          className={`flex flex-col items-center ${
            state.h ? "inline" : "hidden"
          }`}
        >
          <div className="w-full md:w-1/2">
            <img src={tamplemount} alt="tamplemount" />
          </div>
          <div className="mt-3">
            <p className="indent-5 ">
              According to the Hebrew Bible, Solomon's Temple was built atop
              what is known as the Temple Mount in the 10th century BCE and
              destroyed by the Babylonians in 586 BCE, and the Second Temple
              completed and dedicated in 516 BCE. Around 19 BCE Herod the Great
              began a massive expansion project on the Temple Mount. In addition
              to fully rebuilding and enlarging the Temple, he artificially
              expanded the platform on which it stood, doubling it in size.
              Today's Western Wall formed part of the retaining perimeter wall
              of this platform. In 2011, Israeli archaeologists announced the
              surprising discovery of Roman coins minted well after Herod's
              death, found under the foundation stones of the wall. The
              excavators came upon the coins inside a ritual bath that predates
              Herod's building project, which was filled in to create an even
              base for the wall and was located under its southern section. This
              seems to indicate that Herod did not finish building the entire
              wall by the time of his death in 4 BCE. The find confirms the
              description by historian Josephus Flavius, which states that
              construction was finished only during the reign of King Agrippa
              II, Herod's great-grandson. Given Josephus' information, the
              surprise mainly regarded the fact that an unfinished retaining
              wall in this area could also mean that at least parts of the
              splendid Royal Stoa and the monumental staircase leading up to it
              could not have been completed during Herod's lifetime. Also
              surprising was the fact that the usually very thorough Herodian
              builders had cut corners by filling in the ritual bath, rather
              than placing the foundation course directly onto the much firmer
              bedrock. Some scholars are doubtful of the interpretation and have
              offered alternative explanations, such as, for example, later
              repair work. Herod's Temple was destroyed by the Romans, along
              with the rest of Jerusalem, in 70 CE, during the First
              Jewish–Roman War.
            </p>
            <p className="indent-5">
              The Western Wall plays an important role in Judaism due to its
              proximity to the Temple Mount. Because of the Temple Mount entry
              restrictions, the Wall is the holiest place where Jews are
              permitted to pray outside the previous Temple Mount platform, as
              the presumed site of the Holy of Holies, the most sacred site in
              the Jewish faith, lies just behind it. The original, natural, and
              irregular-shaped Temple Mount was gradually extended to allow for
              an ever-larger Temple compound to be built at its top. The
              earliest source mentioning this specific site as a place of Jewish
              worship is from the 17th century. It also has a place in Muslim
              tradition, in which it is believed to be the site where the
              Islamic Prophet Muhammad tied his winged steed, al-Buraq, on his
              Isra and Mi'raj to Jerusalem before ascending to paradise, and
              constitutes the western border of al-Haram al-Sharif ("the Noble
              Sanctuary"), or the Al-Aqsa compound.
            </p>
          </div>
        </div>
        {/* gallery */}
        <div
          className={`flex flex-col items-center ${
            state.g ? "inline" : "hidden"
          }`}
        >
          <Gallery props={"wailing wall"} />
        </div>
      </div>
    </div>
  );
};

export default WailingWall;
