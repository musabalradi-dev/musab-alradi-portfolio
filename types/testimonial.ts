export interface Testimonial {
  id: string;
  nameKey: string;
  roleKey: string;
  companyKey?: string;
  contentKey: string;
  image?: string;
  rating?: number;
  featured?: boolean;
}