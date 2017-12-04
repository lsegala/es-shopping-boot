import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html'
})
export class AppComponent {

    name: string;

    message: string;

    onClick() {
        this.message = 'Hello ' + this.name;
    }
}
