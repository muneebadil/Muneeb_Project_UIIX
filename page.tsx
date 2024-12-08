


import EditorPick from "@/components/Editorpick";
import Footer from "@/components/Footer";
import Hero1 from "@/components/Hero1";
import NavbarFull from "@/components/Navbar_Full";
import ShoppingGrid from "@/components/ShoppingGrid";
import HeroSection from "@/components/herosection1";
import Whitediv from "@/components/HeroSection2";
import Featurespost from "@/components/Featurespost";




export default function Home() {
  return (
    <div>
      <NavbarFull />
      <Hero1 />
      <EditorPick />
      <ShoppingGrid/>
      <HeroSection/>
      <Whitediv/>
      <Featurespost/>
      
    
      <Footer />
   
    </div>
  );
}
