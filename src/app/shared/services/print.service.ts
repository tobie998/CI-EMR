import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import { FormatDateService } from './format-date.service';
@Injectable({
    providedIn: 'root'
})
export class PrintService {

    constructor(
        private date: FormatDateService
    ) { }

    print(body: string, title?: string) {
        const myWindow = window.open('', '', 'width=1320,height=600');
        myWindow.document.write(`<html><head>
        <title>${title}</title>`);
        myWindow.document.write('</head><body>');
        myWindow.document.write(body);
        myWindow.document.write('</body></html>');
        myWindow.document.close();
        myWindow.focus();
        myWindow.print();
        return true;
    }

    printMedicalReport = async (model) => {
        try {
            let MedicalHistoryModel = '';
            let SurgicalHistoryModel = '';
            let FamilyHistoryModel = '';
            let SocialHistoryModel = '';
            let AllergyModel = '';
            let MedicationByProblemModel = '';
            let ReasonForBookingModel = '';
            let HistoryReport = '';
            let VisitVital = '';
            let VisitProblemDiagnoses = '';
            let OrderTestModel = '';
            let BiopsyModel = '';
            let FTestModel = '';
            let ImgModel = '';
            let PrescriptionReport = '';
            let PlanFollowupModel = '';
            let ExamReportModel = '';

            const rawFile = await $.get('./assets/template/k-print.html');

            model.AllergyModel.forEach((item) => {
                AllergyModel += `<tr>
                <td class="w-20">Allergy for: </td>
                <td class="w-20">${item?.AllergyName || ''}</td>
                <td class="w-10">Since:</td>
                <td class="w-10">${item?.StartDate || ''}</td>
                <td class="w-20">Frequency:</td>
                <td class="w-20">${item?.Frequency || ''}</td>
            </tr>`;
            });

            model.VisitProblemExam.forEach(item => {
                let ExamReportModelSub = '';
                item.ListText.forEach(x => {
                    ExamReportModelSub += `<tr>
                    <td class="w-20">${!x.hide ? x?.ExamNameReslut : ''}</td>
                    <td class="w-80">${x?.text || ''}</td>
                </tr>`
                })
                ExamReportModel += `<h4><u>${item?.ProblemName}</u></h4>
                <table class="w-100">
                    ${ExamReportModelSub}
                </table>`;
            });

            SocialHistoryModel += `<tr>
                <td class="w-20">Name:</td>
                <td class="w-20">${model.SocialHistoryModel[0].Name}</td>
                <td class="w-20"></td>
                <td class="w-20">Frequency:</td>
                <td class="w-20">${model.SocialHistoryModel[0]?.Type == 1 ? "Never" : model.SocialHistoryModel[0]?.Type == 2 ? "Ofen" : "Daily"}</td>
            </tr>
            <tr>
                <td class="w-20">Name:</td>
                <td class="w-20">${model.SocialHistoryModel[1].Name}</td>
                <td class="w-20"></td>
                <td class="w-20">Frequency:</td>
                <td class="w-20">
                ${model.SocialHistoryModel[1]?.Type == 1 ? "Never" : model.SocialHistoryModel[1]?.Type == 2 ? "3/Week" : model.SocialHistoryModel[1]?.Type == 3 ? "5-10/Week" : ">10Week"}
                </td>
            </tr>
            <tr>
                <td class="w-20">Name:</td>
                <td class="w-20">${model.SocialHistoryModel[2].Name}</td>
                <td class="w-20"></td>
                <td class="w-20">Frequency:</td>
                <td class="w-20">
                ${model.SocialHistoryModel[2]?.Type == 1 ? "Never" : model.SocialHistoryModel[2]?.Type == 2 ? "Stop" : "Smoking"}
                </td>
            </tr>
            `;

            model.FamilyHistoryModel.forEach((item) => {
                FamilyHistoryModel += `<tr>
                <td class="w-20">Name:</td>
                <td class="w-20">${item?.DiseaseName}</td>
                <td class="w-20"></td>
                <td class="w-20">Relationship:</td>
                <td class="w-20">${item?.Relationship}</td>
            </tr>`;
            });

            model.MedicalHistoryModel.forEach((item) => {
                MedicalHistoryModel += `<tr>
                <td class="w-20">Name:</td>
                <td class="w-20">${item?.SNOMEDCode}</td>
                <td class="w-20"></td>
                <td class="w-20">since:</td>
                <td class="w-20">${item?.StartDate || ''}</td>
            </tr>`;
            });

            model.SurgicalHistoryModel.forEach((item) => {
                SurgicalHistoryModel += `<tr>
                <td class="w-20">Name:</td>
                <td class="w-20">${item?.SNOMEDCode}</td>
                <td class="w-20"></td>
                <td class="w-20">since:</td>
                <td class="w-20">${item?.StartDate || ''}</td>
            </tr>`;
            });

            model.MedicationByProblemModel.forEach((item) => {
                MedicationByProblemModel += `<tr>
                <td class="text-center">${item.DrugName}</td>
                <td class="text-center">${item.DoseValue}</td>
                <td class="text-center">${item.FrequencyUnit}</td>
                <td class="text-center">${item.Route}</td>
                <td class="text-center">${item.Detail || ''}</td>
                <td class="text-center">${item.Purpose}</td>
            </tr>`;
            });

            model.ReasonForBookingModel.forEach((item, ix) => {
                ReasonForBookingModel += `<h4>${ix + 1}. ${item?.Name}</h4>`;
            });
            model.HistoryReport.forEach((item) => {
                if (item) {
                    let OldSymptoms = '';
                    item.OldSymptoms.forEach((x, ix) => {
                        OldSymptoms += `<tr>
                    <td>${ix == 0 ? "Old symptoms:" : ""}</td>
                    <td>${x?.SymptomName} - ${x?.ResultName}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>`
                    });
                    let NewSymptoms = '';
                    item.NewSymptoms.forEach((x, ix) => {
                        NewSymptoms += `<tr>
                    <td>${ix == 0 ? "New symptoms:" : ""}</td>
                    <td>${x?.SymptomName} - ${x?.ResultName}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>`
                    });
                    let ReviewOfSystems = '';
                    item.ReviewOfSystems.forEach((x, ix) => {
                        ReviewOfSystems += `<tr>
                    <td>${ix == 0 ? "Review Of Systems:" : ""}</td>
                    <td>${x?.SymptomName} - ${x?.ResultName}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>`
                    })
                    let DailyLife = '';
                    item.DailyLife.forEach((x, ix) => {
                        DailyLife += `<tr>
                    <td>${ix == 0 ? "Daily Life:" : ""}</td>
                    <td>${x?.SymptomName} - ${x?.ResultName}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>`
                    })
                    HistoryReport += `<h4><u>${item?.Name}</u></h4>
                <table class="w-100 ">
                    ${OldSymptoms}
                    ${NewSymptoms}
                    ${ReviewOfSystems}
                    ${DailyLife}
                </table>`;
                }
            });

            model.VisitVital.forEach(item => {
                VisitVital += `<h4>Time: ${this.date.formatDate(item?.ResultDate, 'HH:mm')} - ${this.date.formatDate(item?.ResultDate, 'DD/MM/YYY')}</h4>`
                let ListVital = '';
                item.ListVital.forEach(x => {
                    ListVital += `<tr>
                    <td>${x.Name}</td>
                    <td>${x?.NumericValue}</td>
                </tr>`
                });
                VisitVital += `
                <table class="w-50">
                    ${ListVital}
                </table>
                `;
            });

            model.VisitProblemDiagnoses.forEach((item) => {
                let VisitDiagnoses = '';
                item.VisitDiagnoses.forEach((x, ix) => {
                    VisitDiagnoses += `<tr>
                    <td>${ix == 0 ? "Diagnosis:" : ix == 1 ? "Possible Other Diagnosis:" : ""}</td>
                    <td>${x?.SNOMEDName}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>`
                })
                VisitProblemDiagnoses += `<h4><u>${item?.ProblemName}</u></h4>
                <table class="w-40">
                    ${VisitDiagnoses}
                </table>`;
            });

            model.OrderTestModel.forEach((item) => {
                OrderTestModel += `<tr>
                <td class="w-40">${item?.TestcategoryName}</td>
                <td class="w-50">${item?.TestName}</td>
                <td class="w-10">${item?.NumbericResult || ''}</td>
            </tr>`;
            });

            model.BiopsyModel.forEach((item) => {
                BiopsyModel += `<tr>
                <td class="w-40">${item?.OrganName}</td>
                <td class="w-50">${item?.TestName}</td>
                <td class="w-10">${item?.NumbericResult || ''}</td>
            </tr>`;
            });

            model.FTestModel.forEach((item) => {
                FTestModel += `<tr>
                <td class="w-40">${item?.OrganName}</td>
                <td class="w-50">${item?.TestName}</td>
                <td class="w-10">${item?.NumbericResult || ''}</td>
            </tr>`;
            });

            model.ImgModel.forEach((item) => {
                ImgModel += `<tr>
                <td class="w-30">${item?.TestcategoryName}</td>
                <td class="w-30">${item?.OrganName}</td>
                <td class="w-30">${item?.TestName}</td>
                <td class="w-10">${item?.NumbericResult || ''}</td>
            </tr>`;
            });

            if (model.PrescriptionReport.length) {
                model.PrescriptionReport.forEach((item) => {
                    if (item.length) {
                        item.forEach((a, ix) => {
                            let PrescriptionItem = '';
                            PrescriptionItem += `
                            Problem: ${ix === 0 ? a.ProblemName : ''}
                            <table class="table-page2 w-100">
                                <tr>
                                    <td>Name</td>
                                    <td>Dose</td>
                                    <td>Frequency</td>
                                    <td>Start Date</td>
                                    <td>End Date</td>
                                    <td>Route</td>
                                    <td>Detail</td>
                                </tr>
                                <tr>
                                    <td>${a.NameDrug}</td>
                                    <td>${a.DoseUnit}</td>
                                    <td>${a.FrequencyUnit}</td>
                                    <td>${this.date.formatDate(a.StartDate, 'DD-MM-YYYY')}</td>
                                    <td>${this.date.formatDate(a.EndDate, 'DD-MM-YYYY')}</td>
                                    <td>${a.NameDrugRoute}</td>
                                    <td>${a.Instruction}</td>
                                </tr>
                            </table>`;
                            PrescriptionReport += `${PrescriptionItem}`;
                        });
                    }
                });
            }

            model.PlanFollowupModel.forEach((item) => {
                PlanFollowupModel += `
                Problem: ${item?.Name} -- FollowDate:${this.date.formatDate(item.ResultDate, 'DD-MM-YYYY')}
                `;
            });

            const printReport = `<style>
                .w-10{
                    width: 10%
                }
                .w-20{
                    width: 20%
                }
                .w-30{
                    width: 30%
                }
                .w-40{
                    width: 40%
                }
                .w-50{
                    width: 50%
                }
                .w-60{
                    width: 60%
                }
                .w-70{
                    width: 70%
                }
                .w-80{
                    width: 80%
                }
                .w-90{
                    width: 90%
                }
                .w-100{
                    width: 100%
                }
                .title-report{
                    text-align: center;
                }
                h3 ,h4{
                    margin-bottom: 1px;
                    margin-top: 10px;
                }
                .text-center {
                    text-align: center;
                }
                .mr-2 {
                    margin-right: 20px;
                }
                .table-page2 {
                    font-family: arial, sans-serif;
                    border-collapse: collapse;
                    width: 100%;
                }
                
                .table-page2 td,
                th {
                    border: 1px solid #dddddd;
                    text-align: left;
                    padding: 8px;
                }
                .d-inline-block {
                    display: inline-block;
                }
                
                .d-flex {
                    display: flex;
                }
                .mh-1000 {
                   min-height:1000px;
                }
            </style>
            <div>
                <div class="mh-1000">
                    <table class="w-100">
                        <tr>
                            <td class="w-20">Hospital:</td>
                            <td class="w-20">${model?.HospitalName}</td>
                            <td class="w-10"></td>
                            <td class="w-10"></td>
                            <td class="w-20">Storage Number</td>
                            <td class="w-20">${model?.StorageNumber || ''}</td>
                        </tr>
                        <tr>
                            <td>Department:</td>
                            <td>${model?.HospitalDepartment}</td>
                            <td>Bed:</td>
                            <td>${model?.HospitalBed}</td>
                            <td>Insurance Code:</td>
                            <td>${model?.YTCode || ''}</td>
                        </tr>
                    </table>
                    <hr class="hr-header">
                    <h2 class="title-report">Medical Report</h2>
                    <h3>I. Individual patient information</h3>
                        <table class="w-100 ">
                            <tr>
                                <td class="w-20">Firstname:</td>
                                <td class="w-10">${model?.ProfileModel?.FirstName}</td>
                                <td class="w-10"></td>
                                <td class="w-20"></td>
                                <td class="w-20">Gender:</td>
                                <td class="w-20">${model?.ProfileModel?.Gender == 1 ? 'Male' : 'Female'}</td>
                            </tr>
                            <tr>
                                <td>Lastname:</td>
                                <td>${model?.ProfileModel?.LastName}</td>
                                <td></td>
                                <td></td>
                                <td>Date of birth:</td>
                                <td>${this.date.formatDate(model?.ProfileModel?.DOB, 'DD-MM-YYYY')}</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>${model?.ProfileModel?.Phone}</td>
                                <td></td>
                                <td></td>
                                <td>National ID:</td>
                                <td>${model?.ProfileModel?.NationalId}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>${model?.ProfileModel?.Email}</td>
                                <td></td>
                                <td></td>
                                <td>Patient ID:</td>
                                <td>${model?.ProfileModel?.PatientId}</td>
                            </tr>
                        </table>
                        <table class="w-100">
                            <tr>
                                <td class="w-20">Address:</td>
                                <td>${model?.ProfileModel?.Address}.</td>
                            </tr>
                        </table>
                    <h3>Emergency contact</h3>
                        <table class="w-100 ">
                            <tr>
                                <td class="w-20">Firstname:</td>
                                <td class="w-20">${model?.ProfileModel?.RelationshipFirstName}</td>
                                <td class="w-10"></td>
                                <td class="w-10"></td>
                                <td class="w-20">RelationShip:</td>
                                <td class="w-20">${model?.ProfileModel?.EmergencyRelationshipType}</td>
                            </tr>
                            <tr>
                                <td>Lastname:</td>
                                <td>${model?.ProfileModel?.RelationshipLastName}</td>
                                <td></td>
                                <td></td>
                                <td>Phone:</td>
                                <td>${model?.ProfileModel?.EmergencyPhone}</td>
                            </tr>
                        </table>
                    <hr>
                    <h3>II. Medical history</h3>
                    <h4><u>Medical history </u> </h4>
                        <table class="w-100 ">
                            ${MedicalHistoryModel}
                        </table>
                    <h4><u>Surgical history </u> </h4>
                        <table class="w-100 ">
                            ${SurgicalHistoryModel}
                        </table>
                    <h3>III. Family history</h3>
                        <table class="w-100 ">
                            ${FamilyHistoryModel}
                        </table>
                    <h3>IV. Social history</h3>
                        <table class="w-100">
                            ${SocialHistoryModel}
                        </table>
                    <h3>V. Allergy</h3>
                        <table class="w-100 ">
                            ${AllergyModel}
                        </table>
                </div>
                <div class="mh-1000">
                    <h3>VI. Medication</h3>
                    <table class="table-page2 w-100">
                        <tr>
                            <th class="w-20">Name</th>
                            <th class="w-10">Dose</th>
                            <th class="w-10">Frequency</th>
                            <th class="w-10">Route</th>
                            <th class="w-20">Details</th>
                            <th class="w-30">For problem</th>
                        </tr>
                        ${MedicationByProblemModel}
                    </table>
                    <h3>VII. Reason for booking</h3>
                        ${ReasonForBookingModel}
                    <h3>VII. History</h3>
                        ${HistoryReport}
                    <h3>VIII. Vital sign</h3>
                        ${VisitVital}
                    <h3>IX. Examination</h3>
                        ${ExamReportModel}
                    <h3>X. Diagnosis</h3>
                        ${VisitProblemDiagnoses}
                </div>
                <div class="mh-1000">
                    <h3>X. Plan</h3>
                        <h4>Order Test</h4>
                        <table class="table-page2 w-100">
                        <tr>
                            <th class="w-40">Category</th>
                            <th class="w-50">Test</th>
                            <th class="w-10">Result</th>
                        </tr>
                        ${OrderTestModel}
                        </table>
                        <h4>Biopsy</h4>
                        <table class="table-page2 w-100">
                        <tr>
                            <th class="w-40">Organ</th>
                            <th class="w-50">Test</th>
                            <th class="w-10">Result</th>
                        </tr>
                        ${BiopsyModel}
                        </table>
                        <h4>Fuctional Tests</h4>
                        <table class="table-page2 w-100">
                        <tr>
                            <th class="w-40">Organ</th>
                            <th class="w-50">Test</th>
                            <th class="w-10">Result</th>
                        </tr>
                        ${FTestModel}
                        </table>
                        <h4>Imaging</h4>
                        <table class="table-page2 w-100">
                        <tr>
                            <th class="w-30">Category</th>
                            <th class="w-30">Organ</th>
                            <th class="w-30">Test</th>
                            <th class="w-10">Result</th>
                        </tr>
                        ${ImgModel}
                        </table>
                        <h4>Prescription</h4>
                        ${PrescriptionReport}
                        <h4>Follow Up</h4>
                        ${PlanFollowupModel}
                </div>
            </div>
        `;
            const template = rawFile.replace(/{{PRINT}}/g, printReport);
            this.print(template, 'Medical Report');
        } catch (ex) {
            /*begin:: write log ex here: break*/
            throw new Error(ex);
        }
    }
}