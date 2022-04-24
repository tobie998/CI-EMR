export class AllergryModel {
    public get collums(): Array<any> {
        return [
            {
                id: 'AllergyName',
                name: 'ALLERGY FOR',
                type: 'text'
            },
            {
                id: 'StartDate',
                name: 'SINCE',
                type: 'text'
            },
            {
                id: 'SymptomSNOMEDDescription',
                name: 'SYMPTONS',
                type: 'text'
            },
            {
                id: 'Frequency',
                name: 'FREQUENCY',
                type: 'text'
            },
            {
                id: 'setting',
                name: '',
                type: 'setting',
                listBtn: [{
                    type: 'detail',
                    icon: 'assets/svg/edit-inline.svg'
                },
                {
                    type: 'delete',
                    icon: 'assets/svg/deleteinline.svg'
                }]
            }];
    }
}