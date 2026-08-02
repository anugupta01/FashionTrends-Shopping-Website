"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export default function Header() {
  const { isLoggedIn, logout, ready } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header>
      <div className="container-fluid" style={{ color: "#6c757d" }}>
        <div className="topbar">
          <nav className="nav mr-1 d-none d-md-flex">
            <a className="nav-link nav-link-sm has-icon bg-white pl-0" href="#"><PhoneIcon />+(91)8578689345</a>
            <a className="nav-link nav-link-sm has-icon bg-white" href="#"><MailOutlineIcon /> support@fasiontrends.com</a>
          </nav>

          <nav className="nav nav-main nav-gap-x-1 nav-pills ml-3 d-none d-lg-flex">

            <nav className="nav nav-circle nav-gap-x-1 ml-auto" style={{ marginLeft: "64rem", position: "absolute" }}>
              <a className="nav-link nav-icon" data-toggle="modal" href="#searchModal">
                <SearchIcon />
              </a>
              <a className="nav-link nav-icon has-badge d-none d-sm-flex" href="account-wishlist.html">
                <FavoriteIcon />
              </a>
              <a className="nav-link nav-icon has-badge" data-toggle="modal" href="#cartModal">
                <ShoppingCartIcon />
                <span className="badge badge-pill badge-danger">4</span>
              </a>
            </nav>

            <Link href="/" className="nav-link has-icon p-0 bg-white">
              <img src="/assets/img/logo.png" alt="Logo" height={40} />
            </Link>

            {ready && !isLoggedIn && (
              <>
                <Link className="nav-link" href="/login">Login</Link>
                <Link className="nav-link" href="/registration">Registration</Link>
              </>
            )}
            {ready && isLoggedIn && (
              <>
                <Link className="nav-link" href="/products">Products</Link>
                <button
                  type="button"
                  className="nav-link btn btn-link"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}

            <div className="nav-item dropdown">
              <Link className="nav-link" href="/">Home</Link>
              <div className="dropdown-menu" aria-labelledby="homeDropdown">
                <Link className="dropdown-item active" href="/">Layout 1</Link>
                <Link className="dropdown-item" href="/">Layout 2</Link>
                <Link className="dropdown-item" href="/">Electronics Store</Link>
              </div>
            </div>

            <Link className="nav-link" href="/pages/about-us">About Us</Link>
            <Link className="nav-link" href="/pages/contacts">Contacts</Link>
            <Link className="nav-link" href="/pages/faq">FAQ</Link>
            <Link className="nav-link" href="/pages/terms">Terms & Conditions</Link>

          </nav>
        </div>
      </div>
    </header>
  );
}