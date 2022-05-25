import { Box, Divider } from "@mui/material";
import React, { useEffect } from "react";
import PageLayout from "../../common/components/page-layout/PageLayout";
import AddAttendee from "../../components/attendees/AddAttendee";
import AddAttendeeToPresentation from "../../components/attendees/AddAttendeeToPresentation";
import Attendees from "../../components/attendees/Attendees";
import { Attendee } from "../../data-access/attendees/model/attendees.interface";
import { selectAttendees } from "../../data-access/attendees/store/selector";

import { useActionCreators, useAppSelector } from "../../data-access/hooks";
import { Presentation } from "../../data-access/presentations/model/presentations.interface";
import { selectPresentations } from "../../data-access/presentations/store/selectors";

export default function AttendeePage() {
  const {
    fetchAllAttendeesAction,
    addAttendeesAction,
    fetchAllPresentationsAction,
    addAttendeeToPresentationAction,
  } = useActionCreators();
  const attendeesList = useAppSelector(selectAttendees);
  const presentations = useAppSelector(selectPresentations);
  const addAttendeeHandler = (attendee: Attendee) => {
    addAttendeesAction(attendee);
  };
  const addToPresentation = (
    attendee: Attendee,
    presentation: Presentation
  ) => {
    console.log(attendee, presentation);
    if (!presentation?.id || !attendee?.id) return;
    addAttendeeToPresentationAction(presentation.id, attendee.id);
  };
  useEffect(() => {
    fetchAllAttendeesAction();
    fetchAllPresentationsAction();
  }, []);

  const AttendeeSidebar = (
    <Box sx={{ mt: 3, padding: 2 }}>
      <AddAttendeeToPresentation
        attendeesList={attendeesList}
        presentations={presentations}
        addToPresentation={addToPresentation}
      />
      <Divider />
      <AddAttendee submitFormHandler={addAttendeeHandler} />
    </Box>
  );

  return (
    <PageLayout
      sidebar={AttendeeSidebar}
      content={<Attendees attendeesList={attendeesList} />}
    />
  );
}
