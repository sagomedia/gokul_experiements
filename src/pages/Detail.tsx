import { Play, Plus, Code, Copy, Check, Bookmark, BookmarkCheck } from "lucide-react";
import { useParams } from "react-router";
import { useState } from "react";
import { VIDEOS } from "../data/videos";
import { useWatchlist } from "../hooks/useWatchlist";

export function Detail() {
  const { id } = useParams();
  const data = VIDEOS[id as keyof typeof VIDEOS] || VIDEOS["openclaw-ai-agents"];
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const { isInWatchlist, toggleWatchlist } = useWatchlist();
  const isSaved = isInWatchlist(data.id);

  const activePrompt = data.prompts ? data.prompts[activeTab].prompt : data.prompt;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activePrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex-1 p-0 lg:p-4 gap-6 flex flex-col max-w-[1200px] mx-auto w-full">
      <section className="relative w-full aspect-video border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-surface-container-high overflow-hidden mb-6 group">
        <div className="absolute inset-0 halftone-bg-light opacity-30 mix-blend-overlay z-10 pointer-events-none"></div>
        <img
          alt={data.title}
          className="w-full h-full object-cover grayscale contrast-125 mix-blend-luminosity opacity-70"
          src={data.imgUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 flex flex-col justify-end p-4 lg:p-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="bg-secondary-container text-white px-2 py-1 font-bold text-xs lg:text-sm uppercase border-2 border-black">
              {data.tag1}
            </span>
            <span className="bg-primary-container text-on-primary-container px-2 py-1 font-bold text-xs lg:text-sm uppercase border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {data.tag2}
            </span>
          </div>
          <h1 className="font-headline text-3xl lg:text-5xl text-primary font-black uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] max-w-4xl">
            {data.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a 
              href={`https://youtu.be/${data.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-container text-on-primary-container border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2 font-headline text-xl uppercase flex items-center gap-2 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-100"
            >
              <Play className="w-6 h-6 fill-current" />
              PLAY NOW
            </a>
            <button 
              onClick={() => toggleWatchlist(data.id)}
              className={`text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-100 ${isSaved ? 'bg-primary-container text-black' : 'bg-surface-container'}`}
              title={isSaved ? "Remove from Watchlist" : "Add to Watchlist"}
            >
              {isSaved ? <BookmarkCheck className="w-6 h-6" /> : <Bookmark className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-surface-container-high border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 lg:p-6">
            <h3 className="font-headline text-2xl text-primary uppercase border-b-4 border-black pb-2 mb-4">
              System Overview
            </h3>
            <p className="font-body text-lg text-on-surface-variant font-medium leading-relaxed">
              {data.synopsis}
            </p>
          </div>

          <div className="bg-inverse-surface text-inverse-on-surface border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary-container border-l-4 border-b-4 border-black flex items-center justify-center shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Code className="text-on-primary-container w-8 h-8" strokeWidth={2.5} />
            </div>
            <div className="p-4 lg:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 pr-14">
                <h3 className="font-headline text-2xl text-inverse-primary uppercase font-black italic">
                  System Prompt Guide
                </h3>
                {data.prompts && (
                  <div className="flex bg-black border-2 border-black p-1 gap-1">
                    {data.prompts.map((p: any, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`px-3 py-1 font-headline text-xs uppercase transition-all duration-100 ${
                          activeTab === idx
                            ? "bg-primary text-black font-black"
                            : "bg-surface-container text-white hover:bg-surface-container-high"
                        }`}
                      >
                        Method {idx + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {data.prompts && (
                <div className="bg-white/5 border-l-4 border-primary p-3 mb-4 text-sm font-body text-inverse-on-surface/80">
                  <strong className="text-primary">{data.prompts[activeTab].title}</strong> — {data.prompts[activeTab].desc}
                </div>
              )}

              <div className="bg-white border-4 border-black relative group shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                <div className="p-4 lg:p-6 font-mono text-xs lg:text-sm text-black whitespace-pre-wrap leading-relaxed max-h-[480px] overflow-y-auto">
                  {activePrompt}
                </div>
                <button
                  onClick={handleCopy}
                  className="absolute top-4 right-4 bg-primary text-black border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                  aria-label="Copy prompt"
                >
                  {copied ? <Check className="w-5 h-5 text-green-700" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-bold text-inverse-on-surface/60 uppercase tracking-widest">
                <span>Status: Ready</span>
                {copied && <span className="text-primary font-bold">Copied active prompt!</span>}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-surface-container border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col">
            <div className="bg-secondary-container border-b-4 border-black p-4">
              <h3 className="font-headline text-2xl text-white uppercase">Execution Plan</h3>
            </div>
            <div className="p-6 flex flex-col gap-6 halftone-bg">
              {data.steps.map((step: any, index: number) => (
                <div key={index} className="bg-primary-container text-on-primary-container border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 relative">
                  <div className={`absolute -top-3 -left-3 bg-black text-white border-2 border-white w-8 h-8 flex items-center justify-center font-black font-headline transform ${index % 2 === 0 ? '-rotate-12' : 'rotate-6'}`}>
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-sm uppercase ml-4">{step.title}</h4>
                  <p className="font-body text-sm mt-1 ml-4 text-on-primary-container/80">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-high border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
            <ul className="flex flex-col gap-4">
              <li className="flex justify-between border-b-2 border-dashed border-[#4d4732] pb-2">
                <span className="font-bold text-sm text-on-surface-variant uppercase">Runtime</span>
                <span className="font-body text-base text-primary font-bold">{data.runtime}</span>
              </li>
              <li className="flex justify-between border-b-2 border-dashed border-[#4d4732] pb-2">
                <span className="font-bold text-sm text-on-surface-variant uppercase">Category</span>
                <span className="bg-primary-container text-on-primary-container px-2 py-0.5 font-black text-sm border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] uppercase">{data.category}</span>
              </li>
              <li className="flex justify-between pb-1">
                <span className="font-bold text-sm text-on-surface-variant uppercase">Creator</span>
                <span className="font-body text-base text-primary font-bold uppercase">{data.creator}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
