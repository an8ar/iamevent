import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { Filters } from "../features/filter";
import { Flights, IFlights } from "../features/flight";
import data from "../data/fly.json";
import { SelectSorting } from "../components/select-sorting";

export function Home() {
  const [flights, setFlights] = useState<IFlights>(data.flights);

  const cancelFilters = () => {
    setFlights(data.flights);
    window.location.reload();
  };

  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <BoxStyle >
        <SelectSorting setFlights={setFlights} flights={flights} />
        <Filters setFlights={setFlights} flights={flights} />
        <Button onClick={cancelFilters}>Отмена</Button>
      </BoxStyle>

      <Flights flights={flights} />
    </Box>
  );
}

const BoxStyle = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: 'column', alignItems: 'center',
    [theme.breakpoints.down("md")]: {
        width: '100%',
    },
  }));
  