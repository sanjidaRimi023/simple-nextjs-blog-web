// "use client";
import React from "react";

export default async function BlogDetail({ params }) {
  const id = await params?.slugs;
  const blogData = await fetch("http://localhost:3000/blogs.json");

  //     id: 1,
  //     title: "A Guide to Asynchronous Programming in Python",
  //     slug: "guide-to-async-python",
  //     author: "pyMaster",
  //     category: "Python",
  //     tags: ["python", "asyncio", "concurrency", "performance"],
  //     published_date: "2025-07-30",
  //     thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  //     content:
  //       "Unlock the power of concurrent programming in Python with asyncio. This guide covers the basics of async/await, event loops, and more...",
  //     reading_time: "8 min",

  const data = await blogData.json();
  const blog = data.find((d) => d.id === Number(id));

  console.log(blog);

  return (
    <>
      <div className="container mx-auto flex gap-10 my-8 flex-col">
        <div>
          <img
            src={blog?.thumbnail}
            alt="blog image"
            className="w-full h-100"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-indigo-700 dark:text-white mb-2">
            <span className="text-black">Title : </span> {blog.title}
          </h1>

          <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-300 mb-4 gap-4">
            <span>👤Author : {blog.author}</span>
            <span>📅 Published_Date: {blog.published_date}</span>
            <span>⏱️ Read time: {blog.reading_time}</span>
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-2 py-0.5 rounded">
             <span className="text-black"> Category :</span> {blog.category}
             
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-indigo-200 dark:bg-gray-700 text-indigo-700 dark:text-gray-300 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg">
            {blog.content}
          </p>
        </div>
      </div>
    </>
  );
}
