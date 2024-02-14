import { IF } from "../url";

const HomePosts = ({ post }) => {
  return (
    <div className="w-full flex mt-8 space-x-4 border rounded-md overflow-hidden shadow-md bg-white">
      {/* left */}
      <div className="w-[35%] h-[200px] relative overflow-hidden">
        <img
          src={IF + post.photo}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%] p-4">
        <h1 className="text-xl font-bold mb-2 md:text-2xl">{post.title}</h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@{post.username}</p>
          <div className="flex space-x-2 text-sm">
            <p>{new Date(post.updatedAt).toDateString()}</p>
            <p>{new Date(post.updatedAt).toLocaleTimeString()}</p>
          </div>
        </div>
        <p className="text-sm md:text-base text-gray-700 mb-4">
          {post.desc.slice(0, 200)} ...
          <span className="text-blue-500 cursor-pointer">Read more</span>
        </p>
        <div className="flex items-center">
          <button className="text-blue-500 hover:underline">Like</button>
          <button className="ml-4 text-gray-500 hover:underline">
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePosts;
