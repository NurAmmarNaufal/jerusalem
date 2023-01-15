import { useState } from "react";
import logo from "../assets/logo-white.png";
import church from "../assets/church.webp";
import church2 from "../assets/church2.webp";
import church3 from "../assets/church3.webp";
import church4 from "../assets/church4.webp";
import Gallery from "./gallery/Gallery";

const Church = () => {
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
      </div>

      {/* content menu */}
      <div className="text-white pt-[40px] flex-1 md:self-center md:-mt-[150px]">
        <div id="left" className="flex justify-center items-center flex-col">
          <div>
            <p className="font-bold text-xl md:text-[40px]">The Church</p>
            <p className="font-bold text-xl md:text-[40px] mt-4">
              of Holy Sepulchre
            </p>
          </div>
          <div className="mt-[50px] md:mt-[90px] flex gap-2 md:flex-col">
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
            <img src={church4} alt="church4" />
          </div>
          <div className="mt-3 flex flex-col items-center">
            <p className="indent-5 mt-1">
              The Church of the Holy Sepulchre is a church in the Christian
              Quarter of the Old City of Jerusalem. According to traditions
              dating back to the 4th century, it contains two sites considered
              holy in Christianity: the site where Jesus was crucified, at a
              place known as Calvary or Golgotha, and Jesus's empty tomb, which
              is where he was buried and resurrected. Each time the church was
              rebuilt, some of the antiquities from the preceding structure were
              used in the newer renovation. The tomb itself is enclosed by a
              19th-century shrine called the Aedicule. The Status Quo, an
              understanding between religious communities dating to 1757,
              applies to the site.
            </p>
            <p className="indent-5 mt-1">
              Within the church proper are the last four stations of the Cross
              of the Via Dolorosa, representing the final episodes of the
              Passion of Jesus. The church has been a major Christian pilgrimage
              destination since its creation in the 4th century, as the
              traditional site of the resurrection of Christ, thus its original
              Greek name, Church of the Anastasis ('Resurrection').
            </p>
            <p className="indent-5 mt-2">
              Control of the church itself is shared, a simultaneum, among
              several Christian denominations and secular entities in
              complicated arrangements essentially unchanged for over 160 years,
              and some for much longer. The main denominations sharing property
              over parts of the church are the Roman Catholic, Greek Orthodox
              and Armenian Apostolic, and to a lesser degree the Coptic, Syriac,
              and Ethiopian Orthodox churches.
            </p>
          </div>
        </div>
        {/* history */}
        <div
          className={`flex flex-col items-center ${
            state.h ? "inline" : "hidden"
          }`}
        >
          <div className="w-full md:w-1/2">
            <img src={church} alt="church" />
          </div>
          <div className="mt-3">
            <p className="font-bold mt-3 self-start">Background</p>
            <p className="indent-5">
              Following the siege of Jerusalem in AD 70 during the First
              Jewish–Roman War, Jerusalem had been reduced to ruins. In AD 130,
              the Roman emperor Hadrian began the building of a Roman colony,
              the new city of Aelia Capitolina, on the site. Circa AD 135, he
              ordered that a cave containing a rock-cut tomb be filled in to
              create a flat foundation for a temple dedicated to Jupiter or
              Venus. The temple remained until the early 4th century.
            </p>
            <p className="indent-5">
              The structure is situated on a flat elevated plaza known to
              Muslims as al-Ḥaram al-Sharīf (“The Noble Sanctuary”) and to Jews
              as the Temple Mount (the site where the Temple of Jerusalem once
              stood). According to Muslims, the rock above which the dome is
              constructed is the spot from which the Prophet Muhammad was taken
              up into heaven for an encounter with God (an event known as the
              Miʿrāj). Nearby, on the southern extreme of the plaza, is Al-Aqṣā
              Mosque. Muslims believe the Prophet was miraculously transported
              there from Mecca on the night of his encounter{" "}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={church3} alt="church3" />
          </div>
          <div className="mt-3">
            <p className="font-bold mt-3 self-start">
              Construction (4th century)
            </p>
            <p className="indent-5">
              After allegedly seeing a vision of a cross in the sky in 312,
              Constantine the Great began to favor Christianity, signed the
              Edict of Milan legalising the religion, and sent his mother,
              Helena, to Jerusalem to look for Christ's tomb. With the help of
              Bishop of Caesarea Eusebius and Bishop of Jerusalem Macarius,
              three crosses were found near a tomb; one which allegedly cured
              people of death was presumed to be the True Cross Jesus was
              crucified on, leading the Romans to believe that they had found
              Calvary. Constantine ordered in about 326 that the temple to
              Jupiter/Venus be replaced by a church. After the temple was torn
              down and its ruins removed, the soil was removed from the cave,
              revealing a rock-cut tomb that Helena and Macarius identified as
              the burial site of Jesus. A shrine was built, enclosing the rock
              tomb walls within its own.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={church2} alt="church2" />
          </div>
        </div>
        {/* gallery */}
        <div
          className={`flex flex-col items-center ${
            state.g ? "inline" : "hidden"
          }`}
        >
          <Gallery props={"The Church of Holy Sepulchre"} />
        </div>
      </div>
    </div>
  );
};

export default Church;
