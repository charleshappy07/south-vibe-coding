import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueTiles from "@/components/ValueTiles";
import WhatWeBuild from "@/components/WhatWeBuild";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueTiles />
        <WhatWeBuild />
      </main>
      <Footer />
    </div>
  );
};

export default Index;