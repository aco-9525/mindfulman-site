import { 
  type User, 
  type InsertUser,
  type StaffMember,
  type InsertStaffMember,
  type Resource,
  type InsertResource,
  type Faq,
  type InsertFaq
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Staff Members
  getAllStaffMembers(): Promise<StaffMember[]>;
  getStaffMember(id: string): Promise<StaffMember | undefined>;
  createStaffMember(staff: InsertStaffMember): Promise<StaffMember>;
  updateStaffMember(id: string, staff: Partial<InsertStaffMember>): Promise<StaffMember | undefined>;
  deleteStaffMember(id: string): Promise<boolean>;

  // Resources
  getAllResources(): Promise<Resource[]>;
  getResourcesByCategory(category: string): Promise<Resource[]>;
  getResource(id: string): Promise<Resource | undefined>;
  createResource(resource: InsertResource): Promise<Resource>;
  updateResource(id: string, resource: Partial<InsertResource>): Promise<Resource | undefined>;
  deleteResource(id: string): Promise<boolean>;

  // FAQs
  getAllFaqs(): Promise<Faq[]>;
  getFaq(id: string): Promise<Faq | undefined>;
  createFaq(faq: InsertFaq): Promise<Faq>;
  updateFaq(id: string, faq: Partial<InsertFaq>): Promise<Faq | undefined>;
  deleteFaq(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private staffMembers: Map<string, StaffMember>;
  private resources: Map<string, Resource>;
  private faqs: Map<string, Faq>;

  constructor() {
    this.users = new Map();
    this.staffMembers = new Map();
    this.resources = new Map();
    this.faqs = new Map();
    this.seedDefaultData();
  }

  private seedDefaultData() {
    // Seed default staff members
    const defaultStaff: InsertStaffMember[] = [
      {
        name: "[Teacher Name]",
        role: "Mental Health Contact Teacher",
        room: "Room ###",
        hours: "Before school, Lunch, After school",
        description: "Quick check-in, help you figure out next steps."
      },
      {
        name: "[Counselor Name]",
        role: "Guidance Counsellor",
        room: "Guidance Office / Room ###",
        hours: "By appointment or drop-in",
        description: "School stress, anxiety about marks, post-secondary pressure, talking to parents."
      },
      {
        name: "[Staff Name]",
        role: "Child & Youth Worker",
        room: "Room ###",
        hours: "Monday-Friday, 8am-3pm",
        description: "Family stress, safety concerns, serious stuff. Confidential support."
      }
    ];

    defaultStaff.forEach(staff => {
      const id = randomUUID();
      this.staffMembers.set(id, { ...staff, id });
    });

    // Seed default resources
    const defaultResources: InsertResource[] = [
      {
        category: "crisis",
        name: "988 Suicide Crisis Helpline",
        contact: "988",
        description: "24/7 crisis support for anyone experiencing suicidal thoughts or emotional distress.",
        availability: "24/7, Canada-wide - Call or text"
      },
      {
        category: "crisis",
        name: "Kids Help Phone",
        contact: "Text CONNECT to 686868",
        description: "Confidential support for youth. Text, call, or live chat with counselors.",
        availability: "24/7, Free and confidential"
      },
      {
        category: "crisis",
        name: "Emergency Services",
        contact: "911",
        description: "For immediate danger or medical emergencies.",
        availability: "24/7"
      }
    ];

    defaultResources.forEach(resource => {
      const id = randomUUID();
      this.resources.set(id, { ...resource, id });
    });
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Staff Member methods
  async getAllStaffMembers(): Promise<StaffMember[]> {
    return Array.from(this.staffMembers.values());
  }

  async getStaffMember(id: string): Promise<StaffMember | undefined> {
    return this.staffMembers.get(id);
  }

  async createStaffMember(staff: InsertStaffMember): Promise<StaffMember> {
    const id = randomUUID();
    const staffMember: StaffMember = { ...staff, id };
    this.staffMembers.set(id, staffMember);
    return staffMember;
  }

  async updateStaffMember(id: string, staff: Partial<InsertStaffMember>): Promise<StaffMember | undefined> {
    const existing = this.staffMembers.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...staff };
    this.staffMembers.set(id, updated);
    return updated;
  }

  async deleteStaffMember(id: string): Promise<boolean> {
    return this.staffMembers.delete(id);
  }

  // Resource methods
  async getAllResources(): Promise<Resource[]> {
    return Array.from(this.resources.values());
  }

  async getResourcesByCategory(category: string): Promise<Resource[]> {
    return Array.from(this.resources.values()).filter(r => r.category === category);
  }

  async getResource(id: string): Promise<Resource | undefined> {
    return this.resources.get(id);
  }

  async createResource(resource: InsertResource): Promise<Resource> {
    const id = randomUUID();
    const newResource: Resource = { ...resource, id };
    this.resources.set(id, newResource);
    return newResource;
  }

  async updateResource(id: string, resource: Partial<InsertResource>): Promise<Resource | undefined> {
    const existing = this.resources.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...resource };
    this.resources.set(id, updated);
    return updated;
  }

  async deleteResource(id: string): Promise<boolean> {
    return this.resources.delete(id);
  }

  // FAQ methods
  async getAllFaqs(): Promise<Faq[]> {
    return Array.from(this.faqs.values());
  }

  async getFaq(id: string): Promise<Faq | undefined> {
    return this.faqs.get(id);
  }

  async createFaq(faq: InsertFaq): Promise<Faq> {
    const id = randomUUID();
    const newFaq: Faq = { ...faq, id };
    this.faqs.set(id, newFaq);
    return newFaq;
  }

  async updateFaq(id: string, faq: Partial<InsertFaq>): Promise<Faq | undefined> {
    const existing = this.faqs.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...faq };
    this.faqs.set(id, updated);
    return updated;
  }

  async deleteFaq(id: string): Promise<boolean> {
    return this.faqs.delete(id);
  }
}

export const storage = new MemStorage();
