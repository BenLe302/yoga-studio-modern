export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  Programs = "programs",
  Coaches = "coaches",
  Schedule = "schedule",
  Pricing = "pricing",
  Shop = "shop",
  Blog = "blog",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
  level: "beginner" | "intermediate" | "advanced";
  duration: number;
  instructor: string;
  price: number;
}

export interface ProgramType {
  id: string;
  name: string;
  description: string;
  image: string;
  duration: number; // in weeks
  level: "beginner" | "intermediate" | "advanced";
  price: number;
  features: string[];
}

export interface CoachType {
  id: string;
  name: string;
  image: string;
  specialties: string[];
  experience: number; // in years
  bio: string;
  certifications: string[];
  rating: number;
  reviews: number;
}

export interface ScheduleType {
  id: string;
  className: string;
  instructor: string;
  time: string;
  duration: number; // in minutes
  level: "beginner" | "intermediate" | "advanced";
  spotsAvailable: number;
  totalSpots: number;
  price: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: "month" | "year";
  features: string[];
  popular?: boolean;
  description: string;
}

export interface ChallengeType {
  id: string;
  name: string;
  description: string;
  image: string;
  duration: number; // in days
  difficulty: "beginner" | "intermediate" | "advanced";
  participants: number;
  startDate: string;
  endDate: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishedAt: string;
  readTime: number; // in minutes
  category: string;
  tags: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "mats" | "blocks" | "apparel" | "accessories";
  inStock: boolean;
  rating: number;
  reviews: number;
}