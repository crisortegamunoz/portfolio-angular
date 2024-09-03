export interface Technology {
  id: number;
  name: string;
  version: string;
}

export interface TechnologyPortfolio extends Technology {
  class: string;
}
