import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import PageLayout from "../../common/components/page-layout/PageLayout";
import Attendees from "../../components/attendees/Attendees";
import { selectAttendees } from "../../data-access/attendees/store/selector";

import { useActionCreators, useAppSelector } from "../../data-access/hooks";

export default function Attendee() {
  const { fetchAllAttendeesAction, addAttendeesAction } = useActionCreators();
  const attendees = useAppSelector(selectAttendees);
  useEffect(() => {
    fetchAllAttendeesAction();
  }, []);
  const sidebar = <Typography>Sidebar</Typography>;
  return (
    <PageLayout
      sidebar={sidebar}
      content={<Attendees attendees={attendees} />}
    />
  );
}
