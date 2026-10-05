// ChatGPT Prompt Resources Data & Application Logic

const COMMANDS_DATA = [
  // 1 - 14
  { id: 1, cmd: "/human:", desc: "Natural human-like writing without robotic phrasing", cat: "Writing", icon: "📝", color: "#a855f7" },
  { id: 2, cmd: "/expert:", desc: "Specialist-level answers with deep domain expertise", cat: "Strategy", icon: "🎓", color: "#38bdf8" },
  { id: 3, cmd: "/CEO:", desc: "Founder mindset analysis & high-level business decisions", cat: "Business", icon: "📈", color: "#10b981" },
  { id: 4, cmd: "/viral:", desc: "High-engagement content ideas tuned for algorithms", cat: "Social", icon: "🔥", color: "#f43f5e" },
  { id: 5, cmd: "/seo:", desc: "Search-optimized content & semantic keyword targeting", cat: "Marketing", icon: "🔍", color: "#06b6d4" },
  { id: 6, cmd: "/critic:", desc: "Find weaknesses, loopholes and flaws before publishing", cat: "Analysis", icon: "⚠️", color: "#f59e0b" },
  { id: 7, cmd: "/teacher:", desc: "Explain clearly, simply and systematically with examples", cat: "Learning", icon: "📖", color: "#38bdf8" },
  { id: 8, cmd: "/eli5:", desc: "Explain like I'm 5 with intuitive real-world metaphors", cat: "Learning", icon: "💡", color: "#eab308" },
  { id: 9, cmd: "/brief:", desc: "Shortest possible direct answer with zero fluff", cat: "Productivity", icon: "📋", color: "#ec4899" },
  { id: 10, cmd: "/strategy:", desc: "Long-term planning mode with risk-reward trade-offs", cat: "Strategy", icon: "🎯", color: "#8b5cf6" },
  { id: 11, cmd: "/copywriter:", desc: "Persuasive marketing copy based on sales psychology", cat: "Copywriting", icon: "📢", color: "#10b981" },
  { id: 12, cmd: "/research:", desc: "Deep research mode with sources, synthesis & nuance", cat: "Research", icon: "📑", color: "#6366f1" },
  { id: 13, cmd: "/brainstorm:", desc: "Generate creative, out-of-the-box ideas rapidly", cat: "Ideation", icon: "🧠", color: "#f97316" },
  { id: 14, cmd: "/promptengineer:", desc: "Improve and re-engineer any prompt for maximum output", cat: "Prompting", icon: "🪄", color: "#ec4899" },

  // 15 - 28
  { id: 15, cmd: "/problemsolver:", desc: "Solve complex problems with structured first-principles", cat: "Analysis", icon: "💡", color: "#a855f7" },
  { id: 16, cmd: "/decisionhelper:", desc: "Help me evaluate options and make calculated decisions", cat: "Strategy", icon: "🎯", color: "#0284c7" },
  { id: 17, cmd: "/moneyideas:", desc: "Generate profitable, validated business & revenue ideas", cat: "Business", icon: "📈", color: "#ec4899" },
  { id: 18, cmd: "/skillbuilder:", desc: "Create a personalized, step-by-step learning curriculum", cat: "Learning", icon: "🎓", color: "#f59e0b" },
  { id: 19, cmd: "/negotiationcoach:", desc: "Coach me to win any negotiation and defend terms", cat: "Business", icon: "🤝", color: "#10b981" },
  { id: 20, cmd: "/contentoptimizer:", desc: "Improve content readability, hooks & SEO engagement", cat: "Marketing", icon: "🚀", color: "#a855f7" },
  { id: 21, cmd: "/promptimprover:", desc: "Enhance clarity, constraints and parameters of prompts", cat: "Prompting", icon: "🪄", color: "#38bdf8" },
  { id: 22, cmd: "/emailwizard:", desc: "Write polite, razor-sharp professional emails instantly", cat: "Writing", icon: "✉️", color: "#f59e0b" },
  { id: 23, cmd: "/productivityboost:", desc: "Boost productivity with actionable time-saving workflows", cat: "Productivity", icon: "📋", color: "#ec4899" },
  { id: 24, cmd: "/socialmediaai:", desc: "Create viral social media threads, captions & carousels", cat: "Social", icon: "🔗", color: "#f97316" },
  { id: 25, cmd: "/storytellerai:", desc: "Turn raw ideas and facts into captivating narratives", cat: "Writing", icon: "📖", color: "#0d9488" },
  { id: 26, cmd: "/persuasivemode:", desc: "Make any communication irresistible and persuasive", cat: "Copywriting", icon: "📣", color: "#ef4444" },
  { id: 27, cmd: "/datainterpreter:", desc: "Analyze data sets, uncover trends & give clear takeaways", cat: "Analysis", icon: "📊", color: "#8b5cf6" },
  { id: 28, cmd: "/automateit:", desc: "Suggest automation pipelines & no-code scripts for tasks", cat: "Productivity", icon: "⚙️", color: "#0284c7" },

  // 29 - 42
  { id: 29, cmd: "/jobinterviewer:", desc: "Conduct a realistic mock interview & give harsh feedback", cat: "Career", icon: "👥", color: "#10b981" },
  { id: 30, cmd: "/careercoach:", desc: "Help me design and execute my dream career trajectory", cat: "Career", icon: "🎯", color: "#38bdf8" },
  { id: 31, cmd: "/resumewriter:", desc: "Write ATS-friendly, job-winning bullet points & resume", cat: "Career", icon: "📄", color: "#a855f7" },
  { id: 32, cmd: "/coverlettergen:", desc: "Draft a personalized, high-converting job cover letter", cat: "Career", icon: "✉️", color: "#f97316" },
  { id: 33, cmd: "/linkedinbooster:", desc: "Optimize LinkedIn headline, summary & profile positioning", cat: "Career", icon: "💼", color: "#0284c7" },
  { id: 34, cmd: "/personaldeveloper:", desc: "Create a 30-day mindset and skill self-improvement plan", cat: "Self Care", icon: "📈", color: "#3b82f6" },
  { id: 35, cmd: "/habittracker:", desc: "Build sustainable daily systems and break bad habits", cat: "Self Care", icon: "📝", color: "#10b981" },
  { id: 36, cmd: "/healthcoach:", desc: "Give me an evidence-based personalized wellness roadmap", cat: "Health", icon: "💖", color: "#8b5cf6" },
  { id: 37, cmd: "/mealplanner:", desc: "Create a nutritious, balanced weekly meal plan & grocery list", cat: "Health", icon: "🍽️", color: "#f97316" },
  { id: 38, cmd: "/workoutbuddy:", desc: "Design a progressive workout routine tailored to my goals", cat: "Health", icon: "🏋️", color: "#ef4444" },
  { id: 39, cmd: "/travelplanner:", desc: "Plan an itinerary, hidden gems & budget-optimized trip", cat: "Lifestyle", icon: "✈️", color: "#06b6d4" },
  { id: 40, cmd: "/budgetplanner:", desc: "Formulate a balanced monthly budget & savings tracker", cat: "Finance", icon: "👛", color: "#10b981" },
  { id: 41, cmd: "/financetips:", desc: "Deliver smart wealth-building, saving and investing habits", cat: "Finance", icon: "🪙", color: "#f59e0b" },
  { id: 42, cmd: "/booksummary:", desc: "Extract the core thesis and top 10 actionable takeaways", cat: "Learning", icon: "📚", color: "#f97316" },

  // 43 - 56
  { id: 43, cmd: "/trendpredictor:", desc: "Identify emerging patterns and future trends in any industry", cat: "Marketing", icon: "📈", color: "#8b5cf6" },
  { id: 44, cmd: "/deepthink:", desc: "Multi-layered reasoning examining edge cases and second-order effects", cat: "Analysis", icon: "💡", color: "#38bdf8" },
  { id: 45, cmd: "/unpopularopinion:", desc: "Deliver counter-intuitive, brutally honest perspectives", cat: "Ideation", icon: "💬", color: "#ec4899" },
  { id: 46, cmd: "/growthhack:", desc: "Low-cost, high-leverage acquisition tactics for any product", cat: "Marketing", icon: "🚀", color: "#f97316" },
  { id: 47, cmd: "/contentrecycler:", desc: "Repurpose 1 core insight into 10+ formats (tweets, reels, blog)", cat: "Content", icon: "♻️", color: "#10b981" },
  { id: 48, cmd: "/ctaexpert:", desc: "Craft irresistible, friction-free calls-to-action that convert", cat: "Copywriting", icon: "📢", color: "#ef4444" },
  { id: 49, cmd: "/psychowords:", desc: "Inject neurological power words that prompt immediate action", cat: "Copywriting", icon: "🎯", color: "#0284c7" },
  { id: 50, cmd: "/brandstory:", desc: "Build an iconic brand narrative using the hero's journey", cat: "Branding", icon: "📖", color: "#eab308" },
  { id: 51, cmd: "/viralhook:", desc: "Write pattern-interrupting opening lines that hold attention", cat: "Social", icon: "🔥", color: "#ec4899" },
  { id: 52, cmd: "/audienceavatar:", desc: "Map pain points, desires, objections & demographics of ideal buyers", cat: "Marketing", icon: "👥", color: "#8b5cf6" },
  { id: 53, cmd: "/competitorroast:", desc: "Expose competitor blindspots and highlight differentiation angles", cat: "Strategy", icon: "🔭", color: "#f97316" },
  { id: 54, cmd: "/frameworkify:", desc: "Convert any complex concept into a branded step-by-step framework", cat: "Strategy", icon: "⚙️", color: "#10b981" },
  { id: 55, cmd: "/examplewizard:", desc: "Illustrate abstract concepts with vivid real-world scenarios", cat: "Learning", icon: "📑", color: "#38bdf8" },
  { id: 56, cmd: "/tl;dr:", desc: "Condense long walls of text into crisp bullet summaries", cat: "Productivity", icon: "📝", color: "#ec4899" }
];

