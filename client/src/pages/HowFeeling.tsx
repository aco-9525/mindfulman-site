import Hero from "@/components/Hero";
import FeelingCard from "@/components/FeelingCard";
import { Flame, CloudRain, Brain, UserX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HowFeeling() {
  return (
    <div>
      <Hero title="How I'm Feeling" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid gap-6 mb-8">
          <FeelingCard
            icon={Flame}
            title="Angry / irritated all the time"
            description="Anger can be stress, burnout, or feeling disrespected. You're not 'a problem.' Anger is a signal."
            advice={[
              "Try walking away before reacting and talk it out instead of holding it in.",
              "Physical activity can help process anger.",
              "Ask yourself: what am I actually frustrated about?"
            ]}
            contact="Guidance Office / Mental Health Contact Teacher"
          />
          
          <FeelingCard
            icon={CloudRain}
            title="Sad / numb / no energy"
            description="Feeling empty, tired, and not enjoying anything can be a sign of depression. You don't have to 'prove it's serious' to ask for help."
            advice={[
              "Move your body a bit, even 5-10 minutes, then talk to someone.",
              "Depression is real. It's not weakness.",
              "Small steps matter. Getting out of bed is progress."
            ]}
            contact="School Counselor / Mental Health Support"
          />
          
          <FeelingCard
            icon={Brain}
            title="Anxious / overthinking everything"
            description="Racing thoughts, stomach tight, can't focus."
            advice={[
              "Try box breathing: in 4 sec, hold 4, out 4, hold 4.",
              "Break work into one small task instead of 'finish everything tonight.'",
              "Write down what you're worried about. Getting it out helps."
            ]}
            contact="Guidance Office"
          />
          
          <FeelingCard
            icon={UserX}
            title="Lonely / disconnected"
            description="Feeling like 'nobody would care' is actually super common in guys. Isolation is dangerous."
            advice={[
              "Tell someone 'I don't feel okay being alone right now.'",
              "Reach out to one person, even if it feels awkward.",
              "Loneliness doesn't mean you're unlikeable."
            ]}
            contact="Any trusted adult / School Support Staff"
          />
        </div>

        <div className="text-center">
          <Link href="/support">
            <Button size="lg" data-testid="button-talk-to-someone">
              Talk to someone at school
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
