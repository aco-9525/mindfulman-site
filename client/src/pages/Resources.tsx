import Hero from "@/components/Hero";
import ResourceCard from "@/components/ResourceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import type { Resource } from "@shared/schema";

export default function Resources() {
  const { data: resources, isLoading } = useQuery<Resource[]>({
    queryKey: ["/api/resources"],
  });

  const crisisResources = resources?.filter(r => r.category === "crisis") || [];
  const appResources = resources?.filter(r => r.category === "apps") || [];
  const schoolResources = resources?.filter(r => r.category === "school") || [];
  const communityResources = resources?.filter(r => r.category === "community") || [];

  return (
    <div>
      <Hero title="Resources" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <Tabs defaultValue="crisis" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8" data-testid="tabs-resources">
            <TabsTrigger value="crisis" data-testid="tab-crisis">Crisis / Urgent</TabsTrigger>
            <TabsTrigger value="apps" data-testid="tab-apps">Apps / Tools</TabsTrigger>
            <TabsTrigger value="school" data-testid="tab-school">School Supports</TabsTrigger>
            <TabsTrigger value="community" data-testid="tab-community">Community</TabsTrigger>
          </TabsList>
          
          <TabsContent value="crisis" className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : crisisResources.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {crisisResources.map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    name={resource.name}
                    contact={resource.contact}
                    description={resource.description}
                    availability={resource.availability}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">No crisis resources available yet.</p>
            )}
          </TabsContent>
          
          <TabsContent value="apps" className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : appResources.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {appResources.map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    name={resource.name}
                    contact={resource.contact}
                    description={resource.description}
                    availability={resource.availability}
                    isExternal={resource.contact.startsWith('http')}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-6 border rounded-lg">
                  <h3 className="font-semibold mb-2">Mindshift CBT</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    App for managing anxiety using CBT strategies.
                  </p>
                  <p className="text-sm">
                    <strong>Availability:</strong> Free app (iOS/Android)
                  </p>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="font-semibold mb-2">Breathing Exercises</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Simple breathing pattern: Inhale 4 seconds, hold 4, exhale 4, hold 4. Repeat.
                  </p>
                  <p className="text-sm">
                    <strong>Availability:</strong> Practice anytime, anywhere
                  </p>
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="school" className="space-y-4">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : schoolResources.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {schoolResources.map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    name={resource.name}
                    contact={resource.contact}
                    description={resource.description}
                    availability={resource.availability}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-6 border rounded-lg">
                  <h3 className="font-semibold mb-2">Academic Accommodations</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Extensions, reduced workload, extra time - these are available if you need them.
                  </p>
                  <p className="text-sm">
                    <strong>How to access:</strong> Talk to guidance or your teachers. You don't need a diagnosis.
                  </p>
                </div>
                
                <div className="p-6 border rounded-lg">
                  <h3 className="font-semibold mb-2">Talking to Teachers About Stress</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    You can tell a teacher "I'm struggling" without giving details.
                  </p>
                  <p className="text-sm">
                    Most teachers will work with you if you communicate early.
                  </p>
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="community" className="space-y-4">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : communityResources.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {communityResources.map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    name={resource.name}
                    contact={resource.contact}
                    description={resource.description}
                    availability={resource.availability}
                  />
                ))}
              </div>
            ) : (
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-3">Faith & Community Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Want to talk to someone from your own background / faith?
                </p>
                <p className="text-sm">
                  Talk to <strong>[staff name]</strong> privately. We can connect you with community 
                  leaders, faith-based counselors, or cultural support services.
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  This is especially helpful for guys who don't want "therapy" but will talk to 
                  an imam, youth worker, or trusted community member.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
