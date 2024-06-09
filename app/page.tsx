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
            We&apos;ve got <br /> you covered <br /> 
          </div>
        <div className="pencil">
          <img src="/profpencil.svg" alt="pencil" />
          
        </div>
      </div>

      <div className="cardsanimated">
        <GlowingStarsBackgroundCardPreview
          title="Rated Professors"
          description="Click here to see the list of all professors"
          href="/rated"
        />
        <GlowingStarsBackgroundCardPreview
          title="Prof Royale"
          description="Click Here to Play Prof Royale"
          href="/battle"
        />
        <GlowingStarsBackgroundCardPreview
          title="Rate a Professor"
          description="Click here to rate a professor"
          href="/rate"
        />
      </div>
      <Footer/>
    </>
  );
}
