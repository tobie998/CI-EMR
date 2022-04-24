import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { DescriptorService } from 'src/app/common/service/descriptor.service';
import { LoaderService } from 'src/app/shared/services';
import { isNullOrUndefined } from 'util';
import { SelectDescriptorComponent } from './select-descriptor/select-descriptor.component';

@Component({
    selector: 'app-descriptor-category',
    templateUrl: './descriptor-category.component.html',
    styleUrls: ['./descriptor-category.component.scss']
})
export class DescriptorCategoryComponent implements OnInit {

    constructor(
        private loadService: LoaderService,
        private dialog: MatDialog,
        private service: DescriptorService,
        public dialogRef: MatDialogRef<DescriptorCategoryComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    listDescriptor: any = [];
    model: any = {};
    ngOnInit() {
        this.loadService.show();
        this.service.listDescriptorCategory().subscribe(res => {
            this.listDescriptor = res;
            if (this.listDescriptor && this.listDescriptor.length !== 0) {
                this.onGetListDescriptor(res[0]);
            }
        }, (err) => { }, () => { this.loadService.hide() })
    }


    onGetListDescriptor = (data) => {
        // this.model.DescriptorCategoryId = item.DescriptorCategoryId;
        const item = this.listDescriptor[data.index];
        if (!item.listItem) {
            this.service.listDescriptorId(item.DescriptorCategoryId, this.data.VisitSymptomId).subscribe(res => {
                item.listItem = res.map(x => {
                    let checked = null;
                    if (!isNullOrUndefined(x.VisitSymptomDescriptorId)) {
                        checked = (+x.VisitSymptomDescriptorStatus === 1)
                    }
                    return {
                        Name: x.Name,
                        DescriptorId: x.DescriptorId,
                        DescriptorCategoryId: x.DescriptorCategoryId,
                        checked: checked
                    }
                });
            })
        }
    }


    createDescriptorId = () => {
        this.service.createDescriptorId(this.model).subscribe(res => {
            this.model.Name = '';
        })
    }

    createSymptomDescriptor = () => {
        const listActive = [];
        this.listDescriptor.forEach(descriptor => {
            if (descriptor.listItem) {
                descriptor.listItem.forEach(item => {
                    if (item.checked != null) {
                      listActive.push({
                          VisitSymptomId: this.data.VisitSymptomId,
                          DescriptorId: item.DescriptorId,
                          Status: (item.checked) ? 1 : 2
                      });
                    }
                });
            }
        });
        this.service.createSymptomDescriptor(listActive).subscribe(res => {
            this.closeDialog();
        })
    }

    openAddSelect = () => {
        const dialogRef = this.dialog.open(SelectDescriptorComponent, {
            panelClass: "dialog-55-60",
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }

    closeDialog() {
        this.dialogRef.close();
    }
}
@NgModule({
    declarations: [
        DescriptorCategoryComponent,
    ],
    imports: [
        TranslateModule,
        MatIconModule,
        CommonModule,
        MatTabsModule,
        FormsModule
    ],
    exports: [
        DescriptorCategoryComponent
    ]
})
export class DescriptorCategoryModule { }
