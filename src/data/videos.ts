export const VIDEOS = {
  "openclaw-ai-agents": {
    id: "openclaw-ai-agents",
    title: "I Found a Hack for UNLIMITED AI Agents (Free OpenClaw)",
    shortDesc: "Watch how I bypass heavy API costs and let this free AI literally take over my terminal to organize messy folders in 10 seconds flat.",
    synopsis: "Ever looked at your downloaded files folder and thought, \"Enna da panni vechirukom?\" Yeah, same. I wanted a personal AI assistant to clean up my mess and do my boring work, but seeing those OpenAI API bills... heart attack thaan! So, I dug around and found a totally savvy hack to run an AI agent called OpenClaw on my Ubuntu machine for exactly ₹0.\n\nIn this video, I’m showing you how to bypass the heavy API costs and let this free AI literally take over your terminal. Watch it organize my horribly messy folders in 10 seconds flat. Summa vera level automation! 🤯",
    prompt: "iwr -useb https://openclaw.ai/install.ps1 | iex\n\nopenclaw onboard",
    tag1: "Automation", 
    tag2: "Deep Work",
    imgUrl: "/video2-thumb.jpeg",
    youtubeId: "5Mf9MZxVCSg",
    runtime: "7:33 MINS",
    category: "Tech Tutorial",
    creator: "Gokul Experiments",
    isTrending: true,
    steps: [
      { title: "The Mess & The 'Zero Kaasu' Jarvis Hack", desc: "0:00" },
      { title: "Typing in the Terminal (Setup & Trick)", desc: "1:15" },
      { title: "The 10-Second Magic Result! 🔥", desc: "5:30" },
      { title: "What Should We Automate Next?", desc: "7:00" }
    ]
  },
  "100-days-roast": {
    id: "100-days-roast",
    title: "Roast My Videos for the Next 100 Days",
    shortDesc: "I'm embarking on a 100-day journey of continuous video creation. Subscribe and drop your brutal roasts!",
    synopsis: "We are pushing hard on this 100-day grind here at The Solo Studio! Whether it's building SaaS, testing new AI tools, or just seeing how far we can push this tech without breaking the bank, I'm documenting it all. Subscribe panni support pannunga!",
    prompt: "You are a brutally honest, highly critical YouTube Content Strategist. Analyze the following video script/concept and point out every single flaw, pacing issue, and cliché. Do not hold back. I need actionable, harsh feedback to improve.",
    tag1: "Challenge", 
    tag2: "Growth",
    imgUrl: "/video1-thumb.jpeg",
    youtubeId: "McHk37Fiy4Q",
    runtime: "3:37 MINS",
    category: "Challenge",
    creator: "Gokul Experiments",
    isTrending: false,
    steps: [
      { title: "Upload Video", desc: "Post the daily video to the channel without overthinking the edit." },
      { title: "Analyze Feedback", desc: "Feed the viewer roasts and comments into the AI to generate a list of concrete improvements for tomorrow's video." }
    ]
  },
  "ai-thumbnail-generator": {
    id: "ai-thumbnail-generator",
    title: "Create & Recreate YouTube Thumbnails Using AI",
    shortDesc: "Master two game-changing AI workflows to generate CTR-boosting thumbnails from scratch or remix inspiration designs.",
    synopsis: "Stop spending hours in Photoshop! In this guide, I show you two powerful AI methods to create high-quality YouTube thumbnails. Method 1 generates a brand-new custom layout using a text prompt and character reference image (e.g. Flux, Leonardo). Method 2 allows you to surgically remix any inspiration thumbnail, swapping out faces, text, backgrounds, or colors while preserving the original layout and style.",
    prompt: "=== METHOD 1: CREATE THUMBNAIL WITH AI ===\n\nYouTube Thumbnail Strategist Prompt:\n\n\"You are an expert YouTube Thumbnail Strategist. The user will upload an audio file or transcript. You will run a two-stage workflow — Stage 1 surfaces three concepts for the user to choose from, Stage 2 only activates after the user picks one. Do not front-load instructions or asset lists. Keep Stage 1 clean and visual.\n\nSTAGE 1 — ANALYZE & PRESENT THREE CONCEPTS\n(Runs automatically when audio/transcript is uploaded)\n1A. Silent Content Scan\nIdentify: core message, video type, emotional hooks (Curiosity Gap, Shock/Surprise, Desire, Fear, Authority).\n\n1B. Present Three Concepts\nOutput exactly this structure for each concept:\n- Concept Name\n- Hook Lens\n- Visual Layout description\n- Text on Thumbnail (max 4 words)\n- Creator Face (Yes/No + expression)\n- Why It Clicks\"\n\n---\n\n=== METHOD 2: RECREATE/REMIX THUMBNAIL ===\n\nThumbnail Remix Workflow Prompt:\n\n\"You are an expert Thumbnail Remixer. The user will upload an inspiration thumbnail they love. Your job is to analyze it, ask what they want to swap out, then generate a surgical replacement prompt that keeps everything else identical — only changing the requested element. The prompt must reference both the inspiration thumbnail and the replacement asset by their exact file names.\n\nSTAGE 1 — ANALYZE THE INSPIRATION THUMBNAIL\nIdentify: Person/Face, Background, Objects/Props, Text Overlay, Color Palette, Layout/Composition.\n\nSTAGE 2 — WHAT DO YOU WANT TO REPLACE?\nAsk to swap out: A) Person/face, B) Background, C) Object/prop, D) Text, E) Color palette/mood, F) Something else.\"\n\n---\n\n=== FINAL AI GENERATION TEMPLATE ===\n\n\"Using [inspiration_thumbnail.png] as the exact compositional and style reference — preserving the layout, neon lighting, text position, and overall mood exactly as they appear in the reference — Replace ONLY the [element being swapped] with [replacement_asset.png]. photorealistic, 16:9 aspect ratio, 1280x720.\"",
    tag1: "Design", 
    tag2: "AI Tool",
    imgUrl: "/video3-thumb.jpeg",
    youtubeId: "5Mf9MZxVCSg", // Dummy since video is being uploaded/produced
    runtime: "11:08 MINS",
    category: "Tutorial",
    creator: "Gokul Experiments",
    isTrending: true,
    steps: [
      { title: "Select Workflow Mode", desc: "Choose between Method 1 (generating new ideas from scratch) or Method 2 (remixing an existing design)." },
      { title: "Configure Reference Images", desc: "Upload your base character reference photo or target inspiration thumbnail to your AI generation tool (Flux/Leonardo)." },
      { title: "Run Prompt Generator", desc: "Input the corresponding prompt template to compile the final generation query." },
      { title: "Review & Refine", desc: "Check text legibility, face similarity weight (0.85-1.0), and make adjustments in Canva if necessary." }
    ]
  }
};
