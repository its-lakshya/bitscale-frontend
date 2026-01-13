export const StatusValues = {
  idle: "idle",
  running: "running",
  success: "success",
  failed: "failed",
  blocked: "blocked",
  queued: "queued",
} as const;

export type Status = typeof StatusValues[keyof typeof StatusValues];

export interface GridRow {
  id: number;
  personName: string;
  lastUpdated: string;
  company: string;
  website: string;
  linkedinJobUrl: string;
  emailStatus: Status;
  email?: string;
  findIcp: Status;
  enrichCompany: Status;
  phoneStatus: Status;
  linkScraper: Status;
}

