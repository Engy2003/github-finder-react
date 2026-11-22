function ProfileCard({ user, error }) {
  if (error) {
    return (
      <section>
        <div className="bg-[#1e293b] rounded-xl p-6 sm:p-8 border border-[#334155] mb-8 text-center sm:text-left">
          <h2 className="text-red-500 text-xl font-semibold">
            User Not Found!
          </h2>
        </div>
      </section>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <section>
      <div className="group bg-[#1e293b] rounded-xl p-6 sm:p-8 border border-[#334155] mb-8 flex flex-col sm:flex-row gap-8 items-center text-center sm:text-left transition-all duration-300 hover:border-[#fcd34d] hover:opacity-90 hover:-translate-y-0.5">
        <div className="w-[130px] h-[130px] shrink-0 rounded-full border-[3px] border-[#fcd34d] overflow-hidden">
          <img
            src={user.avatar_url}
            alt={user.name || user.login}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
          />
        </div>

        <div className="flex flex-col justify-start items-center sm:items-start w-full">
          <h2 className="text-2xl font-semibold mb-[0.2rem] w-full">
            {user.name || user.login}
          </h2>
          <span className="text-[#38bdf8] text-[0.95rem] inline-block mb-4 w-full">
            @{user.login}
          </span>
          <p className="text-[#94a3b8] mb-6 text-[0.95rem] w-full">
            {user.bio || "No bio available"}
          </p>

          <div className="flex justify-center sm:justify-start flex-wrap gap-4 sm:gap-6 w-full">
            <span className="text-[0.9rem] text-[#94a3b8] bg-[#0f172a] rounded-xl px-3 py-2">
              <strong className="text-[#fcd34d]">{user.public_repos}</strong>{" "}
              repos
            </span>
            <span className="text-[0.9rem] text-[#94a3b8] bg-[#0f172a] rounded-xl px-3 py-2">
              <strong className="text-[#fcd34d]">{user.followers}</strong>{" "}
              followers
            </span>
            <span className="text-[0.9rem] text-[#94a3b8] bg-[#0f172a] rounded-xl px-3 py-2">
              <strong className="text-[#fcd34d]">{user.following}</strong>{" "}
              following
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;