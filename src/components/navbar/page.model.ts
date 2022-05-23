export interface Page {
  name: string;
  route: string;
}

export const PAGE: Page[] = [
  { name: "Presentations", route: "/presentations" },
  { name: "Attendees", route: "/attendees" },
];
