import { Folder } from "~/app/models/Folder";

export interface IAddNewFolderService {
    addFolder(param: any) : Promise<Folder>;
}