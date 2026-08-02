import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import StarRating from "@/components/StarRating";

export default function FeaturedProducts() {
  return (
    <section className="container" style={{ marginTop: "-12rem !important"  }}>
      <h4 className="mt-4 text-center">Featured Products</h4>
      <div className="row">
        {PRODUCTS.map((p) => (
          <div className="col-6 col-md-3 mb-3" key={p.id}>
            <div className="card card-product h-100">
              <div className="card-body">
                {p.badge && <span className="badge bg-success mb-2">{p.badge}</span>}
                <Link href="/products">
                  <img className="card-img-top" src={p.image} alt={p.name} />
                </Link>
                <div className="card-title mt-2">{p.name}</div>
                <StarRating rating={p.rating} />
                <div className="price mt-1">
                  {p.originalPrice && (
                    <span className="text-muted text-decoration-line-through me-2">
                      ₹{p.originalPrice.toLocaleString("en-IN")}
                    </span>
                  )}
                  <span className="h5">₹{p.price.toLocaleString("en-IN")}</span>
                </div>
              </div>
              <div className="card-footer">
                <Link href="/products" className="btn btn-sm btn-primary w-100">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
