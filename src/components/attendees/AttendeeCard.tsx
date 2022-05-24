import { Card, CardContent, Typography, Box } from "@mui/material";
import React from "react";
import { Attendee } from "../../data-access/attendees/model/attendees.interface";
interface AttendeeCardProps {
  attendee: Attendee;
}
export default function AttendeeCard({ attendee }: AttendeeCardProps) {
  return (
    <Card
      sx={{
        minWidth: 275,
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h6">{attendee.name}</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              mt: 1.5,
            }}
          >
            <Typography
              sx={{
                mb: 1,
              }}
              variant="body1"
            >
              Company
            </Typography>
            <Typography variant="body2">{attendee.company}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              mt: 1.5,
            }}
          >
            <Typography
              sx={{
                mb: 1,
              }}
              variant="body1"
            >
              Email
            </Typography>
            <Typography variant="body2">{attendee.email}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
