// Angular 14 service workers are great cause they allow for these use-cases:
// 1. logging service
// 2. data storage service
// 3. event-communication services
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UsersDataService {
  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];

  // should I create 2 separate active/inactive Users methods?
  // or just refactor into one?
  handlePushToEndOfUsersArray(userId: number, whichUsersArray: string): void {
    if (whichUsersArray === "activeUsers") {
      this.activeUsers.push(this.inactiveUsers[userId]);
    } else if (whichUsersArray === "inactiveUsers") {
      this.inactiveUsers.push(this.activeUsers[userId]);
    }
  }

  handleSpliceUserIDFromArray(userId: number, whichUsersArray: string): void {
    if (whichUsersArray === "activeUsers") {
      this.activeUsers.splice(userId, 1);
    } else if (whichUsersArray === "inactiveUsers") {
      this.inactiveUsers.splice(userId, 1);
    }
  }
}