const NOTION_LIBRARIES = [
  { title: "Persuasive Copywriting", icon: "🗣️", url: "https://stormy-tea-d1b.notion.site/Persuasive-Copywriting-065470cc0d3a83179d238183a37da7da?pvs=25", cat: "Copywriting" },
  { title: "Persuasive Copywriting (Vol 2)", icon: "🗣️", url: "https://stormy-tea-d1b.notion.site/Persuasive-Copywriting-1-733470cc0d3a827cb8298133e72e58c4?pvs=25", cat: "Copywriting" },
  { title: "Direct Response Copywriting", icon: "📞", url: "https://stormy-tea-d1b.notion.site/Direct-Response-Copywriting-67d470cc0d3a8346af30011747d87299?pvs=25", cat: "Sales" },
  { title: "Branding Copywriting", icon: "🏷️", url: "https://stormy-tea-d1b.notion.site/Branding-Copywriting-796470cc0d3a8350af29814602969c64?pvs=25", cat: "Branding" },
  { title: "Emotional Copywriting", icon: "❤️", url: "https://stormy-tea-d1b.notion.site/Emotional-Copywriting-3a8470cc0d3a830aadf101117b03064c?pvs=25", cat: "Psychology" },
  { title: "PPC Copywriting", icon: "💰", url: "https://stormy-tea-d1b.notion.site/PPC-Copywriting-4ca470cc0d3a82d391ab812550485d60?pvs=25", cat: "Advertising" },
  { title: "SEO Copywriting", icon: "🔍", url: "https://stormy-tea-d1b.notion.site/SEO-Copywriting-1ac470cc0d3a83ceb45601f396c5e0c6?pvs=25", cat: "SEO" },
  { title: "Content Copywriting", icon: "📝", url: "https://stormy-tea-d1b.notion.site/Content-Copywriting-3aa470cc0d3a8326aeab01802a6d97d4?pvs=25", cat: "Content" },
  { title: "Sales Copywriting", icon: "💲", url: "https://stormy-tea-d1b.notion.site/Sales-Copywriting-15c470cc0d3a82febf240105b037e704?pvs=25", cat: "Sales" },
  { title: "Email Copywriting", icon: "📧", url: "https://stormy-tea-d1b.notion.site/Email-Copywriting-da6470cc0d3a8214af840171e977c560?pvs=25", cat: "Email" },
  { title: "Video Copywriting", icon: "🎥", url: "https://stormy-tea-d1b.notion.site/Video-Copywriting-cc0470cc0d3a82938af281294194f7e4?pvs=25", cat: "Video" },
  { title: "Video Copywriting (Vol 2)", icon: "🎥", url: "https://stormy-tea-d1b.notion.site/Video-Copywriting-1-a12470cc0d3a8310b30481a790fdcd31?pvs=25", cat: "Video" },
  { title: "Print Advertising Copywriting", icon: "📰", url: "https://stormy-tea-d1b.notion.site/Print-Advertising-Copywriting-e31470cc0d3a8255ab350133a746a40e?pvs=25", cat: "Advertising" },
  { title: "Affiliate Marketing Copywriting", icon: "💻", url: "https://stormy-tea-d1b.notion.site/Affiliate-Marketing-Copywriting-aec470cc0d3a8339939d015698bf2e9e?pvs=25", cat: "Marketing" },
  { title: "Affiliate Marketing Copywriting (Vol 2)", icon: "💻", url: "https://stormy-tea-d1b.notion.site/Affiliate-Marketing-Copywriting-1-8fd470cc0d3a83bd939b0113c3e58fdf?pvs=25", cat: "Marketing" },
  { title: "E-Commerce Transactional Copywriting", icon: "💳", url: "https://stormy-tea-d1b.notion.site/E-Commerce-Transactional-Copywriting-c98470cc0d3a839eaa6f81f121fcdce6?pvs=25", cat: "E-Commerce" },
  { title: "Native Advertising Copywriting", icon: "🌳", url: "https://stormy-tea-d1b.notion.site/Native-Advertising-Copywriting-91b470cc0d3a835bb2e60180c8ec3cb2?pvs=25", cat: "Advertising" },
  { title: "Content Marketing Copywriting", icon: "📊", url: "https://stormy-tea-d1b.notion.site/Content-Marketing-Copywriting-38c470cc0d3a822bb9e901a7ade1d34f?pvs=25", cat: "Content" },
  { title: "Content Marketing Copywriting (Vol 2)", icon: "📊", url: "https://stormy-tea-d1b.notion.site/Content-Marketing-Copywriting-1-513470cc0d3a8203a96301da68f52a2d?pvs=25", cat: "Content" },
  { title: "Sales Script Copywriting", icon: "📈", url: "https://stormy-tea-d1b.notion.site/Sales-Script-Copywriting-8ea470cc0d3a82cf9780818f109ae39e?pvs=25", cat: "Sales" },
  { title: "Call-To-Action (CTA) Copywriting", icon: "📢", url: "https://stormy-tea-d1b.notion.site/Call-To-Action-CTA-Copywriting-d77470cc0d3a826dbeaa81435cff4ba5?pvs=25", cat: "Conversion" },
  { title: "Display Advertising Copywriting", icon: "🖥️", url: "https://stormy-tea-d1b.notion.site/Display-Advertising-Copywriting-f90470cc0d3a830791a581ecedfb2d9a?pvs=25", cat: "Advertising" },
  { title: "Event Marketing Copywriting", icon: "🎉", url: "https://stormy-tea-d1b.notion.site/Event-Marketing-Copywriting-0b6470cc0d3a8226932d81211977bd81?pvs=25", cat: "Events" },
  { title: "Public Relations Copywriting", icon: "📣", url: "https://stormy-tea-d1b.notion.site/Public-Relations-Copywriting-fc6470cc0d3a82ccbd0d014befe15f23?pvs=25", cat: "PR" },
  { title: "Brand Strategy Copywriting", icon: "💡", url: "https://stormy-tea-d1b.notion.site/Brand-Strategy-Copywriting-cd2470cc0d3a83baa29c0153ba39a73f?pvs=25", cat: "Branding" },
  { title: "Advertising Campaign Copywriting", icon: "🎯", url: "https://stormy-tea-d1b.notion.site/Advertising-Campaign-Copywriting-937470cc0d3a835bb61e01f6b82a1f51?pvs=25", cat: "Campaigns" },
  { title: "Web Content Copywriting", icon: "🌐", url: "https://stormy-tea-d1b.notion.site/Web-Content-Copywriting-292470cc0d3a82ab91690109a3ef3e1a?pvs=25", cat: "Website" },
  { title: "Blog Copywriting", icon: "📝", url: "https://stormy-tea-d1b.notion.site/Blog-Copywriting-444470cc0d3a823ea44401df466885f4?pvs=25", cat: "Blogging" },
  { title: "Website Design Copywriting", icon: "🎨", url: "https://stormy-tea-d1b.notion.site/Website-Design-Copywriting-428470cc0d3a82638168019f653fb3bf?pvs=25", cat: "Design" },
  { title: "Ad Copywriting", icon: "📰", url: "https://stormy-tea-d1b.notion.site/Ad-Copywriting-ac1470cc0d3a829c89d101ba9534742b?pvs=25", cat: "Advertising" },
  { title: "Ad Copywriting (Vol 2)", icon: "📰", url: "https://stormy-tea-d1b.notion.site/Ad-Copywriting-1-24e470cc0d3a83bf9808816c80e73928?pvs=25", cat: "Advertising" },
  { title: "Direct Mail Marketing Copywriting", icon: "📬", url: "https://stormy-tea-d1b.notion.site/Direct-Mail-Marketing-Copywriting-16a470cc0d3a83b09c0501676b5e0bf5?pvs=25", cat: "Direct Mail" },
  { title: "Influencer Marketing Copywriting", icon: "🤳", url: "https://stormy-tea-d1b.notion.site/Influencer-Marketing-Copywriting-528470cc0d3a825fad5681b86cfa802e?pvs=25", cat: "Influencer" },
  { title: "Text Message Copywriting", icon: "💬", url: "https://stormy-tea-d1b.notion.site/Text-Message-Copywriting-76c470cc0d3a82beb5fd8160f67b2450?pvs=25", cat: "SMS & Mobile" }
];

