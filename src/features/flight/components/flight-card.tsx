import React from "react";
import { Card, Box, CardActions, CardContent, Typography } from "@mui/material";
import { IFlight } from "../types";



interface Props {
  flight: IFlight;
}

export function FlightCard({ flight }: Props) {
  return (
    <Card sx={{ borderRadius: 3,  bgcolor: 'grey.100', minWidth: 300, maxHeight: '156px' }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" key="flightOrigin">Вылет: {flight.origin}</Typography>
          <Typography variant="h6" key="flightDestination">Прилет: {flight.destination}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {flight.layovers.length === 0 ? (
            <Typography>Без пересадок</Typography>
          ) : (
            <Typography>
              Количество пересадок: {flight.layovers.length}
            </Typography>
          )}
        </Box>
        <Box>
          {flight.layovers.length !== 0 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                bgcolor: "skyblue",
                borderRadius: 2,
                p: 0.5,
              }}
            >
              {flight.layovers.map((layover) => (
                <Typography variant="caption" key={layover.airport}>
                  {layover.airport}: {layover.duration}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <Typography>В пути: {flight.totalFlightTime}</Typography>
            <Typography>Цена: {flight.price} $</Typography>

      </CardActions>
    </Card>
  );
}
