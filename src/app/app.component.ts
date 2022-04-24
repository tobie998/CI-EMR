import { Component, HostListener } from '@angular/core';
import { Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        public router: Router,
        public translate: TranslateService
    ) {
        translate.addLangs(['en', 'vi']);
        translate.setDefaultLang('en');
        const type = localStorage.getItem('translate');
        translate.use(type);
        this.mouseDown();
    }
    timeFocus: Date;
    @HostListener('document:mousedown', ['$event'])
    onMouseDown(event) {
      this.mouseDown();
    }

    mouseDown() {
      this.timeFocus = new Date();
      setTimeout(() => {
        const dateNow = new Date();
        if ((dateNow.getTime() - this.timeFocus.getTime() >= (10*60*1000)) && localStorage.getItem('access_token')) {
          alert('phiên đăng nhập đã hết hạn');
          localStorage.clear();
          this.router.navigate(['login']);
          window.location.reload();
        }
      }, 10*60 *1000 + 500);
    }
}
