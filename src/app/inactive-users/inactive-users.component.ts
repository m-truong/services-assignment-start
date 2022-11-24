import { Component, OnInit } from "@angular/core";
import { CounterService } from "../shared/services/counter.service";
import { UsersDataService } from "../shared/services/users-data.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
  providers: [],
})
export class InactiveUsersComponent implements OnInit {
  constructor(
    private usersDataService: UsersDataService,
    private counterService: CounterService
  ) {}

  users: string[];

  ngOnInit(): void {
    this.users = this.usersDataService.inactiveUsers;
  }

  onSetToActive(userId: number) {
    this.usersDataService.handlePushToEndOfUsersArray(userId, "activeUsers");
    this.usersDataService.handleSpliceUserIDFromArray(userId, "inactiveUsers");
    // 1. import CounterService
    this.counterService.increaseNumberActions("numActiveToInactiveActions");
  }
}
