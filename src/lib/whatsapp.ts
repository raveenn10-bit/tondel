import { Product, ProductVariant } from "@/types";
import { siteConfig } from "@/data/site-config";
import { formatPrice } from "./utils";

/**
 * Generates direct product order WhatsApp URL according to Section 3.3
 */
export function generateProductWhatsAppUrl(
  product: Product,
  variant?: ProductVariant,
  quantity: number = 1,
  currentUrl?: string
): string {
  const priceDisplay = variant?.price !== undefined && variant?.price !== null
    ? formatPrice(variant.price, product.currency)
    : formatPrice(product.price, product.currency);

  const lines = [
    "Hello TONDEL!",
    "",
    "I would like to order:",
    "",
    `Product: ${product.name}`,
    `Brand: ${product.brand}`,
    `Variant: ${variant ? variant.name : "Standard"}`,
    ...(variant?.sku ? [`SKU: ${variant.sku}`] : []),
    `Quantity: ${quantity}`,
    `Price: ${priceDisplay}`,
    ...(currentUrl ? [`Product URL: ${currentUrl}`] : []),
    "",
    "Please confirm the current price, availability and delivery details.",
  ];

  const message = lines.join("\n");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export interface CartCheckoutItem {
  product: Product;
  variant?: ProductVariant;
  quantity: number;
}

/**
 * Generates cart checkout WhatsApp URL according to Section 3.4
 */
export function generateCartWhatsAppUrl(
  items: CartCheckoutItem[],
  siteOrigin: string = ""
): string {
  if (items.length === 0) {
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      "Hello TONDEL! I would like to make an enquiry regarding your products."
    )}`;
  }

  let hasUnknownPrice = false;
  let total = 0;

  const itemLines = items.map((item, index) => {
    const unitPrice = item.variant?.price !== undefined && item.variant?.price !== null
      ? item.variant.price
      : item.product.price;

    let priceString = "";
    if (unitPrice === null || unitPrice === undefined) {
      hasUnknownPrice = true;
      priceString = "Contact for Price";
    } else {
      const lineSubtotal = unitPrice * item.quantity;
      total += lineSubtotal;
      priceString = `${formatPrice(unitPrice, item.product.currency)} each (Subtotal: ${formatPrice(lineSubtotal, item.product.currency)})`;
    }

    const variantText = item.variant ? ` [${item.variant.name}]` : "";
    const itemUrl = siteOrigin ? ` (${siteOrigin}/product/${item.product.slug})` : "";
    return `${index + 1}. ${item.product.name}${variantText} x ${item.quantity} - ${priceString}${itemUrl}`;
  });

  const totalDisplay = hasUnknownPrice
    ? "Price to be confirmed upon availability"
    : formatPrice(total, items[0]?.product.currency || "LKR");

  const lines = [
    "Hello TONDEL!",
    "",
    "I would like to place an order from my shopping cart:",
    "",
    "Order Items:",
    ...itemLines,
    "",
    `Estimated Total: ${totalDisplay}`,
    "",
    "Please confirm availability, current prices, and delivery details for my order.",
  ];

  const message = lines.join("\n");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

/**
 * Generates general WhatsApp customer service enquiry URL
 */
export function generateGeneralEnquiryUrl(subject: string = "Product Enquiry"): string {
  const message = `Hello TONDEL! I have an inquiry regarding: ${subject}. Could you please assist me?`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
