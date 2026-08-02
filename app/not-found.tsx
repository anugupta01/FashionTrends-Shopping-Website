"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="container py-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            404 Not Found
          </li>
        </ol>
      </nav>

      <div className="text-center py-5">
        <div
          className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle"
          style={{
            width: 220,
            height: 220,
            backgroundColor: "#38b2ac",
            overflow: "hidden",
          }}
        >
          <img
            src="/assets/img/404.jpg"
            alt="Page not found"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <h2 className="mb-2">
          <span className="text-danger">Oops!</span>{" "}
          <span className="text-secondary">Error 404 page not found</span>
        </h2>
        <p className="text-muted mb-4">
          The page you were looking for doesn&apos;t exist.
        </p>

        <button
          type="button"
          className="btn btn-outline-secondary rounded-pill has-icon"
          onClick={handleGoBack}
        >
          <ChevronLeftIcon fontSize="small" className="mr-1" />
          Go back
        </button>
      </div>
    </div>
  );
}