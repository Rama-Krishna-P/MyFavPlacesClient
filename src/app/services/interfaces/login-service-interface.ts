export interface ILoginService {
    login(userName: string, password: string) : Promise<void>;
}