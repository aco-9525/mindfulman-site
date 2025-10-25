import { Card } from "@/components/ui/card";
import { Phone, MessageSquare, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CrisisInfoSection() {
  return (
    <div className="space-y-8">
      <Card className="p-8 border-l-4 border-l-destructive bg-destructive/5">
        <div className="flex items-start gap-4 mb-6">
          <AlertCircle className="h-8 w-8 text-destructive shrink-0" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">If you are in danger or thinking about hurting yourself right now:</h2>
            <ul className="space-y-2 text-base">
              <li className="flex items-start gap-2">
                <span className="font-semibold">•</span>
                <span><strong>Call 911.</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">•</span>
                <span><strong>Tell an adult immediately</strong> (teacher, office, coach, ANY trusted adult nearby).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">•</span>
                <span><strong>You are allowed to ask for help.</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Talk to someone right now (24/7, free):</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Phone className="h-8 w-8 text-primary shrink-0" />
              <div className="flex-1">
                <div className="font-bold text-3xl mb-2">988</div>
                <div className="text-base font-medium mb-2">Suicide Crisis Helpline</div>
                <div className="text-sm text-muted-foreground mb-4">Canada, 24/7 - Text or call</div>
                <Button asChild className="w-full md:w-auto" data-testid="button-call-988">
                  <a href="tel:988">Call 988</a>
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <MessageSquare className="h-8 w-8 text-primary shrink-0" />
              <div className="flex-1">
                <div className="font-bold text-3xl mb-2">686868</div>
                <div className="text-base font-medium mb-2">Kids Help Phone</div>
                <div className="text-sm text-muted-foreground mb-4">Text CONNECT - Confidential, youth support 24/7</div>
                <Button asChild className="w-full md:w-auto" data-testid="button-text-686868">
                  <a href="sms:686868?body=CONNECT">Text CONNECT</a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-8">
        <h3 className="text-xl font-semibold mb-4">Before you do something permanent:</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="font-semibold text-primary">1.</span>
            <span className="text-base"><strong>Breathe for 60 seconds</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-semibold text-primary">2.</span>
            <span className="text-base"><strong>Move somewhere safer</strong> (not alone in a stairwell/washroom)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-semibold text-primary">3.</span>
            <span className="text-base"><strong>Message one person who cares</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-semibold text-primary">4.</span>
            <span className="text-base"><strong>You still matter even if your brain says you don't right now</strong></span>
          </li>
        </ul>
      </Card>
    </div>
  );
}
