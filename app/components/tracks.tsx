import axios from "axios";

export default async function Tracks() {
  const result = await axios.get("http://localhost:3000/api/tracking");
  const responseArray = result.data.message;

  type tracks = {
    id: string;
    title: string;
    description: string;
    date: string;
  };
  return (
    <div>
      <div className="text-5xl text-center mt-12">Welcome </div>
      <div className="grid grid-cols-3 gap-4 p-8">
        {responseArray.map((e: tracks) => (
          <div key={e.id}>
            <div className="font sm:text-xl md:text-3xl lg:text-4xl mt-12">
              {e.title}
            </div>
            <div className="text-lg">{e.description}</div>
            <div className="text-xs">{e.date.slice(3, 10)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
