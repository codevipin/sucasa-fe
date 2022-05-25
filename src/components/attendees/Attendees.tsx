import { Grid } from "@mui/material";
import { Attendee } from "../../data-access/attendees/model/attendees.interface";
import AttendeeCard from "./AttendeeCard";

interface AttendeesProps {
  attendeesList: Attendee[];
}

export default function Attendees({ attendeesList }: AttendeesProps) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {attendeesList.map((it) => (
        <Grid item xs={2} sm={4} md={4} key={it.id}>
          <AttendeeCard attendee={it} />
        </Grid>
      ))}
    </Grid>
  );
}
