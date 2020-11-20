import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  places = [];
  gridView = true;

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.appService.getPlaces().subscribe((response: any) => {
      this.places = response;
    });
  }

  selectDestination(event: any) {
    const classList = event.currentTarget.classList;
    if (classList.value.includes("destination-selected")) {
      classList.remove("destination-selected");
    } else {
      classList.add("destination-selected");
    }
  }

  toggleView() {
    this.gridView = !this.gridView;
  }
}
