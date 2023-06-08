import React from "react";
import { IFlights } from "../types";
import { FlightCard } from "./flight-card";
import { Box, styled } from "@mui/material";

interface Props {
  flights: IFlights;
}

export function Flights({ flights }: Props) {
  return (
    <BoxStyle>
      {flights.map((flight) => (
        <FlightCard flight={flight} key={flight.id} />
      ))}
      {flights.length===0 && <Box>Пусто :\ </Box>}
    </BoxStyle>
  );
}

const BoxStyle = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: " 1fr",
  marginTop: theme.spacing(2),
  gap: theme.spacing(3),
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 1fr",
  },
}));
