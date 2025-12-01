import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../constants";
import { Github, Star, GitFork, ExternalLink, Calendar } from "lucide-react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Extract username from GitHub URL
  const githubUsername = PERSONAL_INFO.github.split("/").pop() || "Gangula-Venkata-Rishitha";

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=12&type=all`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data: GitHubRepo[] = await response.json();
        // Filter out forks if needed, or keep all repos
        setRepos(data.filter(repo => !repo.name.includes("HONEY"))); // Exclude portfolio repo
        setError(null);
      } catch (err) {
        setError("Unable to load repositories");
        console.error("GitHub API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [githubUsername]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  if (error && repos.length === 0) {
    return null; // Don't show section if there's an error and no repos
  }

  return (
    <section id="github" className="bg-white py-16 sm:py-24 md:py-32 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Github className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              GitHub Repositories
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-4 px-4">
            My latest projects and contributions on GitHub
          </p>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            View All Repositories
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 animate-pulse"
              >
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group block bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                {/* Language indicator */}
                {repo.language && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-semibold text-gray-600 bg-white rounded-full border border-gray-200">
                      {repo.language}
                    </span>
                  </div>
                )}

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex-1 pr-2">
                      {repo.name}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0 mt-1" />
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[2.5rem]">
                    {repo.description || "No description available"}
                  </p>

                  {/* Topics */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Stats */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <Star className="w-4 h-4" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <GitFork className="w-4 h-4" />
                      <span>{repo.forks_count}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-xs ml-auto">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(repo.updated_at)}</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {error && repos.length > 0 && (
          <div className="text-center mt-8 text-sm text-gray-500">
            {error} - Showing cached repositories
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubRepos;

