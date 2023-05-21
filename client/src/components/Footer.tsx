import React from 'react';
import { Link } from 'react-router-dom';
import facebook from "../assets/svg/facebook.svg"
import instagram from "../assets/svg/instagram.svg"
import linkedIn from "../assets/svg/linkedIn.svg"
import twitter from "../assets/svg/twitter.svg"

function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-md font-semibold text-white uppercase ">Company</h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <Link to={'#'}>
                  <p className="hover:underline hover:text-[#3BD188]">About</p>
                </Link>
              </li>
              <li className="mb-4">
                <p className="hover:underline hover:text-[#3BD188]">Careers</p>
              </li>
              <li className="mb-4">
                <Link to={'#'}>
                  <p className="hover:underline hover:text-[#3BD188]">Brand Center</p></Link>
              </li>
              <li className="mb-4">
                <Link to={'#'}>
                  <p className="hover:underline hover:text-[#3BD188]">Blog</p>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-md font-semibold text-white uppercase " >Help center</h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <Link to={'#'}><p className="hover:underline hover:text-[#3BD188]">Discord Server</p></Link>
              </li>
              <li className="mb-4">
                <Link to={'#'}>
                  <p className="hover:underline hover:text-[#3BD188]">Twitter</p>
                </Link>
              </li>
              <li className="mb-4">
                <Link to={'#'}>
                  <p className="hover:underline hover:text-[#3BD188]">Facebook</p>
                </Link>
              </li>
              <li className="mb-4">
                <Link to={'#'}>
                  <p className="hover:underline hover:text-[#3BD188]">Contact Us</p>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-md font-semibold text-white uppercase ">Legal</h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <Link to={'#'}>

                  <p className="hover:underline hover:text-[#3BD188]">Privacy Policy</p>
                </Link>
              </li>
              <li className="mb-4">
                <Link to={'#'}><p className="hover:underline hover:text-[#3BD188]">Licensing</p></Link>
              </li>
              <li className="mb-4">
                <Link to={'#'}> <p className="hover:underline hover:text-[#3BD188]">Terms &amp; Conditions</p></Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-md font-semibold text-white uppercase ">Download</h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <Link to={'#'}> <p className="hover:underline hover:text-[#3BD188]">iOS</p></Link>
              </li>
              <li className="mb-4">
                <Link to={'#'}> <p className="hover:underline hover:text-[#3BD188]">Android</p>
                </Link>
              </li>
              <li className="mb-4">
                <Link to={'#'}>
                  <p className="hover:underline hover:text-[#3BD188]">Windows</p>
                </Link>
              </li>
              <li className="mb-4">
                <Link to={'#'}> <p className="hover:underline hover:text-[#3BD188]">MacOS</p></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-4">
        <p className="text-gray-500 text-sm">
          © 2023 Your Company. All rights reserved.
        </p>
        <div className="flex justify-center mt-4 space-x-4">

          <img src={facebook} alt="facebook" />
          <img src={linkedIn} alt="linkedIn" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
