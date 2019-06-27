import { ILocationService } from "./interfaces/location-service-interface";
import { CurrentLocation } from "../models/CurrentLocation";

export class LocationService implements ILocationService {

    getCurrentLocation(): Promise<CurrentLocation> {
        return new Promise((res, rej) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((location) => {
                    res({
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        accuracy: location.coords.accuracy,
                    });
                }, error => {
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            rej("User denied the request for Geolocation.");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            rej("Location information is unavailable.");
                            break;
                        case error.TIMEOUT:
                            rej("The request to get user location timed out.");
                            break;
                    }
                });
            }
            else {
                rej('Geolocation is not supported by this browser.')
            }
        });
    }
}