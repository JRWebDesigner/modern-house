import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Category queries
export const CATEGORIES_QUERY = `*[_type == "categoryType"] | order(order asc) {
  _id,
  name,
  slug,
  description,
  image,
  order
}`;

// Product queries
export const PRODUCTS_QUERY = `*[_type == "mueblesType"] {
  _id,
  name,
  price,
  originalPrice,
  images,
  category->{
    _id,
    name,
    slug
  },
  isTrend,
  description,
  features,
  slug
}`;

export const PRODUCT_BY_ID_QUERY = `*[_type == "mueblesType" && _id == $id][0] {
  _id,
  name,
  price,
  originalPrice,
  images,
  category->{
    _id,
    name,
    slug
  },
  isTrend,
  description,
  features,
  slug
}`;

export const TRENDING_PRODUCTS_QUERY = `*[_type == "mueblesType" && isTrend == true] {
  _id,
  name,
  price,
  originalPrice,
  images,
  category->{
    _id,
    name,
    slug
  },
  isTrend,
  description,
  features,
  slug
}`;

export const PRODUCTS_BY_CATEGORY_QUERY = `*[_type == "mueblesType" && category._ref == $categoryId] {
  _id,
  name,
  price,
  originalPrice,
  images,
  category->{
    _id,
    name,
    slug
  },
  isTrend,
  description,
  features,
  slug
}`;
