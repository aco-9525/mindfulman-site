import NavigationCard from '../NavigationCard';
import { Phone } from 'lucide-react';

export default function NavigationCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <NavigationCard
        icon={Phone}
        title="I'm not okay"
        description="If you're overwhelmed, angry, or done with everything — click here."
        href="/help-now"
      />
    </div>
  );
}
