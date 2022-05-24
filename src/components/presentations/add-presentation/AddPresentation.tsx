import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { PresentationInitValues } from "../../../data-access/presentations/model/form-values";
import { Presentation } from "../../../data-access/presentations/model/presentations.interface";

interface AddPresentationProps {
  submitFormHandler: (presentation: Presentation) => void;
}
export default function AddPresentation({
  submitFormHandler,
}: AddPresentationProps) {
  const initialFormValue: Presentation = JSON.parse(
    JSON.stringify(PresentationInitValues)
  );
  const [formValue, setFormValue] = useState(initialFormValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const modifyObj: any = {};
    const { name, type, value } = event.target;
    if (type === "checkbox") {
      modifyObj[name] = event.target.checked;
    } else if (name.includes("speaker")) {
      const speakerField = name.split("-")[1];
      modifyObj["speaker"] = { ...formValue.speaker };
      modifyObj["speaker"][speakerField] = value;
    } else {
      modifyObj[name] = value;
    }
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
        Add Presentation
      </Typography>
      <Typography sx={{ mb: 1, textAlign: "left" }} variant="body1">
        Presentation Name
      </Typography>
      <TextField
        required
        fullWidth
        id="presentation"
        name="presentation"
        value={formValue.presentation}
        onChange={handleInputChange}
      />
      <Typography sx={{ mb: 1, textAlign: "left" }} variant="body1">
        Details
      </Typography>
      <TextField
        fullWidth
        id="details"
        name="details"
        value={formValue.details}
        onChange={handleInputChange}
      />
      <Typography sx={{ mb: 1, textAlign: "left" }} variant="body1">
        Room
      </Typography>
      <TextField
        fullWidth
        type={"number"}
        id="room"
        name="room"
        value={formValue.room}
        onChange={handleInputChange}
      />
      <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }} variant="h6">
        Speaker
      </Typography>
      <Typography sx={{ mb: 1, textAlign: "left" }} variant="body1">
        Name
      </Typography>
      <TextField
        fullWidth
        id="speaker-name"
        name="speaker-name"
        value={formValue.speaker.name}
        onChange={handleInputChange}
      />
      <Typography sx={{ mb: 1, textAlign: "left" }} variant="body1">
        Bio
      </Typography>
      <TextField
        fullWidth
        id="speaker-bio"
        name="speaker-bio"
        value={formValue.speaker.bio}
        onChange={handleInputChange}
      />
      <Typography sx={{ mb: 1, textAlign: "left" }} variant="body1">
        Email
      </Typography>
      <TextField
        type={"email"}
        fullWidth
        id="speaker-email"
        name="speaker-email"
        value={formValue.speaker.email}
        onChange={handleInputChange}
      />
      <Typography sx={{ mb: 1, textAlign: "left" }} variant="body1">
        Company
      </Typography>
      <TextField
        fullWidth
        id="speaker-company"
        name="speaker-company"
        value={formValue.speaker.company}
        onChange={handleInputChange}
      />
      <Button
        sx={{ mt: 3 }}
        variant="contained"
        onClick={() => submitFormHandler(formValue)}
      >
        Add Presentation
      </Button>
    </Box>
  );
}
