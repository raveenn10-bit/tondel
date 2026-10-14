import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { ProductDetailView } from "@/components/products/ProductDetailView";
import { siteConfig } from "@/data/site-config";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const title = `${product.seo.title} | TONDEL Sri Lanka`;
  const description = product.seo.description;

  return {
    title,
    description,
    keywords: product.seo.keywords,
    openGraph: {
      title,
      description,
      images: product.images,
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  // Generate Product JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: product.currency,
      price: product.price ?? undefined,
      availability:
        product.availability === "In Stock"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
      seller: {
        "@type": "Organization",
        name: siteConfig.brandName,
      },
    },
  };

  return (
    <div className="min-h-screen bg-tondel-navy py-12 px-4 sm:px-6 lg:px-8">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto">
        <ProductDetailView product={product} relatedProducts={relatedProducts} />
      </div>
    </div>
  );
}
