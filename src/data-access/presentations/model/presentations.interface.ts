import { Attendee } from "../../attendees/model/attendees.interface";

export interface Presentation {
  presentation: string;
  id: number;
  details: string;
  room: number;
  speaker: Speaker;
  attendees: Attendee[];
}

export interface Speaker {
  name: string;
  company: string;
  email: string;
  bio: string;
}

export interface AddAttendeeParam {
  presentationId: number;
  attendeeId: number;
}
