import axios from "axios";
import Link from "next/link";

export default async function Tracks() {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/tracking`
  );
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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        {responseArray.map((e: tracks) => (
          <div key={e.id}>
            <div className="font sm:text-xl md:text-3xl lg:text-4xl mt-12">
              {e.title}
            </div>
            <div className="text-lg mt-2">
              {e.description.slice(0, 40) + "..."}
            </div>
            <div className="text-xs">{e.date.slice(3, 10)}</div>
            <div className="mt-4">
              <Link
                className="border-2 rounded-xl  p-1 w-12 h-6 hover:text-green-500"
                href={`/tracking/${e.id}`}
              >
                Read
              </Link>
            </div>
          </div>
        ))}
        <Link
          className="border-2 absolute right-4 bottom-5  rounded-xl items-center text-center  text-3xl bg-green-500 text-white  hover:bg-white p-1 w-32 h-12 hover:text-green-500"
          href={`/new/`}
        >
          Add
        </Link>
      </div>
    </div>
  );
}
