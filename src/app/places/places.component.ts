import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, ViewContainerRef } from "@angular/core";
import { Place } from "../models/Place";
import { AddNewPlaceService } from "../services/add-new-place-service";
import { Folder } from "../models/Folder";
import { Router } from "@angular/router";
import { PlaceSelectionService } from "../services/place-selection-service";

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
    
    constructor(private addNewPlaceService: AddNewPlaceService, 
                private ref: ChangeDetectorRef, 
                private router: Router,
                private placeSelectionService: PlaceSelectionService,
                private viewContainerRef: ViewContainerRef) {
        if (this.router.getCurrentNavigation()) {
            this.folder = this.router.getCurrentNavigation().extras.state.selectedFolder;
            this.places = this.folder.places;
        }
    }

    async addNewPlace(currentLocation: boolean) {
        try {
            console.log('here');
            let place: Place = await this.addNewPlaceService.addNewPlace(currentLocation, this.folder, this.viewContainerRef);
            if (place) {
                this.places.push(place);
                this.ref.markForCheck();
            }
        } catch (error) {

        }
    }

    async placeSelected(selectedPlace: any) {
        this.placeSelectionService.placeSelected(selectedPlace);
    }

}