import React, { memo } from "react";
import img1 from "../../assets/Header-removebg-preview.png";
import { IoIosSend } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlinePinterest } from "react-icons/ai";
import footerlogo from "../../assets/Header-removebg-preview.png";
import img2 from "../../assets/div.banner-icon.png";
import img3 from "../../assets/div.banner-icon (1).png";
import img4 from "../../assets/div.banner-icon (2).png";
import img5 from "../../assets/div.banner-icon (3).png";
import img6 from "../../assets/div.banner-icon (4).png";
import img7 from "../../assets/Link → app-store.jpg.png";
import img8 from "../../assets/Link → google-play.jpg.png";
import img9 from "../../assets/payment-method.png.png";
const Footer = () => {
  return (
    <div className="mt-4">
      <div className="bg-sky-200 w-full pt-11">
        <div className="flex  container mx-auto justify-between ">
          <div className="w-1/3 flex flex-col gap-7 mt-7">
            <b className="text-4xl">
              Stay home & get your daily needs from our shop
            </b>
            <p className="text-lg">Start You'r Daily Shopping with Nest Mart</p>
            <div className="flex rounded-3xl items-center bg-white w-96 ">
              <form
                className="flex items-center w-full bg-white rounded-3xl pl-3"
                action=""
              >
                <IoIosSend />
                <input
                  className="outline-none w-full pl-3"
                  placeholder="Your emaill address"
                  type="text"
                />
                <button className="bg-green-700 p-3 rounded-3xl text-white">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div>
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center py-5 justify-center gap-4">
        <div className=" flex justify-center items-center gap-3 bg-slate-300 p-2 w-72  rounded-2xl">
          <div className="">
            <img src={img2} alt="" />
          </div>
          <div className=" flex items-center justify-center flex-col">
            <b className="">Best prices & offers</b>
            <p className="">Orders $50 or more</p>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-3 bg-slate-300 p-2 w-72 rounded-2xl">
          <div className="">
            <img src={img3} alt="" />
          </div>
          <div className=" flex items-center justify-center flex-col">
            <b className="">Best prices & offers</b>
            <p className="">24/7 amazing services</p>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-3 bg-slate-300 p-2 w-72 rounded-2xl">
          <div className="">
            <img src={img4} alt="" />
          </div>
          <div className=" flex items-center justify-center flex-col">
            <b className="">Great daily deal</b>
            <p className="">Orders $50 or more</p>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-3 bg-slate-300 p-2 w-72 rounded-2xl">
          <div className="">
            <img src={img5} alt="" />
          </div>
          <div className=" flex items-center justify-center flex-col">
            <b className="">Best prices & offers</b>
            <p className="">24/7 amazing services</p>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-3 bg-slate-300 p-2 w-72 rounded-2xl">
          <div className="">
            <img src={img6} alt="" />
          </div>
          <div className=" flex items-center justify-center flex-col">
            <b className="">Easy returns</b>
            <p className="">Orders $50 or more</p>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mb-8">
            <div className="flex flex-col gap-5">
              <img className="mb-5" src={footerlogo} alt="" />
              <p className="text-[14px] text-start text-[#253D4E]">
                Awesome grocery store websitetemplate
              </p>
              <div className="flex items-start md:flex lg:flex gap-[8px] ">
                <button className="pt-[5px]">
                  <IoLocationOutline />
                </button>
                <p className="text-[#253D4E] text-[14px] text-start">
                  Address: 5171 W Campbell Ave
                </p>
              </div>
              <div className="flex items-start md:flex lg:flex gap-[8px] ">
                <button className="pt-[5px]">
                  <FaHeadphonesAlt />
                </button>
                <p className="text-[#253D4E] text-[14px] text-start">
                  undefined Kent, Utah 53127 United State
                </p>
              </div>
              <div className="flex items-start md:flex lg:flex gap-[8px] ">
                <button className="pt-[5px]">
                  <FaTelegramPlane />
                </button>
                <p className="text-[#253D4E] text-[14px] text-start">
                  Email:sale@Nest.com
                </p>
              </div>
              <div className="flex items-start md:flex lg:flex gap-[8px] ">
                <button className="pt-[5px]">
                  <CiClock1 />
                </button>
                <p className="text-[#253D4E] text-[14px] text-start">
                  Hours:10:00 - 18:00, Mon - Sat
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <b className="text-[22px] text-[#253D4E] font-[700] text-start">
                About Us
              </b>
              <p className="text-[14px] text-[#253D4E] text-start">
                Delivery Information
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">
                Privacy Policy
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">
                Terms & Conditions
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">
                Contact Us
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">
                Support Center
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">Careers</p>
            </div>
            <div className="lg:flex flex-col hidden gap-5">
              <b className="text-[22px] text-[#253D4E] font-[700] text-start">
                Account
              </b>
              <p className="text-[14px] text-[#253D4E] text-start">Sign In</p>
              <p className="text-[14px] text-[#253D4E] text-start">
                My Wishlist
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">
                Track My Order
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">
                Help Ticket
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">
                Shipping Details
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">
                Compare products
              </p>
            </div>
            <div className="md:flex lg:flex  hidden flex-col gap-5">
              <b className="text-[22px] text-[#253D4E] font-[700] text-start">
                Corporate
              </b>
              <p className="text-[14px] text-[#253D4E] text-start">
                Become a Vendor Asadbek, [8/22/2024 7:30 PM]
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">
                Affiliate Program
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">
                Farm Business
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">
                Help Ticket
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">
                Farm Careers
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">
                Our Suppliers
              </p>
            </div>
            <div className="md:flex lg:flex  hidden flex-col gap-5">
              <b className="text-[22px] text-[#253D4E] font-[700] text-start">
                Popular
              </b>
              <p className="text-[14px] text-[#253D4E] text-start">
                Become a Vendor
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">
                Affiliate Program
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">
                Farm Business
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">
                Help Ticket
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">
                Farm Careers
              </p>
              <p className="text-[14px] text-[#253D4E] text-start">Cheese</p>
            </div>
            <div className="flex flex-col gap-5">
              <b className="text-[22px] text-[#253D4E] font-[700] text-start">
                Install App
              </b>
              <p className="text-[14px] text-[#253D4E] text-start">
                From App Store or Google Play
              </p>
              <div className="flex gap-2">
                <img className="w-[90px]" src={img7} alt="" />
                <img className="w-[90px]" src={img8} alt="" />
              </div>
              <p className="text-[14px] text-[#253D4E] text-start">
                Secured Payment Gateways
              </p>
              <div>
                <img src={img9} alt="" />
              </div>
            </div>
          </div>
          <hr />
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 items-start mt-[20px]">
            <div className="flex flex-col gap-1">
              <p className="text-[15px] text-[#0009] text-start">
                © 2022, Nest - HTML Ecommerce Template
              </p>
              <p className="text-[12px] text-start text-[#0009]">
                All rights reserved
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex gap-2 items-center">
                <BsTelephoneOutboundFill className="text-[24px] text-[#3BB77E]" />
                <div className="flex flex-col ">
                  <p className="text-[16px]  sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#3BB77E] font-[700]">
                    1900 - 6666
                  </p>
                  <p className="text-[12px] text-[#7E7E7E] font-[500]">
                    Working 8:00 - 22:00
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center lg:mb-2 mb-2">
                <BsTelephoneOutboundFill className="text-[24px] text-[#3BB77E]" />
                <div className="flex flex-col ">
                  <p className="text-[16px]  sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#3BB77E] font-[700]">
                    1900 - 8888
                  </p>
                  <p className="text-[12px] text-[#7E7E7E] font-[500]">
                    24/7 Support Center
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2 items-starttext-[16px]  sm:text-[18px] md:text-[20px] lg: md:items-end lg:items-end">
                <div className="flex gap-2 items-center">
                  <p className="text-[14px] font-[500] text-[#253D4E]">
                    Follow Us
                  </p>
                  <button className="w-[30px] h-[30px] bg-[#3BB77E] rounded-full">
                    <FaFacebook className="text-[18px] text-[#fff] m-auto" />
                  </button>
                  <button className="w-[30px] h-[30px] bg-[#3BB77E] rounded-full">
                    <AiFillTwitterCircle className="text-[18px] text-[#fff] m-auto" />
                  </button>
                  <button className="w-[30px] h-[30px] bg-[#3BB77E] rounded-full">
                    Otabek, [8/22/2024 19:38 PM]
                    <FaInstagram className="text-[18px] text-[#fff] m-auto" />
                  </button>
                  <button className="w-[30px] h-[30px] bg-[#3BB77E] rounded-full">
                    <AiOutlinePinterest className="text-[18px] text-[#fff] m-auto" />
                  </button>
                  <button className="w-[30px] h-[30px] bg-[#3BB77E] rounded-full">
                    <AiFillYoutube className="text-[18px] text-[#fff] m-auto" />
                  </button>
                </div>
                <p className="text-[14px] font-[400] text-[#7E7E7E] lg:text-end text-start">
                  Up to 15% discount on your first subscribe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
