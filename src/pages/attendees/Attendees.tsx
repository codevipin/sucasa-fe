import React, { useEffect } from "react";

import { useActionCreators } from "../../data-access/hooks";

export default function Attendees() {
  const { fetchAllAttendeesAction, addAttendeesAction } = useActionCreators();
  useEffect(() => {
    fetchAllAttendeesAction();
  }, []);
  return <div>Attendees</div>;
}
