import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import { forkJoin } from "rxjs";
import { PlanModel } from "src/app/common/model/plan.model";
import { HealthEducationService, HistoryService, MedicationService, OrderTestService, PatientService, ReportService, UploadService } from "src/app/common/service";
import { TestresultService } from "src/app/common/service/testresult.service";
import { PrintService } from 'src/app/shared/services';
declare var jsPDF: any;
@Component({
    selector: "app-report",
    templateUrl: "./report.component.html",
    styleUrls: ["./report.component.scss"],
})

export class ReportComponent implements OnInit, OnDestroy {
    @ViewChild('htmlData', { static: true }) htmlData: ElementRef;
    constructor(
        private reportService: ReportService,
        private route: ActivatedRoute,
        private patentService: PatientService,
        private printService: PrintService,
        private uploadService: UploadService,
        private historyService: HistoryService,
        private testresultService: TestresultService,
        private medicationService: MedicationService,
        private orderTestService: OrderTestService,
        private healthEducationService: HealthEducationService
    ) { }

    slides = 0;
    listParentTest: PlanModel[] = [];
    listData: any = {
        current: [],
        history: [],
        problems: []
    }
    displayedColumnCurrents: string[] = [
        "Name",
        "Problem",
        "Dose",
        "Number",
        "Frequency",
        "Duration",
        "Route",
        "Detail"
    ];
    displayedColumnHistorys: string[] = [
        "Problem",
        "Name",
        "Dose",
        "Frequency",
        "Duration",
        "Route",
        "Detail",
    ];
    displayedColumnProblems: string[] = [
        "Problem",
        "Name",
        "Dose",
        "Frequency",
        "Duration",
        "Route",
        "Detail",
    ];
    displayedColumns: string[] = [
        "Name",
        "Dose",
        "Frequency",
        "Route",
        "Details",
        "Purpose",
    ];
    model: any = {};
    isLoading = false;
    patientId;
    dataSource;
    listDrug: any = [];
    visitId: number;
    columnsMedicalReport: string[] = ['Name', 'Dose', 'Frequency', 'Start', 'End', 'Route', 'Details'];
    columnsPrescriptionReport: string[] = ["Name", "Dose", "Frequency", "Start Date", "End Date", "Route", "Detail"];
    columnsOrderTestModelReport: string[] = ['Category', 'Test', 'Result'];
    columnsBiopsyModelReport: string[] = ['Organ', 'Test', 'Result'];
    columnsImgModelReport: string[] = ['Category', 'Organ', 'Test', 'Result'];
    columnsHealtEduReport: string[] = ['Problem', 'Organ', 'Education'];
    dataSourceMedicalReport;
    dataSourcePrescriptionReport = [];
    isShow = false;

    ngOnInit() {
        try {
            this.isLoading = true;
            this.model.ProfileModel = {};
            this.patientId = this.route.snapshot.params.patientId;
            this.patentService.detailPatient(this.patientId).then((respone: any)=> {
                this.visitId = respone.VisitId;
                this.model.ProfileModel = respone;
                if (!this.visitId) return;
                this.onLoadMedication(this.patientId);
                this.onLoadFamilyHistory(this.patientId);
                this.onLoadSocialHistory(this.patientId);
                this.onLoadAllergy(this.patientId);
                this.onLoadMedicationByProblem(this.patientId);
                this.listVitalPatient(this.patientId);
                this.onLoadReasonForBooking(this.patientId);
                this.onLoadExamReport(this.visitId);
                this.getMedication();
            })
            // let respone = await this.patentService.detailPatientToPromise(this.patientId);
            

        } catch (ex) {
        } finally {
            this.isLoading = false;
        }
    }
    getMedication() {
        const list = [];
        list.push(this.medicationService.listMedication(this.patientId, 1));
        list.push(this.medicationService.listMedication(this.patientId, 2));
        list.push(this.medicationService.listMedicationByProblem(this.patientId, 3));
        forkJoin(list).subscribe((listRes: any) => {
            this.listData.history = listRes[0].Payload;
            this.listData.current = listRes[1].Payload;
            this.listData.problems = listRes[2].Payload;
        })
    }

    ngOnDestroy() {
        this.generatePDF();
    }

