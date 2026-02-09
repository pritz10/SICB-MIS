
export enum ProjectType {
  DDUGKY = 'DDU-GKY',
  ITI = 'ITI',
  PMKVY = 'PMKVY',
  SANKALP = 'SANKALP'
}

export interface Statistics {
  totalEnrolled: number;
  totalTrained: number;
  totalCertified: number;
  totalPlaced: number;
}

export interface ProjectData {
  id: string;
  name: string;
  type: ProjectType;
  district: string;
  state: string;
  enrolled: number;
  placed: number;
  status: 'Active' | 'Completed' | 'Pending';
}

export interface Beneficiary {
  id: string;
  name: string;
  district: string;
  scheme: string;
  trade: string;
  status: 'Training' | 'Placed' | 'Certified' | 'Dropped';
  salary?: string;
}

export interface ChartData {
  name: string;
  trained: number;
  placed: number;
}

export interface DistrictPerformance {
  district: string;
  enrolled: number;
  placed: number;
}
