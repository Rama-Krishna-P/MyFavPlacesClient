import { Place } from "~/app/models/Place";
import { Folder } from "~/app/models/Folder";

export interface IAddNewPlaceService {
    addNewPlace(currentLocation: boolean, folder: Folder) : Promise<Place>
}