    generatePDF() {
        this.isShow = false;
        this.isLoading = true;
        var data = document.getElementById('htmlData');
        html2canvas(data).then(canvas => {
            var imgWidth = 208;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            const contentDataURL = canvas.toDataURL('image/png');
            let pdf = new jsPDF('p', 'mm', 'a1');
            var position = 0;
            const dataUp = {
                VisitId: this.model.ProfileModel.VisitId,
                VisitReportPDFFileBase64: contentDataURL.split(',')[1]
            }
            this.uploadService.UploadFileReport(dataUp).subscribe(res => {
                this.isLoading = false;
            })
        });
    }

    public downloadPDF(): void {
        let DATA = this.htmlData.nativeElement;
        let doc = new jsPDF('p', 'mm', 'a4');
        let handleElement = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        doc.fromHTML(DATA.innerHTML, 15, 15, {
            'width': 200,
            'elementHandlers': handleElement
        });

        doc.save('angular-demo.pdf');
    }
    sortA(list: any[], id){
        return list.sort(function(a, b) {
            return a[id] - b[id];
        });
    }
    onLoadExamReport = (id) => {
        this.model.VisitProblemExam = [];
        this.reportService.listExamReport3(id).subscribe(res => {
          res.forEach(element => {
            const data = element;
            data.ProblemName = element.ProblemName;
            const listParrent = this.sortA(element.ListExamReport.filter(item => item.ParentExamId === null), 'ExamId');
            listParrent.forEach(child => {
              const listParrentExams = this.sortA(element.ListExamReport.filter(item => item.ParentExamId === child.ExamId && item.ResultId === null), 'ExamId');
              if (!listParrentExams || listParrentExams.length !== 0) {
                listParrentExams.forEach(exam => {
                    const listParrentExams2 = this.sortA(element.ListExamReport.filter(item => item.ParentExamId === exam.ExamId && item.ResultId === null), 'ExamId');
                    if (listParrentExams2.length !== 0) {
                        if (exam.Status === 0) {
                            exam.text = 'Not examined';
                        } else {
                            this.setTextResult(exam, element);
                            listParrentExams2.forEach(exam2 => {
                                if (exam2.Status === 0) {
                                    exam2.text = 'Not examined';
                                } else {
                                    exam2.text = '';
                                    exam2.left = this.sortA(element.ListExamReport.filter(item => item.ExamId === exam2.ExamId && item.ResultId !== null && item.LeftRight === 1), 'ResultId');
                                    exam2.right = this.sortA(element.ListExamReport.filter(item => item.ExamId === exam2.ExamId && item.ResultId !== null && item.LeftRight === 2), 'ResultId');
                                    exam2.none = this.sortA(element.ListExamReport.filter(item => item.ExamId === exam2.ExamId && item.ResultId !== null && item.LeftRight === 0), 'ResultId');
                                    if (exam2.none && exam2.none.length !== 0) {
                                        let none = exam2.none.map(x => {
                                            return x.ResultName;
                                        }).join(', ');
                                        exam2.text = exam2.text + ' ' + none + '.';
                                    }
                                    if (exam2.left && exam2.left.length !== 0) {
                                        let left = exam2.left.map(x => {
                                            return x.ResultName;
                                        }).join(', ');
                                        exam2.text = exam2.text + ' Left: ' + left + '.';
                                    }
                                    if (exam2.right && exam2.right.length !== 0) {
                                        let right = exam2.right.map(x => {
                                            return x.ResultName;
                                        }).join(', ');
                                        exam2.text = exam2.text + ' Right: ' + right + '.';
                                    }
                                }
                            }) 
                            exam.Exams = listParrentExams2;
                        }
                        
                    } else {
                        this.setTextResult(exam, element);
                    }
                    
                    
                    // child.text = 
                })
              }
              child.child = listParrentExams;
            });

            data.ListText = listParrent.map(res => {
              return res.text;
            })
            data.ListExam = listParrent;
            this.model.VisitProblemExam.push(data)
          });
        })
    }

