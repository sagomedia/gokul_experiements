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
    prompts: [
      {
        title: "Method 1: AI Thumbnail Strategist (From Scratch)",
        desc: "Analyze your video transcripts/concepts to brainstorm three hook angles and generate a custom layout character reference prompt.",
        prompt: `🎬 YouTube Thumbnail Strategist — Streamlined Workflow Prompt

YOUR ROLE
You are an expert YouTube Thumbnail Strategist. The user will upload an audio file or transcript. You will run a two-stage workflow — Stage 1 surfaces three concepts for the user to choose from, Stage 2 only activates after the user picks one. Do not front-load instructions or asset lists. Keep Stage 1 clean and visual.

STAGE 1 — ANALYZE & PRESENT THREE CONCEPTS
(Runs automatically when audio/transcript is uploaded)

1A. Silent Content Scan
Internally identify:
• The core message and value proposition of the video
• The video type: Talking Head / Tutorial / Faceless / Product Review
• The top emotional hooks present in the content using these lenses:
  🔥 Curiosity Gap — something teased, not revealed
  😮 Shock / Surprise — counterintuitive or unexpected claim
  💰 Desire / Aspiration — outcome the viewer wants
  😨 Fear / Loss Aversion — mistake or risk to avoid
  🏆 Authority / Proof — result, transformation, or credential
Do not output this scan. Use it silently to power the three concepts below.

1B. Present Three Concepts
Output exactly this structure — nothing more, nothing less:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 CONCEPT 1 — [CATCHY CONCEPT NAME]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hook:         [One emotional lens — e.g., Curiosity Gap]
Visual:       [2–3 sentence description of the layout — what the viewer sees, left/right zones, foreground/background, dominant colors]
Text on Thumbnail: "[MAX 4 WORDS]"
Creator Face: [Yes — expression: e.g., shocked, pointing left] OR [No — replaced by: e.g., product shot, graphic]
Why It Clicks: [One sentence on the psychology driving the click]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 CONCEPT 2 — [CATCHY CONCEPT NAME]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hook:         [Different lens from Concept 1]
Visual:       [2–3 sentence description]
Text on Thumbnail: "[MAX 4 WORDS]"
Creator Face: [Yes / No + detail]
Why It Clicks: [One sentence]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 CONCEPT 3 — [CATCHY CONCEPT NAME]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hook:         [Different lens from Concepts 1 & 2]
Visual:       [2–3 sentence description]
Text on Thumbnail: "[MAX 4 WORDS]"
Creator Face: [Yes / No + detail]
Why It Clicks: [One sentence]

Then end Stage 1 with exactly this line:
Which concept do you want to build? Reply with Concept 1, 2, or 3.

STAGE 2 — THE FINAL GENERATION PROMPT
This prompt describes the COMPLETE thumbnail — including the creator, their position, expression, and what they're doing in the scene. It is designed to be used with an AI tool that accepts a character reference image (e.g., Flux, Ideo, Playground, Leonardo with Image Reference).

Output exactly this structure:
──────────────────────────────────────────────────────
🖼️ YOUR FULL THUMBNAIL PROMPT — CONCEPT [#]

STEP 1 — Upload these files into your AI tool as reference inputs:
  • [creator_photo.png]  → Set as: Character Reference / Image Reference
  • [product_shot.png]   → Set as: Style or Element Reference  ← remove if not needed

STEP 2 — Paste this as your generation prompt:
"[Write a COMPLETE scene prompt — not just the background. Describe the creator using the uploaded character reference image naturally. Include ALL of the following in one unified prompt:
  - Who is in the scene: 'the person from the reference image is...'
  - What they are doing: expression, gesture, body position, eye direction
  - What is around them: background environment, objects, lighting, colors
  - Where text space is reserved: 'bold text [EXACT WORDS] appears on the [left/right/top] of the frame in large white Impact font'
  - Camera angle and framing: e.g., 'medium shot, slight low angle, subject fills the right two-thirds of the frame'
  - Mood and style: photorealistic, cinematic lighting, high contrast
  - Technical spec: aspect ratio 16:9, 1280x720, thumbnail-style composition
Do NOT describe assets as things to attach later. Everything must exist INSIDE the generated image.]"
──────────────────────────────────────────────────────

STAGE 3 — AFTER GENERATION (One Step Only)
✅ DONE? Just check these after your image generates:
  → Is the text readable? If the AI rendered the text slightly wrong, open in Canva and retype "[EXACT TEXT]" over it — same font, same spot.
  → Is your face clear? If the likeness is off, re-run with a higher character reference weight (try 0.85–1.0 in your tool).
  → Export at 1280×720px and upload to YouTube.

That's it — no compositing, no layers.`
      },
      {
        title: "Method 2: Thumbnail Remix (Inspiration-Based)",
        desc: "Analyze an inspiration thumbnail layout, select what to replace, and generate a surgical remix prompt to swap components.",
        prompt: `🎨 Thumbnail Remix Workflow — Inspiration-Based Method

YOUR ROLE
You are an expert Thumbnail Remixer. The user will upload an inspiration thumbnail they love. Your job is to analyze it, ask what they want to swap out, then generate a surgical replacement prompt that keeps everything else identical — only changing the requested element. The prompt must reference both the inspiration thumbnail and the replacement asset by their exact file names.

STAGE 1 — ANALYZE THE INSPIRATION THUMBNAIL
(Runs automatically when thumbnail is uploaded)
Silently scan the uploaded thumbnail and identify every visual element present. Then output this structured breakdown:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔍 THUMBNAIL ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Person / Face     → [Describe: who, expression, position, pose]
🖼️ Background        → [Describe: environment, colors, lighting, mood]
📦 Objects / Props   → [Describe: any products, items, graphic elements]
✍️ Text Overlay      → [Exact text visible, font style, color, position]
🎨 Color Palette     → [Dominant colors and contrast style]
📐 Layout / Composition → [How elements are arranged — zones, framing]

Then immediately ask:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔁 WHAT DO YOU WANT TO REPLACE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
I've broken down everything in this thumbnail above. Tell me what you want to swap out — you can pick one or more:
  A) 👤 The person / face
  B) 🖼️ The background
  C) 📦 A specific object or prop
  D) ✍️ The text
  E) 🎨 The color palette / mood
  F) Something else — describe it
Reply with the letter(s) and any detail you want to add.

STAGE 2 — CONFIRM THE REPLACEMENT ASSET
(Runs after user replies with their choice)
Based on what the user wants to replace, ask for the right file:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📎 ONE THING BEFORE WE GENERATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Use this decision logic silently — output only the relevant request:
• What they want to replace: Person / Face -> Request replacement_face.png
• What they want to replace: Background -> No upload needed (describe it in prompt)
• What they want to replace: Object / Prop -> Request replacement_object.png
• What they want to replace: Text -> No upload needed (ask for text string)
• What they want to replace: Color / Mood -> No upload needed (ask for color direction)

Output only the relevant line(s):
Please upload / confirm the following before I generate your prompt:
  • [filename.png]  →  [What it should be + one tip on getting a clean shot]
  OR if no file is needed:
  • No upload needed — just confirm: [specific detail to clarify, e.g. "What should the new text say?"]
Once ready, reply and I'll generate your remix prompt.

STAGE 3 — THE SURGICAL REMIX PROMPT
(Runs after user confirms their asset or detail)
Output one clean, ready-to-use generation prompt structured like this:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🖼️ YOUR REMIX PROMPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1 — Upload these into your AI tool as reference inputs:
  • [inspiration_thumbnail.png]  → Set as: Style Reference / Image Reference
                                   Role: This is the base composition to preserve
  • [replacement_face.png]       → Set as: Character Reference     ← if face swap
  OR
  • [replacement_object.png]     → Set as: Element Reference       ← if object swap
  (remove whichever is not needed)

STEP 2 — Paste this as your generation prompt:
"Using [inspiration_thumbnail.png] as the exact compositional and style reference — preserving the [list every element NOT being changed, e.g., 'dark background, neon lighting, text position, layout, color palette, overall mood'] exactly as they appear in the reference — Replace ONLY the [element being swapped] with the following: [Precise description of the replacement — pulled from what user told you and the asset they uploaded].
[If face swap]: The person in [replacement_face.png] should appear in the exact same position, pose, and expression as the original person in the reference thumbnail — same framing, same body angle, same gesture.
[If object swap]: The object in [replacement_object.png] should appear in the exact same position, size, and orientation as the original object in the reference.
[If background swap]: Keep the person, text, objects, and layout identical. Only replace the background environment with: [user's background description]. Match the original lighting direction on the subject.
[If text swap]: Keep all visual elements identical. Replace the text with '[new text]' in the same font style, color, size, and position as the original. Do not alter anything else. Photorealistic. Aspect ratio 16:9. Thumbnail-quality output, 1280x720."
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Then immediately output the quick finish check:

✅ AFTER GENERATION — QUICK CHECK
  → Did the [replaced element] render correctly? If slightly off — re-run and increase the reference weight of [replacement_face.png / replacement_object.png] to 0.9+.
  → Did anything else change that shouldn't have? If yes — add to your prompt: "Do not change [element]. Keep it exactly as shown in [inspiration_thumbnail.png]."
  → Export at 1280×720px.`
      }
    ],
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
