import { Component, OnInit } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {

  constructor(private translate: TranslateService) {
   translate.addLangs(["telugu", "hindi"]);
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/telugu|hindi/) ? browserLang : 'telugu');
    
    //translate.setDefaultLang('en');
   }
   switchLanguage(language: string) {
    this.translate.use(language);
  }
  ngOnInit() {
  }

}