const VISUAL_CREATIVES = [
  {
    title: "55 Viral Image Prompts",
    tag: "Visual AI Pack",
    desc: "Create stunning viral content and boost social engagement with 55 high-converting image generation formulas.",
    file: "creative/Pasted 05-10-2026 at 14.25.12.png"
  },
  {
    title: "33 Viral ChatGPT Image Commands",
    tag: "Studio Prompts",
    desc: "Secret prompt engineering recipes for ultra-realistic studio lighting, 3D aesthetics, and cinematic visuals.",
    file: "creative/Pasted 05-10-2026 at 14.28.56.png"
  },
  {
    title: "200 ChatGPT Secret Commands",
    tag: "Pro Visual Vault",
    desc: "Comprehensive master directory for professional image and creative outputs in Midjourney & DALL-E 3.",
    file: "creative/Pasted 05-10-2026 at 14.30.58.png"
  },
  {
    title: "15K Hidden ChatGPT Codes",
    tag: "Creator Edition",
    desc: "The creator cheat code bundle to build faster, create smarter, and scale content generation.",
    file: "creative/Pasted 05-10-2026 at 14.31.31.png"
  }
];

const CHEAT_SHEETS = [
  {
    title: "Secret Commands Part 1 (#1 - #14)",
    tag: "Core Commands",
    desc: "High-level personas: /human, /expert, /CEO, /viral, /seo, /critic, /copywriter...",
    file: "commands/Pasted 05-10-2026 at 14.23.59.png"
  },
  {
    title: "Secret Commands Part 2 (#15 - #28)",
    tag: "Execution & Strategy",
    desc: "Problem solving: /problemsolver, /moneyideas, /negotiationcoach, /emailwizard...",
    file: "commands/Pasted 05-10-2026 at 14.24.07.png"
  },
  {
    title: "Secret Commands Part 3 (#29 - #42)",
    tag: "Career & Lifestyle",
    desc: "Life & growth: /jobinterviewer, /resumewriter, /linkedinbooster, /healthcoach...",
    file: "commands/Pasted 05-10-2026 at 14.24.12.png"
  },
  {
    title: "Secret Commands Part 4 (#43 - #56)",
    tag: "Marketing & Virality",
    desc: "Mastery tools: /trendpredictor, /deepthink, /growthhack, /viralhook, /tl;dr...",
    file: "commands/Pasted 05-10-2026 at 14.24.18.png"
  }
];

