import Hero from "@/components/Hero";
import StressSection from "@/components/StressSection";
import { BookOpen, Trophy, Home, Heart } from "lucide-react";

export default function Stress() {
  return (
    <div>
      <Hero title="Stress / School / Life" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid gap-6">
          <StressSection
            icon={BookOpen}
            title="School pressure"
            scenario="I'm drowning in work and I can't focus."
            advice={[
              "Ask for an extension early.",
              "Work with a friend / in a classroom after school instead of alone at home.",
              "Ask guidance about timetable/overload. It's allowed.",
              "Failing a test ≠ failing at life."
            ]}
          />
          
          <StressSection
            icon={Trophy}
            title="Sports / performance pressure"
            scenario="I messed up and now I feel useless."
            advice={[
              "One bad game = info, not identity.",
              "Exhaustion and low mood can feel like 'depression.' Sometimes you're just cooked. Rest matters.",
              "Talk to your coach if pressure is overwhelming.",
              "Your worth isn't tied to your performance."
            ]}
          />
          
          <StressSection
            icon={Home}
            title="Family stress"
            scenario="My parents don't get it, or it's tense at home."
            advice={[
              "You're allowed to say 'Things are intense at home. I need support.'",
              "If you're being hurt or controlled, that's not 'discipline.' That's a safety issue and adults at school can step in.",
              "Family conflict affects your mental health. That's real.",
              "You can talk to school staff confidentially."
            ]}
          />
          
          <StressSection
            icon={Heart}
            title="Friends / relationships"
            scenario="Friend drama / breakup killed my mood."
            advice={[
              "Losing someone you're close to is real grief, not 'being dramatic.'",
              "Talk to someone instead of pretending you're fine.",
              "Social pain hurts as much as physical pain.",
              "It's okay to need time to process."
            ]}
          />
        </div>
      </div>
    </div>
  );
}