    setTextResult(exam: any, element: any) {
        if (exam.Status === 0) {
            exam.text = 'Not examined';
        } else {
            exam.text = '';
            exam.left = this.sortA(element.ListExamReport.filter(item => item.ExamId === exam.ExamId && item.ResultId !== null && item.LeftRight === 1), 'ResultId');
            exam.right = this.sortA(element.ListExamReport.filter(item => item.ExamId === exam.ExamId && item.ResultId !== null && item.LeftRight === 2), 'ResultId');
            exam.none = this.sortA(element.ListExamReport.filter(item => item.ExamId === exam.ExamId && item.ResultId !== null && item.LeftRight === 0), 'ResultId');
            if (exam.none && exam.none.length !== 0) {
                let none = exam.none.map(x => {
                    return x.ResultName;
                }).join(', ');
                exam.text = exam.text + ' ' + none + '.';
            }
            if (exam.left && exam.left.length !== 0) {
                let left = exam.left.map(x => {
                    return x.ResultName;
                }).join(', ');
                exam.text = exam.text + ' Left: ' + left + '.';
            }
            if (exam.right && exam.right.length !== 0) {
                let right = exam.right.map(x => {
                    return x.ResultName;
                }).join(', ');
                exam.text = exam.text + ' Right: ' + right + '.';
            }
        }
    }

    onChangeValue2 = (x) => {
        const dataArray = [];
        let text = '';
        const data = x.SubExams.map(x1 => {
            return {
                ExamName: x1.ExamName,
                SubExams: (x1.SubExams && x1.SubExams.length) ? x1.SubExams.map(x2 => {
                    if (x2.Type === 2) {
                        return {
                            ExamName: x2.ExamName,
                            SubExams: x2.SubExams.map(x3 => {
                                if (x3.ResultId === 1) {
                                    text = x1.ExamName + '(' + x1.ResultName + ')'
                                        + ' - ' + x2.ExamName + '(' + x2.ResultName + ')'
                                        + ' - ' + x3.ExamName + '(' + x3.ResultName + ')';

                                    dataArray.push({
                                        ExamNameReslut: x1.ExamName + '(' + x1.ResultName + ')',
                                        text: text
                                    });
                                    return {};
                                }
                                if (x3.ResultId === 2) {
                                    return {
                                        ExamName: x3.ExamName,
                                        SubExams: x3.SubExams.map(x4 => {
                                            text = x2.ExamName + '(' + x2.ResultName + ')'
                                                + ' - ' + x3.ExamName + '(' + x3.ResultName + ')';
                                            if (x4.LeftRight === 0) {
                                                text = text + ' - ' + x4.ResultName
                                            }
                                            if (x4.LeftRight === 1) {
                                                text = text + ' - Left:' + x4.ResultName
                                            }
                                            if (x4.LeftRight === 2) {
                                                text = text + ' - Right:' + x4.ResultName
                                            }
                                            dataArray.push({
                                                ExamNameReslut: x1.ExamName + '(' + x1.ResultName + ')',
                                                text: text
                                            });
                                        })
                                    }
                                }
                            })
                        }
                    }
                    if (x2.Type === 3) {
                        if (x2.ResultId === 1) {
                            text = x2.ExamName + '(' + x2.ResultName + ')';
                            dataArray.push({
                                ExamNameReslut: x1.ExamName + '(' + x1.ResultName + ')',
                                text: text
                            });
                            return {}
                        }
                        if (x2.ResultId === 2) {
                            if (x2.SubExams.length) {
                                return {
                                    ExamName: x2.ExamName,
                                    SubExams: x2.SubExams.map(x3 => {
                                        text = x2.ExamName + '(' + x2.ResultName + ')'
                                            + ' - ' + x3.ExamName + '(' + x3.ResultName + ')';
                                        if (x3.LeftRight === 0) {
                                            text = text + ' - ' + x3.ResultName
                                        }
                                        if (x3.LeftRight === 1) {
                                            text = text + ' - Left:' + x3.ResultName
                                        }
                                        if (x3.LeftRight === 2) {
                                            text = text + ' - Right:' + x3.ResultName
                                        }
                                        dataArray.push({
                                            ExamNameReslut: x1.ExamName + '(' + x1.ResultName + ')',
                                            text: text
                                        });
                                    })
                                }
                            } else {
                                text = x2.ExamName + '(' + x2.ResultName + ')';
                                dataArray.push({
                                    ExamNameReslut: x1.ExamName + '(' + x1.ResultName + ')',
                                    text: text
                                });
                                return {}
                            }

                        }
                    }
                }) : x1.SubExams.filter(x5 => x5.GroupNumber !== 0).map(x2 => {
                    return {
                        ExamName: x2.ExamName,
                        SubExams: x2.SubExams
                    }
                })
            }
        });
        const listCheck = [];
        dataArray.forEach(x => {
            const checkName = listCheck.find(a => a === x.ExamNameReslut);
            if (!checkName) {
                x.hide = false;
                listCheck.push(x.ExamNameReslut)
            } else {
                x.hide = true;
            }
        });
        return dataArray;
    }

