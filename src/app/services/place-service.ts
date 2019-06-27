import { IPlaceService } from "./interfaces/place-service-interface";
import { Injectable } from "@angular/core";
import { Place } from "../models/Place";
import { HttpClient } from "@angular/common/http";
import { environment } from "~/environments/environment";

@Injectable()
export class PlaceService implements IPlaceService {
    baseUrl: string = environment.webapi_baseurl;
    constructor(private httpClient: HttpClient) {

    }

    async getAllPlaces(folderId: number): Promise<Place[]> {
        try {
            let places = await this.httpClient.get<Place[]>(`${this.baseUrl}/folder/${folderId}/places`).toPromise();
            return places;
        } catch (error) {
            throw error;
        }
    }

    async addPlace(place: Place, folderId: number): Promise<Place> {
        try {
            let newPlace = await this.httpClient.post<Place>(`${this.baseUrl}/folder/${folderId}/place`, place).toPromise();
            return newPlace;
        } catch (error) {
            throw error;
        }
    }
}