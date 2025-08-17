"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Download, ImageDown, Image as ImageIcon, Loader2 } from "lucide-react";

export default function DownloadDropdown({
  withWatermarkUrl,
  withoutWatermarkUrl,
}) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async (url, fileName) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          disabled={loading}
          className="flex items-center gap-2 rounded-full bg-gray-500 text-white shadow-md hover:shadow-lg transition-all duration-300"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Download className="w-4 h-4" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-60 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-2"
      >
        <DropdownMenuItem
          className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer transition-colors hover:bg-blue-100 dark:hover:bg-blue-900"
          onClick={() => handleDownload(withWatermarkUrl, "with-watermark.jpg")}
        >
          <ImageDown className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium">Download</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer transition-colors hover:bg-purple-100 dark:hover:bg-purple-900"
          onClick={() =>
            handleDownload(withoutWatermarkUrl, "without-watermark.jpg")
          }
        >
          <ImageIcon className="w-4 h-4 text-purple-500" />
          <span className="text-sm font-medium">Remove Watermark</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
