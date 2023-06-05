export interface Portfolio {
  id: number;
  projectCode: string;
  projectName: string;
  image: string;
  descriptions: string[];
  workingFrom: Date;
  workingTo: Date;
  publish: Date;
}