    listVitalPatient = (id) => {
        this.reportService.listVitalPatient(id).subscribe(res => {
            let dataValue = [];
            const dataFilter = res.find(x => x.ListVital.length && x.VisitId === this.visitId);
            if (!dataFilter) return;
            dataValue = dataFilter.ListVital;
            const data = dataValue.filter(x => x.VitalId === 1);
            this.model.VisitVital = data.map(x => {
                return {
                    ResultDate: x.ResultDate,
                    ListVital: dataValue.filter(a => a.ResultDate === x.ResultDate)
                }
            });
        })
    }

    onLoadMedication = async (patientId) => {
        const respone = await this.reportService.listMedicationHistory(patientId);
        this.model.MedicalHistoryModel = respone.Payload.length ? respone.Payload.filter(x => x.Type === 1) : [];
        this.model.SurgicalHistoryModel = respone.Payload.length ? respone.Payload.filter(x => x.Type === 2) : [];
    }

    onLoadFamilyHistory = async (patientId) => {
        const respone = await this.reportService.listFamilyHistory(patientId);
        this.model.FamilyHistoryModel = respone.Payload || [];
    }

    onLoadSocialHistory = async (patientId) => {
        const respone = await this.reportService.listSocialHistory(patientId);
        this.model.SocialHistoryModel = respone.Payload ? respone.Payload.filter(x => x.Name) : [];

    }

    onLoadAllergy = async (patientId) => {
        const respone = await this.reportService.listPatientAllergy(patientId);
        this.model.AllergyModel = respone.Payload || [];
    }

    onLoadMedicationByProblem = async (patientId) => {
        const respone = await this.reportService.listMedicationByProblem(patientId);
        this.model.MedicationByProblemModel = respone.Payload || [];
    }

    onLoadReasonForBooking = async (patientId) => {
        const respone = await this.reportService.listProblemOfVisit(this.visitId);
        const respone2 = await this.reportService.listOldProblemVisit(patientId);
        this.model.ReasonForBookingModel = respone.Payload.concat(respone2.Payload.filter(x => x.Type == 2));
        this.onLoadHistoryReport();
        this.onLoadMedicalReport();
        this.onLoadPlanReport();
        this.onLoadDiagnosisReport();
    }

    onLoadDiagnosisReport = async () => {
        this.model.VisitProblemDiagnoses = [];
        this.model.ReasonForBookingModel.forEach(x => {
            this.reportService.getDiagnosis(x.VisitId, x.ProblemId).subscribe(res => {
                this.model.VisitProblemDiagnoses.push({
                    ProblemName: x.Name,
                    VisitDiagnoses: res
                });
            });
        });
    }

    onLoadMedicalReport = async () => {
        this.dataSourceMedicalReport = [];
        this.model.ReasonForBookingModel.forEach(async (x) => {
            const respone = await this.reportService.listMedicalReport(x.VisitId, x.ProblemId);
            this.dataSourceMedicalReport.push({ initial: x.Name, isGroupBy: true });
            this.dataSourceMedicalReport = this.dataSourceMedicalReport.concat(respone.Payload);
        });
    }

