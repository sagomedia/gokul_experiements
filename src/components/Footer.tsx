export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-8 gap-6 bg-surface-container-lowest border-t-4 border-black mt-auto">
      <div className="font-headline text-primary text-2xl font-black italic tracking-tighter uppercase drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
        Gokul Experiments
      </div>
      <nav className="flex flex-wrap justify-center gap-6">
        <a href="https://instagram.com/gokulakrishnan23092005" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-white font-bold text-sm uppercase hover:tracking-widest transition-all">
          Instagram
        </a>
        <a href="https://x.com/gokula2005" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-white font-bold text-sm uppercase hover:tracking-widest transition-all">
          X (Twitter)
        </a>
        <a href="https://github.com/Gokulakrishnan2005/gokul_experiements" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-white font-bold text-sm uppercase hover:tracking-widest transition-all">
          GitHub
        </a>
      </nav>
      <div className="text-[#b0c7f1] font-bold text-sm uppercase text-center md:text-right">
        © 2026 Gokul Experiments. All Rights Reserved.
      </div>
    </footer>
  );
}
