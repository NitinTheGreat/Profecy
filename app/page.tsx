// page.tsx
import Image from "next/image";
import { GoogleGeminiEffectDemo } from "./gemini";
import { GlowingStarsBackgroundCardPreview } from "./glowingcard";
import "../styles/home.css";
// import '../styles/global.css';
// import '../utils/fontawesome';
import "../utils/fontawesome"
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <GoogleGeminiEffectDemo />
      <div className="svgs">
        <div className="point">
          <img src="profpointing.svg" alt="point" />
          <div className="text1">Choosing Your Next Professor ?!</div>
        </div>
        <div className="text2">
            We've got <br /> you covered <br /> 
          </div>
        <div className="pencil">
          <img src="/profpencil.svg" alt="pencil" />
          
        </div>
      </div>

      <div className="cardsanimated">
        <GlowingStarsBackgroundCardPreview
          title="Title 1"
          description="Description 1."
          href="/about"
        />
        <GlowingStarsBackgroundCardPreview
          title="Title 2"
          description="Description 2"
          href="/test"
        />
        <GlowingStarsBackgroundCardPreview
          title="Title 3"
          description="Description 3"
          href="/test"
        />
      </div>
      <Footer/>
    </>
  );
}
