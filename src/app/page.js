import Banner from "@/components/Banner";
import FeaturedCategories from "@/components/FeaturedCategories";
import Features from "@/components/Features";
import TrendingIdeas from "@/components/TrendingIdeas";

export default async function Home() {
  
  // Find trending ideas
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/trending-idea`);
  const ideas = await response.json();
  console.log(ideas);

  return (
    <div className="mt-17">
      <Banner></Banner>
      <TrendingIdeas ideas={ideas}></TrendingIdeas>
      <FeaturedCategories></FeaturedCategories>
      <Features></Features>
    </div>
  );
}
