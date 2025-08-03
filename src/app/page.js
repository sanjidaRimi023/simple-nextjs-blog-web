import Image from "next/image";
import ServicesPage from "./services/page";
import BlogPage from "./blog/page";

export default function Home() {
  return (
    <>
      <div className="flex gap-3 items-center justify-center container mx-auto mt-10">
        <div className="space-y-4 mt-30 flex-1">
          <h1 className="text-4xl font-bold text-teal-600">
            Diving Deep into Modern Development.
          </h1>
          <p className="text-lg text-gray-600">
            Practical tutorials, in-depth guides, and honest opinions on the
            latest in web development, software architecture, and the tech
            industry. Your go-to resource for leveling up your dev skills.
          </p>
        </div>
        <div>
          <Image
            src="/images.jpg"
            alt="Description"
            width={600}
            height={500}
            className="your-class"
          />
        </div>
      </div>
     

    </>
  );
}
