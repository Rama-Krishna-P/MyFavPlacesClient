import { Place } from "~/app/models/Place";
import { Folder } from "~/app/models/Folder";

export interface IAddNewPlaceService {
    addNewPlace(currentLocation: boolean, folder: Folder, viewContainerRef: any) : Promise<Place>
}