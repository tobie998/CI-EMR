export class ListofvisitsModel {
    public VisitId: number;
    public PatientId: number;
    public StartDate: string;
    public LocationId: number;
    public ScheduleId: number;
    public Type: number;
    public Status: number;
    public CreatedOn: string;
    public CreatedBy: number;
    public UpdatedOn: string;
    public UpdatedBy: string;
    public MediaURL: string;
    public VisitMediaId: number;
    public get collums(): Array<any> {
        return [
            // {
            //     id: 'radio',
            //     name: '',
            //     type: 'radio',
            //     width: '10%',
            // },
            {
                id: 'date',
                name: 'Date',
                type: 'date',
                width: '25%',
            },
            {
                id: 'listProblem',
                name: 'Problem',
                type: 'text',
                width: '50%'
            },
            {
                id: 'check',
                name: 'View',
                type: 'setting',
                width: '25%',
                listBtn: [
                  {
                    type: 'view-doctor',
                    icon: 'assets/svg/invoice-blue.svg'
                  },
                  {
                    type: 'view',
                    icon: 'assets/svg/emr-view-listofvisit.svg'
                  }
                  ]
            }];
    }
}
