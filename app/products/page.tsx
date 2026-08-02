"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { PRODUCTS } from "@/lib/products";
import StarRating from "@/components/StarRating";
import Breadcrumb from "@/components/Breadcrumb";

export default function ProductsPage() {
  const { isLoggedIn, ready } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (ready && !isLoggedIn) router.replace("/login?redirect=/products");
  }, [ready, isLoggedIn, router]);

  if (!ready || !isLoggedIn) {
    return <div className="container py-5 text-center">Checking access…</div>;
  }

  return (
    <div className="container py-4">
      <Breadcrumb crumbs={[{ label: "Home", url: "/" }, { label: "Products" }]} />
      <h2 className="mb-4">Products</h2>
      <div className="row">
        {PRODUCTS.map((p) => (
          <div className="col-6 col-md-3 mb-4" key={p.id}>
            <div className="card h-100">
              <img className="card-img-top" src={p.image} alt={p.name} />
              <div className="card-body">
                <h6 className="card-title">{p.name}</h6>
                <StarRating rating={p.rating} />
                <p className="h5 mt-2">₹{p.price.toLocaleString("en-IN")}</p>
              </div>
              <div className="card-footer">
                <Link href="/products" className="btn btn-sm btn-primary w-100">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
