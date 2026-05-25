import { Link } from "react-router";
import { Flame } from "lucide-react";
import { VIDEOS } from "../data/videos";

export function Home() {
  const featuredVideo = VIDEOS["ai-thumbnail-generator"];
  const otherVideos = Object.values(VIDEOS).filter(v => v.id !== featuredVideo.id);

  return (
    <>
      <section className="halftone-bg comic-border comic-shadow p-6 lg:p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[400px]">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 max-w-2xl text-white">
          <div className="inline-flex items-center justify-center px-4 py-1 bg-primary text-black font-bold text-xs lg:text-sm border-2 border-black mb-4 uppercase tracking-widest transform -rotate-2">
            Latest Upload
          </div>
          <h2 className="font-headline text-4xl lg:text-5xl md:text-5xl leading-none font-black italic tracking-tighter uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] lg:drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] mb-4">
            {featuredVideo.title}
          </h2>
          <p className="font-body text-base lg:text-lg bg-black text-white p-3 border-2 border-white mb-8 line-clamp-3">
            {featuredVideo.shortDesc}
          </p>
          <br />
          <Link to={`/video/${featuredVideo.id}`} className="inline-block bg-primary-container text-black font-headline text-xl lg:text-2xl border-4 border-black px-6 py-3 lg:px-8 lg:py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] lg:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none transition-all uppercase italic">
            WATCH & GET PROMPT
          </Link>
        </div>
        <div className="relative z-10 w-full md:w-1/3 mt-8 md:mt-0">
          <div className="w-full aspect-[3/4] bg-surface-container comic-border comic-shadow overflow-hidden transform rotate-3">
            <img
              alt={featuredVideo.title}
              className="w-full h-full object-cover grayscale contrast-150 mix-blend-luminosity opacity-80"
              src={featuredVideo.imgUrl}
            />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex items-center gap-4 mb-6 border-b-4 border-black pb-2">
          <Flame className="w-10 h-10 text-secondary" strokeWidth={2.5} />
          <h3 className="font-headline text-3xl uppercase font-black italic text-white">
            More Prompts
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {Object.values(VIDEOS).map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              desc={video.shortDesc}
              match="100% Match"
              tag={video.tag1}
              tagColor="bg-primary"
              imgUrl={video.imgUrl}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export function VideoCard({ id, title, desc, match, tag, tagColor, imgUrl }: any) {
  return (
    <article className="bg-[#1f1f20] comic-border comic-shadow flex flex-col group relative">
      <div className="absolute -top-4 -right-4 z-20">
        <div className={`relative inline-flex items-center justify-center px-4 py-2 ${tagColor} text-black font-bold text-xs lg:text-sm uppercase border-4 border-black transform rotate-6 bg-white`}>
          <span>{tag}</span>
          <div className={`absolute -bottom-2 ${tagColor === 'bg-primary' ? 'left-4' : 'right-4'} w-4 h-4 ${tagColor} border-b-4 border-r-4 border-black rotate-45 -z-10 bg-white`}></div>
        </div>
      </div>
      <Link to={`/video/${id}`} className="h-48 border-b-4 border-black relative overflow-hidden bg-black block">
        <img
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500 grayscale contrast-125"
          src={imgUrl}
        />
      </Link>
      <div className="p-6 flex flex-col flex-1 bg-[#2a2a2b]">
        <Link to={`/video/${id}`}>
          <h4 className="font-headline text-xl lg:text-2xl uppercase font-black text-white mb-2 line-clamp-2">{title}</h4>
        </Link>
        <p className="font-body text-[#d0c6ab] mb-6 line-clamp-2">{desc}</p>
        <div className="mt-auto flex justify-between items-center border-t-2 border-black pt-4">
          <span className="font-bold text-primary-container text-sm uppercase tracking-widest">{match}</span>
          <Link to={`/video/${id}`} className="bg-primary text-black border-2 border-black px-4 py-1 font-bold text-sm uppercase comic-btn-hover shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Open
          </Link>
        </div>
      </div>
    </article>
  );
}
