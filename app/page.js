import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0e] text-[#f2efe8] flex flex-col">
      {/* 100svh Pin-driven Hero Section */}
      <Hero />

      {/* Continuation Features Section with Scroll Fade-Up */}
      <Features />

      {/* Minimal Studio Footer */}
      <footer className="w-full border-t border-[#1f1e1c] py-8 px-6 text-center text-xs text-[#a3a099]">
        <p>ITZFIZZ &bull; Digital Product Studio</p>
      </footer>
    </main>
  );
}