    onLoadHistoryReport = () => {
        this.model.HistoryReport = [];
        let index = 0;
        this.model.ReasonForBookingModel.forEach(async (x, ix) => {

            const data = await this.reportService.listHistoryReport(this.visitId, x.ProblemId);
            x.Data = data.Payload;
            this.historyService.lstReviewSystem(this.visitId, x.ProblemId).subscribe(res => {
              x.listOrgan = res;
              this.refreshOrgan(x.listOrgan);
              index++;
              if (index === this.model.ReasonForBookingModel.length) {
                this.onLoadHistorySub(this.model.ReasonForBookingModel);
              }
            })
        });
    }
    refreshOrgan(listOrgan) {
      listOrgan.forEach(organ => {
          organ.ReviewActive = 0;
          organ.stringActive = [];
          organ.ListReviewSystems.forEach(review => {
              if (review.VisitReviewSystemId !== null) {
                organ.ReviewActive++;
                organ.stringActive.push(review.ReviewSystemName);
              }
          });
      });
    }
    onLoadPlanReport = () => {
        this.model.PlanFollowupModel = [];
        this.orderTestService.listOrderTest(this.visitId, '').subscribe(res => {
          this.listParentTest = res;
          this.model.OrderTestModel = this.setLab(this.listParentTest.find(x => x.Name == 'lab'));
          this.model.BiopsyModel = this.setBiopsyFun(this.listParentTest.find(x => x.Name == 'Biopsy'));
          this.model.FTestModel = this.setBiopsyFun(this.listParentTest.find(x => x.Name == 'functional'));
          this.model.ImgModel = this.setImaging(this.listParentTest.find(x => x.Name == 'imaging'));
        })
        this.healthEducationService.listEducationReport(this.visitId).subscribe(res => {
            this.model.HealthEducation = [];
            if (res && res.length !== 0) {
                res.forEach(healthEdu => {
                    if (healthEdu && healthEdu.ListEducation && healthEdu.ListEducation.length !== 0) {
                        healthEdu.ListEducation.forEach(combination => {
                            if (combination && combination.ListEducationcombinations && combination.ListEducationcombinations.length !== 0)
                            combination.ListEducationcombinations.forEach(edu => {
                                this.model.HealthEducation.push({
                                    EducationitemName: edu.EducationitemName,
                                    Problem: healthEdu.ProblemName,
                                    OrganName: combination.OrganName
                                })
                            });
                        });
                    }
                });
            }
        })
    //     this.healthEducationService
    //     .listEducation(this.visitId, this.data.ProblemId)
    //     .subscribe(res => {
    //       this.listOrgans = res;
  
    //       if (this.listOrgans && this.listOrgans.length !== 0) {
    //         this.onActiveOrgans(this.listOrgans[0]);
    //       }
    //       this.isLoading = false;
    //     },
    //       err => {
    //         this.isLoading = false;
    //       });
    // }
        this.model.PrescriptionReport = [];
        this.model.ReasonForBookingModel.forEach(x => {
            this.reportService.listPlanPrescriptiondrugReport(x.ProblemId, x.VisitId).subscribe(res => {
                this.dataSourcePrescriptionReport.push({ initial: x.Name, isGroupBy: true });
                this.dataSourcePrescriptionReport = this.dataSourcePrescriptionReport.concat(res);
                this.model.PrescriptionReport.push(res);
            });
            this.reportService.listPlanFollowupReport(x.ProblemId, x.VisitId).subscribe(res => {
                this.model.PlanFollowupModel.push({
                    Name: x.Name,
                    ResultDate: res ? res.FollowDate : '',
                    BookingSchedule: res ? res.BookingSchedule: ''
                })
            })
        });
    }
    setLab(lab: PlanModel) {
      const lst = [];
      lab.ListTestcategories.forEach(testC => {
        testC.ListTestcombinations.forEach(test => {
          if (test && test.Status === 1) {
            lst.push({
              TestcategoryName: testC.Name,
              TestName: test.Name,
              NumbericResult: ''
            });
          }
        });
      });
      return lst;
    }
    setBiopsyFun(bio: PlanModel) {
      const lst = [];
      bio.ListOrgans.forEach(organ => {
        organ.ListTestcombinations.forEach(test => {
          if (test && test.Status === 1) {
            lst.push({
              OrganName: organ.Name,
              TestName: test.Name,
              NumbericResult: ''
            });
          }
        });
      });
      return lst;
    }
    setImaging(imaging: PlanModel) {
      const lst = [];
      imaging.ListTestcategories.forEach(testCate => {
        testCate.ListOrgans.forEach(organ => {
          organ.ListTestcombinations.forEach(test => {
            if (test && test.Status === 1) {
              lst.push({
                TestcategoryName: testCate.Name,
                OrganName: organ.Name,
                TestName: test.Name,
                NumbericResult: ''
              });
            }
          })
        });
      });
      return lst;
    }

