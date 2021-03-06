import { Presentation } from "../model/presentations.interface";

export const PRESENTATIONS_MOCK: Presentation[] = [
  {
    presentation: "How to find great investment properties",
    id: 2,
    details: "Finding properties in a competitive market and winning offers.",
    room: 200,
    speaker: {
      name: "Casey Evans",
      company: "Real Estate co.",
      email: "realestate@investor.com",
      bio: "One of the most famous investors in the world.",
    },
    attendees: [
      {
        name: "John Smith",
        company: "Homes Inc.",
        email: "john@homesinc.com",
        registered: "2022-04-24T02:15:04 +07:00",
      },
      {
        name: "Sander Mitchell",
        company: "Houses Corp.",
        email: "sander@housescorp.com",
        registered: "2022-04-21T02:54:39 +07:00",
      },
      {
        name: "Alfred Green",
        company: "Properties LLC",
        email: "alfredg@propertiesllc.com",
        registered: "2022-04-22T06:35:29 +07:00",
      },
    ],
  },
  {
    presentation: "How to earn more from your investment properties",
    id: 3,
    details: "Maximizing your rental income and minimizing your costs",
    room: 343,
    speaker: {
      name: "Melody Smith",
      company: "Property Management Inc.",
      email: "melodys@propertymgmtinc.com",
      bio: "Best property manager in the world.",
    },
    attendees: [],
  },
];
