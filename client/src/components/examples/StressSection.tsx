import StressSection from '../StressSection';
import { BookOpen } from 'lucide-react';

export default function StressSectionExample() {
  return (
    <div className="p-6 max-w-2xl">
      <StressSection
        icon={BookOpen}
        title="School pressure"
        scenario="I'm drowning in work and I can't focus."
        advice={[
          "Ask for an extension early.",
          "Work with a friend / in a classroom after school instead of alone at home.",
          "Ask guidance about timetable/overload. It's allowed."
        ]}
      />
    </div>
  );
}
