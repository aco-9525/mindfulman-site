import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface NavigationCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  testId?: string;
}

export default function NavigationCard({ icon: Icon, title, description, href, testId }: NavigationCardProps) {
  return (
    <Link href={href}>
      <Card className="h-full hover-elevate active-elevate-2 cursor-pointer transition-shadow" data-testid={testId}>
        <CardHeader>
          <div className="mb-4">
            <Icon className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
