import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Place } from "../models/Place";
import { LocationService } from "../services/location-service";
import { AddNewPlaceService } from "../services/add-new-place-service";
import { Folder } from "../models/Folder";

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacesComponent {
    @Input('data')
    places: Place[] = []

    @Input('folder')
    folder: Folder;
    
    constructor(private addNewPlaceService: AddNewPlaceService, private ref: ChangeDetectorRef) {

    }

    async addNewPlace(currentLocation: boolean) {
        try {
            let place: Place = await this.addNewPlaceService.addNewPlace(currentLocation, this.folder);
            this.places.push(place);
            this.ref.markForCheck();
        } catch (error) {

        }
    }


}