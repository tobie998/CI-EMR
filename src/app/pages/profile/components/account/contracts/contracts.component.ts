import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from "@angular/router";
import { ContractService } from 'src/app/common/service';
@Component({
    selector: 'app-contracts',
    templateUrl: './contracts.component.html',
    styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

    constructor(
        public contractService: ContractService,
        public activatedRoute: ActivatedRoute
    ) { }
    patientId: number;
    check: boolean = true;
    showRowTable: boolean = false;
    contractList: any;
    pay: number;
    unpaid: number;
    dataSource: any;
    listContractId: any[] = [];
    isSelectAll: boolean = false;
    isCheckAll: boolean = false;
    displayedColumnsContract = [
        'Contract'
    ];
    test: number;
    displayedColumns = [
        'checkbox',
        'No.',
        'Date',
        'Amount',
        'Unpaid'
    ];
    displayedColumnsPay = [
        "Pay"
    ]

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(param => this.patientId = +param.get('patientId'));
        this.getlistContracts();
    }

    showInput() {
        this.showRowTable = !this.showRowTable;
    }
    // showPay() {
    //   this.check = !this.check;
    // }
    selectAll() {
        this.isSelectAll = !this.isSelectAll;
        if (this.contractList.length !== this.listContractId.length) {
            this.listContractId.length = 0;
            for (var i = 0; i < this.contractList.length; i++) {
                this.listContractId.push(this.contractList[i].ContractId);
            }
            this.check = false;
        }
        else {
            this.check = true;
            this.listContractId.length = 0;
        }
    }
    showPay() {
        this.check = !this.check;
    }
    chooseContract(contractId: number) {
        if (this.listContractId.length == 0) {
            this.listContractId.push(contractId)
            this.check = false;
        }
        else {
            let index = this.listContractId.findIndex(i => i == contractId);
            if (this.listContractId.includes(this.listContractId[index]) == true) {
                this.listContractId.splice(index, 1);
                if (this.listContractId.length == 0) {
                    this.check = true;
                }
            }
            else {
                this.listContractId.push(contractId);
            }
        }
    }

    getlistContracts() {
        this.contractService.listContractPatientId(this.patientId, null, null).subscribe(res => {
            this.contractList = res;
            this.dataSource = new MatTableDataSource(this.contractList);
        });
    }

}
