import { Component, OnInit } from "@angular/core";
import { UsersDataService } from "../shared/services/users-data.service";
import { CounterService } from "../shared/services/counter.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
  providers: [],
})
export class ActiveUsersComponent implements OnInit {
  constructor(
    private usersDataService: UsersDataService,
    private counterService: CounterService
  ) {}

  users: string[];

  ngOnInit(): void {
    this.users = this.usersDataService.activeUsers;
  }

  onSetToInactive(userId: number) {
    this.usersDataService.handlePushToEndOfUsersArray(userId, "inactiveUsers");
    this.usersDataService.handleSpliceUserIDFromArray(userId, "activeUsers");
    // 1. import CounterService
    this.counterService.increaseNumberActions("numInactiveToActiveActions");
  }
}
