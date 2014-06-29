/**
 * Created by sskyu on 2014/06/27.
 */

declare module MyApp {
    export interface IUserList {
        list: IUser[]
    }

    interface IUser {
        code: string;
        nickname: string;
        level: number;
        message: string;
    }
}