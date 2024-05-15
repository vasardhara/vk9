'use client'
import Link from "next/link";
import ImageView from "../Images";
import { V_ContactIcon, V_DownArrowIcon, V_FaceBookIcon, V_InputRightArrowIcon, V_InstagramIcon, V_MailIcon, V_PinterestIcon, V_TwitterIcon } from "../Icon";
import { useEffect, useState } from "react";

function Footer() {

  const [isMobile, setIsMobile] = useState({ first: false, second: false, third: false, fourth: false });

  return (
    <>
      <div className="v_footer">
        <div className="v_container">

          <div className="v_row v_footer-first">
            <div className="v_footer-first-menu">
              <Link className="v_footer-logo v_ib" href={'/'} >
                <ImageView src={`/images/header/logo/v_black-logo.svg`} className='v_h-full v_w-full' alt="v_black-logo" />
              </Link>
              <ul className="v_footer-first-social">
                <li><Link href='/'><V_InstagramIcon /></Link></li>
                <li><Link href='/'><V_FaceBookIcon /></Link></li>
                <li><Link href='/'><V_TwitterIcon /></Link></li>
                <li><Link href='/'><V_PinterestIcon /></Link></li>
              </ul>
            </div>
            <div className={`v_footer-first-menu ${isMobile.first && 'v_active'}`}>
              <h6 onClick={() => setIsMobile((prev) => { return { first: !prev.first, second: false, third: false, fourth: false } })} >Shop VK9 <V_DownArrowIcon /></h6>
              <ul>
                <li><Link href={'/'}>12 month plan</Link></li>
                <li><Link href={'/'}>One-time order</Link></li>
              </ul>
            </div>
            <div className={`v_footer-first-menu ${isMobile.second && 'v_active'}`}>
              <h6 onClick={() => setIsMobile((prev) => { return { second: !prev.second, first: false, third: false, fourth: false } })} >LEARN <V_DownArrowIcon /></h6>
              <ul>
                <li><Link href={'/'}>Nutrition + benefits</Link></li>
                <li><Link href={'/'}>How it works</Link></li>
                <li><Link href={'/'}>How to serve</Link></li>
                <li><Link href={'/'}>FAQ’s</Link></li>
              </ul>
            </div>
            <div className={`v_footer-first-menu ${isMobile.third && 'v_active'}`}>
              <h6 onClick={() => setIsMobile((prev) => { return { third: !prev.third, second: false, first: false, fourth: false } })} >Our story <V_DownArrowIcon /></h6>
              <ul>
                <li><Link href={'/'}>About</Link></li>
                <li><Link href={'/'}>Our experts</Link></li>
                <li><Link href={'/'}>A better future</Link></li>
                <li><Link href={'/'}>Thrive together</Link></li>
              </ul>
            </div>
            <div className={`v_footer-first-menu ${isMobile.fourth && 'v_active'}`}>
              <h6 onClick={() => setIsMobile((prev) => { return { fourth: !prev.fourth, second: false, third: false, first: false } })} >contact <V_DownArrowIcon /></h6>
              <ul>
                <li><Link href='mailto:help@vk9.com'><V_MailIcon className="v_mr-5"/> help@vk9.com</Link></li>
                <li><Link href='tel:+800-555-5555'><V_ContactIcon className="v_mr-5"/> 800-555-5555</Link></li>
              </ul>
            </div>
            <div className="v_footer-first-menu">
              <Link className="v_footer-logo v_ib" href={'/'} >
                <ImageView src={`/images/header/logo/v_black-logo.svg`} className='v_h-full v_w-full' alt="v_black-logo" />
              </Link>
              <ul className="v_footer-first-social">
                <li><Link href='/'><V_InstagramIcon /></Link></li>
                <li><Link href='/'><V_FaceBookIcon /></Link></li>
                <li><Link href='/'><V_TwitterIcon /></Link></li>
                <li><Link href='/'><V_PinterestIcon /></Link></li>
              </ul>
            </div>
          </div>

          <div className="v_row v_footer-second">
            <div className="v_footer-second-newsletter">
              <h6>Join our newsletter</h6>

              <form className="v_footer-second-newsletter-input">
                <input placeholder="Enter your email" type="email" />
                <button className="v_cp"><V_InputRightArrowIcon width="20px" height="20px" /></button>
              </form>
            </div>

            <ul className="v_footer-first-social">
              <li><Link href='/'><V_InstagramIcon /></Link></li>
              <li><Link href='/'><V_FaceBookIcon /></Link></li>
              <li><Link href='/'><V_TwitterIcon /></Link></li>
              <li><Link href='/'><V_PinterestIcon /></Link></li>
            </ul>

            <div className="v_footer-second-privacy">
              <h6>Happy Makes Happy</h6>
              <ul>
                <li><Link href='/'>Privacy</Link></li>
                <li><Link href='/'>Terms & conditions</Link></li>
                <li>© 2022 VK9</li>
              </ul>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default Footer;