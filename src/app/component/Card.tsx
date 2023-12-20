import Link from "next/link";

export interface Story {
  title: string;
  description: string;
  link: string;
  thumbnail: string;
  publishedDate: string; // or Date depending on your data source
}

export const Card = ({ story, key }: { story: Story; key: number }) => {
  const date = new Date(story.publishedDate);
  const formattedDate = `${date.getFullYear()}年${
		date.getMonth() + 1
	}月${date.getDate()}日`;
  
  console.log(date, formattedDate)

  return (
    <Link
      key={key}
      href={story.link}
      className="border border-gray-200 rounded-lg overflow-hidden m-4 max-w-sm mx-auto">
      {story.thumbnail && (
        <img
          src={story.thumbnail}
          alt={story.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-5">
        <h2 className="text-xl font-bold mb-3">{story.title}</h2>
        <p className="mb-4 text-clip overflow-hidden line-clamp-5">
          {story.description}
        </p>
        <p className="text-gray-500">{formattedDate}</p>
      </div>
    </Link>
  );
};