import { IFolderService } from "./interfaces/folder-service-interface";
import { Folder } from "../models/Folder";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "~/environments/environment";

@Injectable()
export class FolderService implements IFolderService {
    baseUrl: string = environment.webapi_baseurl;
    constructor(private httpClient: HttpClient) {

    }

    async getAllFolders(): Promise<Folder[]> {
        try {
            let folders = await this.httpClient.get<Folder[]>(`${this.baseUrl}/folders`).toPromise();
            return folders;
        } catch (error) {
            throw error;
        }
        // return new Promise<Folder[]>((res, rej) => {
        //     setTimeout(() => {
        //         res([
        //             { id : 1,
        //             name: 'Test',
        //             places: [
        //                 { id: 'test1',
        //                 name: 'Test1',
        //                 latitude: 1.0,
        //                 longitude: 1.0}
        //             ]}
        //         ]);
        //     }, 2000);
        // });
    }

    async addFolder(folder: Folder): Promise<Folder> {
        try {
            let result = await this.httpClient.post<Folder>(`${this.baseUrl}/folder`, folder).toPromise();
            return result;
        } catch (error) {
            throw error;
        }
    }
}