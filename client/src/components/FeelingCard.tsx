import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeelingCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  advice: string[];
  contact?: string;
}

export default function FeelingCard({ icon: Icon, title, description, advice, contact }: FeelingCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4 mb-4">
        <Icon className="h-8 w-8 text-primary shrink-0" />
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-base text-muted-foreground mb-4">{description}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="font-medium text-sm mb-2">What you can do:</p>
        <ul className="space-y-2">
          {advice.map((item, index) => (
            <li key={index} className="text-sm flex items-start gap-2">
              <span className="text-primary font-semibold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {contact && (
        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            <strong>Talk to:</strong> {contact}
          </p>
        </div>
      )}
    </Card>
  );
}
