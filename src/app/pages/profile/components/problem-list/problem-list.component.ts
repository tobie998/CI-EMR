import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatListModule } from "@angular/material/list";
import { ActivatedRoute } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import {
  NoteService,
  PatientService,
  ProblemService,
} from "src/app/common/service";
import { CodevalueService } from "src/app/common/service/codevalue.service";
import { CardPatientModule } from "src/app/shared/components/base@ci/card-patient/card-patient.component";
import {
  AlertService,
  FormatDateService,
  LoaderService,
  TabMenuService,
} from "src/app/shared/services";
import Swal from "sweetalert2";
@Component({
  selector: "app-problem-list",
  templateUrl: "./problem-list.component.html",
  styleUrls: ["./problem-list.component.scss"],
})
export class ProblemListComponent implements OnInit {
  constructor(
    private data: TabMenuService,
    private problemService: ProblemService,
    private route: ActivatedRoute,
    private noteSerive: NoteService,
    private alertService: AlertService,
    private patientService: PatientService,
    private dateService: FormatDateService,
    private loadService: LoaderService,
    private codeValueService: CodevalueService
  ) {}

  patientId: number;
  patientModel: any = {};
  newProblem: any = [];
  listOldProblem: any = [];
  problemList: any = [];
  nameNewProblem: string = "";
  visitId = 0;
  updateNote: any = {};
  listNewProblemSub: any = [];
  keypress: any;
  listProblemSearch: any = [];
  listCodeValue: any = [];
  hasText = false;
  loaded = false;

  ngOnInit() {
    try {
      this.loadService.show();
      this.patientId = +this.route.snapshot.params.patientId;
      this.problemService.listOldProblem(this.patientId).subscribe((res) => {
        this.listOldProblem = res;
        // if (!this.visitId) {
        //     this.listOldProblem.forEach(x => {
        //         if (x.Type !== 1) {
        //             this.updateTypeOldProblem(1, x);
        //             x.Type = 1;
        //         }
        //     });
        // }
      });
      this.patientService.detailPatient(this.patientId).then((res: any) => {
        this.patientModel = res;
        this.loaded = true;
        if (res.VisitId !== 0) {
          this.visitId = res.VisitId;
          this.getNewProblem();
          this.getNoteVisitPatient(this.patientId, this.visitId);
        }
      });
      this.codeValueService.listCodeValue().subscribe((res) => {
        this.listCodeValue = res;
      });
    } catch (ex) {
    } finally {
      this.loadService.hide();
    }
  }

  showButton() {
    if (this.updateNote.Title?.length > 0) {
      this.hasText = true;
      // console.log(this.hasText);
      // console.log("abc");
    } else if (this.updateNote.Title?.length == 0) {
      this.noteSerive
        .updateNote(this.updateNote.NoteId, this.updateNote)
        .subscribe((res) => {});
      this.hasText = false;
    }
  }

  getNewProblem() {
    this.problemService.detailProblemOfVisit(this.visitId).subscribe((res) => {
      this.newProblem = res.map((x) => {
        return {
          ProblemId: x.ProblemId,
          Status: x.Status,
          Name: x.Name,
          VisitProblemId: x.VisitProblemId,
          VisitId: x.VisitId,
          isUpdate: false,
        };
      });
    });
  }

  onChangeStatus = (i) => {
    this.patientService
      .update({ Status: i.NumericKey }, this.patientId)
      .subscribe((res) => {});
  };

  onSearchProblem = () => {
    clearTimeout(this.keypress);
    this.keypress = setTimeout(() => {
      this.problemService
        .searchProblemPredefine(1, 20, this.nameNewProblem)
        .subscribe((res) => {
          this.listProblemSearch = res;
        });
    }, 500);
  };

  getNoteVisitPatient = (patientId, visitId) => {
    this.noteSerive
      .listNoteVisitOfPatient(patientId, visitId)
      .subscribe((res) => {
        this.updateNote = res || {};
        // console.log(this.updateNote);
      });
  };

