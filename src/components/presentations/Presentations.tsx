import { Grid } from "@mui/material";
import React from "react";
import { Presentation } from "../../data-access/presentations/model/presentations.interface";
import PresentationCard from "./PresentationCard";
interface PresentationsProps {
  presentations: Presentation[];
}

export default function Presentations({ presentations }: PresentationsProps) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {presentations.map((it) => (
        <Grid item xs={2} sm={4} md={4} key={it.id}>
          <PresentationCard presentation={it} />
        </Grid>
      ))}
    </Grid>
  );
}
