import { Attendee } from "./Attendee";

export interface Events {
    id: string;
    title: string;
    date: string;
    category: string;
    description: string;
    city: string;
    venue: string;
    hostedBy: string;
    attendees: Attendee[];
  }
