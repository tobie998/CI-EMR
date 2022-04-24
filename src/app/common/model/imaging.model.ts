export class ImagingModel {
    public get collums(): Array<any> {
        return [
            {
                id: 'TestcategoryName',
                name: 'Category',
                type: 'text'
            },
            {
                id: 'TestName',
                name: 'Organ',
                type: 'text'
            },
            {
                id: 'OrganName',
                name: 'Test',
                type: 'text'
            },
            {
                id: 'NumbericResult',
                name: 'Result',
                type: 'text'
            }];
    }
}