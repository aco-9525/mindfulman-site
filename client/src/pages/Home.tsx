import Hero from "@/components/Hero";
import NavigationCard from "@/components/NavigationCard";
import { Phone, HelpCircle, Users } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero 
        title="You're allowed to ask for help." 
        subtitle="Support and resources for male students."
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl leading-relaxed">
            Mental health is real health. You don't have to explain everything. 
            You can just say "I'm not okay." That's enough.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          <NavigationCard
            icon={Phone}
            title="I'm not okay"
            description="If you're overwhelmed, angry, or done with everything — click here."
            href="/help-now"
            testId="card-crisis-help"
          />
          <NavigationCard
            icon={HelpCircle}
            title="Common questions"
            description="Is it normal to feel this way? How do I talk to parents? Sleep? Anger? School?"
            href="/faq"
            testId="card-faq"
          />
          <NavigationCard
            icon={Users}
            title="Talk to someone at school"
            description="You can literally walk in and say 'Can I talk to you for 5 minutes?'"
            href="/support"
            testId="card-school-support"
          />
        </div>
      </div>
    </div>
  );
}
