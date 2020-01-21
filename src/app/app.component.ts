import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  receiveMessage($event) {
    this.pmessage = $event
  }
    
  
  pmessage = "hello there"
  title = 'app';
}
