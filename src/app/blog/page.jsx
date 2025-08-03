import Link from "next/link";
import React from "react";

export default async function BlogPage() {
  const blogData = [
    {
      id: 1,
      title: "A Guide to Asynchronous Programming in Python",
      slug: "guide-to-async-python",
      author: "pyMaster",
      category: "Python",
      tags: ["python", "asyncio", "concurrency", "performance"],
      published_date: "2025-07-30",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      content:
        "Unlock the power of concurrent programming in Python with asyncio. This guide covers the basics of async/await, event loops, and more...",
      reading_time: "8 min",
    },
    {
      id: 2,
      title: "Containerizing Your First App with Docker",
      slug: "containerizing-app-with-docker",
      author: "devOpsDude",
      category: "DevOps",
      tags: ["docker", "containers", "devops", "deployment"],
      published_date: "2025-07-28",
      thumbnail: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb",
      content:
        "Learn how to package your applications into portable containers using Docker. We'll walk through creating a Dockerfile and running your first container...",
      reading_time: "6 min",
    },
    {
      id: 3,
      title: "Building a Recommendation Engine with Scikit-Learn",
      slug: "recommendation-engine-scikit-learn",
      author: "dataDiva",
      category: "AI/ML",
      tags: ["machine learning", "python", "scikit-learn", "data science"],
      published_date: "2025-07-25",
      thumbnail: "https://images.unsplash.com/photo-1524749292158-7540c2494485",
      content:
        "This tutorial will guide you through the process of building a content-based recommendation system using Python and the Scikit-Learn library...",
      reading_time: "12 min",
    },
    {
      id: 4,
      title: "SQL vs. NoSQL: Choosing the Right Database",
      slug: "sql-vs-nosql-database-choice",
      author: "dbAdmin",
      category: "Databases",
      tags: ["sql", "nosql", "database", "architecture"],
      published_date: "2025-07-22",
      thumbnail: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481",
      content:
        "Understand the key differences between SQL and NoSQL databases to make an informed decision for your next project's data storage needs...",
      reading_time: "7 min",
    },
    {
      id: 5,
      title: "Advanced CSS Grid Layouts",
      slug: "advanced-css-grid-layouts",
      author: "cssWizard",
      category: "Frontend",
      tags: ["css", "css-grid", "frontend", "web design"],
      published_date: "2025-07-20",
      thumbnail: "https://images.unsplash.com/photo-1566837945700-30057527ade0",
      content:
        "Move beyond the basics of CSS Grid and explore complex, responsive layouts with features like minmax(), auto-fit, and named grid areas...",
      reading_time: "9 min",
    },
    {
      id: 6,
      title: "Getting Started with Go for Backend Development",
      slug: "getting-started-with-golang",
      author: "goGopher",
      category: "Backend",
      tags: ["go", "golang", "backend", "api"],
      published_date: "2025-07-18",
      thumbnail: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481",
      content:
        "Discover why Go is a popular choice for backend services. This article covers Go's syntax, concurrency model, and building a simple web server...",
      reading_time: "10 min",
    },
    {
      id: 7,
      title: "CI/CD Pipelines Explained with GitHub Actions",
      slug: "ci-cd-github-actions",
      author: "devOpsDude",
      category: "DevOps",
      tags: ["ci-cd", "github", "devops", "automation"],
      published_date: "2025-07-15",
      thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      content:
        "Automate your build, test, and deployment workflows using GitHub Actions. We'll set up a simple CI/CD pipeline for a Node.js application...",
      reading_time: "7 min",
    },
    {
      id: 8,
      title: "An Introduction to GraphQL for REST Developers",
      slug: "intro-graphql-for-rest-devs",
      author: "apiExpert",
      category: "APIs",
      tags: ["graphql", "api", "rest", "nodejs"],
      published_date: "2025-07-11",
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
      content:
        "Coming from a REST background? This guide explains the core concepts of GraphQL, its advantages, and how to start building your first GraphQL API...",
      reading_time: "8 min",
    },
    {
      id: 9,
      title: "State Management in Vue 3 with Pinia",
      slug: "vue-3-state-management-pinia",
      author: "vueNinja",
      category: "Vue.js",
      tags: ["vue", "pinia", "state management", "javascript"],
      published_date: "2025-07-09",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      content:
        "Pinia is the new official state management library for Vue. Learn how its simple and intuitive API can help you manage your application's state...",
      reading_time: "5 min",
    },
    {
      id: 10,
      title: "Optimizing Web Performance: Core Web Vitals",
      slug: "optimizing-core-web-vitals",
      author: "perfPro",
      category: "Performance",
      tags: ["performance", "web vitals", "seo", "frontend"],
      published_date: "2025-07-05",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      content:
        "Improve your user experience and search engine ranking by focusing on Core Web Vitals. We'll cover LCP, FID, and CLS and how to improve them...",
      reading_time: "7 min",
    },
  ];
  return (
    <>
      <div className=" min-h-screen">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl md:text-5xl text-gray-800 font-bold text-center mb-4">
            The Tech Blog
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Insights on programming, devops, data science, and more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((data) => {
              return (
                <div key={data.id}>
                  <img
                    className="relative z-10 object-cover w-full rounded-md h-96"
                    src={data.thumbnail}
                    alt="blog image"
                  />

                  <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <Link href={`/blog/${data.id}`} key={data.id}
                      className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                    >
                      {data.title}
                    </Link>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                      {data.content}
                    </p>

                    <p className="mt-3 text-sm text-blue-500">
                      {data.published_date}
                    </p>
                  </div>
                </div>
              );
            })}
            <section className="bg-white dark:bg-gray-900"></section>
          </div>
        </div>
      </div>
    </>
  );
}
