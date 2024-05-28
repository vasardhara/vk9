import Hero from "@/components/Home/Hero/Hero";
import EveryBottle from "@/components/Home/EveryBottle/EveryBottle";
import ForMula from "../components/Home/Formula/ForMula";
import ClientLogo from "@/components/Home/ClientLogo/ClientLogo";
import CustomerSay from "@/components/Home/CustomerSay/CustomerSay";
import ProductLogo from "@/components/Home/ProductLogo/ProductLogo";
import BetterFuture from "@/components/Home/BetterFuture/BetterFuture";
import HappyMake from "@/components/Home/HappyMake/HappyMake";
import TellAbout from "@/components/Home/TellAbout/TellAbout";

function Home() {
  return (
    <>
      <Hero />
      <EveryBottle />
      <ForMula />
      <ClientLogo />
      <CustomerSay />
      <ProductLogo />
      <BetterFuture />
      <TellAbout />
      <HappyMake />
    </>
  );
}

export default Home;
