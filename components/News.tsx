"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState<any[]>([]);
  const [articleNum, setArticleNum] = useState(4);
  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div className="text-gray-300 space-y-3 px-4 bg-gray-800 rounded-xl py-2 sticky top-0">
      <h4 className="font-bold  text-xl px-4">What&apos;s Happening</h4>
      {news.slice(0, articleNum).map((article) => (
        <div key={article.id}>
          <Link href={article.url} target="_blank">
            <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-700 rounded-md duration-200">
              <div className="space-y-1">
                <h1 className="text-sm font-bold line-clamp-2">
                  {article.title}
                </h1>
                <p className="text-xs font-medium text-gray-400">
                  {article.source.name}
                </p>
              </div>
              <Image
                src={article.urlToImage}
                alt={article.title}
                width={100}
                height={100}
                className="rounded-xl"
              />
            </div>
          </Link>
        </div>
      ))}
      <button
        onClick={() => setArticleNum(articleNum + 3)}
        className="w-fit py-2 text-blue-400 hover:text-blue-500 transition-all duration-200 rounded-full px-4 "
      >
        View More
      </button>
    </div>
  );
};

export default News;
