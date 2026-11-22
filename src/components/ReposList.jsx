function ReposList({ repos }) {
  if (!repos || repos.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="mb-4 text-[1.2rem] font-semibold">Latest repositories</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-[#1e293b] border border-[#334155] p-6 rounded-[10px] text-center sm:text-left transition-all duration-300 hover:border-[#fcd34d] hover:opacity-90 hover:-translate-y-0.5"
          >
            <h3 className="text-[#38bdf8] text-[1.1rem] font-semibold mb-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit no-underline hover:underline"
              >
                {repo.name}
              </a>
            </h3>
            <p className="text-[#94a3b8] text-[0.85rem] mb-4">
              {repo.description || "No description"}
            </p>
            <span className="text-[#fcd34d] text-[0.85rem] font-medium">
              ⭐ {repo.stargazers_count}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReposList;