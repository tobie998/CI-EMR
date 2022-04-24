export class LabModel {
    public get collums(): Array<any> {
        return [
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
                id: 'NumbericResult',
                name: 'Result',
                type: 'text'
            }];
    }
}