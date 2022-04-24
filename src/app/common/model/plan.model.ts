export class Testcombination {
  TestcombinationId: number;
  Name: string;
  Status: number;
  isActive = false;
}

export class ListOrgan {
  OrganId: number;
  Name: string;
  ListTestcombinations: Testcombination[];
  isActive = false;
}

export class ListTestcategory {
  TestcategoryId: number;
  Name: string;
  ListOrgans: ListOrgan[];
  ListTestcombinations: Testcombination[];
  isActive = false;
}

export class PlanModel {
  TestcategoryId: number;
  Name: string;
  ListTestcategories: ListTestcategory[];
  ListOrgans: ListOrgan[];
  isActive = false;
}
