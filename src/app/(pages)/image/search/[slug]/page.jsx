import { deslugify, slugify } from "@/lib/slug";
import { notFound } from "next/navigation";
import axios from "axios";
import InfiniteImageGrid from "@/components/global/image/infinite-image-grid";
import SearchBar from "@/components/global/image/search-bar";

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
    title: `${title} image - Foodsnap`,
    description: `Download high-quality ${title} food images for uploading on menus, delivery apps, and restaurants.`,
    alternates: { canonical },
    openGraph: {
      title: `${title} image - Foodsnap`,
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
    <main className="container mx-auto p-4 mt-16">
      <div>
        <SearchBar />
      </div>
      <div className="text-center my-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 capitalize text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Explore and download high-quality {title} images for restaurant menus,
          Zomato, and Swiggy.
        </p>
      </div>

      <div className="mb-6 text-sm text-gray-500 dark:text-gray-400 text-center">
        Showing {foods.data.length} images | Page {foods.page} of{" "}
        {foods.totalPages}
      </div>

      <InfiniteImageGrid
        slug={slug}
        initialData={foods.data}
        initialPage={foods.page}
        totalPages={foods.totalPages}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        cardClassName="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
        imgClassName="w-full h-56 object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
      />
    </main>
  );
}
