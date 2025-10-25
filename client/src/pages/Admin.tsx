import { useState } from "react";
import Hero from "@/components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Pencil, Trash2, Plus } from "lucide-react";
import type { StaffMember, Resource, InsertStaffMember, InsertResource } from "@shared/schema";

function StaffManagement() {
  const { data: staff, isLoading } = useQuery<StaffMember[]>({
    queryKey: ["/api/staff"],
  });
  const { toast } = useToast();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<InsertStaffMember>>({});
  const [isAdding, setIsAdding] = useState(false);

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<InsertStaffMember> }) => {
      return await apiRequest(`/api/staff/${id}`, "PUT", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/staff"] });
      setEditingId(null);
      setFormData({});
      toast({ title: "Staff member updated successfully" });
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: InsertStaffMember) => {
      return await apiRequest("/api/staff", "POST", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/staff"] });
      setIsAdding(false);
      setFormData({});
      toast({ title: "Staff member added successfully" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      return await apiRequest(`/api/staff/${id}`, "DELETE");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/staff"] });
      toast({ title: "Staff member deleted successfully" });
    },
  });

  const handleEdit = (member: StaffMember) => {
    setEditingId(member.id);
    setFormData({
      name: member.name,
      role: member.role,
      room: member.room,
      hours: member.hours,
      description: member.description,
    });
  };

  const handleSave = () => {
    if (editingId && formData.name && formData.role && formData.room && formData.hours && formData.description) {
      updateMutation.mutate({ id: editingId, data: formData as InsertStaffMember });
    }
  };

  const handleAdd = () => {
    console.log('handleAdd called', formData);
    if (formData.name && formData.role && formData.room && formData.hours && formData.description) {
      console.log('Validation passed, creating staff member');
      createMutation.mutate(formData as InsertStaffMember);
    } else {
      console.log('Validation failed', {
        hasName: !!formData.name,
        hasRole: !!formData.role,
        hasRoom: !!formData.room,
        hasHours: !!formData.hours,
        hasDescription: !!formData.description
      });
      toast({ 
        title: "Please fill in all fields", 
        variant: "destructive" 
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Staff Directory</h2>
        <Button onClick={() => setIsAdding(true)} data-testid="button-add-staff">
          <Plus className="h-4 w-4 mr-2" />
          Add Staff Member
        </Button>
      </div>

      {isAdding && (
        <Card>
          <CardHeader>
            <CardTitle>New Staff Member</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="new-name">Name</Label>
              <Input
                id="new-name"
                value={formData.name || ""}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                data-testid="input-staff-name"
              />
            </div>
            <div>
              <Label htmlFor="new-role">Role</Label>
              <Input
                id="new-role"
                value={formData.role || ""}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                data-testid="input-staff-role"
              />
            </div>
            <div>
              <Label htmlFor="new-room">Room/Location</Label>
              <Input
                id="new-room"
                value={formData.room || ""}
                onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                data-testid="input-staff-room"
              />
            </div>
            <div>
              <Label htmlFor="new-hours">Hours</Label>
              <Input
                id="new-hours"
                value={formData.hours || ""}
                onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                data-testid="input-staff-hours"
              />
            </div>
            <div>
              <Label htmlFor="new-description">Description</Label>
              <Textarea
                id="new-description"
                value={formData.description || ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                data-testid="input-staff-description"
              />
            </div>
          </CardContent>
          <CardFooter className="gap-2">
            <Button onClick={handleAdd} disabled={createMutation.isPending} data-testid="button-save-new-staff">
              {createMutation.isPending && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Add
            </Button>
            <Button variant="outline" onClick={() => { setIsAdding(false); setFormData({}); }} data-testid="button-cancel-new-staff">
              Cancel
            </Button>
          </CardFooter>
        </Card>
      )}

      <div className="grid gap-4">
        {staff?.map((member) => (
          <Card key={member.id}>
            {editingId === member.id ? (
              <>
                <CardHeader>
                  <CardTitle>Edit Staff Member</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Name</Label>
                    <Input
                      value={formData.name || ""}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Role</Label>
                    <Input
                      value={formData.role || ""}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Room/Location</Label>
                    <Input
                      value={formData.room || ""}
                      onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Hours</Label>
                    <Input
                      value={formData.hours || ""}
                      onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={formData.description || ""}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button onClick={handleSave} disabled={updateMutation.isPending}>
                    {updateMutation.isPending && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                    Save
                  </Button>
                  <Button variant="outline" onClick={() => { setEditingId(null); setFormData({}); }}>
                    Cancel
                  </Button>
                </CardFooter>
              </>
            ) : (
              <>
                <CardHeader>
                  <CardTitle>{member.role}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Name:</strong> {member.name}</p>
                  <p><strong>Room:</strong> {member.room}</p>
                  <p><strong>Hours:</strong> {member.hours}</p>
                  <p><strong>Description:</strong> {member.description}</p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(member)} data-testid={`button-edit-staff-${member.id}`}>
                    <Pencil className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => deleteMutation.mutate(member.id)}
                    disabled={deleteMutation.isPending}
                    data-testid={`button-delete-staff-${member.id}`}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </CardFooter>
              </>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

function ResourceManagement() {
  const { data: resources, isLoading } = useQuery<Resource[]>({
    queryKey: ["/api/resources"],
  });
  const { toast } = useToast();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<InsertResource>>({});
  const [isAdding, setIsAdding] = useState(false);

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<InsertResource> }) => {
      return await apiRequest(`/api/resources/${id}`, "PUT", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/resources"] });
      setEditingId(null);
      setFormData({});
      toast({ title: "Resource updated successfully" });
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: InsertResource) => {
      return await apiRequest("/api/resources", "POST", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/resources"] });
      setIsAdding(false);
      setFormData({});
      toast({ title: "Resource added successfully" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      return await apiRequest(`/api/resources/${id}`, "DELETE");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/resources"] });
      toast({ title: "Resource deleted successfully" });
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Resources</h2>
        <Button onClick={() => setIsAdding(true)} data-testid="button-add-resource">
          <Plus className="h-4 w-4 mr-2" />
          Add Resource
        </Button>
      </div>

      {isAdding && (
        <Card>
          <CardHeader>
            <CardTitle>New Resource</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="new-category">Category</Label>
              <Input
                id="new-category"
                placeholder="crisis, apps, school, or community"
                value={formData.category || ""}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                data-testid="input-resource-category"
              />
            </div>
            <div>
              <Label htmlFor="new-res-name">Name</Label>
              <Input
                id="new-res-name"
                value={formData.name || ""}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                data-testid="input-resource-name"
              />
            </div>
            <div>
              <Label htmlFor="new-contact">Contact (phone number, URL, or text)</Label>
              <Input
                id="new-contact"
                value={formData.contact || ""}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                data-testid="input-resource-contact"
              />
            </div>
            <div>
              <Label htmlFor="new-res-description">Description</Label>
              <Textarea
                id="new-res-description"
                value={formData.description || ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                data-testid="input-resource-description"
              />
            </div>
            <div>
              <Label htmlFor="new-availability">Availability</Label>
              <Input
                id="new-availability"
                placeholder="e.g., 24/7, Weekdays 9-5"
                value={formData.availability || ""}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                data-testid="input-resource-availability"
              />
            </div>
          </CardContent>
          <CardFooter className="gap-2">
            <Button 
              onClick={() => {
                if (formData.category && formData.name && formData.contact && formData.description && formData.availability) {
                  createMutation.mutate(formData as InsertResource);
                }
              }} 
              disabled={createMutation.isPending}
              data-testid="button-save-new-resource"
            >
              {createMutation.isPending && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Add
            </Button>
            <Button variant="outline" onClick={() => { setIsAdding(false); setFormData({}); }} data-testid="button-cancel-new-resource">
              Cancel
            </Button>
          </CardFooter>
        </Card>
      )}

      <div className="grid gap-4">
        {resources?.map((resource) => (
          <Card key={resource.id}>
            <CardHeader>
              <CardTitle>{resource.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Category:</strong> {resource.category}</p>
              <p><strong>Contact:</strong> {resource.contact}</p>
              <p><strong>Description:</strong> {resource.description}</p>
              <p><strong>Availability:</strong> {resource.availability}</p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button 
                variant="destructive" 
                size="sm" 
                onClick={() => deleteMutation.mutate(resource.id)}
                disabled={deleteMutation.isPending}
                data-testid={`button-delete-resource-${resource.id}`}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function Admin() {
  return (
    <div>
      <Hero title="Admin Panel" subtitle="Manage staff directory and resources" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <Tabs defaultValue="staff" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="staff" data-testid="tab-staff">Staff Directory</TabsTrigger>
            <TabsTrigger value="resources" data-testid="tab-resources">Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="staff">
            <StaffManagement />
          </TabsContent>
          
          <TabsContent value="resources">
            <ResourceManagement />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
