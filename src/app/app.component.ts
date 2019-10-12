import { Component } from '@angular/core';
import { urlPreview } from 'url-preview';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'preview-url';
  url;
  response;
  allData = [];

  ngOnInit() {  	
  	// this.urlFetch();
  }

  urlFetch() {
  	this.response = undefined;
  	urlPreview(this.url).then(data => {
  		this.response = data;
  		if(this.response['article:modified_time']) {
  			this.response.timeago = this.timeago(this.response['article:modified_time']);
  		} else if(this.response['Last-Modified-Time']) {
  			this.response.timeago = this.timeago(this.response['Last-Modified-Time']);
  		}
  		if(this.response) this.allData.push(this.response);  		
  	});
  }

  timeago(time) {
  	let urlDate = new Date(time);
  	let now = new Date();
	let result = now.getTime() - urlDate.getTime();
	return this.msToTimeago(result);
  }

  msToTimeago(ms) {
  	const sec = 1000;
  	const min = sec * 60;
  	const hr = min * 60;
  	const day = hr * 24;
  	const month = day * 30;
  	const year = month * 12;
  	if (ms >= year) return Math.round(ms/year) + ' years ago';
  	else if (ms >= month) return Math.round(ms/month) + ' months ago';
  	else if (ms >= day) return Math.round(ms/day) + ' days ago';
  	else if (ms >= hr) return Math.round(ms/hr) + ' hours ago';
  	else if (ms >= min) return Math.round(ms/min) + ' minutes ago';
  	else return Math.round(ms/sec) + ' seconds ago';  	
  }
}