    onLoadHistorySub = (data) => {
        this.model.HistoryReport = data.map(x => {
            if (x.Data && x.Data.length) {
                return {
                    Name: x.Name,
                    Overall: x.Data.filter(z => z.Overall),
                    OldSymptoms: x.Data.filter(z => z.SymptomGroupType === 2),
                    NewSymptoms: x.Data.filter(z => z.SymptomGroupType === 3),
                    ReviewOfSystems: x.listOrgan,
                    DailyLife: x.Data.filter(z => z.SymptomGroupType === 5)
                }
            } else {
              return {
                Name: x.Name,
                ReviewOfSystems: x.listOrgan,
            }
            }
        })
        
    }

    onChangeValue = (x) => {
        const dataArray = [];
        let text = '';
        const data = x.VisitExam.map(x1 => {
            return {
                Name: x1.Name,
                SubExams: (x1.SubExams && x1.SubExams.length) ? x1.SubExams.map(x2 => {
                    return {
                        Name: x2.Name,
                        SubExams: (x2.SubExams && x2.SubExams.length) ? x2.SubExams.map(x3 => {
                            return {
                                Name: x3.Name,
                                SubExams: x3.SubExams ? x3.SubExams.map(x4 => {
                                    text = '';
                                    return {
                                        Name: x4.Name,
                                        SubExams: x4.SubExams
                                    }
                                }) : x3.VisitExamResults.filter(x5 => x5.GroupNumber !== 0).map(x4 => {
                                    text = x1.Name + ' - ' + x2.Name + ' - ' + x3.Name;
                                    if (x4.LeftRight === 0) {
                                        text = text + ' - ' + x4.ResultValue
                                    }
                                    if (x4.LeftRight === 1) {
                                        text = text + ' - Left:' + x4.ResultValue
                                    }
                                    if (x4.LeftRight === 2) {
                                        text = text + ' - Right:' + x4.ResultValue
                                    }
                                    dataArray.push({
                                        ExamNameReslut: x1.ExamName + '(' + x1.ResultName + ')',
                                        text: text
                                    });
                                    return {
                                        LeftRight: x4.LeftRight,
                                        ResultValue: x4.ResultValue,
                                        GroupNumber: x4.GroupNumber
                                    }
                                })
                            }
                        }) : x2.VisitExamResults.filter(x5 => x5.GroupNumber !== 0).map(x3 => {
                            text = x1.Name + ' - ' + x2.Name;
                            if (x3.LeftRight === 0) {
                                text = text + ' - ' + x3.ResultValue
                            }
                            if (x3.LeftRight === 1) {
                                text = text + ' - Left:' + x3.ResultValue
                            }
                            if (x3.LeftRight === 2) {
                                text = text + ' - Right:' + x3.ResultValue
                            }
                            dataArray.push({
                                ExamNameReslut: x1.ExamName + '(' + x1.ResultName + ')',
                                text: text
                            })
                            return {
                                LeftRight: x3.LeftRight,
                                ResultValue: x3.ResultValue,
                                GroupNumber: x3.GroupNumber
                            }
                        })
                    }
                }) : x1.VisitExamResults.filter(x5 => x5.GroupNumber !== 0).map(x2 => {
                    return {
                        Name: x2.Name,
                        SubExams: x2.SubExams
                    }
                })
            }
        });

        return dataArray;
    }

    onChangeVisitProblemMedicationHistory = (data) => {
        const result = data.map(x => {
            const checkName = this.listDrug.find(a => a.DrugrouteId === x.DrugrouteId);
            return {
                DrugName: x.DrugName,
                DoseValue: x.DoseValue,
                FrequencyValue: x.FrequencyValue,
                Purpose: x.Purpose,
                DrugrouteId: x.DrugrouteId,
                StartDate: x.StartDate,
                Detail: x.Detail,
                DrugrouteName: checkName ? checkName.Name : ''
            }
        });

        return result;
    }

    isGroup(index, item): boolean {
        return item.isGroupBy;
    }

    printReport = async () => {
        this.printService.printMedicalReport(this.model)
    }

}
