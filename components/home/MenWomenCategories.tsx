import Link from "next/link";

const categories = [
  {
    title: "Men",
    image: "/assets/img/categories/men.jpg",
    quote:
      "Clothes and manners do not make the man; but when he is made, they greatly improve his appearance.",
    href: "/products",
    btnClass: "btn-outline-primary",
  },
  {
    title: "Women",
    image: "/assets/img/categories/women.jpg",
    quote:
      "Clothes mean nothing until someone lives in them. You can have anything you want in life if you dress for it.",
    href: "/products",
    btnClass: "btn-outline-danger",
  },
];

export default function MenWomenCategories() {
  return (
    <div className="row g-2 g-sm-3">
      {categories.map((cat) => (
        <div className="col-6" key={cat.title}>
          <div className="card card-style1 overflow-hidden h-100">
            <div className="row g-0 h-100">
              {/* Text + Shop Now — left column */}
              <div className="col-md-6 order-md-1 text-center p-3 d-flex flex-column justify-content-center">
                <h3>{cat.title}</h3>
                <p className="text-center d-none d-md-block">&quot;{cat.quote}&quot;</p>
                <Link
                  href={cat.href}
                  className={`btn ${cat.btnClass} rounded-pill stretched-link`}
                >
                  Shop Now
                </Link>
              </div>

              {/* Image — right column */}
              <div className="col-md-6 order-md-2">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-100 h-100"
                  style={{ objectFit: "cover", minHeight: 220 }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}