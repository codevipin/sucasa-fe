import React, { useEffect } from "react";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import PageLayout from "../../common/components/page-layout/PageLayout";

import { useActionCreators, useAppSelector } from "../../data-access/hooks";
import { selectPresentations } from "../../data-access/presentations/store/selectors";
import Presentations from "../../components/presentations/Presentations";

export default function Presentation() {
  const { fetchAllPresentationsAction } = useActionCreators();

  const presentations = useAppSelector(selectPresentations);
  useEffect(() => {
    fetchAllPresentationsAction();
  }, []);
  const drawer = (
    <div>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  // const content = (

  // );
  return (
    <PageLayout
      sidebar={drawer}
      content={<Presentations presentations={presentations} />}
    />
  );
}
