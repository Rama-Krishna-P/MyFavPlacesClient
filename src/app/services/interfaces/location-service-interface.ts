import { CurrentLocation } from "~/app/models/CurrentLocation";

export interface ILocationService {
    getCurrentLocation() : Promise<CurrentLocation>
}