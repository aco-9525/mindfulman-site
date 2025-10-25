import Hero from "@/components/Hero";
import CrisisInfoSection from "@/components/CrisisInfoSection";

export default function HelpNow() {
  return (
    <div>
      <Hero title="I Need Help Now" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <CrisisInfoSection />
      </div>
    </div>
  );
}
