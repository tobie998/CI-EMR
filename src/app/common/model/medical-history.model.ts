export class MedicalHistoryModel {
    public PatientMedicalfactorId: number;
    public PatientId: number;
    public Type: number;
    public Status: number;
    public SNOMEDCode: string;
    public StartDate: string;
    public EndDate: string;
    public CreatedOn: string;
    public CreatedBy: string;
    public UpdatedOn: string;
    public UpdatedBy: string;
    public get collumsMedical(): Array<any> {
        return [
            {
                id: 'SNOMEDCode',
                name: 'MEDICAL HISTORY',
                type: 'text',
            },
            {
                id: 'StartDate',
                name: 'SINCE',
                type: 'text',
            },
            {
                id: 'setting',
                name: '',
                type: 'setting',
                listBtn: [
                    {
                        type: 'detail',
                        icon: 'assets/svg/edit-inline.svg'
                    },
                    {
                        type: 'delete',
                        icon: 'assets/svg/deleteinline.svg'
                    }
                ]
            }];
    }
    public get collumsSurgical(): Array<any> {
        return [
            {
                id: 'SNOMEDCode',
                name: 'Surgical history',
                type: 'text',
                width: '50%',
            },
            {
                id: 'StartDate',
                name: 'SINCE',
                type: 'text',
                width: '20%'
            },
            {
                id: 'setting',
                name: '',
                type: 'setting',
                width: '20%',
                listBtn: [
                    {
                        type: 'detail',
                        icon: 'assets/svg/edit-inline.svg'
                    },
                    {
                        type: 'delete',
                        icon: 'assets/svg/deleteinline.svg'
                    }
                ]
            }];
    }
}