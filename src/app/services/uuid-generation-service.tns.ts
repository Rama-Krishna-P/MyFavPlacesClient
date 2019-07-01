import * as plugin from "nativescript-uuid";

export class UUIDGenerationService {
    getUUID() : string {
        return plugin.getUUID();
    }
}