// App State
let activeFilter = 'all';
let searchQuery = '';

// DOM Elements
const commandsGrid = document.getElementById('commands-grid');
const notionGrid = document.getElementById('notion-grid');
const creativesGrid = document.getElementById('creatives-grid');
const cheatSheetsGrid = document.getElementById('cheatsheets-grid');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const toastEl = document.getElementById('toast');
const toastMsg = document.getElementById('toast-msg');
const emptyState = document.getElementById('empty-state');
const lightboxModal = document.getElementById('lightbox-modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const modalClose = document.getElementById('modal-close');

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  renderCommands();
  renderNotion();
  renderCreatives();
  renderCheatSheets();
  setupEventListeners();
  updateCategoryCounts();
});

// Render Commands
function renderCommands() {
  if (!commandsGrid) return;
  commandsGrid.innerHTML = '';
  
  const query = searchQuery.toLowerCase().trim();
  const filtered = COMMANDS_DATA.filter(item => {
    const matchesFilter = activeFilter === 'all' || 
                          (activeFilter === 'writing' && ['Writing', 'Copywriting'].includes(item.cat)) ||
                          (activeFilter === 'strategy' && ['Strategy', 'Business', 'Analysis'].includes(item.cat)) ||
                          (activeFilter === 'marketing' && ['Marketing', 'Social', 'Content', 'Branding'].includes(item.cat)) ||
                          (activeFilter === 'career' && ['Career', 'Self Care'].includes(item.cat)) ||
                          (activeFilter === 'productivity' && ['Productivity', 'Prompting', 'Learning', 'Health', 'Finance'].includes(item.cat));

    const matchesSearch = !query || 
                          item.cmd.toLowerCase().includes(query) ||
                          item.desc.toLowerCase().includes(query) ||
                          item.cat.toLowerCase().includes(query) ||
                          item.id.toString().includes(query);
                          
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0 && (activeFilter !== 'all' || query)) {
    // Hidden if empty
  }

  filtered.forEach(cmd => {
    const card = document.createElement('div');
    card.className = 'command-card';
    card.style.setProperty('--card-color', cmd.color);
    
    // Quick prompt launch url
    const promptQuery = encodeURIComponent(cmd.cmd + " ");
    const chatGptUrl = `https://chat.openai.com/?q=${promptQuery}`;

    card.innerHTML = `
      <div class="command-top">
        <span class="command-badge-num">#${cmd.id}</span>
        <span class="command-tag" style="--tag-color: ${cmd.color}; --tag-bg: ${cmd.color}1a;">${cmd.cat}</span>
      </div>
      <div class="command-body">
        <div class="command-syntax-wrapper">
          <span class="command-icon">${cmd.icon}</span>
          <span class="command-code">${cmd.cmd}</span>
        </div>
        <p class="command-desc">${cmd.desc}</p>
      </div>
      <div class="command-footer">
        <button class="btn-copy-cmd" data-copy="${cmd.cmd}" title="Copy command to clipboard">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <span>Copy</span>
        </button>
        <a href="${chatGptUrl}" target="_blank" rel="noopener noreferrer" class="btn-launch-gpt" title="Launch ChatGPT with this prefix">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    `;
    commandsGrid.appendChild(card);
  });

  checkEmptyState();
}

// Render Notion Grid
function renderNotion() {
  if (!notionGrid) return;
  notionGrid.innerHTML = '';
  
  const query = searchQuery.toLowerCase().trim();
  const filtered = NOTION_LIBRARIES.filter(item => {
    return !query || 
           item.title.toLowerCase().includes(query) ||
           item.cat.toLowerCase().includes(query);
  });

  filtered.forEach(lib => {
    const card = document.createElement('a');
    card.className = 'notion-card';
    card.href = lib.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.innerHTML = `
      <div class="notion-card-left">
        <div class="notion-icon">${lib.icon}</div>
        <div class="notion-title-wrap">
          <div class="notion-card-title">${lib.title}</div>
          <div class="notion-card-subtitle">${lib.cat} • Live Notion Template</div>
        </div>
      </div>
      <div class="notion-card-arrow">→</div>
    `;
    notionGrid.appendChild(card);
  });
}

// Render Creatives
function renderCreatives() {
  if (!creativesGrid) return;
  creativesGrid.innerHTML = '';

  VISUAL_CREATIVES.forEach(item => {
    const card = document.createElement('div');
    card.className = 'creative-card';
    card.addEventListener('click', () => openLightbox(item.file, item.title));
    
    card.innerHTML = `
      <div class="creative-thumb-wrap">
        <img src="${encodeURI(item.file)}" alt="${item.title}" class="creative-thumb" loading="lazy">
        <div class="creative-overlay">
          <span class="zoom-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            Click to Zoom
          </span>
        </div>
      </div>
      <div class="creative-meta">
        <span class="creative-tag">${item.tag}</span>
        <h4 class="creative-name">${item.title}</h4>
        <p class="creative-desc">${item.desc}</p>
      </div>
    `;
    creativesGrid.appendChild(card);
  });
}

// Render Cheat Sheets
function renderCheatSheets() {
  if (!cheatSheetsGrid) return;
  cheatSheetsGrid.innerHTML = '';

  CHEAT_SHEETS.forEach(sheet => {
    const card = document.createElement('div');
    card.className = 'creative-card';
    card.addEventListener('click', () => openLightbox(sheet.file, sheet.title));
    
    card.innerHTML = `
      <div class="creative-thumb-wrap">
        <img src="${encodeURI(sheet.file)}" alt="${sheet.title}" class="creative-thumb" loading="lazy">
        <div class="creative-overlay">
          <span class="zoom-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            View Full Infographic
          </span>
        </div>
      </div>
      <div class="creative-meta">
        <span class="creative-tag" style="color: var(--accent-purple)">${sheet.tag}</span>
        <h4 class="creative-name">${sheet.title}</h4>
        <p class="creative-desc">${sheet.desc}</p>
      </div>
    `;
    cheatSheetsGrid.appendChild(card);
  });
}

// Event Listeners Setup
function setupEventListeners() {
  // Search
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
    renderCommands();
    renderNotion();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderCommands();
    renderNotion();
    searchInput.focus();
  });

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderCommands();
    });
  });

  // Copy buttons on cards (delegation)
  document.addEventListener('click', (e) => {
    const copyBtn = e.target.closest('.btn-copy-cmd');
    if (copyBtn) {
      const text = copyBtn.dataset.copy;
      copyToClipboard(text);
      
      const span = copyBtn.querySelector('span');
      const originalText = span.textContent;
      copyBtn.classList.add('copied');
      span.textContent = 'Copied!';
      
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        span.textContent = originalText;
      }, 1800);
    }
  });

  // Lightbox Close
  modalClose.addEventListener('click', closeLightbox);
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal.classList.contains('open')) {
      closeLightbox();
    }
  });
}

