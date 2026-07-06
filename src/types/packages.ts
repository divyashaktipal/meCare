export interface HealthPackage {
  name: string;
  desc: string;
  price: string;
  status: string;
  bg: string;
}

export interface PackagesSectionData {
  title: string;
  subtitle: string;
  filterPills: string[];
  packages: HealthPackage[];
}
