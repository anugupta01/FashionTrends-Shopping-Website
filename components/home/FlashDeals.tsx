"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface Deal {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
}

const deals: Deal[] = [
   {
    id: 1,
    title: "Legendary Whitetails Heavyweight Hoodie",
    price: 3660,
    oldPrice: 4390,
    image: "/assets/img/products/flash_deals_1.jpg",
  },
  {
    id: 2,
    title: "Casual Floral Print 3/4 Sleeve Shirt",
    price: 1370,
    oldPrice: 1620,
    image: "/assets/img/products/flash_deals_2.jpg",
  },
  {
    id: 3,
    title: "Legendary Whitetails Heavyweight Hoodie",
    price: 3660,
    oldPrice: 4390,
    image: "/assets/img/products/flash_deals_1.jpg",
  },
  {
    id: 4,
    title: "Casual Floral Print 3/4 Sleeve Shirt",
    price: 1370,
    oldPrice: 1620,
    image: "/assets/img/products/flash_deals_2.jpg",
  },
];

export default function FlashDeals() {
  const swiperRef = useRef<SwiperClass | null>(null);
 
  if (!deals.length) {
    return (
      <section className="container my-4">
        <div className="card card-style1 mt-3">
          <div className="card-body">
            <h5 className="card-title">
              <FlashOnIcon className="align-bottom text-warning" />
              FLASH DEALS
            </h5>
            <p className="text-center text-muted mb-0">No deals available right now.</p>
          </div>
        </div>
      </section>
    );
  }

  const hasMultiple = deals.length > 1;

  return (
    <section className="container my-4">
      <div className="card card-style1 mt-3">
        <div className="card-body">
          <h5 className="card-title">
            <FlashOnIcon className="align-bottom text-warning" />
            FLASH DEALS
            <span className="text-danger" id="flash-deals-countdown"></span>
          </h5>
 
          <div className="d-flex align-items-center">
            {hasMultiple && (
              <button
                type="button"
                className="btn btn-light rounded-circle flex-shrink-0"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous deal"
              >
                <ChevronLeftIcon />
              </button>
            )}

            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={16}
              loop={hasMultiple}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="flex-grow-1"
            >
              {deals.map((deal) => (
                <SwiperSlide key={deal.id}>
                  <div className="text-center p-3">
                    <h4>
                      <a href="/products" className="card-link text-secondary">
                        {deal.title}
                      </a>
                      <img
                        src={deal.image}
                        alt={deal.title}
                        style={{ width: "100%", height: 250, objectFit: "cover" }}
                      />
                    </h4>
                    <p className="price text-center">
                      <span className="h4 text-danger">
                        ₹{deal.price.toLocaleString("en-IN")}
                      </span>{" "}
                      {deal.oldPrice && (
                        <span className="h5 del text-muted text-decoration-line-through">
                          ₹{deal.oldPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </p>
                    <button
                      className="btn btn-outline-primary has-icon rounded-pill"
                      type="button"
                    >
                      <ShoppingCartIcon fontSize="small" className="mr-1" />
                      Add to cart
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {hasMultiple && (
              <button
                type="button"
                className="btn btn-light rounded-circle flex-shrink-0"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next deal"
              >
                <ChevronRightIcon />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}