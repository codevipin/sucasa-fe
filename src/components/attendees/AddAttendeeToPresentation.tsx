import {
  Alert,
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Attendee } from "../../data-access/attendees/model/attendees.interface";
import { Presentation } from "../../data-access/presentations/model/presentations.interface";

interface Props {
  attendeesList: Attendee[];
  presentations: Presentation[];
  addToPresentation: (attendee: Attendee, presentation: Presentation) => void;
}

export default function AddAttendeeToPresentation({
  attendeesList,
  presentations,
  addToPresentation,
}: Props) {
  const formValues: { presentation: Presentation; attendee: Attendee } = {
    presentation: {} as Presentation,
    attendee: {} as Attendee,
  };

  const [isError, setError] = useState(false);

  const addToPresentationHandler = () => {
    const isAttendeeAlreadyPresent = formValues.presentation.attendees.some(
      (it) => it.id === formValues.attendee.id
    );
    if (isAttendeeAlreadyPresent) {
      setError(true);
      return;
    }
    addToPresentation(formValues.attendee, formValues.presentation);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mb: 5 }}>
      <Typography sx={{ mb: 1 }} variant="h5">
        Attendee to Presentation
      </Typography>
      <Autocomplete
        disablePortal
        id="attendee-autocomplete"
        getOptionLabel={(option) => (option as Attendee).name}
        options={attendeesList}
        sx={{ width: 300 }}
        onChange={(_, value: any) => {
          setError(false);
          formValues.attendee = value;
        }}
        renderInput={(params) => <TextField {...params} label="Attendee" />}
      />
      <Autocomplete
        disablePortal
        id="presentation-autocompelete"
        getOptionLabel={(option) => (option as Presentation).presentation}
        options={presentations}
        sx={{ width: 300, mt: 3, mb: 2 }}
        renderInput={(params) => <TextField {...params} label="Presentation" />}
        onChange={(_, value: any) => {
          setError(false);
          formValues.presentation = value;
        }}
      />
      {isError && (
        <Alert severity="error">
          Attendee is already added to this presentation
        </Alert>
      )}
      <Button
        sx={{ mt: 3 }}
        variant="contained"
        onClick={addToPresentationHandler}
      >
        Add To Presentation
      </Button>
    </Box>
  );
}