// Clipboard Helper
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied "${text}" to clipboard!`);
    }).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(`Copied "${text}" to clipboard!`);
  } catch (err) {
    console.error('Copy failed', err);
  }
  document.body.removeChild(textArea);
}

// Toast
let toastTimeout;
function showToast(message) {
  clearTimeout(toastTimeout);
  toastMsg.textContent = message;
  toastEl.classList.add('show');
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2600);
}

// Lightbox
function openLightbox(src, caption) {
  modalImg.src = encodeURI(src);
  modalCaption.textContent = caption;
  lightboxModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightboxModal.classList.remove('open');
  document.body.style.overflow = '';
}

// Category Counts
function updateCategoryCounts() {
  const counts = {
    all: COMMANDS_DATA.length,
    writing: COMMANDS_DATA.filter(i => ['Writing', 'Copywriting'].includes(i.cat)).length,
    strategy: COMMANDS_DATA.filter(i => ['Strategy', 'Business', 'Analysis'].includes(i.cat)).length,
    marketing: COMMANDS_DATA.filter(i => ['Marketing', 'Social', 'Content', 'Branding'].includes(i.cat)).length,
    career: COMMANDS_DATA.filter(i => ['Career', 'Self Care'].includes(i.cat)).length,
    productivity: COMMANDS_DATA.filter(i => ['Productivity', 'Prompting', 'Learning', 'Health', 'Finance'].includes(i.cat)).length,
  };

  filterBtns.forEach(btn => {
    const f = btn.dataset.filter;
    const countSpan = btn.querySelector('.count');
    if (countSpan && counts[f] !== undefined) {
      countSpan.textContent = counts[f];
    }
  });
}

// Empty state check
function checkEmptyState() {
  const totalVisibleCommands = commandsGrid.children.length;
  const totalVisibleNotion = notionGrid.children.length;
  
  if (totalVisibleCommands === 0 && totalVisibleNotion === 0 && searchQuery) {
    emptyState.classList.add('visible');
  } else {
    emptyState.classList.remove('visible');
  }
}