  startVisit() {
    const user = JSON.parse(localStorage.getItem("access_token"));
    user.Role = user.Role || "Nurse";
    const data = {
      PatientId: this.patientId,
      StartDate: this.dateService.formatDate(new Date(), "YYYY-MM-DDTHH:mm"),
      Status: 1,
      Type: 1,
      // Type: user.Role === "Doctor" ? 1 : 2
    };
    this.problemService.createVisit(data).subscribe((res) => {
      this.visitId = res;
      const createNote = {
        PatientId: this.patientId,
        VisitId: this.visitId,
        Title: "",
      };
      this.newProblem.forEach((x) => {
        x.VisitId = this.visitId;
        this.problemService.createProblemVisit(x).subscribe((res) => {
          x.VisitProblemId = res;
        });
      });
      this.problemService.listOldProblem(this.patientId).subscribe((res) => {
        this.listOldProblem = res;
      });
      this.noteSerive.createPatientNote(createNote).subscribe((res) => {
        this.getNoteVisitPatient(this.patientId, this.visitId);
      });
      this.data.changeMessage(this.patientId);
    });
    this.data.changeMessage(this.patientId);
  }

  updateTypeOldProblem(type: number, item) {
    this.problemService
      .updateProblemVisit(item.VisitProblemId, { Type: type })
      .subscribe(
        () => {
          item.Type = type;
        },
        () => {
          this.alertService.changeMessage({
            color: "red",
            text: `An error occurred.Please try again later.!`,
          });
        }
      );
  }

  onCreateNewProblem = () => {
    if (!this.visitId) {
      this.listNewProblemSub.push(this.nameNewProblem);
      const data = {
        VisitId: 0,
        Name: this.nameNewProblem,
        Type: 1,
        Status: 1,
        VisitProblemId: 0,
      };
      this.getNewProblem();
      this.nameNewProblem = "";
    } else {
      const data = {
        VisitId: this.visitId,
        Name: this.nameNewProblem,
        Type: 1,
        Status: 1,
        VisitProblemId: 0,
      };
      const checkOld = this.listOldProblem.find(
        (x) => x.Name.toLowerCase() === this.nameNewProblem.toLowerCase()
      );
      if (checkOld) {
        Swal.fire({
          title: "It this a new problem or the follow-up on an old problem ?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#9FB9C8",
          confirmButtonText: `New problem`,
          cancelButtonColor: "",
          cancelButtonText: `Follow-up`,
          reverseButtons: true,
        }).then((result) => {
          this.nameNewProblem = "";
          if (result.isConfirmed) {
            this.problemService.createProblemVisit(data).subscribe((res) => {
              this.getNewProblem();
            });
          } else {
            this.updateTypeOldProblem(2, checkOld);
          }
        });
      } else {
        this.problemService.createProblemVisit(data).subscribe((res) => {
          this.getNewProblem();
          this.nameNewProblem = "";
        });
      }
    }
  };

  onCreateNewProblemPredefine = (item) => {
    this.listProblemSearch = [];
    this.nameNewProblem = "";
    const data = {
      ProblemId: item.ProblemId,
      VisitId: this.visitId,
      Type: 1,
      Status: 1,
      NoteContent: "",
      Name: item.Name,
      VisitProblemId: 0,
    };
    this.problemService.createPredefinedProblemVisit(data).subscribe((res) => {
      this.getNewProblem();
    });
  };

  onDeleteProblem = (item) => {
    this.problemService
      .deleteVisitProblemId(item.VisitProblemId)
      .subscribe((res) => {
        this.listOldProblem = this.listOldProblem.filter(
          (x) => x.VisitProblemId !== item.VisitProblemId
        );
        this.newProblem = this.newProblem.filter(
          (x) => x.VisitProblemId !== item.VisitProblemId
        );
      });
  };

  onUpdateProblem = (item) => {
    this.problemService.update(item, item.ProblemId).subscribe((res) => {
      item.isUpdate = !item.isUpdate;
    });
  };

  onUpdateNoteVisit = () => {
    this.noteSerive
      .updateNote(this.updateNote.NoteId, this.updateNote)
      .subscribe((res) => {});
    this.hasText = !this.hasText;
  };
}

@NgModule({
  declarations: [ProblemListComponent],
  imports: [
    CardPatientModule,
    TranslateModule,
    CommonModule,
    MatListModule,
    FormsModule,
  ],
  exports: [ProblemListComponent],
})
export class ProblemListModule {}
