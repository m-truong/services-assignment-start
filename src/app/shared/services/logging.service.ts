import { Injectable, OnInit } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggingService implements OnInit {
  constructor() {}

  ngOnInit() {}

  logToConsoleForCounterService(whichActivityAction: string): void {
    console.log(`The <=${whichActivityAction}=> has increased by 1 count`);
  }
}
