import TopCategories from "@/components/home/TopCategories";
import FlashDeals from "@/components/home/FlashDeals";
import CategoriesGrid from "@/components/home/CategoriesGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function HomePage() {
  return (
    <>
      <TopCategories />
      <FlashDeals />
      <CategoriesGrid />
      <FeaturedProducts />
    </>
  );
}
