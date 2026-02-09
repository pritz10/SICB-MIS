
import { ProjectType, ProjectData, ChartData, Beneficiary, DistrictPerformance } from './types';

export const COLORS = {
  primary: '#0F4C81',
  secondary: '#F18F01',
  success: '#2D6A4F',
  info: '#1B4332'
};

export const MOCK_PROJECTS: ProjectData[] = [
  { id: '1', name: 'Sikkim Manipal Skill Center', type: ProjectType.DDUGKY, district: 'Gangtok', state: 'Sikkim', enrolled: 450, placed: 310, status: 'Active' },
  { id: '2', name: 'Government ITI Rangpo', type: ProjectType.ITI, district: 'Pakyong', state: 'Sikkim', enrolled: 1200, placed: 850, status: 'Active' },
  { id: '3', name: 'Namchi Multi-Skill Center', type: ProjectType.PMKVY, district: 'Namchi', state: 'Sikkim', enrolled: 300, placed: 220, status: 'Completed' },
  { id: '4', name: 'Geyzing Digital Lab', type: ProjectType.SANKALP, district: 'Geyzing', state: 'Sikkim', enrolled: 600, placed: 150, status: 'Active' },
  { id: '5', name: 'Mangan Handloom Cluster', type: ProjectType.DDUGKY, district: 'Mangan', state: 'Sikkim', enrolled: 250, placed: 180, status: 'Pending' },
  { id: '6', name: 'ITI Soreng Campus', type: ProjectType.ITI, district: 'Soreng', state: 'Sikkim', enrolled: 800, placed: 720, status: 'Active' },
  { id: '7', name: 'Singtam Pharma Institute', type: ProjectType.SANKALP, district: 'Gangtok', state: 'Sikkim', enrolled: 550, placed: 420, status: 'Active' },
  { id: '8', name: 'Govt ITI Geyzing', type: ProjectType.ITI, district: 'Geyzing', state: 'Sikkim', enrolled: 950, placed: 680, status: 'Active' },
  { id: '9', name: 'Majitar Technical Hub', type: ProjectType.DDUGKY, district: 'Pakyong', state: 'Sikkim', enrolled: 380, placed: 290, status: 'Active' },
  { id: '10', name: 'Jorethang Craft Center', type: ProjectType.PMKVY, district: 'Namchi', state: 'Sikkim', enrolled: 210, placed: 195, status: 'Completed' },
];

export const MOCK_BENEFICIARIES: Beneficiary[] = [
  { id: 'B1', name: 'Tashi Lepcha', district: 'Gangtok', scheme: 'DDU-GKY', trade: 'Hospitality', status: 'Placed', salary: '₹18,500' },
  { id: 'B2', name: 'Pempa Bhutia', district: 'Namchi', scheme: 'ITI', trade: 'Electrician', status: 'Certified' },
  { id: 'B3', name: 'Karma Wangdi', district: 'Mangan', scheme: 'DDU-GKY', trade: 'Handloom', status: 'Training' },
  { id: 'B4', name: 'Sonam Gyatso', district: 'Geyzing', scheme: 'PMKVY', trade: 'Digital Marketing', status: 'Placed', salary: '₹22,000' },
  { id: 'B5', name: 'Anita Rai', district: 'Pakyong', scheme: 'SANKALP', trade: 'Data Entry', status: 'Dropped' },
  { id: 'B6', name: 'Rohan Sharma', district: 'Gangtok', scheme: 'ITI', trade: 'Fitter', status: 'Placed', salary: '₹15,000' },
  { id: 'B7', name: 'Dawa Tamang', district: 'Soreng', scheme: 'DDU-GKY', trade: 'Retail', status: 'Placed', salary: '₹14,500' },
  { id: 'B8', name: 'Maya Gurung', district: 'Gangtok', scheme: 'SANKALP', trade: 'Pharma Assistant', status: 'Training' },
];

export const DISTRICT_ANALYTICS: DistrictPerformance[] = [
  { district: 'Gangtok', enrolled: 5200, placed: 3800 },
  { district: 'Namchi', enrolled: 3400, placed: 2100 },
  { district: 'Pakyong', enrolled: 2100, placed: 1500 },
  { district: 'Geyzing', enrolled: 1800, placed: 900 },
  { district: 'Mangan', enrolled: 1200, placed: 750 },
  { district: 'Soreng', enrolled: 1500, placed: 1100 },
];

export const DASHBOARD_CHART_DATA: ChartData[] = [
  { name: 'Jan', trained: 1200, placed: 840 },
  { name: 'Feb', trained: 1500, placed: 1100 },
  { name: 'Mar', trained: 1800, placed: 1300 },
  { name: 'Apr', trained: 1600, placed: 1200 },
  { name: 'May', trained: 2100, placed: 1600 },
  { name: 'Jun', trained: 2500, placed: 1900 },
  { name: 'Jul', trained: 2800, placed: 2200 },
  { name: 'Aug', trained: 3100, placed: 2500 },
  { name: 'Sep', trained: 3500, placed: 2900 },
  { name: 'Oct', trained: 4000, placed: 3300 },
  { name: 'Nov', trained: 4200, placed: 3600 },
  { name: 'Dec', trained: 4800, placed: 4100 },
];
