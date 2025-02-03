const GptSearchBar = () => {
  return (
    <div className="flex justify-center">
      <form className="bg-black w-1/2 absolute top-60 grid grid-cols-12 p-4 gap-x-4">
        <input type="text" className="p-2 col-span-9" placeholder="What would you like to watch?" />
        <button type="button" className="bg-red-700 text-white col-span-3 py-1 px-2 rounded-lg">Search</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
