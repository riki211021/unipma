import React from "react";
import HeroSection from "../home/HeroSection";
import Highlights from "../home/Highlights";
import ProgramList from "../home/ProgramList";
import ScheduleTable from "../home/ScheduleTable";
import Testimonials from "../home/Testimonials";


export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800 bg-white">

      {/* Content Sections */}
      <main className="pt-20">
        <section id="home">
          <HeroSection />
        </section>
        <section id="highlight">
          <Highlights />
        </section>
        <section id="program">
          <ProgramList />
        </section>
        <section id="jadwal">
          <ScheduleTable />
        </section>
        <section id="testimoni">
          <Testimonials />
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-10 py-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} PMB Unipma Clone | All rights reserved.</footer>
    </div>
  );
}
