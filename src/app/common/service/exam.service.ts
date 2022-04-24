import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListExam } from '../model';

@Injectable({
    providedIn: 'root'
})
export class ExamService {

    constructor(
        private http: HttpClient
    ) { }
    getListExam(visitId, problemId) {
      return this.http
            .get(`api/exam?VisitId=${visitId}&ProblemId=${problemId}`)
            .pipe(map((res: any) => res.Payload));
    }
    getS() {
      return  [
        {
          "ParentExamId": null,
          "ExamId": 1,
          "Name": "head and neck",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": null,
              "ExamId": 2,
              "Name": "Head",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 2,
                  "ExamId": 4,
                  "Name": "conjunctiva",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1,
                      "Name": " yellow",
                      "ExamId": 4,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 2,
                      "Name": "clear ",
                      "ExamId": 4,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 3,
                      "Name": "left eye red",
                      "ExamId": 4,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 65,
                      "Name": "right eye red",
                      "ExamId": 4,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 2,
                  "ExamId": 5,
                  "Name": "External ears",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 4,
                      "Name": "Normal ",
                      "ExamId": 5,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 5,
                      "Name": "red ear canal left ",
                      "ExamId": 5,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 66,
                      "Name": "red ear canal right ",
                      "ExamId": 5,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 2,
                  "ExamId": 6,
                  "Name": "Nose",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 6,
                      "Name": "airway obstruction left",
                      "ExamId": 6,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 7,
                      "Name": "airway obstruction right",
                      "ExamId": 6,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 8,
                      "Name": "airway patent both sides",
                      "ExamId": 6,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 9,
                      "Name": "Clear nasal discharge ",
                      "ExamId": 6,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 10,
                      "Name": "deviation visible",
                      "ExamId": 6,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 11,
                      "Name": "green nasal discharge",
                      "ExamId": 6,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 12,
                      "Name": "no deformity",
                      "ExamId": 6,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 13,
                      "Name": "no discharge",
                      "ExamId": 6,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 14,
                      "Name": "no polyps visible",
                      "ExamId": 6,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 15,
                      "Name": "polyps visible",
                      "ExamId": 6,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 2,
                  "ExamId": 7,
                  "Name": "pupils",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 16,
                      "Name": "not responsive on left ",
                      "ExamId": 7,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 17,
                      "Name": "responsive to light",
                      "ExamId": 7,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 18,
                      "Name": "round ",
                      "ExamId": 7,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 67,
                      "Name": "not responsive on right",
                      "ExamId": 7,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 2,
                  "ExamId": 8,
                  "Name": "Sinus tenderness",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 19,
                      "Name": "no sinus tenderness",
                      "ExamId": 8,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 20,
                      "Name": "pain on bending forward",
                      "ExamId": 8,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 21,
                      "Name": "Pain on tapping ",
                      "ExamId": 8,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 2,
                  "ExamId": 9,
                  "Name": "Throat",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 22,
                      "Name": "normal",
                      "ExamId": 9,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 23,
                      "Name": "throat red",
                      "ExamId": 9,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 2,
                  "ExamId": 10,
                  "Name": "tonsils",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 24,
                      "Name": " tonsils large",
                      "ExamId": 10,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 25,
                      "Name": " tonsils small ",
                      "ExamId": 10,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 26,
                      "Name": "normal size and color",
                      "ExamId": 10,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 27,
                      "Name": "overall white coating",
                      "ExamId": 10,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 28,
                      "Name": "red and inflammed  ",
                      "ExamId": 10,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 29,
                      "Name": "scars from previous infections visible.",
                      "ExamId": 10,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 30,
                      "Name": "some pus pockets",
                      "ExamId": 10,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 2,
                  "ExamId": 11,
                  "Name": "Tympanic membranes",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 31,
                      "Name": " fluid level visible",
                      "ExamId": 11,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 32,
                      "Name": " membrane is pinkish grey",
                      "ExamId": 11,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 33,
                      "Name": " retracted ",
                      "ExamId": 11,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 34,
                      "Name": " translucent ",
                      "ExamId": 11,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 35,
                      "Name": "bulging",
                      "ExamId": 11,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 36,
                      "Name": "left normal",
                      "ExamId": 11,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 37,
                      "Name": "membrane is red ",
                      "ExamId": 11,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 38,
                      "Name": "membrane is white ",
                      "ExamId": 11,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 39,
                      "Name": "membrane is yellow",
                      "ExamId": 11,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 40,
                      "Name": "opaque ",
                      "ExamId": 11,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 41,
                      "Name": "right normal",
                      "ExamId": 11,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 42,
                      "Name": "torn",
                      "ExamId": 11,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            },
            {
              "ParentExamId": null,
              "ExamId": 3,
              "Name": "Neck",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 3,
                  "ExamId": 12,
                  "Name": "lymphnodes",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 43,
                      "Name": " hard ",
                      "ExamId": 12,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 44,
                      "Name": " not painful",
                      "ExamId": 12,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 45,
                      "Name": "along neck muscles left side",
                      "ExamId": 12,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 46,
                      "Name": "along neck muscles right side",
                      "ExamId": 12,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 47,
                      "Name": "behind the left ear",
                      "ExamId": 12,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 48,
                      "Name": "behind the right ear",
                      "ExamId": 12,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 49,
                      "Name": "immobile",
                      "ExamId": 12,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 50,
                      "Name": "in front of left ear",
                      "ExamId": 12,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 51,
                      "Name": "in front of right ear",
                      "ExamId": 12,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 52,
                      "Name": "Lymphnodes palpable",
                      "ExamId": 12,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 53,
                      "Name": "mobile",
                      "ExamId": 12,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 54,
                      "Name": "no enlarged or painful  lymphnodes palpable",
                      "ExamId": 12,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 55,
                      "Name": "painful",
                      "ExamId": 12,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 56,
                      "Name": "soft  ",
                      "ExamId": 12,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 57,
                      "Name": "under jaw left side",
                      "ExamId": 12,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 58,
                      "Name": "under jaw right side",
                      "ExamId": 12,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 3,
                  "ExamId": 13,
                  "Name": "thyroid",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 59,
                      "Name": " enlarged ",
                      "ExamId": 13,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 60,
                      "Name": "no nodes ",
                      "ExamId": 13,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 61,
                      "Name": "nodes palpable",
                      "ExamId": 13,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 62,
                      "Name": "normal size",
                      "ExamId": 13,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 3,
                  "ExamId": 14,
                  "Name": "trachea",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 63,
                      "Name": "trachea is midline",
                      "ExamId": 14,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 64,
                      "Name": "trachea is not midline",
                      "ExamId": 14,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 15,
          "Name": "hip",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": 15,
              "ExamId": 16,
              "Name": "observation walking",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 68,
                  "Name": "normal gait",
                  "ExamId": 16,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 69,
                  "Name": "inward bowing",
                  "ExamId": 16,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 70,
                  "Name": "outward bowing",
                  "ExamId": 16,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 71,
                  "Name": "limp",
                  "ExamId": 16,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 15,
              "ExamId": 17,
              "Name": "palpation",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 72,
                  "Name": "no pain on palpation",
                  "ExamId": 17,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 73,
                  "Name": "pain in anterior hip joint",
                  "ExamId": 17,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 15,
              "ExamId": 18,
              "Name": "Range of motion",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 74,
                  "Name": "active and passive ROM normal",
                  "ExamId": 18,
                  "Normal": 1,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 75,
                  "Name": "internal rotation limited",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 76,
                  "Name": "external rotation limited",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 77,
                  "Name": "flexion limited",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 78,
                  "Name": "extension limited",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 79,
                  "Name": "abduction limited",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 80,
                  "Name": "adduction limited",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 81,
                  "Name": "limited in passive and active motion",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 82,
                  "Name": "limited in active only",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 83,
                  "Name": "limited to ?.degrees",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 93,
                  "Name": "active and passive ROM normal",
                  "ExamId": 18,
                  "Normal": 1,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 94,
                  "Name": "internal rotation limited",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 95,
                  "Name": "external rotation limited",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 96,
                  "Name": "flexion limited",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 97,
                  "Name": "extension limited",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 98,
                  "Name": "abduction limited",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 99,
                  "Name": "adduction limited",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 100,
                  "Name": "limited in passive and active motion",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 101,
                  "Name": "limited in active only",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 102,
                  "Name": "limited to ?.degrees",
                  "ExamId": 18,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 15,
              "ExamId": 19,
              "Name": "sensory testing",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 89,
                  "Name": "Trendelenburg normal",
                  "ExamId": 19,
                  "Normal": 1,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 90,
                  "Name": "Trendelenburg positive",
                  "ExamId": 19,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 91,
                  "Name": "Hop test normal",
                  "ExamId": 19,
                  "Normal": 1,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 92,
                  "Name": "Hop test positive",
                  "ExamId": 19,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 103,
                  "Name": "Trendelenburg normal",
                  "ExamId": 19,
                  "Normal": 1,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 104,
                  "Name": "Trendelenburg positive",
                  "ExamId": 19,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 105,
                  "Name": "Hop test normal",
                  "ExamId": 19,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 106,
                  "Name": "Hop test positive",
                  "ExamId": 19,
                  "Normal": 1,
                  "LeftRight": 2,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 15,
              "ExamId": 20,
              "Name": "strength testing",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 84,
                  "Name": "all strength tests normal",
                  "ExamId": 20,
                  "Normal": 1,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 85,
                  "Name": "extension strength limited",
                  "ExamId": 20,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 86,
                  "Name": "flexion strength limited",
                  "ExamId": 20,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 87,
                  "Name": "adduction strength limited",
                  "ExamId": 20,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 88,
                  "Name": "abduction strength limited",
                  "ExamId": 20,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 107,
                  "Name": "all strength tests normal",
                  "ExamId": 20,
                  "Normal": 1,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 108,
                  "Name": "extension strength limited",
                  "ExamId": 20,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 109,
                  "Name": "flexion strength limited",
                  "ExamId": 20,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 110,
                  "Name": "adduction strength limited",
                  "ExamId": 20,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 111,
                  "Name": "abduction strength limited",
                  "ExamId": 20,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                }
              ]
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 21,
          "Name": "legs",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": 21,
              "ExamId": 22,
              "Name": "left leg",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 112,
                  "Name": "normal",
                  "ExamId": 22,
                  "Normal": 1,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 113,
                  "Name": "varices",
                  "ExamId": 22,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 114,
                  "Name": "medial side (long saph vein) ",
                  "ExamId": 22,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 115,
                  "Name": "lateral side (short saph vein)",
                  "ExamId": 22,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 116,
                  "Name": " edema",
                  "ExamId": 22,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 117,
                  "Name": " hairloss ",
                  "ExamId": 22,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 118,
                  "Name": "hardening and brown discoloration of skin",
                  "ExamId": 22,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 119,
                  "Name": " perthe's sign",
                  "ExamId": 22,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 21,
              "ExamId": 23,
              "Name": "right leg",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 120,
                  "Name": "normal",
                  "ExamId": 23,
                  "Normal": 1,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 121,
                  "Name": "varices",
                  "ExamId": 23,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 122,
                  "Name": "medial side (long saph vein) ",
                  "ExamId": 23,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 123,
                  "Name": "lateral side (short saph vein)",
                  "ExamId": 23,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 124,
                  "Name": " edema",
                  "ExamId": 23,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 125,
                  "Name": " hairloss ",
                  "ExamId": 23,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 126,
                  "Name": "hardening and brown discoloration of skin",
                  "ExamId": 23,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 127,
                  "Name": " perthe's sign",
                  "ExamId": 23,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                }
              ]
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 24,
          "Name": "knee",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": null,
              "ExamId": 25,
              "Name": "left knee",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 25,
                  "ExamId": 27,
                  "Name": "Anterior Cruciate Ligament   knee",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 128,
                      "Name": "more than normal laxity",
                      "ExamId": 27,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 129,
                      "Name": "normal laxity",
                      "ExamId": 27,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 198,
                      "Name": "more than normal laxity",
                      "ExamId": 27,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 199,
                      "Name": "normal laxity",
                      "ExamId": 27,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 25,
                  "ExamId": 28,
                  "Name": "Anterior knee pain  ",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 130,
                      "Name": "no pain",
                      "ExamId": 28,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 131,
                      "Name": "pain ",
                      "ExamId": 28,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 200,
                      "Name": "no pain",
                      "ExamId": 28,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 201,
                      "Name": "pain ",
                      "ExamId": 28,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 25,
                  "ExamId": 29,
                  "Name": "Effusion test",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 132,
                      "Name": "bulge knee",
                      "ExamId": 29,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 133,
                      "Name": "no effusion",
                      "ExamId": 29,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 134,
                      "Name": "patellar tap positive",
                      "ExamId": 29,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 202,
                      "Name": "bulge knee",
                      "ExamId": 29,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 203,
                      "Name": "no effusion",
                      "ExamId": 29,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 204,
                      "Name": "patellar tap positive",
                      "ExamId": 29,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 25,
                  "ExamId": 30,
                  "Name": "inspection   knee",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 135,
                      "Name": "no swelling_ redness or other notable changes",
                      "ExamId": 30,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 136,
                      "Name": "redness",
                      "ExamId": 30,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 137,
                      "Name": "swelling anterior/lateral in the joint",
                      "ExamId": 30,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 138,
                      "Name": "swelling posterior in the bursa",
                      "ExamId": 30,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 139,
                      "Name": "warmth",
                      "ExamId": 30,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 205,
                      "Name": "no swelling_ redness or other notable changes",
                      "ExamId": 30,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 206,
                      "Name": "redness",
                      "ExamId": 30,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 207,
                      "Name": "swelling anterior/lateral in the joint",
                      "ExamId": 30,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 208,
                      "Name": "swelling posterior in the bursa",
                      "ExamId": 30,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 209,
                      "Name": "warmth",
                      "ExamId": 30,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 25,
                  "ExamId": 31,
                  "Name": "Lateral collateral ligament   knee",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 140,
                      "Name": "more than normal laxity",
                      "ExamId": 31,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 141,
                      "Name": "normal laxity",
                      "ExamId": 31,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 210,
                      "Name": "more than normal laxity",
                      "ExamId": 31,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 211,
                      "Name": "normal laxity",
                      "ExamId": 31,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 25,
                  "ExamId": 32,
                  "Name": "Medial Collateral ligament   knee",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 142,
                      "Name": "more than normal laxity",
                      "ExamId": 32,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 143,
                      "Name": "normal laxity",
                      "ExamId": 32,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 212,
                      "Name": "more than normal laxity",
                      "ExamId": 32,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 213,
                      "Name": "normal laxity",
                      "ExamId": 32,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 25,
                  "ExamId": 33,
                  "Name": "Meniscus   knee",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 144,
                      "Name": "duck walk abnormal",
                      "ExamId": 33,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 145,
                      "Name": "duck walk normal",
                      "ExamId": 33,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 146,
                      "Name": "joint line tenderness_ lateral",
                      "ExamId": 33,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 147,
                      "Name": "joint line tenderness_ medial",
                      "ExamId": 33,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 148,
                      "Name": "Mc Murray test lateral meniscus positive",
                      "ExamId": 33,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 149,
                      "Name": "Mc Murray test medial and lateral meniscus negative",
                      "ExamId": 33,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 150,
                      "Name": "Mc Murray test medial meniscus positive",
                      "ExamId": 33,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 151,
                      "Name": "no joint line tenderness",
                      "ExamId": 33,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 214,
                      "Name": "duck walk abnormal",
                      "ExamId": 33,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 215,
                      "Name": "duck walk normal",
                      "ExamId": 33,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 216,
                      "Name": "joint line tenderness_ lateral",
                      "ExamId": 33,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 217,
                      "Name": "joint line tenderness_ medial",
                      "ExamId": 33,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 218,
                      "Name": "Mc Murray test lateral meniscus positive",
                      "ExamId": 33,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 219,
                      "Name": "Mc Murray test medial and lateral meniscus negative",
                      "ExamId": 33,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 220,
                      "Name": "Mc Murray test medial meniscus positive",
                      "ExamId": 33,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 221,
                      "Name": "no joint line tenderness",
                      "ExamId": 33,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 25,
                  "ExamId": 34,
                  "Name": "observation walking",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 152,
                      "Name": "inward bowing",
                      "ExamId": 34,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 153,
                      "Name": "outward bowing",
                      "ExamId": 34,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 154,
                      "Name": "walking normal gait",
                      "ExamId": 34,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 222,
                      "Name": "inward bowing",
                      "ExamId": 34,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 223,
                      "Name": "outward bowing",
                      "ExamId": 34,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 224,
                      "Name": "walking normal gait",
                      "ExamId": 34,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 25,
                  "ExamId": 35,
                  "Name": "Posterior Cruciate Ligament  ",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 155,
                      "Name": "more than normal laxity",
                      "ExamId": 35,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 156,
                      "Name": "normal laxity",
                      "ExamId": 35,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 225,
                      "Name": "more than normal laxity",
                      "ExamId": 35,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 226,
                      "Name": "normal laxity",
                      "ExamId": 35,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 25,
                  "ExamId": 36,
                  "Name": "Range of motion   knee",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 157,
                      "Name": "active and passive ROM normal",
                      "ExamId": 36,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 158,
                      "Name": "extension limited",
                      "ExamId": 36,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 159,
                      "Name": "flexion limited",
                      "ExamId": 36,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 160,
                      "Name": "limited in active only",
                      "ExamId": 36,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 161,
                      "Name": "limited in passive and active motion",
                      "ExamId": 36,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 162,
                      "Name": "limited to ?.degrees",
                      "ExamId": 36,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 227,
                      "Name": "active and passive ROM normal",
                      "ExamId": 36,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 228,
                      "Name": "extension limited",
                      "ExamId": 36,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 229,
                      "Name": "flexion limited",
                      "ExamId": 36,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 230,
                      "Name": "limited in active only",
                      "ExamId": 36,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 231,
                      "Name": "limited in passive and active motion",
                      "ExamId": 36,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 232,
                      "Name": "limited to ?.degrees",
                      "ExamId": 36,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            },
            {
              "ParentExamId": null,
              "ExamId": 26,
              "Name": "right knee",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 26,
                  "ExamId": 37,
                  "Name": "Anterior Cruciate Ligament   knee",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 163,
                      "Name": "more than normal laxity",
                      "ExamId": 37,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 164,
                      "Name": "normal laxity",
                      "ExamId": 37,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 233,
                      "Name": "more than normal laxity",
                      "ExamId": 37,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 234,
                      "Name": "normal laxity",
                      "ExamId": 37,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 26,
                  "ExamId": 38,
                  "Name": "Anterior knee pain  ",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 165,
                      "Name": "no pain",
                      "ExamId": 38,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 166,
                      "Name": "pain ",
                      "ExamId": 38,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 235,
                      "Name": "no pain",
                      "ExamId": 38,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 236,
                      "Name": "pain ",
                      "ExamId": 38,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 26,
                  "ExamId": 39,
                  "Name": "Effusion test",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 167,
                      "Name": "bulge knee",
                      "ExamId": 39,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 168,
                      "Name": "no effusion",
                      "ExamId": 39,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 169,
                      "Name": "patellar tap positive",
                      "ExamId": 39,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 237,
                      "Name": "bulge knee",
                      "ExamId": 39,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 238,
                      "Name": "no effusion",
                      "ExamId": 39,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 239,
                      "Name": "patellar tap positive",
                      "ExamId": 39,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 26,
                  "ExamId": 40,
                  "Name": "inspection   knee",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 170,
                      "Name": "no swelling_ redness or other notable changes",
                      "ExamId": 40,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 171,
                      "Name": "redness",
                      "ExamId": 40,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 172,
                      "Name": "swelling anterior/lateral in the joint",
                      "ExamId": 40,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 173,
                      "Name": "swelling posterior in the bursa",
                      "ExamId": 40,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 174,
                      "Name": "warmth",
                      "ExamId": 40,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 240,
                      "Name": "no swelling_ redness or other notable changes",
                      "ExamId": 40,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 241,
                      "Name": "redness",
                      "ExamId": 40,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 242,
                      "Name": "swelling anterior/lateral in the joint",
                      "ExamId": 40,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 243,
                      "Name": "swelling posterior in the bursa",
                      "ExamId": 40,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 244,
                      "Name": "warmth",
                      "ExamId": 40,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 26,
                  "ExamId": 41,
                  "Name": "Lateral collateral ligament   knee",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 175,
                      "Name": "more than normal laxity",
                      "ExamId": 41,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 176,
                      "Name": "normal laxity",
                      "ExamId": 41,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 245,
                      "Name": "more than normal laxity",
                      "ExamId": 41,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 246,
                      "Name": "normal laxity",
                      "ExamId": 41,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 26,
                  "ExamId": 42,
                  "Name": "Medial Collateral ligament   knee",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 177,
                      "Name": "more than normal laxity",
                      "ExamId": 42,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 178,
                      "Name": "normal laxity",
                      "ExamId": 42,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 247,
                      "Name": "more than normal laxity",
                      "ExamId": 42,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 248,
                      "Name": "normal laxity",
                      "ExamId": 42,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 26,
                  "ExamId": 43,
                  "Name": "Meniscus   knee",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 179,
                      "Name": "duck walk abnormal",
                      "ExamId": 43,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 180,
                      "Name": "duck walk normal",
                      "ExamId": 43,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 181,
                      "Name": "joint line tenderness_ lateral",
                      "ExamId": 43,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 182,
                      "Name": "joint line tenderness_ medial",
                      "ExamId": 43,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 183,
                      "Name": "Mc Murray test lateral meniscus positive",
                      "ExamId": 43,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 184,
                      "Name": "Mc Murray test medial and lateral meniscus negative",
                      "ExamId": 43,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 185,
                      "Name": "Mc Murray test medial meniscus positive",
                      "ExamId": 43,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 186,
                      "Name": "no joint line tenderness",
                      "ExamId": 43,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 249,
                      "Name": "duck walk abnormal",
                      "ExamId": 43,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 250,
                      "Name": "duck walk normal",
                      "ExamId": 43,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 251,
                      "Name": "joint line tenderness_ lateral",
                      "ExamId": 43,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 252,
                      "Name": "joint line tenderness_ medial",
                      "ExamId": 43,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 253,
                      "Name": "Mc Murray test lateral meniscus positive",
                      "ExamId": 43,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 254,
                      "Name": "Mc Murray test medial and lateral meniscus negative",
                      "ExamId": 43,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 255,
                      "Name": "Mc Murray test medial meniscus positive",
                      "ExamId": 43,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 256,
                      "Name": "no joint line tenderness",
                      "ExamId": 43,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 26,
                  "ExamId": 44,
                  "Name": "observation walking",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 187,
                      "Name": "inward bowing",
                      "ExamId": 44,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 188,
                      "Name": "outward bowing",
                      "ExamId": 44,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 189,
                      "Name": "walking normal gait",
                      "ExamId": 44,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 257,
                      "Name": "inward bowing",
                      "ExamId": 44,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 258,
                      "Name": "outward bowing",
                      "ExamId": 44,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 259,
                      "Name": "walking normal gait",
                      "ExamId": 44,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 26,
                  "ExamId": 45,
                  "Name": "Posterior Cruciate Ligament  ",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 190,
                      "Name": "more than normal laxity",
                      "ExamId": 45,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 191,
                      "Name": "normal laxity",
                      "ExamId": 45,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 260,
                      "Name": "more than normal laxity",
                      "ExamId": 45,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 261,
                      "Name": "normal laxity",
                      "ExamId": 45,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 26,
                  "ExamId": 46,
                  "Name": "Range of motion   knee",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 192,
                      "Name": "active and passive ROM normal",
                      "ExamId": 46,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 193,
                      "Name": "extension limited",
                      "ExamId": 46,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 194,
                      "Name": "flexion limited",
                      "ExamId": 46,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 195,
                      "Name": "limited in active only",
                      "ExamId": 46,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 196,
                      "Name": "limited in passive and active motion",
                      "ExamId": 46,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 197,
                      "Name": "limited to ?.degrees",
                      "ExamId": 46,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 262,
                      "Name": "active and passive ROM normal",
                      "ExamId": 46,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 263,
                      "Name": "extension limited",
                      "ExamId": 46,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 264,
                      "Name": "flexion limited",
                      "ExamId": 46,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 265,
                      "Name": "limited in active only",
                      "ExamId": 46,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 266,
                      "Name": "limited in passive and active motion",
                      "ExamId": 46,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 267,
                      "Name": "limited to ?.degrees",
                      "ExamId": 46,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 47,
          "Name": "foot and ankle",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": null,
              "ExamId": 48,
              "Name": "left foot and ankle",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 48,
                  "ExamId": 50,
                  "Name": "lateral ankle ligaments",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 268,
                      "Name": "anterior drawer test normal",
                      "ExamId": 50,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 269,
                      "Name": "anterior drawer test positive",
                      "ExamId": 50,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 344,
                      "Name": "anterior drawer test normal",
                      "ExamId": 50,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 345,
                      "Name": "anterior drawer test positive",
                      "ExamId": 50,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 48,
                  "ExamId": 51,
                  "Name": "Observation",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 270,
                      "Name": "bruising",
                      "ExamId": 51,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 271,
                      "Name": "no swelling redness bruising or deformities",
                      "ExamId": 51,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 272,
                      "Name": "over metatarsals",
                      "ExamId": 51,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 273,
                      "Name": "redness",
                      "ExamId": 51,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 274,
                      "Name": "swelling",
                      "ExamId": 51,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 275,
                      "Name": "under lateral malleolus",
                      "ExamId": 51,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 276,
                      "Name": "under medial malleolus",
                      "ExamId": 51,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 346,
                      "Name": "bruising",
                      "ExamId": 51,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 347,
                      "Name": "no swelling redness bruising or deformities",
                      "ExamId": 51,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 348,
                      "Name": "over metatarsals",
                      "ExamId": 51,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 349,
                      "Name": "redness",
                      "ExamId": 51,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 350,
                      "Name": "swelling",
                      "ExamId": 51,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 351,
                      "Name": "under lateral malleolus",
                      "ExamId": 51,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 352,
                      "Name": "under medial malleolus",
                      "ExamId": 51,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 48,
                  "ExamId": 52,
                  "Name": "palpation",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 277,
                      "Name": "no pain on palpation",
                      "ExamId": 52,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 278,
                      "Name": "pain along lower 6 cm of the posterior part of the lateral malleolus",
                      "ExamId": 52,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 279,
                      "Name": "pain along lower 6 cm of the posterior part of the medial malleolus",
                      "ExamId": 52,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 280,
                      "Name": "pain on proximal part of 5th metatarsal",
                      "ExamId": 52,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 281,
                      "Name": "pain over tarsal navocular bone",
                      "ExamId": 52,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 353,
                      "Name": "no pain on palpation",
                      "ExamId": 52,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 354,
                      "Name": "pain along lower 6 cm of the posterior part of the lateral malleolus",
                      "ExamId": 52,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 355,
                      "Name": "pain along lower 6 cm of the posterior part of the medial malleolus",
                      "ExamId": 52,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 356,
                      "Name": "pain on proximal part of 5th metatarsal",
                      "ExamId": 52,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 357,
                      "Name": "pain over tarsal navocular bone",
                      "ExamId": 52,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 48,
                  "ExamId": 53,
                  "Name": "Range of motion",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 282,
                      "Name": "active and passive ROM in the ankle normal",
                      "ExamId": 53,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 283,
                      "Name": "dorsifexion limited",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 284,
                      "Name": "eversion/suppination limited",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 285,
                      "Name": "inversion/pronation limited",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 286,
                      "Name": "limited by pain",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 287,
                      "Name": "limited in active only",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 288,
                      "Name": "limited in passive and active motion",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 289,
                      "Name": "limited to ?.degrees",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 290,
                      "Name": "plantar flexion limited",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 291,
                      "Name": "toe dorsiflexion limited",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 292,
                      "Name": "toe plantarflexion limited",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 358,
                      "Name": "active and passive ROM in the ankle normal",
                      "ExamId": 53,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 359,
                      "Name": "dorsifexion limited",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 360,
                      "Name": "eversion/suppination limited",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 361,
                      "Name": "inversion/pronation limited",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 362,
                      "Name": "limited by pain",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 363,
                      "Name": "limited in active only",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 364,
                      "Name": "limited in passive and active motion",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 365,
                      "Name": "limited to ?.degrees",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 366,
                      "Name": "plantar flexion limited",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 367,
                      "Name": "toe dorsiflexion limited",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 368,
                      "Name": "toe plantarflexion limited",
                      "ExamId": 53,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 48,
                  "ExamId": 54,
                  "Name": "Range of motion midtarsal joints",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 293,
                      "Name": "active and passive ROM in the midfoot normal",
                      "ExamId": 54,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 294,
                      "Name": "eversion/suppination limited",
                      "ExamId": 54,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 295,
                      "Name": "inversion/pronation limited",
                      "ExamId": 54,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 296,
                      "Name": "limited by pain",
                      "ExamId": 54,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 297,
                      "Name": "limited in active only",
                      "ExamId": 54,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 298,
                      "Name": "limited in passive and active motion",
                      "ExamId": 54,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 369,
                      "Name": "active and passive ROM in the midfoot normal",
                      "ExamId": 54,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 370,
                      "Name": "eversion/suppination limited",
                      "ExamId": 54,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 371,
                      "Name": "inversion/pronation limited",
                      "ExamId": 54,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 372,
                      "Name": "limited by pain",
                      "ExamId": 54,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 373,
                      "Name": "limited in active only",
                      "ExamId": 54,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 374,
                      "Name": "limited in passive and active motion",
                      "ExamId": 54,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 48,
                  "ExamId": 55,
                  "Name": "strength testing",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 299,
                      "Name": "all strength tests normal",
                      "ExamId": 55,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 300,
                      "Name": "dorsiflexion weakened",
                      "ExamId": 55,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 301,
                      "Name": "eversion weakened",
                      "ExamId": 55,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 302,
                      "Name": "inversion weakened",
                      "ExamId": 55,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 303,
                      "Name": "plantarflexion weakened",
                      "ExamId": 55,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 375,
                      "Name": "all strength tests normal",
                      "ExamId": 55,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 376,
                      "Name": "dorsiflexion weakened",
                      "ExamId": 55,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 377,
                      "Name": "eversion weakened",
                      "ExamId": 55,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 378,
                      "Name": "inversion weakened",
                      "ExamId": 55,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 379,
                      "Name": "plantarflexion weakened",
                      "ExamId": 55,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 48,
                  "ExamId": 56,
                  "Name": "syndesmosis",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 304,
                      "Name": "sqeeze test positive",
                      "ExamId": 56,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 305,
                      "Name": "squeeze test normal",
                      "ExamId": 56,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 380,
                      "Name": "sqeeze test positive",
                      "ExamId": 56,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 381,
                      "Name": "squeeze test normal",
                      "ExamId": 56,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            },
            {
              "ParentExamId": null,
              "ExamId": 49,
              "Name": "right foot and ankle",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 49,
                  "ExamId": 57,
                  "Name": "lateral ankle ligaments",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 306,
                      "Name": "anterior drawer test normal",
                      "ExamId": 57,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 307,
                      "Name": "anterior drawer test positive",
                      "ExamId": 57,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 382,
                      "Name": "anterior drawer test normal",
                      "ExamId": 57,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 383,
                      "Name": "anterior drawer test positive",
                      "ExamId": 57,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 49,
                  "ExamId": 58,
                  "Name": "Observation",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 308,
                      "Name": "bruising",
                      "ExamId": 58,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 309,
                      "Name": "no swelling redness bruising or deformities",
                      "ExamId": 58,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 310,
                      "Name": "over metatarsals",
                      "ExamId": 58,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 311,
                      "Name": "redness",
                      "ExamId": 58,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 312,
                      "Name": "swelling",
                      "ExamId": 58,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 313,
                      "Name": "under lateral malleolus",
                      "ExamId": 58,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 314,
                      "Name": "under medial malleolus",
                      "ExamId": 58,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 384,
                      "Name": "bruising",
                      "ExamId": 58,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 385,
                      "Name": "no swelling redness bruising or deformities",
                      "ExamId": 58,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 386,
                      "Name": "over metatarsals",
                      "ExamId": 58,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 387,
                      "Name": "redness",
                      "ExamId": 58,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 388,
                      "Name": "swelling",
                      "ExamId": 58,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 389,
                      "Name": "under lateral malleolus",
                      "ExamId": 58,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 390,
                      "Name": "under medial malleolus",
                      "ExamId": 58,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 49,
                  "ExamId": 59,
                  "Name": "palpation",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 315,
                      "Name": "no pain on palpation",
                      "ExamId": 59,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 316,
                      "Name": "pain along lower 6 cm of the posterior part of the lateral malleolus",
                      "ExamId": 59,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 317,
                      "Name": "pain along lower 6 cm of the posterior part of the medial malleolus",
                      "ExamId": 59,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 318,
                      "Name": "pain on proximal part of 5th metatarsal",
                      "ExamId": 59,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 319,
                      "Name": "pain over tarsal navocular bone",
                      "ExamId": 59,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 391,
                      "Name": "no pain on palpation",
                      "ExamId": 59,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 392,
                      "Name": "pain along lower 6 cm of the posterior part of the lateral malleolus",
                      "ExamId": 59,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 393,
                      "Name": "pain along lower 6 cm of the posterior part of the medial malleolus",
                      "ExamId": 59,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 394,
                      "Name": "pain on proximal part of 5th metatarsal",
                      "ExamId": 59,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 395,
                      "Name": "pain over tarsal navocular bone",
                      "ExamId": 59,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 49,
                  "ExamId": 60,
                  "Name": "Range of motion",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 320,
                      "Name": "active and passive ROM in the ankle normal",
                      "ExamId": 60,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 321,
                      "Name": "dorsifexion limited",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 322,
                      "Name": "eversion/suppination limited",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 323,
                      "Name": "inversion/pronation limited",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 324,
                      "Name": "limited by pain",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 325,
                      "Name": "limited in active only",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 326,
                      "Name": "limited in passive and active motion",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 327,
                      "Name": "limited to ?.degrees",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 328,
                      "Name": "plantar flexion limited",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 329,
                      "Name": "toe dorsiflexion limited",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 330,
                      "Name": "toe plantarflexion limited",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 396,
                      "Name": "active and passive ROM in the ankle normal",
                      "ExamId": 60,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 397,
                      "Name": "dorsifexion limited",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 398,
                      "Name": "eversion/suppination limited",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 399,
                      "Name": "inversion/pronation limited",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 400,
                      "Name": "limited by pain",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 401,
                      "Name": "limited in active only",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 402,
                      "Name": "limited in passive and active motion",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 403,
                      "Name": "limited to ?.degrees",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 404,
                      "Name": "plantar flexion limited",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 405,
                      "Name": "toe dorsiflexion limited",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 406,
                      "Name": "toe plantarflexion limited",
                      "ExamId": 60,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 49,
                  "ExamId": 61,
                  "Name": "Range of motion midtarsal joints",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 331,
                      "Name": "active and passive ROM in the midfoot normal",
                      "ExamId": 61,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 332,
                      "Name": "eversion/suppination limited",
                      "ExamId": 61,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 333,
                      "Name": "inversion/pronation limited",
                      "ExamId": 61,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 334,
                      "Name": "limited by pain",
                      "ExamId": 61,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 335,
                      "Name": "limited in active only",
                      "ExamId": 61,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 336,
                      "Name": "limited in passive and active motion",
                      "ExamId": 61,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 407,
                      "Name": "active and passive ROM in the midfoot normal",
                      "ExamId": 61,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 408,
                      "Name": "eversion/suppination limited",
                      "ExamId": 61,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 409,
                      "Name": "inversion/pronation limited",
                      "ExamId": 61,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 410,
                      "Name": "limited by pain",
                      "ExamId": 61,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 411,
                      "Name": "limited in active only",
                      "ExamId": 61,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 412,
                      "Name": "limited in passive and active motion",
                      "ExamId": 61,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 49,
                  "ExamId": 62,
                  "Name": "strength testing",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 337,
                      "Name": "all strength tests normal",
                      "ExamId": 62,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 338,
                      "Name": "dorsiflexion weakened",
                      "ExamId": 62,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 339,
                      "Name": "eversion weakened",
                      "ExamId": 62,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 340,
                      "Name": "inversion weakened",
                      "ExamId": 62,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 341,
                      "Name": "plantarflexion weakened",
                      "ExamId": 62,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 413,
                      "Name": "all strength tests normal",
                      "ExamId": 62,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 414,
                      "Name": "dorsiflexion weakened",
                      "ExamId": 62,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 415,
                      "Name": "eversion weakened",
                      "ExamId": 62,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 416,
                      "Name": "inversion weakened",
                      "ExamId": 62,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 417,
                      "Name": "plantarflexion weakened",
                      "ExamId": 62,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 49,
                  "ExamId": 63,
                  "Name": "syndesmosis",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 342,
                      "Name": "sqeeze test positive",
                      "ExamId": 63,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 343,
                      "Name": "squeeze test normal",
                      "ExamId": 63,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 418,
                      "Name": "sqeeze test positive",
                      "ExamId": 63,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 419,
                      "Name": "squeeze test normal",
                      "ExamId": 63,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 64,
          "Name": "Shoulder",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": null,
              "ExamId": 65,
              "Name": "left shoulder",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 65,
                  "ExamId": 67,
                  "Name": "cervical spine",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 420,
                      "Name": "active and passive ROM normal",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 421,
                      "Name": "Atlanto-axial compression test (Spurling?s test)",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 422,
                      "Name": "extension limited",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 423,
                      "Name": "forward flexion limited",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 424,
                      "Name": "Forward flexion test ",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 425,
                      "Name": "limited in active only",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 426,
                      "Name": "limited in passive and active motion",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 427,
                      "Name": "limited to ?.degrees",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 428,
                      "Name": "side bending limited",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 429,
                      "Name": "twisting limited",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 502,
                      "Name": "active and passive ROM normal",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 503,
                      "Name": "Atlanto-axial compression test (Spurling?s test)",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 504,
                      "Name": "extension limited",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 505,
                      "Name": "forward flexion limited",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 506,
                      "Name": "Forward flexion test ",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 507,
                      "Name": "limited in active only",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 508,
                      "Name": "limited in passive and active motion",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 509,
                      "Name": "limited to ?.degrees",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 510,
                      "Name": "side bending limited",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 511,
                      "Name": "twisting limited",
                      "ExamId": 67,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 65,
                  "ExamId": 68,
                  "Name": "impingement tests for impingement of RC tendons in subacromial space",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 430,
                      "Name": "Crossover sign",
                      "ExamId": 68,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 431,
                      "Name": "Hawkin?s sign",
                      "ExamId": 68,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 432,
                      "Name": "Neer's sign",
                      "ExamId": 68,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 512,
                      "Name": "Crossover sign",
                      "ExamId": 68,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 513,
                      "Name": "Hawkin?s sign",
                      "ExamId": 68,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 514,
                      "Name": "Neer's sign",
                      "ExamId": 68,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 65,
                  "ExamId": 69,
                  "Name": "inspection",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 433,
                      "Name": "carrying angle",
                      "ExamId": 69,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 434,
                      "Name": "no swelling_ redness or other notable changes",
                      "ExamId": 69,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 435,
                      "Name": "redness",
                      "ExamId": 69,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 436,
                      "Name": "warmth",
                      "ExamId": 69,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 515,
                      "Name": "carrying angle",
                      "ExamId": 69,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 516,
                      "Name": "no swelling_ redness or other notable changes",
                      "ExamId": 69,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 517,
                      "Name": "redness",
                      "ExamId": 69,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 518,
                      "Name": "warmth",
                      "ExamId": 69,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 65,
                  "ExamId": 70,
                  "Name": "palpation",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 437,
                      "Name": "no pain on palpation",
                      "ExamId": 70,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 438,
                      "Name": "pain in bicipital groove",
                      "ExamId": 70,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 439,
                      "Name": "pain in sternoclavicular joint",
                      "ExamId": 70,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 440,
                      "Name": "pain on AC joint",
                      "ExamId": 70,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 441,
                      "Name": "pain on clavicle",
                      "ExamId": 70,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 442,
                      "Name": "pain on front of deltoid",
                      "ExamId": 70,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 443,
                      "Name": "pain on side of deltoid",
                      "ExamId": 70,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 519,
                      "Name": "no pain on palpation",
                      "ExamId": 70,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 520,
                      "Name": "pain in bicipital groove",
                      "ExamId": 70,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 521,
                      "Name": "pain in sternoclavicular joint",
                      "ExamId": 70,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 522,
                      "Name": "pain on AC joint",
                      "ExamId": 70,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 523,
                      "Name": "pain on clavicle",
                      "ExamId": 70,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 524,
                      "Name": "pain on front of deltoid",
                      "ExamId": 70,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 525,
                      "Name": "pain on side of deltoid",
                      "ExamId": 70,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 65,
                  "ExamId": 71,
                  "Name": "Range of motion",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 444,
                      "Name": "abduction limited",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 445,
                      "Name": "active and passive ROM normal",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 446,
                      "Name": "extension limited",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 447,
                      "Name": "external rotation limited",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 448,
                      "Name": "forward flexion limited",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 449,
                      "Name": "horizontal adduction limited",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 450,
                      "Name": "internal rotation limited",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 451,
                      "Name": "limited in active only",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 452,
                      "Name": "limited in passive and active motion",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 453,
                      "Name": "limited to ?.degrees",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 526,
                      "Name": "abduction limited",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 527,
                      "Name": "active and passive ROM normal",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 528,
                      "Name": "extension limited",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 529,
                      "Name": "external rotation limited",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 530,
                      "Name": "forward flexion limited",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 531,
                      "Name": "horizontal adduction limited",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 532,
                      "Name": "internal rotation limited",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 533,
                      "Name": "limited in active only",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 534,
                      "Name": "limited in passive and active motion",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 535,
                      "Name": "limited to ?.degrees",
                      "ExamId": 71,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 65,
                  "ExamId": 72,
                  "Name": "strength testing",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 454,
                      "Name": "Abduction weakened",
                      "ExamId": 72,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 455,
                      "Name": "abduction with thumbs down and 30 degree horizontal adduction (Empty can test)",
                      "ExamId": 72,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 456,
                      "Name": "all strength tests normal",
                      "ExamId": 72,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 457,
                      "Name": "external rotation weakened",
                      "ExamId": 72,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 458,
                      "Name": "internal rotation weakened",
                      "ExamId": 72,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 459,
                      "Name": "Palms up with elbows bent to 15∩┐╜ flexion and resisted upward motion (Speed?s test)",
                      "ExamId": 72,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 460,
                      "Name": "Simultaneous resisted supination and elbow flexion (Yergason?s test)",
                      "ExamId": 72,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 536,
                      "Name": "Abduction weakened",
                      "ExamId": 72,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 537,
                      "Name": "abduction with thumbs down and 30 degree horizontal adduction (Empty can test)",
                      "ExamId": 72,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 538,
                      "Name": "all strength tests normal",
                      "ExamId": 72,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 539,
                      "Name": "external rotation weakened",
                      "ExamId": 72,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 540,
                      "Name": "internal rotation weakened",
                      "ExamId": 72,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 541,
                      "Name": "Palms up with elbows bent to 15∩┐╜ flexion and resisted upward motion (Speed?s test)",
                      "ExamId": 72,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 542,
                      "Name": "Simultaneous resisted supination and elbow flexion (Yergason?s test)",
                      "ExamId": 72,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            },
            {
              "ParentExamId": null,
              "ExamId": 66,
              "Name": "right shoulder",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 66,
                  "ExamId": 73,
                  "Name": "cervical spine",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 461,
                      "Name": "active and passive ROM normal",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 462,
                      "Name": "Atlanto-axial compression test (Spurling?s test)",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 463,
                      "Name": "extension limited",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 464,
                      "Name": "forward flexion limited",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 465,
                      "Name": "Forward flexion test ",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 466,
                      "Name": "limited in active only",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 467,
                      "Name": "limited in passive and active motion",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 468,
                      "Name": "limited to ?.degrees",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 469,
                      "Name": "side bending limited",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 470,
                      "Name": "twisting limited",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 543,
                      "Name": "active and passive ROM normal",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 544,
                      "Name": "Atlanto-axial compression test (Spurling?s test)",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 545,
                      "Name": "extension limited",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 546,
                      "Name": "forward flexion limited",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 547,
                      "Name": "Forward flexion test ",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 548,
                      "Name": "limited in active only",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 549,
                      "Name": "limited in passive and active motion",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 550,
                      "Name": "limited to ?.degrees",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 551,
                      "Name": "side bending limited",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 552,
                      "Name": "twisting limited",
                      "ExamId": 73,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 66,
                  "ExamId": 74,
                  "Name": "impingement tests for impingement of RC tendons in subacromial space",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 471,
                      "Name": "Crossover sign",
                      "ExamId": 74,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 472,
                      "Name": "Hawkin?s sign",
                      "ExamId": 74,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 473,
                      "Name": "Neer's sign",
                      "ExamId": 74,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 553,
                      "Name": "Crossover sign",
                      "ExamId": 74,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 554,
                      "Name": "Hawkin?s sign",
                      "ExamId": 74,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 555,
                      "Name": "Neer's sign",
                      "ExamId": 74,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 66,
                  "ExamId": 75,
                  "Name": "inspection",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 474,
                      "Name": "carrying angle",
                      "ExamId": 75,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 475,
                      "Name": "no swelling_ redness or other notable changes",
                      "ExamId": 75,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 476,
                      "Name": "redness",
                      "ExamId": 75,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 477,
                      "Name": "warmth",
                      "ExamId": 75,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 556,
                      "Name": "carrying angle",
                      "ExamId": 75,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 557,
                      "Name": "no swelling_ redness or other notable changes",
                      "ExamId": 75,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 558,
                      "Name": "redness",
                      "ExamId": 75,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 559,
                      "Name": "warmth",
                      "ExamId": 75,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 66,
                  "ExamId": 76,
                  "Name": "palpation",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 478,
                      "Name": "no pain on palpation",
                      "ExamId": 76,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 479,
                      "Name": "pain in bicipital groove",
                      "ExamId": 76,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 480,
                      "Name": "pain in sternoclavicular joint",
                      "ExamId": 76,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 481,
                      "Name": "pain on AC joint",
                      "ExamId": 76,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 482,
                      "Name": "pain on clavicle",
                      "ExamId": 76,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 483,
                      "Name": "pain on front of deltoid",
                      "ExamId": 76,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 484,
                      "Name": "pain on side of deltoid",
                      "ExamId": 76,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 560,
                      "Name": "no pain on palpation",
                      "ExamId": 76,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 561,
                      "Name": "pain in bicipital groove",
                      "ExamId": 76,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 562,
                      "Name": "pain in sternoclavicular joint",
                      "ExamId": 76,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 563,
                      "Name": "pain on AC joint",
                      "ExamId": 76,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 564,
                      "Name": "pain on clavicle",
                      "ExamId": 76,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 565,
                      "Name": "pain on front of deltoid",
                      "ExamId": 76,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 566,
                      "Name": "pain on side of deltoid",
                      "ExamId": 76,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 66,
                  "ExamId": 77,
                  "Name": "Range of motion",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 485,
                      "Name": "abduction limited",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 486,
                      "Name": "active and passive ROM normal",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 487,
                      "Name": "extension limited",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 488,
                      "Name": "external rotation limited",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 489,
                      "Name": "forward flexion limited",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 490,
                      "Name": "horizontal adduction limited",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 491,
                      "Name": "internal rotation limited",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 492,
                      "Name": "limited in active only",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 493,
                      "Name": "limited in passive and active motion",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 494,
                      "Name": "limited to ?.degrees",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 567,
                      "Name": "abduction limited",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 568,
                      "Name": "active and passive ROM normal",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 569,
                      "Name": "extension limited",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 570,
                      "Name": "external rotation limited",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 571,
                      "Name": "forward flexion limited",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 572,
                      "Name": "horizontal adduction limited",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 573,
                      "Name": "internal rotation limited",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 574,
                      "Name": "limited in active only",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 575,
                      "Name": "limited in passive and active motion",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 576,
                      "Name": "limited to ?.degrees",
                      "ExamId": 77,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 66,
                  "ExamId": 78,
                  "Name": "strength testing",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 495,
                      "Name": "Abduction weakened",
                      "ExamId": 78,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 496,
                      "Name": "abduction with thumbs down and 30 degree horizontal adduction (Empty can test)",
                      "ExamId": 78,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 497,
                      "Name": "all strength tests normal",
                      "ExamId": 78,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 498,
                      "Name": "external rotation weakened",
                      "ExamId": 78,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 499,
                      "Name": "internal rotation weakened",
                      "ExamId": 78,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 500,
                      "Name": "Palms up with elbows bent to 15∩┐╜ flexion and resisted upward motion (Speed?s test)",
                      "ExamId": 78,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 501,
                      "Name": "Simultaneous resisted supination and elbow flexion (Yergason?s test)",
                      "ExamId": 78,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 577,
                      "Name": "Abduction weakened",
                      "ExamId": 78,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 578,
                      "Name": "abduction with thumbs down and 30 degree horizontal adduction (Empty can test)",
                      "ExamId": 78,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 579,
                      "Name": "all strength tests normal",
                      "ExamId": 78,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 580,
                      "Name": "external rotation weakened",
                      "ExamId": 78,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 581,
                      "Name": "internal rotation weakened",
                      "ExamId": 78,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 582,
                      "Name": "Palms up with elbows bent to 15∩┐╜ flexion and resisted upward motion (Speed?s test)",
                      "ExamId": 78,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 583,
                      "Name": "Simultaneous resisted supination and elbow flexion (Yergason?s test)",
                      "ExamId": 78,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 79,
          "Name": "Elbow",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": null,
              "ExamId": 80,
              "Name": "left elbow",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 80,
                  "ExamId": 82,
                  "Name": "Inspection",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 584,
                      "Name": "carrying angle",
                      "ExamId": 82,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 585,
                      "Name": "no swelling_ redness or other notable changes",
                      "ExamId": 82,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 586,
                      "Name": "redness",
                      "ExamId": 82,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 587,
                      "Name": "swelling anterior/lateral in the joint",
                      "ExamId": 82,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 588,
                      "Name": "swelling posterior in the bursa",
                      "ExamId": 82,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 589,
                      "Name": "warmth",
                      "ExamId": 82,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 632,
                      "Name": "carrying angle",
                      "ExamId": 82,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 633,
                      "Name": "no swelling_ redness or other notable changes",
                      "ExamId": 82,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 634,
                      "Name": "redness",
                      "ExamId": 82,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 635,
                      "Name": "swelling anterior/lateral in the joint",
                      "ExamId": 82,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 636,
                      "Name": "swelling posterior in the bursa",
                      "ExamId": 82,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 637,
                      "Name": "warmth",
                      "ExamId": 82,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 80,
                  "ExamId": 83,
                  "Name": "Range of Motion",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 590,
                      "Name": "active and passive ROM normal",
                      "ExamId": 83,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 591,
                      "Name": "extension limited",
                      "ExamId": 83,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 592,
                      "Name": "flexion limited",
                      "ExamId": 83,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 593,
                      "Name": "limited in active only",
                      "ExamId": 83,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 594,
                      "Name": "limited in passive and active motion",
                      "ExamId": 83,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 595,
                      "Name": "limited to ?.degrees",
                      "ExamId": 83,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 596,
                      "Name": "pronation limited",
                      "ExamId": 83,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 597,
                      "Name": "supination limited",
                      "ExamId": 83,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 638,
                      "Name": "active and passive ROM normal",
                      "ExamId": 83,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 639,
                      "Name": "extension limited",
                      "ExamId": 83,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 640,
                      "Name": "flexion limited",
                      "ExamId": 83,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 641,
                      "Name": "limited in active only",
                      "ExamId": 83,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 642,
                      "Name": "limited in passive and active motion",
                      "ExamId": 83,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 643,
                      "Name": "limited to ?.degrees",
                      "ExamId": 83,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 644,
                      "Name": "pronation limited",
                      "ExamId": 83,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 645,
                      "Name": "supination limited",
                      "ExamId": 83,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 80,
                  "ExamId": 84,
                  "Name": "Strength testing",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 598,
                      "Name": "all strength tests normal",
                      "ExamId": 84,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 599,
                      "Name": "elbow extension",
                      "ExamId": 84,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 600,
                      "Name": "elbow flexion",
                      "ExamId": 84,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 601,
                      "Name": "pronation weakened",
                      "ExamId": 84,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 602,
                      "Name": "resisted long finger extension",
                      "ExamId": 84,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 603,
                      "Name": "supination weakened",
                      "ExamId": 84,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 604,
                      "Name": "wrist extension weakened",
                      "ExamId": 84,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 605,
                      "Name": "wrist flexion weakened",
                      "ExamId": 84,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 646,
                      "Name": "all strength tests normal",
                      "ExamId": 84,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 647,
                      "Name": "elbow extension",
                      "ExamId": 84,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 648,
                      "Name": "elbow flexion",
                      "ExamId": 84,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 649,
                      "Name": "pronation weakened",
                      "ExamId": 84,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 650,
                      "Name": "resisted long finger extension",
                      "ExamId": 84,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 651,
                      "Name": "supination weakened",
                      "ExamId": 84,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 652,
                      "Name": "wrist extension weakened",
                      "ExamId": 84,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 653,
                      "Name": "wrist flexion weakened",
                      "ExamId": 84,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 80,
                  "ExamId": 85,
                  "Name": "stretch test",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 606,
                      "Name": "pain at stretching the wrist in extension or supination",
                      "ExamId": 85,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 607,
                      "Name": "pain at stretching the wrist in flexion or pronation",
                      "ExamId": 85,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 654,
                      "Name": "pain at stretching the wrist in extension or supination",
                      "ExamId": 85,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 655,
                      "Name": "pain at stretching the wrist in flexion or pronation",
                      "ExamId": 85,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            },
            {
              "ParentExamId": null,
              "ExamId": 81,
              "Name": "right elbow",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 81,
                  "ExamId": 86,
                  "Name": "Inspection",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 608,
                      "Name": "carrying angle",
                      "ExamId": 86,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 609,
                      "Name": "no swelling_ redness or other notable changes",
                      "ExamId": 86,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 610,
                      "Name": "redness",
                      "ExamId": 86,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 611,
                      "Name": "swelling anterior/lateral in the joint",
                      "ExamId": 86,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 612,
                      "Name": "swelling posterior in the bursa",
                      "ExamId": 86,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 613,
                      "Name": "warmth",
                      "ExamId": 86,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 656,
                      "Name": "carrying angle",
                      "ExamId": 86,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 657,
                      "Name": "no swelling_ redness or other notable changes",
                      "ExamId": 86,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 658,
                      "Name": "redness",
                      "ExamId": 86,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 659,
                      "Name": "swelling anterior/lateral in the joint",
                      "ExamId": 86,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 660,
                      "Name": "swelling posterior in the bursa",
                      "ExamId": 86,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 661,
                      "Name": "warmth",
                      "ExamId": 86,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 81,
                  "ExamId": 87,
                  "Name": "Range of Motion",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 614,
                      "Name": "active and passive ROM normal",
                      "ExamId": 87,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 615,
                      "Name": "extension limited",
                      "ExamId": 87,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 616,
                      "Name": "flexion limited",
                      "ExamId": 87,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 617,
                      "Name": "limited in active only",
                      "ExamId": 87,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 618,
                      "Name": "limited in passive and active motion",
                      "ExamId": 87,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 619,
                      "Name": "limited to ?.degrees",
                      "ExamId": 87,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 620,
                      "Name": "pronation limited",
                      "ExamId": 87,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 621,
                      "Name": "supination limited",
                      "ExamId": 87,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 662,
                      "Name": "active and passive ROM normal",
                      "ExamId": 87,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 663,
                      "Name": "extension limited",
                      "ExamId": 87,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 664,
                      "Name": "flexion limited",
                      "ExamId": 87,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 665,
                      "Name": "limited in active only",
                      "ExamId": 87,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 666,
                      "Name": "limited in passive and active motion",
                      "ExamId": 87,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 667,
                      "Name": "limited to ?.degrees",
                      "ExamId": 87,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 668,
                      "Name": "pronation limited",
                      "ExamId": 87,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 669,
                      "Name": "supination limited",
                      "ExamId": 87,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 81,
                  "ExamId": 88,
                  "Name": "Strength testing",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 622,
                      "Name": "all strength tests normal",
                      "ExamId": 88,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 623,
                      "Name": "elbow extension",
                      "ExamId": 88,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 624,
                      "Name": "elbow flexion",
                      "ExamId": 88,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 625,
                      "Name": "pronation weakened",
                      "ExamId": 88,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 626,
                      "Name": "resisted long finger extension",
                      "ExamId": 88,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 627,
                      "Name": "supination weakened",
                      "ExamId": 88,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 628,
                      "Name": "wrist extension weakened",
                      "ExamId": 88,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 629,
                      "Name": "wrist flexion weakened",
                      "ExamId": 88,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 670,
                      "Name": "all strength tests normal",
                      "ExamId": 88,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 671,
                      "Name": "elbow extension",
                      "ExamId": 88,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 672,
                      "Name": "elbow flexion",
                      "ExamId": 88,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 673,
                      "Name": "pronation weakened",
                      "ExamId": 88,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 674,
                      "Name": "resisted long finger extension",
                      "ExamId": 88,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 675,
                      "Name": "supination weakened",
                      "ExamId": 88,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 676,
                      "Name": "wrist extension weakened",
                      "ExamId": 88,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 677,
                      "Name": "wrist flexion weakened",
                      "ExamId": 88,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 81,
                  "ExamId": 89,
                  "Name": "stretch test",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 630,
                      "Name": "pain at stretching the wrist in extension or supination",
                      "ExamId": 89,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 631,
                      "Name": "pain at stretching the wrist in flexion or pronation",
                      "ExamId": 89,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 678,
                      "Name": "pain at stretching the wrist in extension or supination",
                      "ExamId": 89,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 679,
                      "Name": "pain at stretching the wrist in flexion or pronation",
                      "ExamId": 89,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 90,
          "Name": "dementia",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": 90,
              "ExamId": 91,
              "Name": "Apraxia (ask patient to copy gestures)",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 697,
                  "Name": "client copies gestures fluidly",
                  "ExamId": 91,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 698,
                  "Name": "client has troule copying gestures",
                  "ExamId": 91,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 90,
              "ExamId": 92,
              "Name": "Central and peripheral nervous systems",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 706,
                  "Name": "no signs of prior CVA",
                  "ExamId": 92,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 707,
                  "Name": "Signs of prior CVA",
                  "ExamId": 92,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 90,
              "ExamId": 93,
              "Name": "Frontal dysfunction",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 687,
                  "Name": "Tonus normal",
                  "ExamId": 93,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 688,
                  "Name": "tonus increased",
                  "ExamId": 93,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 689,
                  "Name": "grasp reflex normal (absent)",
                  "ExamId": 93,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 690,
                  "Name": "grasp reflex present",
                  "ExamId": 93,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 90,
              "ExamId": 94,
              "Name": "Fundoscopy",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 699,
                  "Name": "no papiledema",
                  "ExamId": 94,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 700,
                  "Name": "papiledema visible",
                  "ExamId": 94,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 701,
                  "Name": "not examined",
                  "ExamId": 94,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 702,
                  "Name": "no uveitis",
                  "ExamId": 94,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 703,
                  "Name": "uveitis visible",
                  "ExamId": 94,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 90,
              "ExamId": 95,
              "Name": "Gait",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 683,
                  "Name": "normal",
                  "ExamId": 95,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 684,
                  "Name": "abnormal",
                  "ExamId": 95,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 90,
              "ExamId": 96,
              "Name": "general observation",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": []
            },
            {
              "ParentExamId": 90,
              "ExamId": 97,
              "Name": "Gums",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 685,
                  "Name": "normal",
                  "ExamId": 97,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 686,
                  "Name": "blue line visible",
                  "ExamId": 97,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 90,
              "ExamId": 98,
              "Name": "neck",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 704,
                  "Name": "normal thyroid",
                  "ExamId": 98,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 705,
                  "Name": "thyromegalie",
                  "ExamId": 98,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 90,
              "ExamId": 99,
              "Name": "Parkinsonism",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 691,
                  "Name": "no rest tremor",
                  "ExamId": 99,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 692,
                  "Name": "rest tremor visible",
                  "ExamId": 99,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 693,
                  "Name": "no bradykinesia",
                  "ExamId": 99,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 694,
                  "Name": "bradykinesia visible",
                  "ExamId": 99,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 695,
                  "Name": "no rigidity",
                  "ExamId": 99,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 696,
                  "Name": "rigidity visible",
                  "ExamId": 99,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 90,
              "ExamId": 100,
              "Name": "Size and weight",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 680,
                  "Name": "size and weight normal",
                  "ExamId": 100,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 681,
                  "Name": "thin",
                  "ExamId": 100,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 682,
                  "Name": "cachectic",
                  "ExamId": 100,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 101,
          "Name": "Obstetric",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": null,
              "ExamId": 102,
              "Name": "abdomen",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 102,
                  "ExamId": 104,
                  "Name": "abdominal skin",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 708,
                      "Name": "distended surface veins",
                      "ExamId": 104,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 709,
                      "Name": "excoriations",
                      "ExamId": 104,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 710,
                      "Name": "no distended surface veins",
                      "ExamId": 104,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 711,
                      "Name": "no excoriations",
                      "ExamId": 104,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 102,
                  "ExamId": 105,
                  "Name": "engagement",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 712,
                      "Name": "head movable",
                      "ExamId": 105,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 713,
                      "Name": "head unmovable",
                      "ExamId": 105,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 102,
                  "ExamId": 106,
                  "Name": "fetal heart rate",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 714,
                      "Name": "?.beats/min",
                      "ExamId": 106,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 102,
                  "ExamId": 107,
                  "Name": "Fundus height",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 715,
                      "Name": "?.com",
                      "ExamId": 107,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 716,
                      "Name": "conform duration of pregnancy",
                      "ExamId": 107,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 717,
                      "Name": "large for date",
                      "ExamId": 107,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 718,
                      "Name": "small for date",
                      "ExamId": 107,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 102,
                  "ExamId": 108,
                  "Name": "lie",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 719,
                      "Name": "longitudinal",
                      "ExamId": 108,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 720,
                      "Name": "Oblique",
                      "ExamId": 108,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 721,
                      "Name": "transverse",
                      "ExamId": 108,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 722,
                      "Name": "undertain",
                      "ExamId": 108,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 102,
                  "ExamId": 109,
                  "Name": "presentation (lowest part)",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 723,
                      "Name": "arm ",
                      "ExamId": 109,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 724,
                      "Name": "back to the right",
                      "ExamId": 109,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 725,
                      "Name": "backto the left",
                      "ExamId": 109,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 726,
                      "Name": "breech",
                      "ExamId": 109,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 727,
                      "Name": "head down",
                      "ExamId": 109,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            },
            {
              "ParentExamId": null,
              "ExamId": 103,
              "Name": "bimanual exam",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 103,
                  "ExamId": 110,
                  "Name": "Diagonal Conj.",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 728,
                      "Name": "?.cm",
                      "ExamId": 110,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 103,
                  "ExamId": 111,
                  "Name": "intertuberous",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 729,
                      "Name": "adequate size",
                      "ExamId": 111,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 730,
                      "Name": "small",
                      "ExamId": 111,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 103,
                  "ExamId": 112,
                  "Name": "Mid Pelvis",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 731,
                      "Name": "?cm",
                      "ExamId": 112,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 103,
                  "ExamId": 113,
                  "Name": "Uterus size (?wks)",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 732,
                      "Name": "conform duration of pregnancy",
                      "ExamId": 113,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 733,
                      "Name": "large for date",
                      "ExamId": 113,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 734,
                      "Name": "small for date",
                      "ExamId": 113,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 103,
                  "ExamId": 114,
                  "Name": "Vag delivery prognosis",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 735,
                      "Name": "at risk",
                      "ExamId": 114,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 736,
                      "Name": "normal",
                      "ExamId": 114,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 115,
          "Name": "cardio-vascular",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": null,
              "ExamId": 116,
              "Name": "Arteries",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 116,
                  "ExamId": 118,
                  "Name": "a carotis",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 737,
                      "Name": "murmur left",
                      "ExamId": 118,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 738,
                      "Name": "no murmurs ",
                      "ExamId": 118,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 739,
                      "Name": "palpation normal",
                      "ExamId": 118,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 768,
                      "Name": "murmur right ",
                      "ExamId": 118,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 116,
                  "ExamId": 119,
                  "Name": "a poplitea",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 740,
                      "Name": "not palpable",
                      "ExamId": 119,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 741,
                      "Name": "palpable",
                      "ExamId": 119,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 769,
                      "Name": "not palpable",
                      "ExamId": 119,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 770,
                      "Name": "palpable",
                      "ExamId": 119,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 116,
                  "ExamId": 120,
                  "Name": "a tibialis posterior",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 742,
                      "Name": "not palpable",
                      "ExamId": 120,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 743,
                      "Name": "palpable",
                      "ExamId": 120,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 771,
                      "Name": "not palpable",
                      "ExamId": 120,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 772,
                      "Name": "palpable",
                      "ExamId": 120,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 116,
                  "ExamId": 121,
                  "Name": "a. femoralis",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 744,
                      "Name": "murmer audible",
                      "ExamId": 121,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 745,
                      "Name": "no murmurs",
                      "ExamId": 121,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 746,
                      "Name": "not palpable",
                      "ExamId": 121,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 747,
                      "Name": "palpable",
                      "ExamId": 121,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 773,
                      "Name": "murmer audible",
                      "ExamId": 121,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 774,
                      "Name": "no murmurs",
                      "ExamId": 121,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 775,
                      "Name": "not palpable",
                      "ExamId": 121,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 776,
                      "Name": "palpable",
                      "ExamId": 121,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 116,
                  "ExamId": 122,
                  "Name": "aorta",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 748,
                      "Name": "aneurysme ?..cm",
                      "ExamId": 122,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 749,
                      "Name": "Murmer",
                      "ExamId": 122,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 750,
                      "Name": "no aneurysme palpable ",
                      "ExamId": 122,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 751,
                      "Name": "no murmer",
                      "ExamId": 122,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 116,
                  "ExamId": 123,
                  "Name": "capilary refill (nailbed big toe)",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 752,
                      "Name": "cap refill < 3 seconds",
                      "ExamId": 123,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 753,
                      "Name": "cap refill> 3 seconds",
                      "ExamId": 123,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 777,
                      "Name": "cap refill < 3 seconds",
                      "ExamId": 123,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 778,
                      "Name": "cap refill> 3 seconds",
                      "ExamId": 123,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            },
            {
              "ParentExamId": null,
              "ExamId": 117,
              "Name": "Heart",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 117,
                  "ExamId": 124,
                  "Name": "Gallop",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 754,
                      "Name": "gallop rhythm present",
                      "ExamId": 124,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 755,
                      "Name": "no gallop rhythm",
                      "ExamId": 124,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 117,
                  "ExamId": 125,
                  "Name": "heart sounds",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 756,
                      "Name": "S1 S2 normal ",
                      "ExamId": 125,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 757,
                      "Name": "S3 present",
                      "ExamId": 125,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 117,
                  "ExamId": 126,
                  "Name": "Murmers ",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 758,
                      "Name": "best heard at aortic valve area (second right intercostal space) ",
                      "ExamId": 126,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 759,
                      "Name": "best heard at Apex = mitral valve post",
                      "ExamId": 126,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 760,
                      "Name": "best heard at Erb's point (third left intercostal area )",
                      "ExamId": 126,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 761,
                      "Name": "best heard at pulmonic valve area (second left intercostal space) ",
                      "ExamId": 126,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 762,
                      "Name": "best heard at tricuspid valve arwea (fourth left intercostal space) ",
                      "ExamId": 126,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 763,
                      "Name": "continuous murmur ",
                      "ExamId": 126,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 764,
                      "Name": "diastolic murmur",
                      "ExamId": 126,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 765,
                      "Name": "grade ?",
                      "ExamId": 126,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 766,
                      "Name": "no murmers",
                      "ExamId": 126,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 767,
                      "Name": "systolic murmur ",
                      "ExamId": 126,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 127,
          "Name": "skin",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": null,
              "ExamId": 128,
              "Name": "color",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 128,
                  "ExamId": 133,
                  "Name": "secondary lesions",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 779,
                      "Name": "atrophy",
                      "ExamId": 133,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 780,
                      "Name": "crust",
                      "ExamId": 133,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 781,
                      "Name": "flesh colored",
                      "ExamId": 133,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 782,
                      "Name": "grey",
                      "ExamId": 133,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 783,
                      "Name": "hyperpigmented",
                      "ExamId": 133,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 784,
                      "Name": "hypopigmented",
                      "ExamId": 133,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 785,
                      "Name": "lichenification",
                      "ExamId": 133,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 786,
                      "Name": "purple",
                      "ExamId": 133,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 787,
                      "Name": "red",
                      "ExamId": 133,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 788,
                      "Name": "scale",
                      "ExamId": 133,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 789,
                      "Name": "uniform color",
                      "ExamId": 133,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 790,
                      "Name": "varying in color",
                      "ExamId": 133,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 791,
                      "Name": "yellow",
                      "ExamId": 133,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            },
            {
              "ParentExamId": 127,
              "ExamId": 129,
              "Name": "number and distribution",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 818,
                  "Name": "?. Eruptions",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 819,
                  "Name": "located as per picture",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 820,
                  "Name": "located as per 1 dermatome_ ?.",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 821,
                  "Name": "located on sun exposed areas",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 822,
                  "Name": "located on ",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 823,
                  "Name": "medial side",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 824,
                  "Name": "lateral side",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 825,
                  "Name": "left ",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 826,
                  "Name": "right",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 827,
                  "Name": "chest",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 828,
                  "Name": "back",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 829,
                  "Name": "abdomen",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 830,
                  "Name": "hip",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 831,
                  "Name": "shoulder",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 832,
                  "Name": "arm",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 833,
                  "Name": "uper leg",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 834,
                  "Name": "lower leg",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 835,
                  "Name": "foot",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 836,
                  "Name": "heel",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 837,
                  "Name": "?. Mm to ?mm large",
                  "ExamId": 129,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 127,
              "ExamId": 130,
              "Name": "pattern",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 838,
                  "Name": "demarcation is sharp",
                  "ExamId": 130,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 839,
                  "Name": "demarcation is vague",
                  "ExamId": 130,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 840,
                  "Name": "annula shape",
                  "ExamId": 130,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 841,
                  "Name": "random shape",
                  "ExamId": 130,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 842,
                  "Name": "red ring around it",
                  "ExamId": 130,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": null,
              "ExamId": 131,
              "Name": "shape",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 131,
                  "ExamId": 134,
                  "Name": "depressed lesions",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 792,
                      "Name": "erosion",
                      "ExamId": 134,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 793,
                      "Name": "fissure",
                      "ExamId": 134,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 794,
                      "Name": "ulcer",
                      "ExamId": 134,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 131,
                  "ExamId": 135,
                  "Name": "flat lesions",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 795,
                      "Name": "macule (<2 cm)",
                      "ExamId": 135,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 796,
                      "Name": "patch (>2 cm)",
                      "ExamId": 135,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 131,
                  "ExamId": 136,
                  "Name": "fluid filled lesions",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 797,
                      "Name": "bulla",
                      "ExamId": 136,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 798,
                      "Name": "Cyst",
                      "ExamId": 136,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 799,
                      "Name": "pustule",
                      "ExamId": 136,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 800,
                      "Name": "vesicle",
                      "ExamId": 136,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 131,
                  "ExamId": 137,
                  "Name": "secondary lesions",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 801,
                      "Name": "atrophy",
                      "ExamId": 137,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 802,
                      "Name": "crust",
                      "ExamId": 137,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 803,
                      "Name": "flesh colored",
                      "ExamId": 137,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 804,
                      "Name": "grey",
                      "ExamId": 137,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 805,
                      "Name": "hyperpigmented",
                      "ExamId": 137,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 806,
                      "Name": "hypopigmented",
                      "ExamId": 137,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 807,
                      "Name": "lichenification",
                      "ExamId": 137,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 808,
                      "Name": "purple",
                      "ExamId": 137,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 809,
                      "Name": "red",
                      "ExamId": 137,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 810,
                      "Name": "scale",
                      "ExamId": 137,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 811,
                      "Name": "uniform color",
                      "ExamId": 137,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 812,
                      "Name": "varying in color",
                      "ExamId": 137,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 813,
                      "Name": "yellow",
                      "ExamId": 137,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 131,
                  "ExamId": 138,
                  "Name": "solid lesions",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 814,
                      "Name": "Nodule",
                      "ExamId": 138,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 815,
                      "Name": "papule",
                      "ExamId": 138,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 816,
                      "Name": "plaque",
                      "ExamId": 138,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 817,
                      "Name": "wheal",
                      "ExamId": 138,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            },
            {
              "ParentExamId": 127,
              "ExamId": 132,
              "Name": "size",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 843,
                  "Name": "total size ?cm x ?cm",
                  "ExamId": 132,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 139,
          "Name": "urological",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": null,
              "ExamId": 140,
              "Name": "Back palpation",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 140,
                  "ExamId": 142,
                  "Name": "inguinal cannal",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 844,
                      "Name": "inguinal hernai left",
                      "ExamId": 142,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 845,
                      "Name": "no sign of inguinal hernia",
                      "ExamId": 142,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 876,
                      "Name": "inguinal hernia right",
                      "ExamId": 142,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 140,
                  "ExamId": 143,
                  "Name": "kidney",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 846,
                      "Name": "flank tenderness left",
                      "ExamId": 143,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 847,
                      "Name": "left kidney palpable",
                      "ExamId": 143,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 848,
                      "Name": "no flank tenderness",
                      "ExamId": 143,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 849,
                      "Name": "no kidneys palpable",
                      "ExamId": 143,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 850,
                      "Name": "right kidney palpable",
                      "ExamId": 143,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 851,
                      "Name": "Systolic paravertebral murmur",
                      "ExamId": 143,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 877,
                      "Name": "flank tenderness right",
                      "ExamId": 143,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 140,
                  "ExamId": 144,
                  "Name": "Liver",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 852,
                      "Name": " edge hard",
                      "ExamId": 144,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 853,
                      "Name": " edge soft",
                      "ExamId": 144,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 854,
                      "Name": " large nodes felt ",
                      "ExamId": 144,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 855,
                      "Name": " no nodes felt",
                      "ExamId": 144,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 856,
                      "Name": "liver enlarged ? cm below ribs ",
                      "ExamId": 144,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 857,
                      "Name": "Liver normal ",
                      "ExamId": 144,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 858,
                      "Name": "small nodes felt",
                      "ExamId": 144,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 859,
                      "Name": "Spleen enlarged ..cm below ribs",
                      "ExamId": 144,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 860,
                      "Name": "spleen not palpable  ",
                      "ExamId": 144,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 140,
                  "ExamId": 145,
                  "Name": "lower abdomen",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 861,
                      "Name": "lower abdomen not tender",
                      "ExamId": 145,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 140,
                  "ExamId": 146,
                  "Name": "prostate",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 862,
                      "Name": "?.cm",
                      "ExamId": 146,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 863,
                      "Name": "enlarged",
                      "ExamId": 146,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 864,
                      "Name": "left side node",
                      "ExamId": 146,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 865,
                      "Name": "no nodes palpable",
                      "ExamId": 146,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 866,
                      "Name": "normal size",
                      "ExamId": 146,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 867,
                      "Name": "not tender",
                      "ExamId": 146,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 868,
                      "Name": "right node",
                      "ExamId": 146,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 869,
                      "Name": "symmetrical",
                      "ExamId": 146,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 870,
                      "Name": "tender",
                      "ExamId": 146,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 140,
                  "ExamId": 147,
                  "Name": "rectal",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 871,
                      "Name": "ampulla empty",
                      "ExamId": 147,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 872,
                      "Name": "grade ?.",
                      "ExamId": 147,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 873,
                      "Name": "hemorroids",
                      "ExamId": 147,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 874,
                      "Name": "no hemorroids or lacerations",
                      "ExamId": 147,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 875,
                      "Name": "sphincter normal tension",
                      "ExamId": 147,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            },
            {
              "ParentExamId": null,
              "ExamId": 141,
              "Name": "inspection",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 141,
                  "ExamId": 148,
                  "Name": "no scars_ hernias or tumors visible in kidney area",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": []
                }
              ],
              "ListResults": []
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 149,
          "Name": "abdomical",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": null,
              "ExamId": 150,
              "Name": "Abdomen",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 150,
                  "ExamId": 151,
                  "Name": "Bowel sounds",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 878,
                      "Name": "absent",
                      "ExamId": 151,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 879,
                      "Name": "diminished ",
                      "ExamId": 151,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 880,
                      "Name": "Ileus sounds",
                      "ExamId": 151,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 881,
                      "Name": "increased",
                      "ExamId": 151,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 882,
                      "Name": "normal",
                      "ExamId": 151,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 150,
                  "ExamId": 152,
                  "Name": "inguinal lymphnodes left",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 883,
                      "Name": " smooth ",
                      "ExamId": 152,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 884,
                      "Name": ". masses palpable",
                      "ExamId": 152,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 885,
                      "Name": "fixed to other tissue",
                      "ExamId": 152,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 886,
                      "Name": "hard",
                      "ExamId": 152,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 887,
                      "Name": "immobile",
                      "ExamId": 152,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 888,
                      "Name": "mass palpable ..cm ",
                      "ExamId": 152,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 889,
                      "Name": "mobile",
                      "ExamId": 152,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 890,
                      "Name": "no masses palpable ",
                      "ExamId": 152,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 891,
                      "Name": "painful",
                      "ExamId": 152,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 892,
                      "Name": "painless",
                      "ExamId": 152,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 893,
                      "Name": "soft to firm",
                      "ExamId": 152,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 150,
                  "ExamId": 153,
                  "Name": "inguinal lymphnodes right",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 911,
                      "Name": " smooth ",
                      "ExamId": 153,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 912,
                      "Name": ". masses palpable",
                      "ExamId": 153,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 913,
                      "Name": "fixed to other tissue",
                      "ExamId": 153,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 914,
                      "Name": "hard",
                      "ExamId": 153,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 915,
                      "Name": "immobile",
                      "ExamId": 153,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 916,
                      "Name": "mass palpable ..cm ",
                      "ExamId": 153,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 917,
                      "Name": "mobile",
                      "ExamId": 153,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 918,
                      "Name": "no masses palpable ",
                      "ExamId": 153,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 919,
                      "Name": "painful",
                      "ExamId": 153,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 920,
                      "Name": "painless",
                      "ExamId": 153,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 921,
                      "Name": "soft to firm",
                      "ExamId": 153,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 150,
                  "ExamId": 154,
                  "Name": "Liver",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 894,
                      "Name": " edge hard",
                      "ExamId": 154,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 895,
                      "Name": " edge soft",
                      "ExamId": 154,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 896,
                      "Name": " large nodes felt ",
                      "ExamId": 154,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 897,
                      "Name": " no nodes felt",
                      "ExamId": 154,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 898,
                      "Name": "liver enlarged . cm below ribs ",
                      "ExamId": 154,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 899,
                      "Name": "Liver normal ",
                      "ExamId": 154,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 900,
                      "Name": "small nodes felt",
                      "ExamId": 154,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 901,
                      "Name": "Spleen enlarged ..cm below ribs",
                      "ExamId": 154,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 902,
                      "Name": "spleen not palpable  ",
                      "ExamId": 154,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 150,
                  "ExamId": 155,
                  "Name": "Palpitation",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 903,
                      "Name": " left lower quadrant",
                      "ExamId": 155,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 904,
                      "Name": " left upper quadrant",
                      "ExamId": 155,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 905,
                      "Name": " Mc Burney pain",
                      "ExamId": 155,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 906,
                      "Name": " tumor ",
                      "ExamId": 155,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 907,
                      "Name": ". cm",
                      "ExamId": 155,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 908,
                      "Name": "defence",
                      "ExamId": 155,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 909,
                      "Name": "normal ",
                      "ExamId": 155,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 910,
                      "Name": "pain ",
                      "ExamId": 155,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 922,
                      "Name": " right lower quadrant",
                      "ExamId": 155,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 923,
                      "Name": "right upper quadrant",
                      "ExamId": 155,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 156,
          "Name": "Lymphatic",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": null,
              "ExamId": 157,
              "Name": "lymphnodes",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 157,
                  "ExamId": 158,
                  "Name": "Abdominal Palpation",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 924,
                      "Name": " left lower quadrant",
                      "ExamId": 158,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 925,
                      "Name": " left upper quadrant",
                      "ExamId": 158,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 926,
                      "Name": " Mc Burney pain",
                      "ExamId": 158,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 927,
                      "Name": " tumor in ",
                      "ExamId": 158,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 928,
                      "Name": ". cm",
                      "ExamId": 158,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 929,
                      "Name": "defence in",
                      "ExamId": 158,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 930,
                      "Name": "normal ",
                      "ExamId": 158,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 931,
                      "Name": "pain in",
                      "ExamId": 158,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 982,
                      "Name": " right lower quadrant",
                      "ExamId": 158,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 983,
                      "Name": "right upper quadrant",
                      "ExamId": 158,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 157,
                  "ExamId": 159,
                  "Name": "axilla",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 932,
                      "Name": " smooth ",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 933,
                      "Name": "fixed to other tissue",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 934,
                      "Name": "hard",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 935,
                      "Name": "immobile",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 936,
                      "Name": "Lymphnodes palpable",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 937,
                      "Name": "mass palpable ..cm ",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 938,
                      "Name": "mobile",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 939,
                      "Name": "no enlarged or painful  lymphnodes palpable",
                      "ExamId": 159,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 940,
                      "Name": "painful",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 941,
                      "Name": "painless",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 942,
                      "Name": "soft to firm",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 984,
                      "Name": " smooth ",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 985,
                      "Name": "fixed to other tissue",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 986,
                      "Name": "hard",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 987,
                      "Name": "immobile",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 988,
                      "Name": "Lymphnodes palpable",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 989,
                      "Name": "mass palpable ..cm ",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 990,
                      "Name": "mobile",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 991,
                      "Name": "no enlarged or painful  lymphnodes palpable",
                      "ExamId": 159,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 992,
                      "Name": "painful",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 993,
                      "Name": "painless",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 994,
                      "Name": "soft to firm",
                      "ExamId": 159,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 157,
                  "ExamId": 160,
                  "Name": "head and neck",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 943,
                      "Name": " smooth ",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 944,
                      "Name": "..cm",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 945,
                      "Name": "along neck muscles left side",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 946,
                      "Name": "behind the left ear",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 947,
                      "Name": "fixed to other tissue",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 948,
                      "Name": "hard",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 949,
                      "Name": "immobile",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 950,
                      "Name": "in front of left ear",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 951,
                      "Name": "Lymphnodes palpable",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 952,
                      "Name": "mobile",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 953,
                      "Name": "no enlarged or painful  lymphnodes palpable",
                      "ExamId": 160,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 954,
                      "Name": "painful",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 955,
                      "Name": "painless",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 956,
                      "Name": "soft to firm",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 957,
                      "Name": "under jaw left side",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 995,
                      "Name": " smooth ",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 996,
                      "Name": ".cm",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 997,
                      "Name": "along neck muscles right side",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 998,
                      "Name": "behind the right ear",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 999,
                      "Name": "fixed to other tissue",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1000,
                      "Name": "hard",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1001,
                      "Name": "immobile",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1002,
                      "Name": "in front of right ear",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1003,
                      "Name": "Lymphnodes palpable",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1004,
                      "Name": "mobile",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1005,
                      "Name": "no enlarged or painful  lymphnodes palpable",
                      "ExamId": 160,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1006,
                      "Name": "painful",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1007,
                      "Name": "painless",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1008,
                      "Name": "soft to firm",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1009,
                      "Name": "under jaw right side",
                      "ExamId": 160,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 157,
                  "ExamId": 161,
                  "Name": "inguinal lymphnodes",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 958,
                      "Name": " smooth ",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 959,
                      "Name": "fixed to other tissue",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 960,
                      "Name": "hard",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 961,
                      "Name": "immobile",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 962,
                      "Name": "Lymphnodes palpable",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 963,
                      "Name": "mass palpable ..cm ",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 964,
                      "Name": "mobile",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 965,
                      "Name": "no enlarged or painful  lymphnodes palpable",
                      "ExamId": 161,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 966,
                      "Name": "painful",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 967,
                      "Name": "painless",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 968,
                      "Name": "soft to firm",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1010,
                      "Name": " smooth ",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1011,
                      "Name": "fixed to other tissue",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1012,
                      "Name": "hard",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1013,
                      "Name": "immobile",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1014,
                      "Name": "Lymphnodes palpable",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1015,
                      "Name": "mass palpable ..cm ",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1016,
                      "Name": "mobile",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1017,
                      "Name": "no enlarged or painful  lymphnodes palpable",
                      "ExamId": 161,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1018,
                      "Name": "painful",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1019,
                      "Name": "painless",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1020,
                      "Name": "soft to firm",
                      "ExamId": 161,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 157,
                  "ExamId": 162,
                  "Name": "sub/supraclavicular",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 969,
                      "Name": " smooth ",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 970,
                      "Name": "fixed to other tissue",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 971,
                      "Name": "hard",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 972,
                      "Name": "immobile",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 973,
                      "Name": "Lymphnodes palpable",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 974,
                      "Name": "mass palpable ..cm ",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 975,
                      "Name": "mobile",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 976,
                      "Name": "no enlarged or painful  lymphnodes palpable",
                      "ExamId": 162,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 977,
                      "Name": "painful",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 978,
                      "Name": "painless",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 979,
                      "Name": "soft to firm",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 980,
                      "Name": "subclavivular",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 981,
                      "Name": "supraclavicular",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1021,
                      "Name": " smooth ",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1022,
                      "Name": "fixed to other tissue",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1023,
                      "Name": "hard",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1024,
                      "Name": "immobile",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1025,
                      "Name": "Lymphnodes palpable",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1026,
                      "Name": "mass palpable ..cm ",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1027,
                      "Name": "mobile",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1028,
                      "Name": "no enlarged or painful  lymphnodes palpable",
                      "ExamId": 162,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1029,
                      "Name": "painful",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1030,
                      "Name": "painless",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1031,
                      "Name": "soft to firm",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1032,
                      "Name": "subclavivular",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1033,
                      "Name": "supraclavicular",
                      "ExamId": 162,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 163,
          "Name": "lungs",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": 163,
              "ExamId": 164,
              "Name": "crackles",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1058,
                  "Name": "no crackles",
                  "ExamId": 164,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1059,
                  "Name": "crackles inleft upper lobe ",
                  "ExamId": 164,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1060,
                  "Name": "crackles in left lower lobe ",
                  "ExamId": 164,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1061,
                  "Name": "fine",
                  "ExamId": 164,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1062,
                  "Name": "coarse",
                  "ExamId": 164,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1063,
                  "Name": "early inspiratory",
                  "ExamId": 164,
                  "Normal": 1,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1064,
                  "Name": "late inspiratory",
                  "ExamId": 164,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1080,
                  "Name": "no crackles",
                  "ExamId": 164,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1081,
                  "Name": "crackles in right upper lobe ",
                  "ExamId": 164,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1082,
                  "Name": "crackles in right middle lobe ",
                  "ExamId": 164,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1083,
                  "Name": "crackles in right lower lobe",
                  "ExamId": 164,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1084,
                  "Name": "fine",
                  "ExamId": 164,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1085,
                  "Name": "coarse",
                  "ExamId": 164,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1086,
                  "Name": "early inspiratory",
                  "ExamId": 164,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1087,
                  "Name": "late inspiratory",
                  "ExamId": 164,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 163,
              "ExamId": 165,
              "Name": "observation breathing",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1039,
                  "Name": "normal breathing",
                  "ExamId": 165,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1040,
                  "Name": "intercostal retractions",
                  "ExamId": 165,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1041,
                  "Name": "laboured",
                  "ExamId": 165,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1042,
                  "Name": "tachpneu",
                  "ExamId": 165,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1043,
                  "Name": "breathing with pursed lips",
                  "ExamId": 165,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1044,
                  "Name": "Elevated jugular venous pulse (JVP)",
                  "ExamId": 165,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1045,
                  "Name": "prolonged expiration",
                  "ExamId": 165,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1046,
                  "Name": "prolonged inspiration",
                  "ExamId": 165,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 163,
              "ExamId": 166,
              "Name": "position and demeanor",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1034,
                  "Name": "normal breating position",
                  "ExamId": 166,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1035,
                  "Name": "tripod position",
                  "ExamId": 166,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1036,
                  "Name": "cannot speak",
                  "ExamId": 166,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1037,
                  "Name": "cyanosis",
                  "ExamId": 166,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1038,
                  "Name": "signs of muscle wasting",
                  "ExamId": 166,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 163,
              "ExamId": 167,
              "Name": "rales",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1065,
                  "Name": "no rales",
                  "ExamId": 167,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1066,
                  "Name": "rales inleft upper lobe ",
                  "ExamId": 167,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1067,
                  "Name": "rales in left lower lobe ",
                  "ExamId": 167,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1088,
                  "Name": "no rales",
                  "ExamId": 167,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1089,
                  "Name": "rales in right upper lobe ",
                  "ExamId": 167,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1090,
                  "Name": "rales in right middle lobe ",
                  "ExamId": 167,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1091,
                  "Name": "rales in right lower lobe",
                  "ExamId": 167,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 163,
              "ExamId": 168,
              "Name": "rhonchi",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1055,
                  "Name": "no rhonchi",
                  "ExamId": 168,
                  "Normal": 1,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1056,
                  "Name": "rhonchi inleft upper lobe ",
                  "ExamId": 168,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1057,
                  "Name": "rhonchi in left lower lobe ",
                  "ExamId": 168,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1076,
                  "Name": "no rhonchi",
                  "ExamId": 168,
                  "Normal": 1,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1077,
                  "Name": "rhonchi in right upper lobe ",
                  "ExamId": 168,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1078,
                  "Name": "rhonchi in right middle lobe ",
                  "ExamId": 168,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1079,
                  "Name": "rhonchi in right lower lobe",
                  "ExamId": 168,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 163,
              "ExamId": 169,
              "Name": "wheezing",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1047,
                  "Name": "no wheezing",
                  "ExamId": 169,
                  "Normal": 1,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1048,
                  "Name": "wheezing inleft upper lobe ",
                  "ExamId": 169,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1049,
                  "Name": "wheezing in left middle lobe ",
                  "ExamId": 169,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1050,
                  "Name": "wheezing in left lower lobe",
                  "ExamId": 169,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1051,
                  "Name": "monophonic",
                  "ExamId": 169,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1052,
                  "Name": "polyphonic ",
                  "ExamId": 169,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1053,
                  "Name": "on inspiration",
                  "ExamId": 169,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1054,
                  "Name": "on expiration",
                  "ExamId": 169,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1068,
                  "Name": "no wheezing",
                  "ExamId": 169,
                  "Normal": 1,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1069,
                  "Name": "wheezing in right upper lobe ",
                  "ExamId": 169,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1070,
                  "Name": "wheezing in right middle lobe ",
                  "ExamId": 169,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1071,
                  "Name": "wheezing in right lower lobe",
                  "ExamId": 169,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1072,
                  "Name": "monophonic",
                  "ExamId": 169,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1073,
                  "Name": "polyphonic ",
                  "ExamId": 169,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1074,
                  "Name": "on inspiration",
                  "ExamId": 169,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1075,
                  "Name": "on expiration",
                  "ExamId": 169,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                }
              ]
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 170,
          "Name": "breast",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": null,
              "ExamId": 171,
              "Name": "left breast",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 171,
                  "ExamId": 173,
                  "Name": "inspection",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1092,
                      "Name": "bloody discharge",
                      "ExamId": 173,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1093,
                      "Name": "milk discharge",
                      "ExamId": 173,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1094,
                      "Name": "no discharge from nipple",
                      "ExamId": 173,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1095,
                      "Name": "normal nipple",
                      "ExamId": 173,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1096,
                      "Name": "normal skin",
                      "ExamId": 173,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1097,
                      "Name": "peau d' orange",
                      "ExamId": 173,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1098,
                      "Name": "pus discharge",
                      "ExamId": 173,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1099,
                      "Name": "retraction",
                      "ExamId": 173,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1184,
                      "Name": "bloody discharge",
                      "ExamId": 173,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1185,
                      "Name": "milk discharge",
                      "ExamId": 173,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1186,
                      "Name": "no discharge from nipple",
                      "ExamId": 173,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1187,
                      "Name": "normal nipple",
                      "ExamId": 173,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1188,
                      "Name": "normal skin",
                      "ExamId": 173,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1189,
                      "Name": "peau d' orange",
                      "ExamId": 173,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1190,
                      "Name": "pus discharge",
                      "ExamId": 173,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1191,
                      "Name": "retraction",
                      "ExamId": 173,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 171,
                  "ExamId": 174,
                  "Name": "palpation of axilla",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1100,
                      "Name": " smooth ",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1101,
                      "Name": "fixed to other tissue",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1102,
                      "Name": "hard",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1103,
                      "Name": "immobile",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1104,
                      "Name": "Lymphnodes palpable",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1105,
                      "Name": "mass palpable ?.cm ",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1106,
                      "Name": "mobile",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1107,
                      "Name": "no enlarged or painful  lymphnodes palpable",
                      "ExamId": 174,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1108,
                      "Name": "painful",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1109,
                      "Name": "painless",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1110,
                      "Name": "soft to firm",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1192,
                      "Name": " smooth ",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1193,
                      "Name": "fixed to other tissue",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1194,
                      "Name": "hard",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1195,
                      "Name": "immobile",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1196,
                      "Name": "Lymphnodes palpable",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1197,
                      "Name": "mass palpable ?.cm ",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1198,
                      "Name": "mobile",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1199,
                      "Name": "no enlarged or painful  lymphnodes palpable",
                      "ExamId": 174,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1200,
                      "Name": "painful",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1201,
                      "Name": "painless",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1202,
                      "Name": "soft to firm",
                      "ExamId": 174,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 171,
                  "ExamId": 175,
                  "Name": "palpation of sub/supraclavicular space",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1111,
                      "Name": " smooth ",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1112,
                      "Name": "fixed to other tissue",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1113,
                      "Name": "hard",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1114,
                      "Name": "immobile",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1115,
                      "Name": "Lymphnodes palpable",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1116,
                      "Name": "mass palpable ?.cm ",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1117,
                      "Name": "mobile",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1118,
                      "Name": "no enlarged or painful  lymphnodes palpable",
                      "ExamId": 175,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1119,
                      "Name": "painful",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1120,
                      "Name": "painless",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1121,
                      "Name": "soft to firm",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1122,
                      "Name": "subclavivular",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1123,
                      "Name": "supraclavicular",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1203,
                      "Name": " smooth ",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1204,
                      "Name": "fixed to other tissue",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1205,
                      "Name": "hard",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1206,
                      "Name": "immobile",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1207,
                      "Name": "Lymphnodes palpable",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1208,
                      "Name": "mass palpable ?.cm ",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1209,
                      "Name": "mobile",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1210,
                      "Name": "no enlarged or painful  lymphnodes palpable",
                      "ExamId": 175,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1211,
                      "Name": "painful",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1212,
                      "Name": "painless",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1213,
                      "Name": "soft to firm",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1214,
                      "Name": "subclavivular",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1215,
                      "Name": "supraclavicular",
                      "ExamId": 175,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 171,
                  "ExamId": 176,
                  "Name": "palpation of the breast",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1124,
                      "Name": " lower left quadrant",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1125,
                      "Name": " lower right quadrant",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1126,
                      "Name": " smooth ",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1127,
                      "Name": "fixed to other tissue",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1128,
                      "Name": "hard",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1129,
                      "Name": "immobile",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1130,
                      "Name": "mass palpable ?.cm ",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1131,
                      "Name": "mobile",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1132,
                      "Name": "no masses palpable ",
                      "ExamId": 176,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1133,
                      "Name": "painful",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1134,
                      "Name": "painless",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1135,
                      "Name": "soft to firm",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1136,
                      "Name": "upper left quadrant ",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1137,
                      "Name": "upper right quadrant",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1216,
                      "Name": " lower left quadrant",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1217,
                      "Name": " lower right quadrant",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1218,
                      "Name": " smooth ",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1219,
                      "Name": "fixed to other tissue",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1220,
                      "Name": "hard",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1221,
                      "Name": "immobile",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1222,
                      "Name": "mass palpable ?.cm ",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1223,
                      "Name": "mobile",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1224,
                      "Name": "no masses palpable ",
                      "ExamId": 176,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1225,
                      "Name": "painful",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1226,
                      "Name": "painless",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1227,
                      "Name": "soft to firm",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1228,
                      "Name": "upper left quadrant ",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1229,
                      "Name": "upper right quadrant",
                      "ExamId": 176,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            },
            {
              "ParentExamId": null,
              "ExamId": 172,
              "Name": "right breast",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 172,
                  "ExamId": 177,
                  "Name": "inspection",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1138,
                      "Name": "bloody discharge",
                      "ExamId": 177,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1139,
                      "Name": "milk discharge",
                      "ExamId": 177,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1140,
                      "Name": "no discharge from nipple",
                      "ExamId": 177,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1141,
                      "Name": "normal nipple",
                      "ExamId": 177,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1142,
                      "Name": "normal skin",
                      "ExamId": 177,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1143,
                      "Name": "peau d' orange",
                      "ExamId": 177,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1144,
                      "Name": "pus discharge",
                      "ExamId": 177,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1145,
                      "Name": "retraction",
                      "ExamId": 177,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1230,
                      "Name": "bloody discharge",
                      "ExamId": 177,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1231,
                      "Name": "milk discharge",
                      "ExamId": 177,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1232,
                      "Name": "no discharge from nipple",
                      "ExamId": 177,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1233,
                      "Name": "normal nipple",
                      "ExamId": 177,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1234,
                      "Name": "normal skin",
                      "ExamId": 177,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1235,
                      "Name": "peau d' orange",
                      "ExamId": 177,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1236,
                      "Name": "pus discharge",
                      "ExamId": 177,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1237,
                      "Name": "retraction",
                      "ExamId": 177,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 172,
                  "ExamId": 178,
                  "Name": "palpation of axilla",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1146,
                      "Name": " smooth ",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1147,
                      "Name": "fixed to other tissue",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1148,
                      "Name": "hard",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1149,
                      "Name": "immobile",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1150,
                      "Name": "Lymphnodes palpable",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1151,
                      "Name": "mass palpable ?.cm ",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1152,
                      "Name": "mobile",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1153,
                      "Name": "no enlarged or painful  lymphnodes palpable",
                      "ExamId": 178,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1154,
                      "Name": "painful",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1155,
                      "Name": "painless",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1156,
                      "Name": "soft to firm",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1238,
                      "Name": " smooth ",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1239,
                      "Name": "fixed to other tissue",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1240,
                      "Name": "hard",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1241,
                      "Name": "immobile",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1242,
                      "Name": "Lymphnodes palpable",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1243,
                      "Name": "mass palpable ?.cm ",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1244,
                      "Name": "mobile",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1245,
                      "Name": "no enlarged or painful  lymphnodes palpable",
                      "ExamId": 178,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1246,
                      "Name": "painful",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1247,
                      "Name": "painless",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1248,
                      "Name": "soft to firm",
                      "ExamId": 178,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 172,
                  "ExamId": 179,
                  "Name": "palpation of sub/supraclavicular space",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1157,
                      "Name": " smooth ",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1158,
                      "Name": "fixed to other tissue",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1159,
                      "Name": "hard",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1160,
                      "Name": "immobile",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1161,
                      "Name": "Lymphnodes palpable",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1162,
                      "Name": "mass palpable ?.cm ",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1163,
                      "Name": "mobile",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1164,
                      "Name": "no enlarged or painful  lymphnodes palpable",
                      "ExamId": 179,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1165,
                      "Name": "painful",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1166,
                      "Name": "painless",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1167,
                      "Name": "soft to firm",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1168,
                      "Name": "subclavivular",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1169,
                      "Name": "supraclavicular",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1249,
                      "Name": " smooth ",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1250,
                      "Name": "fixed to other tissue",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1251,
                      "Name": "hard",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1252,
                      "Name": "immobile",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1253,
                      "Name": "Lymphnodes palpable",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1254,
                      "Name": "mass palpable ?.cm ",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1255,
                      "Name": "mobile",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1256,
                      "Name": "no enlarged or painful  lymphnodes palpable",
                      "ExamId": 179,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1257,
                      "Name": "painful",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1258,
                      "Name": "painless",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1259,
                      "Name": "soft to firm",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1260,
                      "Name": "subclavivular",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1261,
                      "Name": "supraclavicular",
                      "ExamId": 179,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 172,
                  "ExamId": 180,
                  "Name": "palpation of the breast",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1170,
                      "Name": " lower left quadrant",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1171,
                      "Name": " lower right quadrant",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1172,
                      "Name": " smooth ",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1173,
                      "Name": "fixed to other tissue",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1174,
                      "Name": "hard",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1175,
                      "Name": "immobile",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1176,
                      "Name": "mass palpable ?.cm ",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1177,
                      "Name": "mobile",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1178,
                      "Name": "no masses palpable ",
                      "ExamId": 180,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1179,
                      "Name": "painful",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1180,
                      "Name": "painless",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1181,
                      "Name": "soft to firm",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1182,
                      "Name": "upper left quadrant ",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1183,
                      "Name": "upper right quadrant",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1262,
                      "Name": " lower left quadrant",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1263,
                      "Name": " lower right quadrant",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1264,
                      "Name": " smooth ",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1265,
                      "Name": "fixed to other tissue",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1266,
                      "Name": "hard",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1267,
                      "Name": "immobile",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1268,
                      "Name": "mass palpable ?.cm ",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1269,
                      "Name": "mobile",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1270,
                      "Name": "no masses palpable ",
                      "ExamId": 180,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1271,
                      "Name": "painful",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1272,
                      "Name": "painless",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1273,
                      "Name": "soft to firm",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1274,
                      "Name": "upper left quadrant ",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1275,
                      "Name": "upper right quadrant",
                      "ExamId": 180,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 181,
          "Name": "rectal",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": 181,
              "ExamId": 182,
              "Name": "inspection",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1276,
                  "Name": "no hemorroids",
                  "ExamId": 182,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1277,
                  "Name": "no fissures",
                  "ExamId": 182,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1278,
                  "Name": "tags visible",
                  "ExamId": 182,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1279,
                  "Name": "hemorroids visible",
                  "ExamId": 182,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 181,
              "ExamId": 183,
              "Name": "neurological",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1289,
                  "Name": "wink reflex normal",
                  "ExamId": 183,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1290,
                  "Name": "wink reflex absent",
                  "ExamId": 183,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 181,
              "ExamId": 184,
              "Name": "palpation",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1280,
                  "Name": "sensation perineum normal",
                  "ExamId": 184,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1281,
                  "Name": "sensation perineum decreased",
                  "ExamId": 184,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1282,
                  "Name": "normal sphincter tone",
                  "ExamId": 184,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1283,
                  "Name": "slack sphincter",
                  "ExamId": 184,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1284,
                  "Name": "ampulla empty",
                  "ExamId": 184,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1285,
                  "Name": "ampulla filled",
                  "ExamId": 184,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1286,
                  "Name": "hemorroids palpable",
                  "ExamId": 184,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1287,
                  "Name": "grade ?",
                  "ExamId": 184,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1288,
                  "Name": "blood on glove",
                  "ExamId": 184,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 185,
          "Name": "Gynecological",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": null,
              "ExamId": 186,
              "Name": "bimanual examination",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 186,
                  "ExamId": 189,
                  "Name": "Adnexa",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1291,
                      "Name": "?.cm",
                      "ExamId": 189,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1292,
                      "Name": "fixed",
                      "ExamId": 189,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1293,
                      "Name": "left enlarged",
                      "ExamId": 189,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1294,
                      "Name": "mobile",
                      "ExamId": 189,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1295,
                      "Name": "not palpable",
                      "ExamId": 189,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1296,
                      "Name": "painful on palpation",
                      "ExamId": 189,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1297,
                      "Name": "palpable normal size",
                      "ExamId": 189,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1298,
                      "Name": "right enlarged",
                      "ExamId": 189,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 186,
                  "ExamId": 190,
                  "Name": "rectal",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1299,
                      "Name": "ampulla empty",
                      "ExamId": 190,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1300,
                      "Name": "grade ?.",
                      "ExamId": 190,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1301,
                      "Name": "hemorroids",
                      "ExamId": 190,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1302,
                      "Name": "no hemorroids or lacerations",
                      "ExamId": 190,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1303,
                      "Name": "sphincter normal tension",
                      "ExamId": 190,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 186,
                  "ExamId": 191,
                  "Name": "uterus",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1304,
                      "Name": "AVF",
                      "ExamId": 191,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1305,
                      "Name": "fixed",
                      "ExamId": 191,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1306,
                      "Name": "mobile",
                      "ExamId": 191,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1307,
                      "Name": "not painful on palpation",
                      "ExamId": 191,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1308,
                      "Name": "painful on palpation",
                      "ExamId": 191,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1309,
                      "Name": "RVF",
                      "ExamId": 191,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1310,
                      "Name": "size estimated .. Weeks",
                      "ExamId": 191,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1311,
                      "Name": "uterus size normal",
                      "ExamId": 191,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            },
            {
              "ParentExamId": 185,
              "ExamId": 187,
              "Name": "external inspection",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1325,
                  "Name": "normal",
                  "ExamId": 187,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1326,
                  "Name": "pus from urethra ",
                  "ExamId": 187,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1327,
                  "Name": "pus from Bartholin gland ",
                  "ExamId": 187,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1328,
                  "Name": "Bartholin gland swollen ",
                  "ExamId": 187,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1329,
                  "Name": "skin red ",
                  "ExamId": 187,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1330,
                  "Name": "atrophia ",
                  "ExamId": 187,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1331,
                  "Name": "painful to touch ",
                  "ExamId": 187,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1332,
                  "Name": "meatus urethra normal",
                  "ExamId": 187,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1333,
                  "Name": "meatus red ",
                  "ExamId": 187,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": null,
              "ExamId": 188,
              "Name": "Speculum exam",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 188,
                  "ExamId": 192,
                  "Name": "cervix",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1312,
                      "Name": "discharge from cervix",
                      "ExamId": 192,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1313,
                      "Name": "no pain on moving cervix",
                      "ExamId": 192,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1314,
                      "Name": "normal cervical aspect",
                      "ExamId": 192,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1315,
                      "Name": "pain on moving cervix",
                      "ExamId": 192,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1316,
                      "Name": "red",
                      "ExamId": 192,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1317,
                      "Name": "strawberry aspect",
                      "ExamId": 192,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1318,
                      "Name": "transformation zone not visible",
                      "ExamId": 192,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1319,
                      "Name": "transformation zone visible",
                      "ExamId": 192,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 188,
                  "ExamId": 193,
                  "Name": "discharge",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1320,
                      "Name": "grey",
                      "ExamId": 193,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1321,
                      "Name": "large amount of discharge",
                      "ExamId": 193,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1322,
                      "Name": "normal amount of discharge",
                      "ExamId": 193,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1323,
                      "Name": "white",
                      "ExamId": 193,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1324,
                      "Name": "with amine smell",
                      "ExamId": 193,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": [
                {
                  "ResultId": 1334,
                  "Name": "vaginal wall normal no cystocele or rectocele",
                  "ExamId": 188,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1335,
                  "Name": "vaginal wall red",
                  "ExamId": 188,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1336,
                  "Name": "vaginal wall atrophic",
                  "ExamId": 188,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1337,
                  "Name": "cystocele",
                  "ExamId": 188,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1338,
                  "Name": "rectocele",
                  "ExamId": 188,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 194,
          "Name": "andrologic exam",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": 194,
              "ExamId": 195,
              "Name": "inguinal cannal",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1349,
                  "Name": "no sign of inguinal hernia",
                  "ExamId": 195,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1350,
                  "Name": "inguinal hernai left",
                  "ExamId": 195,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1376,
                  "Name": "inguinal hernia right",
                  "ExamId": 195,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 194,
              "ExamId": 196,
              "Name": "inguinal lymphnodes",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1365,
                  "Name": "no enlarged or painful  lymphnodes palpable",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1366,
                  "Name": "Lymphnodes palpable",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1367,
                  "Name": "mass palpable ?.cm ",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1368,
                  "Name": " smooth ",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1369,
                  "Name": "soft to firm",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1370,
                  "Name": "hard",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1371,
                  "Name": "mobile",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1372,
                  "Name": "immobile",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1373,
                  "Name": "fixed to other tissue",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1374,
                  "Name": "painless",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1375,
                  "Name": "painful",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1377,
                  "Name": "no enlarged or painful  lymphnodes palpable",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1378,
                  "Name": "Lymphnodes palpable",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1379,
                  "Name": "mass palpable ?.cm ",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1380,
                  "Name": " smooth ",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1381,
                  "Name": "soft to firm",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1382,
                  "Name": "hard",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1383,
                  "Name": "mobile",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1384,
                  "Name": "immobile",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1385,
                  "Name": "fixed to other tissue",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1386,
                  "Name": "painless",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1387,
                  "Name": "painful",
                  "ExamId": 196,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 194,
              "ExamId": 197,
              "Name": "penis",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1339,
                  "Name": "circumcized",
                  "ExamId": 197,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1340,
                  "Name": "not circumcized",
                  "ExamId": 197,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1341,
                  "Name": "ulcer",
                  "ExamId": 197,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1342,
                  "Name": "?.cm",
                  "ExamId": 197,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1343,
                  "Name": "plaques or scar tissue",
                  "ExamId": 197,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 194,
              "ExamId": 198,
              "Name": "prostate",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1351,
                  "Name": "normal size",
                  "ExamId": 198,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1352,
                  "Name": "enlarged",
                  "ExamId": 198,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1353,
                  "Name": "symmetrical",
                  "ExamId": 198,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1354,
                  "Name": "no nodes palpable",
                  "ExamId": 198,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1355,
                  "Name": "right node",
                  "ExamId": 198,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1356,
                  "Name": "left side node",
                  "ExamId": 198,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1357,
                  "Name": "?.cm",
                  "ExamId": 198,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1358,
                  "Name": "not tender",
                  "ExamId": 198,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1359,
                  "Name": "tender",
                  "ExamId": 198,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 194,
              "ExamId": 199,
              "Name": "rectal",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1360,
                  "Name": "sphincter normal tension",
                  "ExamId": 199,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1361,
                  "Name": "ampulla empty",
                  "ExamId": 199,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1362,
                  "Name": "no hemorroids or lacerations",
                  "ExamId": 199,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1363,
                  "Name": "hemorroids",
                  "ExamId": 199,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1364,
                  "Name": "grade ?.",
                  "ExamId": 199,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 194,
              "ExamId": 200,
              "Name": "scrotum",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1344,
                  "Name": "normal testes_ no tumore or hydrocele",
                  "ExamId": 200,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1345,
                  "Name": "hydrocele left",
                  "ExamId": 200,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1346,
                  "Name": "tenderness of cord left",
                  "ExamId": 200,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1347,
                  "Name": "testicular mass left",
                  "ExamId": 200,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1348,
                  "Name": "?.cm",
                  "ExamId": 200,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1388,
                  "Name": "hydrocele right",
                  "ExamId": 200,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1389,
                  "Name": "tenderness of cord right",
                  "ExamId": 200,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1390,
                  "Name": "testicular mass right",
                  "ExamId": 200,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                }
              ]
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 201,
          "Name": "lower back",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": 201,
              "ExamId": 202,
              "Name": "aorta",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1391,
                  "Name": "no aneurysme palpable ",
                  "ExamId": 202,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1392,
                  "Name": "no murmer",
                  "ExamId": 202,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1393,
                  "Name": "aneurysme ?..cm",
                  "ExamId": 202,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1394,
                  "Name": "Murmer",
                  "ExamId": 202,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 201,
              "ExamId": 203,
              "Name": "chest expansion",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1408,
                  "Name": "chest expansion normal",
                  "ExamId": 203,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1409,
                  "Name": "chest expansion small  <4 cm",
                  "ExamId": 203,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 201,
              "ExamId": 204,
              "Name": "movement",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1413,
                  "Name": "Normal range of motion without pain",
                  "ExamId": 204,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1414,
                  "Name": "pain on flexion",
                  "ExamId": 204,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1415,
                  "Name": "pain on extension",
                  "ExamId": 204,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1416,
                  "Name": "pain on lateral bending",
                  "ExamId": 204,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1417,
                  "Name": "pain on twisting",
                  "ExamId": 204,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 201,
              "ExamId": 205,
              "Name": "muscle testing",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1425,
                  "Name": "quadriceps_ ankle dorsifelxion and toe dorsiflexion strength is 5/5",
                  "ExamId": 205,
                  "Normal": 1,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1426,
                  "Name": "quadriceps ?/5",
                  "ExamId": 205,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1427,
                  "Name": "dorsiflex ankle ?/5",
                  "ExamId": 205,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1428,
                  "Name": "dorsiflex great toe ?/5",
                  "ExamId": 205,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1441,
                  "Name": "quadriceps_ ankle dorsifelxion and toe dorsiflexion strength is 5/5",
                  "ExamId": 205,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1442,
                  "Name": "quadriceps ?/5",
                  "ExamId": 205,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1443,
                  "Name": "dorsiflex ankle ?/5",
                  "ExamId": 205,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1444,
                  "Name": "dorsiflex great toe ?/5",
                  "ExamId": 205,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 201,
              "ExamId": 206,
              "Name": "palpation",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1418,
                  "Name": "spine vertebrae line up",
                  "ExamId": 206,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1419,
                  "Name": "no pain on palpation",
                  "ExamId": 206,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1420,
                  "Name": "pain on palpation of spinous process ?.",
                  "ExamId": 206,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1421,
                  "Name": "vertrebra ?. deviates",
                  "ExamId": 206,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1422,
                  "Name": "pain on palpation of  ?.",
                  "ExamId": 206,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1423,
                  "Name": "pain on percussion of ?",
                  "ExamId": 206,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1424,
                  "Name": "SI joint pain",
                  "ExamId": 206,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 201,
              "ExamId": 207,
              "Name": "peripheral muscles",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1410,
                  "Name": "calf circumference left-right is symmetrical",
                  "ExamId": 207,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1411,
                  "Name": "calf circumference left ? cm smaller than right",
                  "ExamId": 207,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1412,
                  "Name": "calf circumference right ?cm smaller than left",
                  "ExamId": 207,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 201,
              "ExamId": 208,
              "Name": "reflexes",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1434,
                  "Name": "paellar and achilles tendon reflex is normal",
                  "ExamId": 208,
                  "Normal": 1,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1435,
                  "Name": "patellar tendon reflex ?/4",
                  "ExamId": 208,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1436,
                  "Name": "achilles tendon reflex ?/4",
                  "ExamId": 208,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1445,
                  "Name": "paellar and achilles tendon reflex is normal",
                  "ExamId": 208,
                  "Normal": 1,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1446,
                  "Name": "patellar tendon reflex ?/4",
                  "ExamId": 208,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1447,
                  "Name": "achilles tendon reflex ?/4",
                  "ExamId": 208,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 201,
              "ExamId": 209,
              "Name": "sciatic nerve test ",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1437,
                  "Name": "supine straight leg raising  normal",
                  "ExamId": 209,
                  "Normal": 1,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1438,
                  "Name": "supine straight leg raising  painful",
                  "ExamId": 209,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1439,
                  "Name": "sitting knee extension normal",
                  "ExamId": 209,
                  "Normal": 1,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1440,
                  "Name": "sitting knee extension painful",
                  "ExamId": 209,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1448,
                  "Name": "supine straight leg raising normal",
                  "ExamId": 209,
                  "Normal": 1,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1449,
                  "Name": "supine straight leg raising painful",
                  "ExamId": 209,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1450,
                  "Name": "sitting knee extension  normal",
                  "ExamId": 209,
                  "Normal": 1,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1451,
                  "Name": "sitting knee extension painful",
                  "ExamId": 209,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 201,
              "ExamId": 210,
              "Name": "sensation test",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1429,
                  "Name": "sensation testing is normal",
                  "ExamId": 210,
                  "Normal": 1,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1430,
                  "Name": "lateral thigh and medial femoral condyle ?/2",
                  "ExamId": 210,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1431,
                  "Name": "medial leg and medial ankle ?/2",
                  "ExamId": 210,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1432,
                  "Name": "lateral leg and top of foot  ?/2",
                  "ExamId": 210,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1433,
                  "Name": "fot sole and lateral ankle?/2",
                  "ExamId": 210,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1452,
                  "Name": "sensation testing is normal",
                  "ExamId": 210,
                  "Normal": 1,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1453,
                  "Name": "lateral thigh and medial femoral condyle  ?/2",
                  "ExamId": 210,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1454,
                  "Name": "medial leg and medial ankle ?/2",
                  "ExamId": 210,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1455,
                  "Name": "lateral leg and top of foot ?/2",
                  "ExamId": 210,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1456,
                  "Name": "fot sole and lateral ankle ?/2",
                  "ExamId": 210,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 201,
              "ExamId": 211,
              "Name": "skin",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1406,
                  "Name": "no caf?-au-lait spots",
                  "ExamId": 211,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1407,
                  "Name": "caf? au lait spots present",
                  "ExamId": 211,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            },
            {
              "ParentExamId": 201,
              "ExamId": 212,
              "Name": "stace and gait",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1395,
                  "Name": "normal stance",
                  "ExamId": 212,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1396,
                  "Name": "normal movement",
                  "ExamId": 212,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1397,
                  "Name": "normal gait",
                  "ExamId": 212,
                  "Normal": 1,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1398,
                  "Name": "stands tilted to right",
                  "ExamId": 212,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1399,
                  "Name": "stands tilted to left",
                  "ExamId": 212,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1400,
                  "Name": "squat and rise is normal",
                  "ExamId": 212,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1401,
                  "Name": "squat and rise indicates weakness",
                  "ExamId": 212,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1402,
                  "Name": "walking on heels is normal",
                  "ExamId": 212,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1403,
                  "Name": "walking on heels indicates weakness",
                  "ExamId": 212,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1404,
                  "Name": "walking on toes is normal",
                  "ExamId": 212,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                },
                {
                  "ResultId": 1405,
                  "Name": "waling on toes indicates weakness",
                  "ExamId": 212,
                  "Normal": 0,
                  "LeftRight": 0,
                  "Type": 1
                }
              ]
            }
          ],
          "ListResults": null
        },
        {
          "ParentExamId": null,
          "ExamId": 213,
          "Name": "neurological exam",
          "Type": 1,
          "ListSubExams": [
            {
              "ParentExamId": 213,
              "ExamId": 214,
              "Name": "coordination and gait",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": []
            },
            {
              "ParentExamId": null,
              "ExamId": 215,
              "Name": "cranial nerves",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 215,
                  "ExamId": 219,
                  "Name": "XII",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1457,
                      "Name": "coordiantion normal",
                      "ExamId": 219,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1458,
                      "Name": "dysmetria",
                      "ExamId": 219,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1459,
                      "Name": "gait normal",
                      "ExamId": 219,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1460,
                      "Name": "neck stiffness ",
                      "ExamId": 219,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1461,
                      "Name": "no meningeal signs present",
                      "ExamId": 219,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1462,
                      "Name": "pain on bending the neck",
                      "ExamId": 219,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1463,
                      "Name": "tongue position and movements normal",
                      "ExamId": 219,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1464,
                      "Name": "tongue position or movements weak or assymmetrical",
                      "ExamId": 219,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 215,
                  "ExamId": 220,
                  "Name": "I",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1465,
                      "Name": "smell intact",
                      "ExamId": 220,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1466,
                      "Name": "smell lower or gone",
                      "ExamId": 220,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 215,
                  "ExamId": 221,
                  "Name": "II",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1467,
                      "Name": "arterio-venous nicking",
                      "ExamId": 221,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1468,
                      "Name": "cotton wool exudates",
                      "ExamId": 221,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1469,
                      "Name": "flame hemorrhages",
                      "ExamId": 221,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1470,
                      "Name": "fundus examination normal",
                      "ExamId": 221,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1471,
                      "Name": "infarcts  and emboli",
                      "ExamId": 221,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1472,
                      "Name": "optic disk edema",
                      "ExamId": 221,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1473,
                      "Name": "Roth spots",
                      "ExamId": 221,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1474,
                      "Name": "visual acuity in Schnellen chart is ?.",
                      "ExamId": 221,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1475,
                      "Name": "visual acuity in Schnellen chart is 20/20",
                      "ExamId": 221,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1476,
                      "Name": "visual field damaged",
                      "ExamId": 221,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1477,
                      "Name": "visual field normal",
                      "ExamId": 221,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 215,
                  "ExamId": 222,
                  "Name": "III",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1478,
                      "Name": "eye movements normal",
                      "ExamId": 222,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1479,
                      "Name": "eye movements not normal",
                      "ExamId": 222,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1480,
                      "Name": "pupil reaction delayed or absent",
                      "ExamId": 222,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1481,
                      "Name": "pupil reaction normal",
                      "ExamId": 222,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 215,
                  "ExamId": 223,
                  "Name": "IV",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1482,
                      "Name": "eye movements normal",
                      "ExamId": 223,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1483,
                      "Name": "eye movements not normal",
                      "ExamId": 223,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1484,
                      "Name": "pupil reaction delayed or absent",
                      "ExamId": 223,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1485,
                      "Name": "pupil reaction normal",
                      "ExamId": 223,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 215,
                  "ExamId": 224,
                  "Name": "IX",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1486,
                      "Name": "swallowing abnormal",
                      "ExamId": 224,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1487,
                      "Name": "swallowing normal",
                      "ExamId": 224,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1488,
                      "Name": "voice hoarse",
                      "ExamId": 224,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1489,
                      "Name": "voice normal",
                      "ExamId": 224,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 215,
                  "ExamId": 225,
                  "Name": "V",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1490,
                      "Name": "cornea reflex dminished on left side",
                      "ExamId": 225,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1491,
                      "Name": "cornea reflex dminished on right side",
                      "ExamId": 225,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1492,
                      "Name": "cornea reflex normal",
                      "ExamId": 225,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1493,
                      "Name": "facial sensation diminished on left side",
                      "ExamId": 225,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1494,
                      "Name": "facial sensation diminished on right side",
                      "ExamId": 225,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1495,
                      "Name": "facial sensation normal",
                      "ExamId": 225,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 215,
                  "ExamId": 226,
                  "Name": "VI",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1496,
                      "Name": "eye movements normal",
                      "ExamId": 226,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1497,
                      "Name": "eye movements not normal",
                      "ExamId": 226,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1498,
                      "Name": "pupil reaction delayed or absent",
                      "ExamId": 226,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1499,
                      "Name": "pupil reaction normal",
                      "ExamId": 226,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 215,
                  "ExamId": 227,
                  "Name": "VII",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1500,
                      "Name": "facial movements normal",
                      "ExamId": 227,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1501,
                      "Name": "facial paralysis left",
                      "ExamId": 227,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1502,
                      "Name": "facial paralysis right",
                      "ExamId": 227,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 215,
                  "ExamId": 228,
                  "Name": "VIII",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1503,
                      "Name": "finger rub test normal",
                      "ExamId": 228,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 215,
                  "ExamId": 229,
                  "Name": "X",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1504,
                      "Name": "swallowing abnormal",
                      "ExamId": 229,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1505,
                      "Name": "swallowing normal",
                      "ExamId": 229,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1506,
                      "Name": "voice hoarse",
                      "ExamId": 229,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1507,
                      "Name": "voice normal",
                      "ExamId": 229,
                      "Normal": 1,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 215,
                  "ExamId": 230,
                  "Name": "XI",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1508,
                      "Name": "shrugging shoulders normal",
                      "ExamId": 230,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    },
                    {
                      "ResultId": 1509,
                      "Name": "shrugging shoulders weak",
                      "ExamId": 230,
                      "Normal": 0,
                      "LeftRight": 0,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            },
            {
              "ParentExamId": null,
              "ExamId": 216,
              "Name": "deep tendon reflexes",
              "Type": 1,
              "ListSubExams": [
                {
                  "ParentExamId": 216,
                  "ExamId": 232,
                  "Name": "achilles reflex",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1518,
                      "Name": "absent",
                      "ExamId": 232,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1519,
                      "Name": "diminished",
                      "ExamId": 232,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1520,
                      "Name": "hyperactive",
                      "ExamId": 232,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1521,
                      "Name": "normal",
                      "ExamId": 232,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1544,
                      "Name": "absent",
                      "ExamId": 232,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1545,
                      "Name": "diminished",
                      "ExamId": 232,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1546,
                      "Name": "hyperactive",
                      "ExamId": 232,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1547,
                      "Name": "normal",
                      "ExamId": 232,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 216,
                  "ExamId": 233,
                  "Name": "biceps reflex",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1522,
                      "Name": "absent",
                      "ExamId": 233,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1523,
                      "Name": "diminished",
                      "ExamId": 233,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1524,
                      "Name": "hyperactive",
                      "ExamId": 233,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1525,
                      "Name": "normal",
                      "ExamId": 233,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1548,
                      "Name": "absent",
                      "ExamId": 233,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1549,
                      "Name": "diminished",
                      "ExamId": 233,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1550,
                      "Name": "hyperactive",
                      "ExamId": 233,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1551,
                      "Name": "normal",
                      "ExamId": 233,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 216,
                  "ExamId": 234,
                  "Name": "knee reflex",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1526,
                      "Name": "absent",
                      "ExamId": 234,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1527,
                      "Name": "diminished",
                      "ExamId": 234,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1528,
                      "Name": "hyperactive",
                      "ExamId": 234,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1529,
                      "Name": "normal",
                      "ExamId": 234,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1552,
                      "Name": "absent",
                      "ExamId": 234,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1553,
                      "Name": "diminished",
                      "ExamId": 234,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1554,
                      "Name": "hyperactive",
                      "ExamId": 234,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1555,
                      "Name": "normal",
                      "ExamId": 234,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 216,
                  "ExamId": 235,
                  "Name": "plantar reflex",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1530,
                      "Name": "abnormal",
                      "ExamId": 235,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1531,
                      "Name": "normal",
                      "ExamId": 235,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1556,
                      "Name": "abnormal",
                      "ExamId": 235,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1557,
                      "Name": "normal",
                      "ExamId": 235,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                },
                {
                  "ParentExamId": 216,
                  "ExamId": 236,
                  "Name": "triceps reflex",
                  "Type": 1,
                  "ListSubExams": null,
                  "ListResults": [
                    {
                      "ResultId": 1532,
                      "Name": "absent",
                      "ExamId": 236,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1533,
                      "Name": "diminished",
                      "ExamId": 236,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1534,
                      "Name": "hyperactive",
                      "ExamId": 236,
                      "Normal": 0,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1535,
                      "Name": "normal",
                      "ExamId": 236,
                      "Normal": 1,
                      "LeftRight": 1,
                      "Type": 1
                    },
                    {
                      "ResultId": 1558,
                      "Name": "absent",
                      "ExamId": 236,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1559,
                      "Name": "diminished",
                      "ExamId": 236,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1560,
                      "Name": "hyperactive",
                      "ExamId": 236,
                      "Normal": 0,
                      "LeftRight": 2,
                      "Type": 1
                    },
                    {
                      "ResultId": 1561,
                      "Name": "normal",
                      "ExamId": 236,
                      "Normal": 1,
                      "LeftRight": 2,
                      "Type": 1
                    }
                  ]
                }
              ],
              "ListResults": []
            },
            {
              "ParentExamId": 213,
              "ExamId": 217,
              "Name": "meningeal signs",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": []
            },
            {
              "ParentExamId": 213,
              "ExamId": 218,
              "Name": "Motor",
              "Type": 1,
              "ListSubExams": null,
              "ListResults": [
                {
                  "ResultId": 1562,
                  "Name": "all movement and strength normal",
                  "ExamId": 218,
                  "Normal": 1,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1563,
                  "Name": "elbow flexion normal",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1564,
                  "Name": "elbox flexion weak",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1565,
                  "Name": "elbow extension normal",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1566,
                  "Name": "elbow extension weak",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1567,
                  "Name": "wrist flexion normal",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1568,
                  "Name": "wrist flexion weak ",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1569,
                  "Name": "finger spreadnormal",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1570,
                  "Name": "finger spread weak ",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1571,
                  "Name": "hip flexion normal",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1572,
                  "Name": "hip flexion weak",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1573,
                  "Name": "knee extension normal",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1574,
                  "Name": "knee extension weak",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 1,
                  "Type": 1
                },
                {
                  "ResultId": 1575,
                  "Name": "all movement and strength normal",
                  "ExamId": 218,
                  "Normal": 1,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1576,
                  "Name": "elbow flexion normal",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1577,
                  "Name": "elbox flexion weak",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1578,
                  "Name": "elbow extension normal",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1579,
                  "Name": "elbow extension weak",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1580,
                  "Name": "wrist flexion normal",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1581,
                  "Name": "wrist flexion weak ",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1582,
                  "Name": "finger spreadnormal",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1583,
                  "Name": "finger spread weak ",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1584,
                  "Name": "hip flexion normal",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1585,
                  "Name": "hip flexion weak",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1586,
                  "Name": "knee extension normal",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                },
                {
                  "ResultId": 1587,
                  "Name": "knee extension weak",
                  "ExamId": 218,
                  "Normal": 0,
                  "LeftRight": 2,
                  "Type": 1
                }
              ]
            }
          ],
          "ListResults": null
        }
      ]
    }
    listParentExamId(id) {
        return this.http
            .get(`api/exam?parentExamId=${id}`)
            .pipe(map((res: any) => res.Payload));
    }

    listResultExam(id: number) {
        return this.http.get(`api/VisitReport/Exams/${id}`).pipe(map((res: any) => res.Payload));
    }

    listExamAvailableResults(id?) {
        return this.http.get(`api/ExamAvailableResults?examId=${id}`)
            .toPromise().then(
                result => JSON.parse(
                    JSON.stringify(result)
                )
            );
    }

    createdVisitExam(data: any) {
        return this.http.post(`api/VisitExam`, data).pipe(map((res: any) => res.Payload));
    }

    updateVisitExam(visitId, examId, problemId, data) {
        return this.http
            .put(`api/VisitExam?VisitId=${visitId}&ExamId=${examId}&ProblemId=${problemId}`, data)
            .pipe(map((res: any) => res.Payload)).subscribe();
    }

    listResultIdExam(visitId, problemId, examId) {
        return this.http.get(`api/ResultIdExam?VisitId=${visitId}&ProblemId=${problemId}&ExamId=${examId}`)
            .toPromise().then(
                result => JSON.parse(
                    JSON.stringify(result)
                )
            );
    }

    deleteExam(visitId, problemId, data): Observable<[number]> {
        return this.http.put<[number]>(
            `api/UpdateVisitExam?visitId=${visitId}&problemId=${problemId}`,
            data
        );
    }

    deleteVisitExamLeftRight(data) {
        return this.http.put(`api/VisitExam/DeleteVisitExamResult`, data).pipe(map((res: any) => res.Payload)).subscribe();;
    }

    listExamParent() {
        return this.http
            .get(`api/Exam?visitId=&problemId=`)
            .pipe(map((res: any) => res.Payload));
    }

}
