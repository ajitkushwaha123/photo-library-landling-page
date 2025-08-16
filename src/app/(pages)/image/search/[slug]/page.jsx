import { deslugify, slugify } from "@/lib/slug";
import { notFound } from "next/navigation";
import axios from "axios";
import InfiniteImageGrid from "@/components/global/image/infinite-image-grid";

export const revalidate = 86400;

export async function generateStaticParams() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/image/title`
    );
    const titles = response.data.data || [];

    return titles.map((title) => ({
      slug: slugify(title),
    }));
  } catch (err) {
    console.error("Error fetching titles:", err);
    return []; 
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const title = deslugify(slug);
  const canonical = `https://foodsnap.in/image/search/${slug}`;

  return {
    title: `${title} - Foodsnap`,
    description: `Download high-quality ${title} food images for menus, delivery apps, and restaurants.`,
    alternates: { canonical },
    openGraph: {
      title: `${title} - Foodsnap`,
      description: `Get royalty-free ${title} dish photos for Zomato, Swiggy, or restaurant menus.`,
      url: canonical,
      type: "website",
      images: [
        {
          url: `/og/${slug}.png`, 
          width: 1200,
          height: 630,
          alt: `${title} image preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - Foodsnap`,
      description: `Explore & download ${title} food images for menus and apps.`,
    },
  };
}

const getFoodsByTitle = async (title) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/image/search/${encodeURIComponent(
        title
      )}?page=1&limit=20`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching foods by category:", error);
    return null;
  }
};

export default async function ImagePage({ params }) {
  const { slug } = await params;
  const title = deslugify(slug);
  const foods = await getFoodsByTitle(title);

  if (!foods || !foods.data || foods.data.length === 0) {
    notFound();
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 capitalize">{title}</h1>

      <InfiniteImageGrid
        slug={slug}
        initialData={foods.data}
        initialPage={foods.page}
        totalPages={foods.totalPages}
      />
    </main>
  );
}
