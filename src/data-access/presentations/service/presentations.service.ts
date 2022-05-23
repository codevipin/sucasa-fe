import {
  ATTENDEE_URL,
  BASE_URL,
  PRESENTATION_URL,
} from "../../../common/models/api.constant";
import {
  AddAttendeeParam,
  Presentation,
} from "../model/presentations.interface";

class PresentationService {
  async fetchPresentations(): Promise<Presentation[]> {
    const response = await fetch(BASE_URL + PRESENTATION_URL);
    const json = await response.json();
    console.log(json);
    return json as Presentation[];
  }

  async fetchPresentation(id: number): Promise<Presentation> {
    const response = await fetch(`${BASE_URL}${PRESENTATION_URL}/${id}`);
    const json = await response.json();
    console.log(json);
    return json as Presentation;
  }

  async addPresentation(body: Presentation): Promise<Presentation> {
    const response = await fetch(`${BASE_URL}${PRESENTATION_URL}`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    return await response.json();
  }

  async addAttendee({
    presentationId,
    attendeeId,
  }: AddAttendeeParam): Promise<Presentation> {
    const url = `${BASE_URL}${PRESENTATION_URL}/${presentationId}${ATTENDEE_URL}/${attendeeId}`;
    const response = await fetch(url, {
      method: "PATCH",
    });
    return await response.json();
  }
}

const presentationService = new PresentationService();
export default presentationService;
