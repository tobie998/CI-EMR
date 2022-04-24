// export class ExamModel {
//   ExamId: number;
//   Name: string;
//   Normal: number;
//   Type: number;
//   LeftRight: number;
//   ResultId: number;
//   isActive = false;
//   ChildExam: ExamModel[];
//   Results: ExamModel[];
//   LeftRights: LeftRightModel[];
//   // Results: LeftRightModel[];
// }
// export class LeftRightModel {
//   NameLeft: string;
//   TypeLeft: number;
//   NameRight: string;
//   TypeRight: number;
// }




// export class ListExamResult {
//   ResultId: number;
//   Name: string;
//   Normal: number;
//   LeftRight: number;
//   Status: number;
// }
// export class ListSubExam {
//   ExamId: number;
//   Name: string;
//   Status: number;
//   ListNormalExamResults: ListExamResult[];
//   ListAbnormalExamResults: ListExamResult[];
// }

// export class ListExam {
//   ExamId: number;
//   Name: string;
//   Status: number;
//   isActive = false;
//   ListSubExams: ListSubExam[];
// }




export class ListResult {
  ResultId: number;
  Name: string;
  ExamId: number;
  Normal: number;
  LeftRight: number;
  Type: number;
  Status: number;
}

export class ListExam {
  ParentExamId?: number;
  ExamId: number;
  Name: string;
  Type: number;
  Status: number;
  ListSubExams: ListExam[];
  ListResults?: ListResult[];
  level2? = false;
  haveLeftRight? = false;
  isActive? = false;
}


// export class RootObject {
//   Ok: boolean;
//   Message?: any;
//   Payload: Payload[];
// }


