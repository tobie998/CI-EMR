export class ResultLabModel {
    public get collumsLab(): Array<any> {
        return [
            {
                id: 'VisitDate',
                name: 'Visit date',
                type: 'text'
            },
            // {
            //     id: 'ProblemName',
            //     name: 'Problem name',
            //     type: 'text'
            // },
            {
                id: 'TestcategoryName',
                name: 'Category',
                type: 'text'
            },
            {
                id: 'setting',
                name: '',
                type: 'setting',
                listBtn: [{
                    type: 'upload',
                    check: 'lab',
                    icon: 'assets/svg/upload.svg'
                },
                {
                    type: 'view',
                    check: 'lab',
                    icon: 'assets/svg/detail-doc.svg'
                }]
            }];
    }
    public get collumsDoc(): Array<any> {
        return [
            {
                id: 'CreatedOn',
                name: 'Visit date',
                type: 'text'
            },
            {
                id: 'Document',
                name: 'Document',
                type: 'text'
            },
            {
                id: 'setting',
                name: '',
                type: 'setting',
                listBtn: [{
                    type: 'upload',
                    check: 'doc',
                    icon: 'assets/svg/upload.svg'
                },
                {
                    type: 'view',
                    check: 'doc',
                    icon: 'assets/svg/detail-doc.svg'
                }]
            }];
    }
    public get collumsCategory(): Array<any> {
        return [
            {
                id: 'VisitDate',
                name: 'Visit date',
                type: 'text'
            },
            // {
            //     id: 'ProblemName',
            //     name: 'Problem name',
            //     type: 'text'
            // },
            {
                id: 'TestcategoryName',
                name: 'Category',
                type: 'text'
            },
            {
                id: 'TestName',
                name: 'Test',
                type: 'text'
            },
            {
                id: 'setting',
                name: '',
                type: 'setting',
                listBtn: [{
                    id: 0,
                    type: 'upload',
                    check: 'category',
                    icon: 'assets/svg/upload.svg'
                },
                {
                    id: 1,
                    type: 'view',
                    check: 'category',
                    icon: 'assets/svg/detail-doc.svg'
                }]
            }];
    }
    public get collumsImaging(): Array<any> {
      return [
          {
              id: 'VisitDate',
              name: 'Visit date',
              type: 'text'
          },
          // {
          //     id: 'ProblemName',
          //     name: 'Problem name',
          //     type: 'text'
          // },
          {
              id: 'TestcategoryName',
              name: 'Category',
              type: 'text'
          },
          {
            id: 'OrganName',
            name: 'Organ',
            type: 'text'
          },
          {
              id: 'TestName',
              name: 'Test',
              type: 'text'
          },
          {
              id: 'setting',
              name: '',
              type: 'setting',
              listBtn: [{
                  id: 0,
                  type: 'upload',
                  check: 'category',
                  icon: 'assets/svg/upload.svg'
              },
              {
                  id: 1,
                  type: 'view',
                  check: 'category',
                  icon: 'assets/svg/detail-doc.svg'
              }]
          }];
  }
    public get uploadLab(): Array<any> {
        return [
            {
                id: '1',
                name: 'Visit date',
                type: 'sdate',
                condition: 'VisitDate'
            },
            {
                id: '2',
                name: 'Problem Name',
                type: 'text',
                condition: 'ProblemName'
            },
            {
                id: '3',
                name: 'Type',
                type: 'text',
                condition: 'Type'
            },

            {
                id: '4',
                name: 'Category',
                type: 'text',
                condition: 'TestcategoryName'
            },

        ];
    }
    public get uploadDoc(): Array<any> {
        return [
            {
                id: 'CreatedOn',
                name: 'Visit date',
                type: 'sdate',
                condition: 'CreatedOn'
            },
            {
                id: 'DocumentName',
                name: 'Document',
                type: 'text',
                condition: 'DocumentName'
            },
        ];
    }
    public get uploadCategory(): Array<any> {
        return [
            {
                id: '1',
                name: 'Visit date',
                type: 'sdate',
                condition: 'VisitDate'
            },
            {
                id: '2',
                name: 'Problem Name',
                type: 'text',
                condition: 'ProblemName'
            },
            {
                id: '3',
                name: 'Category',
                type: 'text',
                condition: 'TestcategoryName'
            },

            {
                id: '4',
                name: 'Test',
                type: 'text',
                condition: 'TestResult'
            },

        ];
    }
    public get uploadIm(): Array<any> {
      return [
          {
              id: '1',
              name: 'Visit date',
              type: 'sdate',
              condition: 'VisitDate'
          },
          {
              id: '2',
              name: 'Problem Name',
              type: 'text',
              condition: 'ProblemName'
          },
          {
              id: '3',
              name: 'Category',
              type: 'text',
              condition: 'TestcategoryName'
          },
          {
            id: '4',
            name: 'Organ',
            type: 'text',
            condition: 'OrganName'
          },

          {
              id: '5',
              name: 'Test',
              type: 'text',
              condition: 'TextResult'
          },

      ];
  }
}
