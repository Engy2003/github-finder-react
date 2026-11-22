import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import ProfileCard from "./components/ProfileCard";
import ReposList from "./components/ReposList";
import Footer from "./components/Footer";

const API_URL = "https://api.github.com/users/";

function App() {
  const [searchedUser, setSearchedUser] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchedUser) return;

    const fetchGitHubData = async () => {
      setLoading(true);
      setError(false);

      try {
        const userResponse = await fetch(`${API_URL}${searchedUser}`);
        if (!userResponse.ok) {
          throw new Error("User not found");
        }
        const profile = await userResponse.json();
        setUserData(profile);

        const reposResponse = await fetch(
          `${API_URL}${searchedUser}/repos?sort=created&per_page=6`
        );
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch {
        setError(true);
        setUserData(null);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [searchedUser]);

  return (
    <>
      <main className="w-full h-full">
        <Header />
        <SearchSection onSearch={setSearchedUser} />
        {loading ? (
          <p className="text-[#94a3b8] text-center my-8">Loading profile...</p>
        ) : (
          <>
            <ProfileCard user={userData} error={error} />
            <ReposList repos={repos} />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
