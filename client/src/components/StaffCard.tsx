import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, Clock, User } from "lucide-react";

interface StaffCardProps {
  name: string;
  role: string;
  room: string;
  hours: string;
  description: string;
}

export default function StaffCard({ name, role, room, hours, description }: StaffCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{role}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start gap-3">
          <User className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold">{name}</div>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <div className="text-sm text-muted-foreground">Location</div>
            <div className="font-medium">{room}</div>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <div className="text-sm text-muted-foreground">Available</div>
            <div className="font-medium">{hours}</div>
          </div>
        </div>
        
        <div className="pt-3 border-t">
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
