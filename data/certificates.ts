import type { Certificate } from "@/types/certificate";

export const certificatesData: Certificate[] = [
  {
    id: "itDiploma",
    titleKey: "items.itDiploma.title",
    issuerKey: "items.itDiploma.issuer",
    descriptionKey: "items.itDiploma.description",
    type: "education",
    issuedDate: "2018",
    skills: [
      "Information Technology",
      "Software Development",
      "Computer Systems",
    ],
  },

  {
    id: "cybercrime",
    titleKey: "items.cybercrime.title",
    issuerKey: "items.cybercrime.issuer",
    descriptionKey: "items.cybercrime.description",
    type: "certificate",
    issuedDate: "2017",
    skills: [
      "Cybercrime",
      "Cybersecurity",
      "Information Technology",
    ],
  },
];