import { Component, Input, EventEmitter } from "@angular/core";
import { Place } from "../models/Place";
import { Folder } from "../models/Folder";
import { PlaceService } from "../services/place-service";

@Component({
    selector: 'app-new-place',
    templateUrl: "./new-place.component.html"
})
export class NewPlaceComponent {
    
    placeAdded: EventEmitter<Place> = new EventEmitter<Place>();
    addPlaceCancelled: EventEmitter<void> = new EventEmitter<void>();

    @Input('newPlace')
    newPlace: Place;

    @Input()
    selectedFolder: Folder;

    errorMessage: string = '';

    constructor(private placeService: PlaceService) {

    }

    async addPlace() {
        try {
            this.newPlace = await this.placeService.addPlace(this.newPlace, this.selectedFolder.id);
            this.placeAdded.emit(this.newPlace);
        } catch (error) {
            console.log(error);
            this.addPlaceCancelled.emit();          
        }    
    }

    close() {
        this.addPlaceCancelled.emit();
    }
}