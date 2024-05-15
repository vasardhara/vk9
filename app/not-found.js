import ImageView from "@/components/Images";
import Link from "next/link";
import "@/styles/common/_page-not-found.scss"

export default function NotFound() {
  
  return (
    <section className="v_not-found">
      <div className="v_container">
        <div className="v_flex v_algin-center v_content-center v_flex-col">
          <div className="v_not-found-img">
          <ImageView src={'/images/not-found/v_not-found.svg'} className='v_w-full v_h-full' alt="v_not-found" />
          </div>
          <div className="v_not-found-content">
            <h2>The page you are looking for doesn’t exist.</h2>
            <Link className="v_button" href="/">Back to home</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
