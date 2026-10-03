export type CertificateType =
  | "education"
  | "certificate"
  | "training"
  | "course";

export interface Certificate {
  id: string;
  titleKey: string;
  issuerKey: string;
  descriptionKey: string;
  type: CertificateType;
  image?: string;
  certificateUrl?: string;
  issuedDate?: string;
  skills?: string[];
}