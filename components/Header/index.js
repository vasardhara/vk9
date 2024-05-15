"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ImageView from "../Images";
import HeaderStrip from "./HeaderStrip";
import { V_CloseIcon, V_ContactIcon, V_FaceBookIcon, V_InstagramIcon, V_MenubarIcon, V_PinterestIcon, V_TwitterIcon, V_UserIcon } from "../Icon";
import V_CartIcon from "../Icon/V_CartIcon";

function Header() {

  const [isToggle, setToggle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".v_header");
      header?.classList.toggle("v_sticky", window.scrollY > 0);
    });
  });


  useEffect(() => {
    if (isToggle) {
      document.body.classList.add("v_menu-active");
    } else {
      document.body.classList.remove("v_menu-active");
    }

    // Clean up the effect when the component unmounts
    return () => {
      document.body.classList.remove("v_menu-active");
    };
  }, [isToggle]);

  return (
    <>
      <HeaderStrip />
      <div className="v_header">
        <div className="v_container">
          <div className="v_header-inner">

            <div className="v_flex v_align-center">

              <div className='v_header-bar v_cp' onClick={() => setToggle(!isToggle)}>
                <V_MenubarIcon />
              </div>


              {/* Main Logo  */}
              <Link className="v_header-logo v_ib" href={'/'} >
                <ImageView src={`/images/header/logo/v_black-logo.svg`} className='v_h-full v_w-full' alt="v_black-logo" />
              </Link>

              <div className={`${isToggle && "v_mobile-menu"}`}>

                <div className='v_header-close v_cp' onClick={() => setToggle(!isToggle)}>
                  <V_CloseIcon />
                </div>

                <ul className="v_header-menu">
                  <li>
                    <Link href={'/'} onClick={() => setToggle(false)}>Shop VK9</Link>
                  </li>
                  <li>
                    <Link href={'/'} onClick={() => setToggle(false)}>how it works</Link>
                  </li>
                  <li>
                    <Link href={'/'} onClick={() => setToggle(false)}>nutrition + benefits</Link>
                  </li>
                  <li>
                    <Link href={'/'} onClick={() => setToggle(false)}>Our story</Link>
                  </li>
                </ul>

                <ul className="v_header-social">
                  <li><Link href='/'><V_InstagramIcon /></Link></li>
                  <li><Link href='/'><V_FaceBookIcon /></Link></li>
                  <li><Link href='/'><V_TwitterIcon /></Link></li>
                  <li><Link href='/'><V_PinterestIcon /></Link></li>
                </ul>

                <ul className="v_header-user">
                  <li><Link href='/' className="v_flex v_align-center v_content-center"><V_UserIcon className="v_mr-8" />Account</Link></li>
                  <li><Link href='tel:+800-555-5555' className="v_flex v_align-center v_content-center"><V_ContactIcon className="v_mr-8" width="20px" height="20px"/> 800-555-5555</Link></li>
                </ul>
              </div>
            </div>


            {/* Header Right-side  */}
            <div className="v_flex v_align-center v_content-end v_header-right">

              <Link href={'/'} className="v_header-right-shop">Shop VK9</Link>

              <div className="v_header-right-inner">
                <div className="v_header-right-inner-user v_cp">
                  <V_UserIcon height="26px" width="26px" />
                </div>
                <div className="v_header-right-inner-cart v_cp" onClick={() => setToggle(false)}>
                  <span>9</span>
                  <V_CartIcon height="26px" width="26px" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Header;