import { ATTENDEE_URL, BASE_URL } from "../../../common/models/api.constant";
import { Attendee } from "../model/attendees.interface";

class AttendeesService {
  async fetchAttendees(): Promise<Attendee[]> {
    const response = await fetch(BASE_URL + ATTENDEE_URL);
    const json = await response.json();
    console.log(json);
    return json as Attendee[];
  }

  async addAttendee(body: Attendee): Promise<Attendee> {
    const response = await fetch(BASE_URL + ATTENDEE_URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  }
}

const attendeesService = new AttendeesService();

export default attendeesService;
