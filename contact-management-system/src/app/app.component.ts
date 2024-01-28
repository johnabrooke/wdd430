import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contact-management-system';

  selectedFeature: string;

  switchView(selectedFeature: string) {
    if(this.selectedFeature !== selectedFeature) {
      this.selectedFeature = selectedFeature;
    }
  }
}
