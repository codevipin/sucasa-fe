import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { Attendee } from "../../data-access/attendees/model/attendees.interface";
import { AddAttendeeInitValues } from "../../data-access/attendees/model/form-values";

interface AddAttendeeProps {
  submitFormHandler: (presentation: Attendee) => void;
}
export default function AddAttendee({ submitFormHandler }: AddAttendeeProps) {
  const initialFormValue: Attendee = JSON.parse(
    JSON.stringify(AddAttendeeInitValues)
  );
  const [formValue, setFormValue] = useState(initialFormValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const modifyObj: any = {};
    const { name, value } = event.target;

    modifyObj[name] = value;

    setFormValue({
      ...formValue,
      ...modifyObj,
    });

    console.log("form value", formValue);
  };
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", padding: 2 }}
      component="form"
      noValidate
      autoComplete="off"
    >
      <Typography sx={{ mb: 1 }} variant="h5">
        Add Attendee
      </Typography>
      <Typography sx={{ mb: 1, textAlign: "left" }} variant="body1">
        Name
      </Typography>
      <TextField
        required
        fullWidth
        id="name"
        name="name"
        value={formValue.name}
        onChange={handleInputChange}
      />
      <Typography sx={{ mb: 1, textAlign: "left" }} variant="body1">
        Company
      </Typography>
      <TextField
        fullWidth
        id="company"
        name="company"
        value={formValue.company}
        onChange={handleInputChange}
      />
      <Typography sx={{ mb: 1, textAlign: "left" }} variant="body1">
        Email
      </Typography>
      <TextField
        type={"email"}
        fullWidth
        id="email"
        name="email"
        value={formValue.email}
        onChange={handleInputChange}
      />
      <Button
        sx={{ mt: 3 }}
        variant="contained"
        onClick={() => submitFormHandler(formValue)}
      >
        Add Attendee
      </Button>
    </Box>
  );
}
