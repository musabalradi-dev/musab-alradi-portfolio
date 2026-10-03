import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

import type { Locale } from "@/types/profile";


interface SeoOptions {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}


interface ProjectJsonLdOptions {

  locale: Locale;

  name: string;

  description: string;

  path: string;

  image?: string;

  keywords?: string[];

  dateCreated?: string;

  dateModified?: string;

}



/**
 * Create SEO Metadata
 */
export function createMetadata({
  locale,
  title,
  description,
  path = "",
  image = siteConfig.images.og,
  keywords = [],
}: SeoOptions): Metadata {


  const url = absoluteUrl(
    `/${locale}${path}`,
  );


  return {

    title,

    description,

    keywords,


    alternates: {

      canonical: url,

      languages: {

        en: absoluteUrl(
          `/en${path}`,
        ),

        ar: absoluteUrl(
          `/ar${path}`,
        ),

      },

    },


    openGraph: {

      type: "website",

      url,

      title,

      description,

      siteName: siteConfig.name,

      locale:
        locale === "ar"
          ? "ar_AR"
          : "en_US",


      images: [

        {

          url: absoluteUrl(image),

          width: 1200,

          height: 630,

          alt: title,

        },

      ],

    },


    twitter: {

      card:
        "summary_large_image",

      title,

      description,

      images: [
        absoluteUrl(image),
      ],

    },

  };

}




/**
 * Create JSON-LD structured data for Project
 */
export function createProjectJsonLd({

  locale,

  name,

  description,

  path,

  image,

  keywords = [],

  dateCreated,

  dateModified,

}: ProjectJsonLdOptions) {


  const url = absoluteUrl(
    `/${locale}${path}`,
  );



  return {

    "@context":
      "https://schema.org",


    "@type":
      "CreativeWork",


    name,


    description,


    url,


    inLanguage:
      locale,



    ...(image && {

      image:
        absoluteUrl(image),

    }),



    ...(keywords.length > 0 && {

      keywords:
        keywords.join(", "),

    }),



    ...(dateCreated && {

      dateCreated,

    }),



    ...(dateModified && {

      dateModified,

    }),



    author: {

      "@type":
        "Person",

      name:
        siteConfig.fullName,

      url:
        absoluteUrl(
          `/${locale}`,
        ),

    },



    creator: {

      "@type":
        "Person",

      name:
        siteConfig.fullName,

    },



    publisher: {

      "@type":
        "Person",

      name:
        siteConfig.fullName,

    },

  };

}