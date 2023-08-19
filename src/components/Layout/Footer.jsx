import React from "react";

// class Footer extends React.Component {
const Footer = () => {
  // render() {
  const data = [
    "Sri Lanka, formerly known as Ceylon and officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia. It lies in the Indian Ocean, southwest of the Bay of Bengal, separated from the Indian peninsula by the Gulf of Mannar and the Palk Strait.Tourism in Sri Lanka is growing rapidly. For centuries, Sri Lanka has been a popular place of attraction for foreign travelers. The Chinese traveler Fa-Hien visited Sri Lanka as early as the 410's AD/CE, and in the twelfth century, Italian explorer Marco Polo claimed Sri Lanka to be the \"best island of its size in the world",
    "The south coast zone extends from Wadduwa to Tissamaharama. The zone has been divided into two main regions. The first region extends from Wadduwa to Galle. Coastal areas like Kalutara, Beruwala, Bentota, Dedduwa, Madu Ganga, Balapitiya, Ahungalla, and Hikkaduwa are included in this region. The second region, extending from Galle to Tissamaharama, includes Unawatuna, Koggala, Weligama, Mirissa, Matara, Tangalle and Hambantota areas as sub-points of the zone.",
    "For general information, contact: inquiry@ceylonexperiences.com",
  ];

  return (
    <div className="bottom-0 bg-silver w-full">
      <div className="container flex flex-col md:flex-row justify-center gap-4 sm:gap-10 items-center pt-3 pb-2 sm:pt-0 sm:pb-0">
        <div className="flex text-sm font-semibold max-w-7xl flex-row gap-10 flex-wrap p-8">
          {data.map((item, key) => (
            <p
              className="md:w-2/5 w-full text-justify font-normal text-blackish_grey"
              key={key}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
  // }
};

export default Footer;
