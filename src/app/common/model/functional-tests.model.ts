export class FunctionalTestsModel {
    public get collums(): Array<any> {
        return [
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
                id: 'NumbericResult',
                name: 'Result',
                type: 'text'
            }];
    }
}