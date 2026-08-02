import MenWomenCategories from "../home/MenWomenCategories";
import Link from "next/link";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const tiles = [
  {
    title: "Sunglasses",
    image: "/assets/img/categories/sunglasses.jpg",
    quote: "Focus on what matters, like a good pair of shades.",
    btnClass: "btn-outline-warning",
  },
  {
    title: "Backpacks",
    image: "/assets/img/categories/backpack.jpg",
    quote: "The biggest adventure you can take is to live the life of your dreams.",
    btnClass: "btn-outline-success",
  },
];

export default function TopCategories() {
  return (
    <section className="container my-2">
      <MenWomenCategories />

      <div className="row g-2 g-sm-3 mt-1 mt-sm-3">
        {tiles.map((tile) => (
          <div className="col-6" key={tile.title}>
            <div
              className="position-relative overflow-hidden rounded w-100"
              style={{ height: 300 }}
            >

              <img
                src={tile.image}
                alt={tile.title}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />

              <div className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 60%)",
                }}
              />

              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center text-white p-3">
                <Link
                  href="/products"
                  className="h3 text-white text-decoration-none mb-2"
                >
                  {tile.title}
                </Link>
                <p className="d-none d-md-block mb-3">&quot;{tile.quote}&quot;</p>
                <Link
                  href="/products"
                  className={`btn ${tile.btnClass} rounded-pill`}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-3">
        <Link href="/products" className="btn btn-light rounded-pill has-icon">
          All Categories <ArrowRightIcon />
        </Link>
      </div>
    </section>
  );
}