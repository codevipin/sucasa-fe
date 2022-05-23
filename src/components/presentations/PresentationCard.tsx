import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Collapse,
  IconButton,
  IconButtonProps,
  styled,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { Presentation } from "../../data-access/presentations/model/presentations.interface";
interface PresentationCardProps {
  presentation: Presentation;
}
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function PresentationCard({
  presentation,
}: PresentationCardProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card
      sx={{
        minWidth: 275,
        minHeight: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h6">{presentation.presentation}</Typography>
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
              Room
            </Typography>
            <Typography variant="body2">{presentation.room}</Typography>
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
              Attendees
            </Typography>
            <Typography variant="body2">
              {presentation.attendees?.length || 0}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ textAlign: "left" }}>
          <Typography variant="h6">Detail:</Typography>
          <Typography paragraph sx={{ textAlign: "left" }}>
            {presentation.details}
          </Typography>
          <Typography variant="h6">Speaker</Typography>
          <Typography>Name: {presentation?.speaker?.name || "-"}</Typography>

          <Typography>Bio: {presentation.speaker?.bio || "-"}</Typography>
          <Typography>
            Company: {presentation.speaker?.company || "-"}
          </Typography>

          {!!presentation.attendees?.length && (
            <>
              <Typography sx={{ mt: 1 }} variant="h6">
                Attendees
              </Typography>
              {presentation.attendees.map((it) => (
                <Typography key={it.email}>{it.name}</Typography>
              ))}
            </>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}
