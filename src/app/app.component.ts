import { Component } from "@angular/core";
import { UsersDataService } from "./shared/services/users-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [],
})
export class AppComponent {
  constructor(private usersDataService: UsersDataService) {}
}
