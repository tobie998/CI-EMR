import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DescriptorService } from 'src/app/common/service/descriptor.service';
import { LoaderService } from 'src/app/shared/services';

@Component({
  selector: 'app-select-descriptor',
  templateUrl: './select-descriptor.component.html',
  styleUrls: ['./select-descriptor.component.scss']
})
export class SelectDescriptorComponent implements OnInit {
  data = {
    Name: '',
    Description: ''
  };
  constructor(
    public dialogRef: MatDialogRef<SelectDescriptorComponent>,
    private http: HttpClient,
    private loadService: LoaderService,
    private descriptor: DescriptorService,
  ) { }

  ngOnInit(): void {
  }
  createItemDescriptor = () => {
    this.descriptor.createDescriptorCategory(this.data).subscribe(res => {
      this.closeDialog();
    })
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
