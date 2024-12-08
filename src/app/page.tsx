import BrowseRange from "@/components/Home/BrowseRange";
import Furnitures from "@/components/Home/Furnitures";
import HeroSec from "@/components/Home/HeroSec";
import Products from "@/components/Home/Products"
import Rooms from "@/components/Home/Rooms";

export default function Home() {
  return (
    <>
      <div className="">
        <HeroSec />
        <BrowseRange />
        <Products></Products>
        <Rooms></Rooms>
        <Furnitures></Furnitures>
      </div>
    </>
  );
}
