// components/GitHubStats.tsx
import React, { useEffect, useState } from 'react';

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

const GITHUB_USERNAME = 'Ahmer-kun';

const GitHubStats: React.FC = () => {
  const [data, setData] = useState<GitHubUser | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let active = true;

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API error');
        return res.json();
      })
      .then((json: GitHubUser) => {
        if (active) {
          setData(json);
          setStatus('ready');
        }
      })
      .catch(() => {
        if (active) setStatus('error');
      });

    return () => {
      active = false;
    };
  }, []);

  const yearsActive = data
    ? Math.max(1, new Date().getFullYear() - new Date(data.created_at).getFullYear())
    : null;

  const stats = [
    { label: 'Public Repos', value: data?.public_repos },
    { label: 'Followers', value: data?.followers },
    { label: 'Following', value: data?.following },
    { label: 'Years on GitHub', value: yearsActive },
  ];

  return (
    <div className="relative glass-effect p-8 rounded-lg border border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
            <i className="fab fa-github text-xl text-white" aria-hidden="true"></i>
          </div>
          <div>
            <p className="text-white font-black uppercase text-sm tracking-tight">@{GITHUB_USERNAME}</p>
            <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" aria-hidden="true"></span>
              Live from GitHub
            </p>
          </div>
        </div>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-white transition-colors flex items-center gap-1"
        >
          Profile <i className="fas fa-arrow-right text-[8px]" aria-hidden="true"></i>
        </a>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-px bg-white/10 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#050505] p-6 text-center">
            <p className="text-3xl font-black text-white mb-1 min-h-[2.25rem] flex items-center justify-center">
              {status === 'loading' ? (
                <span className="inline-block w-10 h-7 bg-white/10 rounded animate-pulse" aria-hidden="true"></span>
              ) : status === 'error' ? (
                '—'
              ) : (
                s.value
              )}
            </p>
            <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Contribution graph */}
      <div className="rounded overflow-hidden border border-white/5 bg-black/40">
        <img
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=react-dark&hide_border=true&bg_color=00000000&color=ffffff&line=3b82f6&point=8b5cf6&area=true&area_color=3b82f6`}
          alt={`${GITHUB_USERNAME} GitHub contribution activity graph`}
          loading="lazy"
          className="w-full"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      {status === 'error' && (
        <p className="text-[10px] text-slate-500 uppercase tracking-widest text-center mt-4">
          Live stats unavailable right now — view directly on GitHub
        </p>
      )}
    </div>
  );
};

export default GitHubStats;