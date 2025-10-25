import Hero from "@/components/Hero";
import StaffCard from "@/components/StaffCard";
import { Card } from "@/components/ui/card";
import { Shield, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { StaffMember } from "@shared/schema";

export default function Support() {
  const { data: staff, isLoading } = useQuery<StaffMember[]>({
    queryKey: ["/api/staff"],
  });

  return (
    <div>
      <Hero title="Support at School" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="mb-8">
          <p className="text-lg leading-relaxed text-center max-w-2xl mx-auto">
            These are real people at your school who can help. You don't need to have everything figured out. 
            Just say "Can I talk to you?" and they'll take it from there.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="grid gap-6 mb-8">
            {staff?.map((member) => (
              <StaffCard
                key={member.id}
                name={member.name}
                role={member.role}
                room={member.room}
                hours={member.hours}
                description={member.description}
              />
            ))}
          </div>
        )}

        <Card className="p-6 border-l-4 border-l-primary">
          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Privacy & Confidentiality</h3>
              <p className="text-sm text-muted-foreground">
                Most of what you tell us stays private. We only have to report if someone is in danger 
                or you are in danger. Everything else is between you and the person you're talking to.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
