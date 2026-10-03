import type { Testimonial } from "@/types/testimonial";

export const testimonialsData: Testimonial[] = [
  {
    id: "client-1",
    nameKey: "items.client1.name",
    roleKey: "items.client1.role",
    companyKey: "items.client1.company",
    contentKey: "items.client1.content",
    image: "/images/testimonials/1.jpeg",
    rating: 5,
    featured: true,
  },
  {
    id: "client-2",
    nameKey: "items.client2.name",
    roleKey: "items.client2.role",
    companyKey: "items.client2.company",
    contentKey: "items.client2.content",
    image: "/images/testimonials/2.jpeg",
    rating: 5,
    featured: true,
  },
  {
    id: "client-3",
    nameKey: "items.client3.name",
    roleKey: "items.client3.role",
    companyKey: "items.client3.company",
    contentKey: "items.client3.content",
    image: "/images/testimonials/3.jpg",
    rating: 5,
    featured: true,
  },
];