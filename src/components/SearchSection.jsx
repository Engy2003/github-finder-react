import { useState } from "react";

const SUGGESTED_USERS = ["torvalds", "gaearon", "sindresorhus"];

function SearchSection({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedUser = inputValue.trim();
    if (trimmedUser) {
      onSearch(trimmedUser);
    }
  };

  const handleChipClick = (username) => {
    setInputValue(username);
    onSearch(username);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 mb-6"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="user-name"
          className="flex-1 p-4 rounded-lg border border-[#334155] bg-[#0f172a] text-[#f8fafc] text-base outline-none transition-all duration-300 focus:border-[#fcd34d] placeholder:text-[#6a6a6a] placeholder:text-[0.95rem]"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-4 border-none rounded-lg bg-[#fcd34d] text-black font-semibold cursor-pointer text-base transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
        >
          Search
        </button>
      </form>

      <div className="flex justify-start items-center gap-[0.8rem] mb-12 flex-wrap">
        <span className="text-[#94a3b8] text-[0.9rem]">Try:</span>
        {SUGGESTED_USERS.map((username) => (
          <button
            key={username}
            type="button"
            onClick={() => handleChipClick(username)}
            className="bg-transparent text-[#38bdf8] border border-[#334155] px-[0.8rem] py-[0.3rem] rounded-[20px] cursor-pointer text-[0.85rem] transition-all duration-300 hover:border-[#fcd34d] hover:opacity-90 hover:-translate-y-0.5"
          >
            {username}
          </button>
        ))}
      </div>
    </section>
  );
}

export default SearchSection;