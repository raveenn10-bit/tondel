import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, ShoppingBag } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-tondel-navy px-4 py-20 text-center">
      <div className="max-w-md space-y-6">
        <span className="text-6xl font-black font-heading text-blue-500 block">
          404
        </span>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            The device or catalogue page you were looking for does not exist or may have been updated.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/shop"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Browse Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
