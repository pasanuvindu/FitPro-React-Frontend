import React from "react";

// class Footer extends React.Component {
const Footer = () => {
  // render() {
  // const data = ["2023 Fitness Pro. All rights reserved."];

  return (
    // <div className="bottom-0 bg-silver w-full">
    //   <div className="container flex flex-col md:flex-row justify-center gap-4 sm:gap-10 items-center pt-3 pb-2 sm:pt-0 sm:pb-0">
    //     <div className="flex text-sm font-semibold max-w-7xl flex-row gap-10 flex-wrap p-8">
    //       {data.map((item, key) => (
    //         <p
    //           className="md:w-2/5 w-full text-justify font-normal text-blackish_grey"
    //           key={key}
    //         >
    //           {item}
    //         </p>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gray-200 p-4 text-center fixed bottom-0 w-full">
      <p>&copy; 2023 Fitness Pro. All rights reserved.</p>
    </div>
  );
};

export default Footer;
