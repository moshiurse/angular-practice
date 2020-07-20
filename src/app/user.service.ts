import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    // eventEmitter = new EventEmitter<boolean>();
    eventEmitter = new Subject<boolean>();
}