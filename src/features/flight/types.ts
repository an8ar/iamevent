interface Layover {
    airport: string,
    duration: string,
    flightTime: string
}

export interface IFlight {
    id: number, 
    origin: string, 
    destination: string, 
    price: number,
    stops: number,
    layovers: Layover[],
    totalFlightTime: string
}



export type IFlights = IFlight[]