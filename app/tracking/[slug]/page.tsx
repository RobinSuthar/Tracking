import axios from "axios";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  type resultResponse = {
    title: string;
    description: string;
  };
  const proviedId = (await params).slug;
  const result = await axios.get(
    `http://localhost:3000/api/tracks/${proviedId}`
  );
  const TrackResult: resultResponse = result["data"]["message"];
  return (
    <div className="grid grid-cols-1 gap-1 p-4">
      <h1 className="sm:text-5xl md:text-5xl lg:text-6xl text-center">
        {TrackResult.title}
      </h1>
      <h4 className="sm:text-xl md:text-2xl text-center mt-12">
        {TrackResult.description}
      </h4>
      <div></div>
    </div>
  );
}
