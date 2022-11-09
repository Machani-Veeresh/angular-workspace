import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LogService {
    logService(msg: string): void {
        console.log(msg);
    }
}   