import React, { useState } from "react";

import {
  FigmaLogoIcon,
  SketchLogoIcon,
  GitHubLogoIcon,
  PlusIcon,
  AvatarIcon,
  GearIcon,
  CaretDownIcon,
  HomeIcon,
  TriangleDownIcon,
  DividerHorizontalIcon,
  BarChartIcon,
  Component1Icon,
  FrameIcon,
} from "@radix-ui/react-icons";
import { BsFillPeopleFill, BsCalendar2Event } from "react-icons/bs";
import { FiSearch, FiUser, FiVideo } from "react-icons/fi";
import { RiComputerLine } from "react-icons/ri";
const Vimon = () => {
  // secondary nav data
  const data = [
    {
      name: "Home",
      logo: <HomeIcon className="w-5 h-5" />,
    },
    {
      name: "Rooms",
      logo: <BsFillPeopleFill className="w-5 h-5" />,
    },
    {
      name: "Events",
      logo: <BsCalendar2Event className="w-5 h-5" />,
    },
    {
      name: "People",
      logo: <FiUser className="w-5 h-5" />,
    },
  ];
  // rooms data
  const roomdata = [
    {
      name: "General",
      logo: <Component1Icon className="w-5 h-5" />,
    },
    {
      name: "Community",
      logo: <BarChartIcon className="w-5 h-5" />,
    },
  ];
  // event data
  const eventdata = [
    {
      name: "Agency One",
      logo: <FiVideo className="w-5 h-5" />,
    },
    {
      name: "Design Reviews",
      logo: <BarChartIcon className="w-5 h-5" />,
    },
    {
      name: "Friends",
      logo: <FiVideo className="w-5 h-5" />,
    },
  ];

  // active data
  const activedata = [
    {
      name: "Hangsouts",
      logo: <BarChartIcon className="w-5 h-5 text-[#B03897]" />,
      number: "34",
    },
    {
      name: "Paradise",
      logo: <FrameIcon className="w-5 h-5 text-[#44D19B] " />,
      number: "8",
    },
    {
      name: "Design Reviews",
      logo: <RiComputerLine className="w-5 h-5 text-[#A72E5B]  " />,
      number: "2",
    },
  ];

  // to toggle secondary navbar
  const [toggle, setToggle] = useState(false);
  const [roomtoogle, setRoomToggle] = useState(false);
  const [eventtoogle, setEventToggle] = useState(false);
  const [activetoogle, setActiveToggle] = useState(false);

  const [active, setactive] = useState(0);
  const [activeroom, setActiveRoom] = useState(-1);
  return (
    <>
      <div className="grid grid-cols-2 relative ">
        {/* nav bar  */}
        <div className=" relative flex  flex-col items-center  min-h-screen bg-[#131313] w-16">
          <AvatarIcon className="text-red-600 w-12 h-12 hover:cursor-pointer m-3" />
          <div className="    hover:rounded-md hover:bg-gray-700 p-3  ">
            <SketchLogoIcon className="text-yellow-300 w-6 h-6  hover:cursor-pointer " />
          </div>
          <div className="   hover:rounded-md hover:bg-gray-700 p-3 ">
            <GitHubLogoIcon className="text-white w-6 h-6 hover:cursor-pointer" />
          </div>
          <div className="  p-3   hover:rounded-md hover:bg-gray-700">
            <img
              onClick={() => setToggle(!toggle)}
              src="https://cdn.freebiesupply.com/logos/large/2x/figma-1-logo-png-transparent.png"
              alt="f"
              className="w-6 h-6  object-contain hover:cursor-pointer"
            />
          </div>
          <div className="p-1 m-1   hover:rounded-md hover:bg-gray-700 ">
            <PlusIcon className="text-white w-4 h-4  hover:cursor-pointer" />
          </div>

          <div className="bottom-0 absolute m-3">
            <GearIcon className="text-white w-6 h-6  hover:cursor-pointer " />
          </div>
        </div>
        {/* secondanry navbar  */}

        {toggle ? (
          <div className="bg-[#292929] w-52 min-h-full absolute left-16  rounded-sm">
            {/* nav heading */}
            <div className="flex mt-5  ml-5 mr-5  items-center relative">
              <h1 className="text-white  font-bold ">Mrfarahzad</h1>
              <img
                src="https://cdn-icons-png.flaticon.com/512/7641/7641727.png"
                alt="verified icon"
                className="w-4 h-4  ml-1"
              />
              <CaretDownIcon className="text-white w-7 h-7 absolute right-0 hover:cursor-pointer" />
            </div>
            <p className=" text-gray-400 text-sm ml-5">Ui Designer</p>
            <div className="mt-4 h-px bg-gray-700" role="separator" />
            {/* first components home,rooms,events and people */}
            <section className="p-2.5  relative  space-y-3">
              {data.map((value, id) => (
                <button
                  onClick={() => setactive(id)}
                  className="flex items-center  mb-1 hover hover:text-white text-[#A4A3AA] space-x-2 w-full"
                >
                  {value.logo}
                  <p className="text-[#A4A3AA] hover:text-white hover:cursor-pointer">
                    {value.name}
                  </p>
                  {id === active ? (
                    <div
                      className=" h-8 w-px absolute -left-2 bg-white"
                      role="separator"
                    />
                  ) : null}
                </button>
              ))}
            </section>

            <div className="h-px bg-gray-700 mt-3 " role="seperator" />
            {/* Rooms components of secondary navbar */}

            <div className="flex items-center ml-4 mb-2 mt-3 text-[#A4A3AA]">
              <h1 className="mr-1">Rooms</h1>
              <TriangleDownIcon
                className="w-6 h-6 hover:cursor-pointer"
                onClick={() => {
                  setRoomToggle(!roomtoogle);
                }}
              />
            </div>
            <section className=" relative space-y-3 mb-5 p-2.5">
              {roomtoogle
                ? roomdata.map((value: any, id) => (
                    <button
                      onClick={() => setActiveRoom(id)}
                      className="text-[#A4A3AA]  flex space-x-2 w-full mb-1 hover:text-white"
                    >
                      {value.logo}
                      <p className=" hover:cursor-pointer hover:text-white text-[#A4A3AA]">
                        {value.name}
                      </p>
                      {id === activeroom ? (
                        <div
                          className=" h-8 w-px absolute -left-2 bg-white"
                          role="separator"
                        />
                      ) : null}
                    </button>
                  ))
                : null}
            </section>

            {/* events components of secondary navbar */}

            <div className="flex items-center ml-4 mb-3 text-[#A4A3AA]">
              <h1 className="mr-1">Events</h1>
              <TriangleDownIcon
                className="w-6 h-6 hover:cursor-pointer"
                onClick={() => {
                  setEventToggle(!eventtoogle);
                }}
              />
            </div>
            <section className="p-2.5 space-y-3">
              {eventtoogle
                ? eventdata.map((value: any) => (
                    <button
                      className="flex  text-[#A4A3AA]  mb-1
                    space-x-2 w-full hover:text-white"
                    >
                      {value.logo}
                      <p className=" hover:cursor-pointer hover:text-white text-[#A4A3AA]">
                        {value.name}
                      </p>
                    </button>
                  ))
                : null}
            </section>

            <div className="h-px bg-gray-600 mt-2 mb-5" />

            {/* Active components */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center ml-4  text-[#A4A3AA]">
                <h1 className="mr-1">Active</h1>
                <TriangleDownIcon
                  className="w-6 h-6 hover:cursor-pointer"
                  onClick={() => {
                    setActiveToggle(!activetoogle);
                  }}
                />
              </div>
              <div>
                <FiSearch className="text-[#A4A3AA] mr-5 w-4 h-4" />
              </div>
            </div>
            <section className="p-2.5 space-y-3">
              {activetoogle
                ? activedata.map((value: any) => (
                    <div className="flex justify-between items-center ">
                      <button className="flex space-x-2 w-full mb-1 items-center  hover:text-white">
                        {value.logo}
                        <p className=" hover:cursor-pointer hover:text-white text-[#A4A3AA]">
                          {value.name}
                        </p>
                      </button>
                      <div className="flex items-center font-bold text-[#A4A3AA]">
                        {value.number}
                        <FiUser className="ml-1" />
                      </div>
                    </div>
                  ))
                : null}
            </section>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Vimon;
