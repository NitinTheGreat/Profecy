// page.tsx
import Image from "next/image";
import { GoogleGeminiEffectDemo } from "./gemini";
import {GlowingStarsBackgroundCardPreview} from "./glowingcard";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <GoogleGeminiEffectDemo />
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
    </>
  );
}
