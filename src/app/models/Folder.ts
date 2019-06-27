import { Place } from "./Place";

export interface Folder {
    id: number,
    name: string,
    places: Place[],
}