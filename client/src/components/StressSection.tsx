import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StressSectionProps {
  icon: LucideIcon;
  title: string;
  scenario: string;
  advice: string[];
}

export default function StressSection({ icon: Icon, title, scenario, advice }: StressSectionProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4 mb-4">
        <Icon className="h-8 w-8 text-primary shrink-0" />
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-base italic text-muted-foreground mb-4">"{scenario}"</p>
        </div>
      </div>
      
      <div>
        <p className="font-semibold mb-3">What you can do:</p>
        <ul className="space-y-2">
          {advice.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary font-semibold">•</span>
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
