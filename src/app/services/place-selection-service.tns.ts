import { Injectable } from "@angular/core";
import { Place } from "../models/Place";
import { openUrl } from "tns-core-modules/utils/utils";

@Injectable()
export class PlaceSelectionService {
    placeSelected(selectedPlace: Place) {
        openUrl(`https://www.google.com/maps/place/${selectedPlace.latitude},${selectedPlace.longitude}`)
    }
}