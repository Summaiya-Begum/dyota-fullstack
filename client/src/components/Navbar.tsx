import UpIcon from "../assets/UpIcon";
import logo from "../assets/image/logo.png";
import React, { useState } from "react";
import { navItems } from "../utils/navitems";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const IsAuth = false;

  const handleTooltipToggle = () => {
    setTooltipVisible(!tooltipVisible);
  };

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogout = () => {

  };

  return (
    <>
      <section className="sticky w-full h-auto top-0 z-40">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "linear" }}
          className=" w-full flex flex-row justify-between items-center text-black h-[8vh] px-[5vw] backdrop-blur-xl"
        >
          <motion.div
            className={`cursor-pointer w-7 h-7 px-2  gap-1 flex flex-col items-center justify-center border-transparent rounded lg:hidden relative${openMenu ? "rotate-90" : ""
              }`}
            onClick={handleMenu}
            initial={{ y: "-6vh" }}
            animate={{ y: "0vh", rotate: openMenu ? 90 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="h-[0.2rem] w-4 bg-[#3BD188]"></div>
            <div className="h-[0.1rem] w-4 bg-[#3BD188]"></div>
            <div className="h-[0.1rem] w-4 bg-[#3BD188]"></div>
          </motion.div>
          <AnimatePresence>
            {
              !openMenu && (
                <>

                  <motion.div
                    className="flex items-center"
                    initial={{ y: "-6vh" }}
                    animate={{ y: "0vh" }}
                    exit={{ y: "-6vh" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <img
                      src={logo}
                      alt="Dyota Logo"
                      className="hidden w-12 h-12 object-fit lg:block"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: "-6vh" }}
                    animate={{ y: "0vh" }}
                    exit={{ y: "-6vh" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="hidden items-center ml-[4vw] lg:flex"
                  >
                    <ul className="flex items-center space-x-2">
                      {navItems?.map((item, i) => {
                        return (
                          <li key={i}>
                            <Link to={item.to}>
                              <motion.p
                                whileHover={{ scale: 1.02 }}
                                className={`flex justify-center ${item.title === "DYOTA"
                                  ? `font-bold text-black whitespace-nowrap text-xl min-w-[10vw]`
                                  : `text-black min-w-[7vw] whitespace-nowrap text-lg font-semibold`
                                  } `}
                              >
                                {item.title}
                              </motion.p>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ y: "-6vh" }}
                    animate={{ y: "0vh" }}
                    exit={{ y: "-6vh" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="flex flex-row space-x-4 items-center justify-end "
                  >
                    <Link to={'/email-form'}>
                      <div className="cursor-pointer text-[#3BD188] flex items-center justify-center">
                        <span>
                          GET IN TOUCH
                        </span>
                        <div className="h-6 w-6">
                          <UpIcon />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </>


              )
            }
          </AnimatePresence>
          <AnimatePresence>
            {openMenu && (
              <motion.div
                className="float-right fixed right-[2vw] cursor-pointer"
                onClick={handleMenu}
                initial={{ x: "10vw" }}
                animate={{ x: "0vw" }}
                exit={{ x: "10vw" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <div className=" w-5 h-0.5 bg-[#3BD188] transform rotate-45 absolute "></div>
                <div className=" w-5 h-0.5 bg-[#3BD188] transform -rotate-45 "></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>


        <AnimatePresence>
          {openMenu && (
            <motion.div
              className="fixed top-[7vh] w-full  bg-white h-[95vh] text-black"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>
          )}
        </AnimatePresence>


        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              onClick={handleMenu}
              className="fixed top-[8vh] px-[2vw] flex flex-col gap-1 text-black z-0"
            >
              <div className="flex flex-col gap-5 py-8 px-[3vw]">
                <div>
                  <ul className="flex flex-col justify-start items-start gap-4 text-start  text-xl">
                    {navItems?.map((item, i) => {

                      return (
                        <li key={i}>
                          <Link to={item.to}>
                            <motion.p
                              whileHover={{ scale: 1.10 }}
                              className="flex justify-start items-start text-black min-w-[7vw] whitespace-nowrap text-xl"
                            >
                              {item.title}
                            </motion.p>
                          </Link>
                        </li>
                      );
                    })}
  
                    {IsAuth ? (
                      <>
                        <motion.li whileHover={{ scale: 1.10 }}>My account</motion.li>
                        <motion.li whileHover={{ scale: 1.10 }} onClick={handleLogout}>Logout</motion.li>
                      </>
                    ) : (
                      <Link to={"/login"}>
                        <motion.li whileHover={{ scale: 1.10 }} className="text-[#3BD188]">Sign up/Log in</motion.li>
                      </Link>
                    )}
                  </ul >
                </div >
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>


    </>
  );
};

export default Navbar;

