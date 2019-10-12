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
  //https://www.livemint.com/companies/news/piramal-enterprises-dispels-rumours-about-financial-services-business-files-complaint-11570699923572.html
  response;

  ngOnInit() {  	
  	
  }

  urlFetch() {
  	urlPreview(this.url).then(data => this.response = data);
  }
}
