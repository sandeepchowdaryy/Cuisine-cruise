import React from "react";

const Footer = () => {
  return (
    <div className="footer mt-10 bg-gray-200 ">
      <div className="flex-col flex lg:flex-row items-center gap-10 py-5 justify-center">
        <h1 className="text lg:text-2xl font-bold font-Poppins text-gray-700">
          For better experience,download the app now
        </h1>
        <div className="imgBox flex">
        <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" target="__blank"> <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            alt=""
            className="h-14 w-44"
          />
          </a> 
        <a href="https://apps.apple.com/in/app/swiggy-food-grocery-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage" target="__blank">  <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            alt=""
            className="h-14 w-44"
          />
          </a> 
        </div>
      </div>

      <div className="myName bg-black text-white text-center py-4 font-Poppins">
        Made with ❤️ <a target="_blank" href="https://www.linkedin.com/in/sandeep-chowdary-/">Sandeep Chowdary</a>
      </div>
    </div>
  );
};

export default Footer;
