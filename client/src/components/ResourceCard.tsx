import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  name: string;
  contact: string;
  description: string;
  availability: string;
  isExternal?: boolean;
}

export default function ResourceCard({ name, contact, description, availability, isExternal }: ResourceCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-start justify-between gap-2">
          {name}
          {isExternal && <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <div className="font-bold text-xl mb-1">{contact}</div>
          <div className="text-sm text-muted-foreground">{availability}</div>
        </div>
        
        <p className="text-sm">{description}</p>
        
        {contact.startsWith('http') ? (
          <Button asChild variant="outline" size="sm" className="w-full" data-testid={`button-visit-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            <a href={contact} target="_blank" rel="noopener noreferrer">
              Visit Website
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        ) : contact.match(/^\d/) ? (
          <Button asChild size="sm" className="w-full" data-testid={`button-call-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            <a href={`tel:${contact.replace(/\D/g, '')}`}>Call {contact}</a>
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}
