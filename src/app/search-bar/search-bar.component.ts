import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {

  queryValue: string;

  searchedValue = "Search a Keyword or Name"

  constructor() { }

  ngOnInit() {
  }

  @Output() messageEvent = new EventEmitter<string>();

  handleEnter(event: Event) {
    this.messageEvent.emit(this.queryValue)
    this.searchedValue = "Searched for: " + this.queryValue
  }

}
