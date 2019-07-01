import * as uuid from "uuid";

export class UUIDGenerationService {
    getUUID() : string {
        return uuid();
    }
}