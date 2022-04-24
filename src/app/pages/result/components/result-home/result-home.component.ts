import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/common/service';
import { ResultService } from 'src/app/common/service/result.service';

@Component({
  selector: 'app-result-home',
  templateUrl: './result-home.component.html',
  styleUrls: ['./result-home.component.scss']
})
export class ResultHomeComponent implements OnInit {

  constructor(
    private resultService: ResultService
  ) { }
  configOpenClients = {
    title: '',
    class: 'outsideShadow',
    col: 'col-3',
    cssItem: 'content-list',
    splice: 20,
    viewAll: false,
    height: '76vh',
    hideMessage: true
  }
  data;
  dataSub;
  keyword;
  ngOnInit(): void {
    this.resultService.listPatientOrderTest("").then(res => {
      this.data = res.splice(0, 20);
      console.log(this.data);

    });
  }

  searchPatient(keyWord) {
    this.keyword = keyWord;
    if (!keyWord) return this.dataSub = [];
    clearTimeout(this.keyword);
    this.keyword = setTimeout(() => {
      this.resultService.listPatientOrderTest(keyWord).then(res => {
        this.dataSub = res;
      })
    }, 500);
}


}
