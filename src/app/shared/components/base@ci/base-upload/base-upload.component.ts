import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    SwiperOptions,
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
    selector: 'app-base-upload',
    templateUrl: './base-upload.component.html',
    styleUrls: ['./base-upload.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class BaseUploadComponent implements OnInit {
    @Input() data: any;
    @Input() label: any;
    @Input() readonly: any;
    @Output() callback = new EventEmitter<any>();
    public config: SwiperOptions = {
        slidesPerView: 3,
        mousewheel: true,
        navigation: true,
        pagination: true,
        autoplay: false,
        spaceBetween: 30
    };
    check = 1;
    model: any;
    images: string[] = [];
    listImg = [];
    constructor(
        private dialogRef: MatDialogRef<BaseUploadComponent>
    ) { }
    ngOnInit(): void {
        this.model = this.data.data;
        console.log(this.model);

        if (this.model.MediaURLList && this.model.MediaURLList.length !== 0) {
          this.images = this.model.MediaURLList;
        } else if (this.model.ListMedia && this.model.ListMedia.length !== 0) {
          this.model.ListMedia.forEach(element => {
            if (element.MediaId) {
              this.images.push(element.MediaURL);
            }
          });
        }
    }
    closeDialog(){
        this.dialogRef.close();
    }
    onSwiper(swiper) {
        // console.log(swiper);
    }
    onSlideChange() {
        // console.log('slide change');
    }
    onSelectFile(event): void {
        if (event.target.files && event.target.files[0]) {
            const filesAmount = event.target.files.length;
            for (let i = 0; i < filesAmount; i++) {
                const reader = new FileReader();
                reader.onload = (event: any) => {
                    this.images.push(event.target.result);
                    this.listImg.push(event.target.result.split(',')[1]);
                };
                reader.readAsDataURL(event.target.files[i]);
                this.model.MediaURLList = this.listImg;
            }
        }
    }
    save() {
      const model = {
          item: this.model,
          check: 1
      }
      this.callback.emit(model);
        // if (this.check === 1 && this.data.type === 'lab') {
        //     const model = {
        //         item: this.model,
        //         check: 1
        //     }
        //     this.callback.emit(model);
        // }
        // else if (this.check === 2 && this.data.type === 'lab') {
        //     const model = {
        //         item: this.data.subDataTable,
        //         check: 2
        //     }
        //     this.callback.emit(model);
        // }
        // else if (this.data.type === 'document') {
        //   const model = {
        //       item: this.model,
        //       check: 3
        //   }
        //   this.callback.emit(model);
        // }
        // else if (this.data.type !== "lab") {
        //     const model = {
        //         item: this.model,
        //         check: null
        //     }
        //     this.callback.emit(model);
        // }
    }
    removeImage(i) {
        this.images.splice(i, 1);
        this.listImg.splice(i, 1);
        this.model.MediaURLList = this.listImg;
    }
}
@NgModule({
    declarations: [
        BaseUploadComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        TranslateModule,
        SwiperModule
    ],
    exports: [
        BaseUploadComponent
    ]
})
export class UploadBaseModule { }
