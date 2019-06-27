import { Place } from "~/app/models/Place";

export interface IPlaceService {
    getAllPlaces(folderId: number) : Promise<Place[]>
    addPlace(place: Place, folderId: number) : Promise<Place>
}