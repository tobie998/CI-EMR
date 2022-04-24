export class ListEducationcombination {
  EducationcombinationId: number;
  EducationitemName: string;
  Status: number;
  isActive = false;
}

export class Education {
  OrganId: number;
  OrganName: string;
  isActive = false;
  ListEducationcombinations: ListEducationcombination[];
}
