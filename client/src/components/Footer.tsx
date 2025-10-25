import { Phone, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Footer() {
  return (
    <footer className="bg-muted mt-20 border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <Card className="p-6 md:p-8 mb-8 border-l-4 border-l-destructive">
          <h3 className="text-xl font-semibold mb-4">Crisis Information</h3>
          <p className="text-sm mb-6 text-muted-foreground">
            This site is not monitored 24/7. If you are in immediate danger or thinking about hurting yourself:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Phone className="h-6 w-6 text-destructive shrink-0 mt-1" />
              <div>
                <div className="font-bold text-2xl mb-1">911</div>
                <div className="text-sm text-muted-foreground">Emergency Services</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageSquare className="h-6 w-6 text-destructive shrink-0 mt-1" />
              <div>
                <div className="font-bold text-2xl mb-1">988</div>
                <div className="text-sm text-muted-foreground">Suicide Crisis Helpline (Canada, 24/7)</div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/help-now" className="hover:text-foreground transition-colors">I Need Help Now</a></li>
              <li><a href="/how-feeling" className="hover:text-foreground transition-colors">How I'm Feeling</a></li>
              <li><a href="/support" className="hover:text-foreground transition-colors">Support at School</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/resources" className="hover:text-foreground transition-colors">All Resources</a></li>
              <li><a href="/faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="/stress" className="hover:text-foreground transition-colors">Stress & School</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm text-muted-foreground">
              For questions about this site or to update information, contact your school guidance office.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Men's Mental Health Support. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
