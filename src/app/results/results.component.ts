import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit, OnChanges {

  @Input() cmessage: string;

  firstFlag = true
  searchFlag = true

  resultData = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
     
  }

  

  ngOnChanges(changes: SimpleChanges) {
    //Stops the page from searching on the first load
    if (this.firstFlag){
      this.firstFlag = false
    }else {
      /*
    var backendURL = "localhost:3000"
    this.http.get(backendURL).subscribe(data => {
      this.handleData(data)
      console.log(typeof data)
      
    })
    */
    var fakeData = [{"name":"Chris Kim","link":"https://google.com","img":"https://media-exp1.licdn.com/dms/image/C4D03AQEYAlTj-OS0cg/profile-displayphoto-shrink_200_200/0?e=1584576000&v=beta&t=G3QBC3b95gl6I8WVOkF-Cin4FmqocKfDerpS28s0YWE","count":6},{"name":"Andrew Summer","link":"https://google.com","img":"https://media-exp1.licdn.com/dms/image/C4E03AQGD2U49usCbTw/profile-displayphoto-shrink_200_200/0?e=1584576000&v=beta&t=yPPV0HVTeYfM3SkPb0GgcQYat7fdec_0wYXr7YPkJ2k","count":9},{"name":"Lindsey Keister","link":"https://google.com","img":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7","count":7}]
    this.handleData(fakeData)
    }
    

  }

  compare(a, b) {
    if (a.count < b.count){
      return 1
    }else if (a.count > b.count){
      return -1
    }else {
      return 0
    }
  }

  handleData(data) {
    var i;
    for (i = 0; i < data.length; i++){
      //If they don't have a profile image then give them something else
      let regex = /^h.*/;
      if (data[i].img.match(regex) == null){
        data[i]["img"] = "https://media.giphy.com/media/xSM46ernAUN3y/giphy.gif"
      }
      
    }

    this.searchFlag = false
    this.resultData = data.sort(this.compare)
  }

  
}
