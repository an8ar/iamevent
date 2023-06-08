import { IFlights } from "../features/flight"

export const sortByMin = (array: IFlights): IFlights => {
    return array.sort((a,b)=>a.price-b.price)
}
export const sortByMax = (array: IFlights): IFlights => {
    return array.sort((a,b)=>b.price-a.price)
}