"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    // Simple email validation — covers empty and malformed input.
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      setSubscribed(false);
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
  };

  const customerService = [
    "Help Center",
    "How to buy",
    "Delivery",
    "How to return",
    "Payment Method",
    "Shipping Method",
  ];

  const companyLinks: { label: string; href: string }[] = [
    { label: "About Us", href: "/pages/about-us" },
    { label: "Terms and Conditions", href: "/pages/terms" },
    { label: "Privacy Policy", href: "/pages/privacy" },
    { label: "FAQs", href: "/pages/faq" },
    { label: "Our Story", href: "/pages/our-story" },
    { label: "Services", href: "/pages/services" },
  ];

  return (
    <footer className="mt-5 border-top pt-5">
      <div className="container">
        <div className="row gy-4">
          {/* Subscribe */}
          <div className="col-12 col-lg-6">
            <div className="text-center">
              <h5>Subscribe</h5>
              <p className="mb-3">
                and get <span className="text-danger fw-bold">10% discount</span>
              </p>

              <form onSubmit={handleSubscribe} noValidate className="mx-auto" style={{ maxWidth: 420 }}>
                <input
                  type="email"
                  className="form-control rounded-pill text-center mb-2"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                />
                <button type="submit" className="btn btn-outline-primary rounded-pill w-100">
                  SUBSCRIBE
                </button>
              </form>

              {error && <p className="text-danger small mt-2 mb-0">{error}</p>}
              {subscribed && (
                <p className="text-success small mt-2 mb-0">Thanks for subscribing!</p>
              )}
            </div>
          </div>

          {/* Customer Service */}
          <div className="col-6 col-lg-3">
            <h6>Customer Service</h6>
            <ul className="list-unstyled">
              {customerService.map((item) => (
                <li key={item} className="mb-1">
                  <Link href="/" className="text-decoration-none text-body">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-6 col-lg-3">
            <h6>Fashion Trends</h6>
            <ul className="list-unstyled">
              {companyLinks.map((link) => (
                <li key={link.href} className="mb-1">
                  <Link href={link.href} className="text-decoration-none text-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h6 className="mt-3">Download The App</h6>
            <div className="d-flex flex-wrap gap-2">
              <a href="#" className="btn btn-outline-secondary btn-sm">Google Play</a>
              <a href="#" className="btn btn-outline-secondary btn-sm">App Store</a>
              <a href="#" className="btn btn-outline-secondary btn-sm">Microsoft Store</a>
            </div>
          </div>
        </div>

        <hr className="mt-4" />
        <p className="text-center text-muted small pb-3 mb-0">
          Copyright © {new Date().getFullYear()} Fashion Trends. All rights reserved.
        </p>
      </div>
    </footer>
  );
}