import { Injectable, OnInit } from "@angular/core";
import { LoggingService } from "./logging.service";
import { UsersDataService } from "./users-data.service";

@Injectable({
  providedIn: "root",
})
export class CounterService implements OnInit {
  constructor(
    private usersDataService: UsersDataService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {}

  numActiveToInactiveActions: number = 0;
  numInactiveToActiveActions: number = 0;

  // 2. Create 2 separate counters for active->inactive and inactive-> active actions
  increaseNumberActions(whichActivityAction: string): void {
    whichActivityAction === "numActiveToInactiveActions"
      ? (this.numActiveToInactiveActions += 1)
      : (this.numInactiveToActiveActions += 1);
    this.loggingService.logToConsoleForCounterService(whichActivityAction);
    console.log(
      `The total count is now ${this.numActiveToInactiveActions}, and the other is ${this.numInactiveToActiveActions}`
    );
  }
}
