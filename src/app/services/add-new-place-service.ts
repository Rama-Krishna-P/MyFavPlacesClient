import { IAddNewPlaceService } from "./interfaces/add-new-place-service-interface";
import { Place } from "../models/Place";
import { Injectable } from "@angular/core";
import { LocationService } from "./location-service";
import { Folder } from "../models/Folder";
import { AddNewPlaceModalService } from "./add-new-place-modal-service";
import { UUIDGenerationService } from "./uuid-generation-service";

@Injectable()
export class AddNewPlaceService implements IAddNewPlaceService {

    constructor(private addNewPlaceModalService: AddNewPlaceModalService, 
                private locationService: LocationService,
                private uuidGenerator: UUIDGenerationService) {

    }

    async addNewPlace(currentLocation: boolean, folder: Folder, viewContainerRef: any): Promise<Place> {
        try {
            let newPlace = await this.addNewPlaceCore(currentLocation, folder, viewContainerRef);
            return newPlace;

        } catch (error) {
            throw error;
        }
    }

    private async addNewPlaceCore(currentLocation: boolean, folder: Folder, viewContainerRef: any): Promise<Place> {
        let newPlace: Place = this.createNewPlace();

        try {
            if (currentLocation) {
                let location = await this.locationService.getCurrentLocation();
                newPlace.latitude = location.latitude;
                newPlace.longitude = location.longitude;
            }

            return this.addNewPlaceModalService.addNewPlace(newPlace, folder, viewContainerRef);
        } 
        catch (error) {
            throw error;
        }
    }

    private createNewPlace(): Place {
        return {
            id: this.uuidGenerator.getUUID(),
            latitude: 0.0,
            longitude: 0.0,
            name: ''
        }
    }
}