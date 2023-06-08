import { IFlights } from "../features/flight";
import data from "../data/fly.json";

export const filter = (
  origin: string,
  destination: string,
  stopsQuantity: number
): IFlights => {
  const filteredByOrigin = data.flights.filter((flight) =>
    flight.origin.startsWith(origin)
  );

  const filteredByDestination = filteredByOrigin.filter((flight) =>
    flight.destination.startsWith(destination)
  );

  const filteredByStops = filteredByDestination.filter(
    (flight) => flight.layovers.length === stopsQuantity
  );

  return filteredByStops;
};
