import { ILocationService } from "./interfaces/location-service-interface";
import { getCurrentLocation } from "nativescript-geolocation";
import { CurrentLocation } from "../models/CurrentLocation";

export class LocationService implements ILocationService {
    async getCurrentLocation(): Promise<CurrentLocation> {
        try {
            let location = await getCurrentLocation({ desiredAccuracy: 10 });
            return {
                latitude: location.latitude,
                longitude: location.longitude,
                accuracy: 0,
            }
        } catch (error) {
            throw error;
        }

    }
}