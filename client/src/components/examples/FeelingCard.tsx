import FeelingCard from '../FeelingCard';
import { Flame } from 'lucide-react';

export default function FeelingCardExample() {
  return (
    <div className="p-6 max-w-2xl">
      <FeelingCard
        icon={Flame}
        title="Angry / irritated all the time"
        description="Anger can be stress, burnout, or feeling disrespected. You're not 'a problem.' Anger is a signal."
        advice={[
          "Try walking away before reacting",
          "Talk it out instead of holding it in",
          "Physical activity can help process anger"
        ]}
        contact="Guidance Office / Room 204"
      />
    </div>
  );
}
