import { Folder } from "~/app/models/Folder";

export interface IAddNewFolderService {
    addFolder() : Promise<Folder>;
}