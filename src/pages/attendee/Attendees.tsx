import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import PageLayout from "../../common/components/page-layout/PageLayout";
import AddAttendee from "../../components/attendees/AddAttendee";
import Attendees from "../../components/attendees/Attendees";
import { Attendee } from "../../data-access/attendees/model/attendees.interface";
import { selectAttendees } from "../../data-access/attendees/store/selector";

import { useActionCreators, useAppSelector } from "../../data-access/hooks";

export default function AttendeePage() {
  const { fetchAllAttendeesAction, addAttendeesAction } = useActionCreators();
  const attendeesList = useAppSelector(selectAttendees);
  const addAttendeeHandler = (attendee: Attendee) => {
    addAttendeesAction(attendee);
  };
  useEffect(() => {
    fetchAllAttendeesAction();
  }, []);

  return (
    <PageLayout
      sidebar={<AddAttendee submitFormHandler={addAttendeeHandler} />}
      content={<Attendees attendeesList={attendeesList} />}
    />
  );
}
