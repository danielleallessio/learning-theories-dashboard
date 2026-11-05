/* Learning Theories Dashboard
   Data and interactivity for index.html.
   Developed and maintained by Danielle Allessio using AI tools; licensed CC BY-NC 4.0. */

(function () {
  "use strict";

  /* ---------- Data ---------- */

  const FAMILIES = {
    behavioral: "Behavioral",
    cognitive: "Cognitive",
    constructivist: "Constructivist",
    social: "Social",
    humanistic: "Humanistic",
    critical: "Critical / Cultural",
    networked: "Networked / Digital"
  };

  const BANDS = [
    { id: "all", label: "All" },
    { id: "K-2", label: "K-2" },
    { id: "3-5", label: "3-5" },
    { id: "6-8", label: "6-8" },
    { id: "9-12", label: "9-12" }
  ];

  const THEORIES = [
    {
      id: "behaviorism",
      name: "Behaviorism",
      family: "behavioral",
      theorists: [
        { name: "Ivan Pavlov", years: "1849-1936", note: "Classical conditioning" },
        { name: "Edward Thorndike", years: "1874-1949", note: "Law of effect" },
        { name: "B. F. Skinner", years: "1904-1990", note: "Operant conditioning, reinforcement schedules" }
      ],
      summary: "Learning is a change in observable behavior shaped by the consequences that follow it.",
      ideas: [
        "Behaviors followed by reinforcement are more likely to recur",
        "Complex skills can be shaped through small, successive approximations",
        "Immediate, specific feedback strengthens learning",
        "Practice and repetition build fluency"
      ],
      prompts: {
        "K-2": "Teach one classroom routine (such as lining up) in three small steps, and give specific praise the moment each step is done well: \"You pushed in your chair quietly!\"",
        "3-5": "Run a 5-minute math-facts fluency drill with instant self-checking, and have students graph their own correct answers across the week.",
        "6-8": "Break a lab procedure into a checklist; students earn a checkmark for each step completed correctly before moving on.",
        "9-12": "Use low-stakes retrieval quizzes at the start of class with immediate answer reveal, and ask students to track which items they missed twice."
      },
      lookFors: [
        "Clear, observable learning targets",
        "Feedback that comes quickly and names the specific behavior",
        "Reinforcement that fades as skills become automatic"
      ],
      caution: "Rewards can crowd out intrinsic motivation if overused. Pair reinforcement with meaning, and fade external rewards over time."
    },
    {
      id: "cognitivism",
      name: "Cognitivism & Information Processing",
      family: "cognitive",
      theorists: [
        { name: "George A. Miller", years: "1920-2012", note: "Limits of working memory" },
        { name: "Richard Atkinson & Richard Shiffrin", years: "1968 model", note: "Multi-store memory model" },
        { name: "John Sweller", years: "b. 1946", note: "Cognitive load theory" }
      ],
      summary: "The mind works like an information processor: attention, working memory, and long-term memory shape what is learned.",
      ideas: [
        "Working memory is limited, so new information should come in manageable chunks",
        "Connecting new ideas to prior knowledge builds durable schemas",
        "Retrieval practice and spacing strengthen long-term memory",
        "Worked examples reduce unnecessary cognitive load for novices"
      ],
      prompts: {
        "K-2": "Before a read-aloud, show three pictures from the book and ask, \"What do you already know about these?\" to activate prior knowledge.",
        "3-5": "Model a multi-step word problem with a fully worked example, then give a partly completed example, then an independent one (\"I do, we do, you do\").",
        "6-8": "Have students build a concept map linking today's vocabulary to last week's, drawing labeled arrows that explain each connection.",
        "9-12": "Schedule spaced retrieval: revisit key ideas from 1 day, 1 week, and 1 month ago in a brief warm-up with no notes."
      },
      lookFors: [
        "Content broken into chunks with clear structure",
        "Explicit links to prior knowledge",
        "Retrieval and spaced review built into routines"
      ],
      caution: "Information-processing models simplify the mind. Remember that emotion, culture, and motivation also shape attention and memory."
    },
    {
      id: "cognitive-constructivism",
      name: "Cognitive Constructivism",
      family: "constructivist",
      theorists: [
        { name: "Jean Piaget", years: "1896-1980", note: "Stages of cognitive development; assimilation and accommodation" },
        { name: "Jerome Bruner", years: "1915-2016", note: "Discovery learning, spiral curriculum" }
      ],
      summary: "Learners actively build understanding by exploring, noticing conflicts with what they believe, and reorganizing their thinking.",
      ideas: [
        "Knowledge is constructed, not transmitted",
        "Cognitive conflict (disequilibrium) drives conceptual change",
        "Development moves from concrete to abstract reasoning",
        "Revisiting big ideas at increasing depth (spiral curriculum) supports growth"
      ],
      prompts: {
        "K-2": "Pour equal water into a tall glass and a wide bowl. Ask, \"Which has more? How could we find out?\" and let students test their predictions.",
        "3-5": "Give students fraction tiles and ask them to prove whether 2/3 or 3/5 is larger before teaching any rule.",
        "6-8": "Start with a surprising demonstration (a heavy and light ball dropped together), collect predictions, then ask students to explain the gap between prediction and result.",
        "9-12": "Present two data sets that seem to contradict each other and have small groups develop and defend an explanation that accounts for both."
      },
      lookFors: [
        "Hands-on exploration before formal explanation",
        "Questions that surface and challenge student misconceptions",
        "Students explaining their reasoning, not just answers"
      ],
      caution: "Piaget's age-based stages are now seen as less rigid than first proposed. Pure discovery without guidance can overload novices, so pair exploration with structure."
    },
    {
      id: "social-constructivism",
      name: "Social Constructivism",
      family: "social",
      theorists: [
        { name: "Lev Vygotsky", years: "1896-1934", note: "Zone of proximal development, mediation through language and tools" },
        { name: "David Wood, Jerome Bruner & Gail Ross", years: "1976", note: "Introduced the term \"scaffolding\"" }
      ],
      summary: "Learning happens first between people, through talk and shared activity, and is then internalized by the individual.",
      ideas: [
        "The zone of proximal development (ZPD) is what a learner can do with support but not yet alone",
        "Scaffolding is temporary support that is gradually removed",
        "Language and cultural tools mediate thinking",
        "Collaboration with more knowledgeable others accelerates learning"
      ],
      prompts: {
        "K-2": "Use \"turn and talk\" with sentence frames: \"I think ___ because ___.\" Partners repeat back what they heard before sharing their own idea.",
        "3-5": "Pair students for reading with clearly assigned roles (reader, questioner) and switch roles each page.",
        "6-8": "Run a jigsaw: each expert group masters one part of a topic, then teaches it to a mixed home group.",
        "9-12": "Hold a Socratic seminar where students must build on a peer's comment (\"Adding to what Maya said...\") before introducing a new point."
      },
      lookFors: [
        "Structured, purposeful student talk",
        "Supports that fade as students gain independence",
        "Tasks pitched just beyond what students can do alone"
      ],
      caution: "Group work only helps when roles and goals are clear. Watch for one student doing the thinking for everyone."
    },
    {
      id: "social-cognitive",
      name: "Social Cognitive Theory",
      family: "social",
      theorists: [
        { name: "Albert Bandura", years: "1925-2021", note: "Observational learning, self-efficacy, reciprocal determinism" }
      ],
      summary: "People learn by observing others, and their beliefs about their own capability (self-efficacy) shape effort and persistence.",
      ideas: [
        "Observational learning involves attention, retention, reproduction, and motivation",
        "Modeling, including think-alouds, makes expert thinking visible",
        "Self-efficacy grows from mastery experiences, vicarious success, encouragement, and managing stress",
        "Person, behavior, and environment influence one another (reciprocal determinism)"
      ],
      prompts: {
        "K-2": "Model a skill with a think-aloud (\"First I look at the picture, then I get my mouth ready for the first sound\"), then invite a student to model it next.",
        "3-5": "Share a short video or story of a peer who struggled and then succeeded, and ask, \"What strategies did they use that you could try?\"",
        "6-8": "Have students set a weekly goal, track progress, and write one sentence about a moment they overcame difficulty to build self-efficacy.",
        "9-12": "Show annotated exemplars from past students (with permission) at different levels and ask learners to identify the moves that made the strongest work strong."
      },
      lookFors: [
        "Teachers and peers modeling processes, not just products",
        "Opportunities for early, genuine success",
        "Goal setting and self-monitoring"
      ],
      caution: "Models are most effective when learners see them as similar to themselves. Choose models that reflect the diversity of your students."
    },
    {
      id: "experiential",
      name: "Experiential Learning",
      family: "constructivist",
      theorists: [
        { name: "John Dewey", years: "1859-1952", note: "Learning through experience and reflection; democratic education" },
        { name: "David A. Kolb", years: "b. 1939", note: "Experiential learning cycle" }
      ],
      summary: "Meaningful learning comes from doing, then reflecting on the experience, forming ideas, and testing them again.",
      ideas: [
        "Kolb's cycle: concrete experience, reflective observation, abstract conceptualization, active experimentation",
        "Reflection turns activity into learning",
        "Authentic problems connect school to life and community",
        "Education prepares students for participation in a democracy"
      ],
      prompts: {
        "K-2": "Plant seeds in different conditions (sun, shade, no water). Each week, draw what you see and talk about what might be happening.",
        "3-5": "Run a class store or bake sale; afterward, reflect on what went well, what the numbers showed, and what you would change next time.",
        "6-8": "Design a small community project (such as a school recycling audit), carry it out, and write a reflection using \"What? So what? Now what?\"",
        "9-12": "Connect a unit to a local issue: students interview community members, propose a solution, present it, and revise based on feedback."
      },
      lookFors: [
        "Hands-on or real-world experiences",
        "Structured reflection after activity",
        "Opportunities to apply and retest ideas"
      ],
      caution: "Activity is not the same as learning. Without planned reflection and clear goals, experiences can stay fun but shallow."
    },
    {
      id: "humanism",
      name: "Humanistic Learning Theory",
      family: "humanistic",
      theorists: [
        { name: "Abraham Maslow", years: "1908-1970", note: "Hierarchy of needs" },
        { name: "Carl Rogers", years: "1902-1987", note: "Student-centered learning, unconditional positive regard" },
        { name: "Edward Deci & Richard Ryan", years: "1985 onward", note: "Self-determination theory: autonomy, competence, relatedness" }
      ],
      summary: "Learners are whole people whose emotional safety, belonging, and sense of agency are prerequisites for deep learning.",
      ideas: [
        "Basic and psychological needs (safety, belonging) affect readiness to learn",
        "The teacher acts as a facilitator who shows genuine care",
        "Choice and autonomy fuel intrinsic motivation",
        "Self-evaluation and personal growth matter alongside achievement"
      ],
      prompts: {
        "K-2": "Start the day with a feelings check-in (a chart with faces) and a quick greeting for every child by name.",
        "3-5": "Offer a choice board for practicing a skill (write, draw, build, or record) so students pick how they show what they know.",
        "6-8": "Hold short student-teacher conferences where students set one personal learning goal and choose how to reach it.",
        "9-12": "Let students propose an independent inquiry project tied to their interests, with a self-assessment rubric they help create."
      },
      lookFors: [
        "A classroom climate where mistakes feel safe",
        "Meaningful student choice",
        "Relationships built intentionally"
      ],
      caution: "Maslow's hierarchy is better treated as a reminder than a strict sequence. Students can learn while some needs are unmet, and schools should address needs rather than wait on them."
    },
    {
      id: "constructionism",
      name: "Constructionism",
      family: "networked",
      theorists: [
        { name: "Seymour Papert", years: "1928-2016", note: "Logo programming language; Mindstorms" },
        { name: "Mitchel Resnick", years: "b. 1956", note: "Scratch; projects, passion, peers, and play" }
      ],
      summary: "People learn especially well when they are making a shareable artifact, whether a program, a model, or a story.",
      ideas: [
        "Building things in the world builds ideas in the head",
        "Projects should have a low floor, high ceiling, and wide walls",
        "Debugging and iteration are central learning experiences",
        "Sharing creations invites feedback and deeper understanding"
      ],
      prompts: {
        "K-2": "Use a floor robot or unplugged \"program your partner\" game: students write arrow directions to guide a classmate to a target.",
        "3-5": "Students build an animated story in a block-based tool like Scratch that explains a science cycle, then trade and debug each other's projects.",
        "6-8": "Design and build a model (cardboard, digital, or 3D-printed) that solves a classroom problem, documenting each version and why it changed.",
        "9-12": "Create a simulation or interactive data visualization about a topic of personal interest and present the design choices to peers."
      },
      lookFors: [
        "Students making something visible and shareable",
        "Iteration and debugging treated as normal",
        "Space for personal interests to shape projects"
      ],
      caution: "Making alone does not guarantee conceptual learning. Plan checkpoints where students explain the ideas behind what they built."
    },
    {
      id: "connectivism",
      name: "Connectivism",
      family: "networked",
      theorists: [
        { name: "George Siemens", years: "2004 paper", note: "\"Connectivism: A Learning Theory for the Digital Age\"" },
        { name: "Stephen Downes", years: "2005 onward", note: "Connective knowledge" }
      ],
      summary: "In a networked world, learning involves building and navigating connections among people, information sources, and tools.",
      ideas: [
        "Knowing where to find information is as important as knowing it",
        "Learning happens across networks of people and digital resources",
        "Evaluating sources and currency of information is a core skill",
        "Diverse perspectives strengthen a learner's network"
      ],
      prompts: {
        "K-2": "Build a class \"who can help\" wall: when you have a question about animals, letters, or numbers, which classmate, book, or adult could you ask?",
        "3-5": "Connect with another class (locally or abroad) to compare weather data and ask each other questions about their community.",
        "6-8": "Teach lateral reading: before trusting a website, open new tabs to check who made it and what other sources say about it.",
        "9-12": "Students curate a personal learning network (experts, organizations, datasets) on a topic and annotate why each source is credible."
      },
      lookFors: [
        "Explicit teaching of source evaluation",
        "Collaboration that extends beyond the classroom",
        "Students reflecting on how they found information"
      ],
      caution: "Connectivism is debated as a stand-alone learning theory. Use it alongside others, and attend to equity in device and internet access."
    },
    {
      id: "culturally-sustaining",
      name: "Culturally Relevant & Sustaining Pedagogy",
      family: "critical",
      theorists: [
        { name: "Gloria Ladson-Billings", years: "1995", note: "Culturally relevant pedagogy" },
        { name: "Geneva Gay", years: "2000", note: "Culturally responsive teaching" },
        { name: "Django Paris & H. Samy Alim", years: "2012 onward", note: "Culturally sustaining pedagogy" }
      ],
      summary: "Students learn best when their cultures, languages, and communities are treated as assets and the curriculum builds critical awareness.",
      ideas: [
        "Three pillars: academic success, cultural competence, and critical consciousness",
        "Students' home languages and practices are resources for learning",
        "Curriculum should reflect and sustain, not erase, students' identities",
        "High expectations paired with strong support"
      ],
      prompts: {
        "K-2": "Invite families to share a song, story, or word from home, and add it to a class \"Our Words\" book that you read together.",
        "3-5": "Use math problems built from students' lives and neighborhoods (such as local bus routes or family recipes) and let students write new ones.",
        "6-8": "Analyze whose voices are present and missing in a textbook chapter, then find a primary source that adds another perspective.",
        "9-12": "Students investigate an equity issue in their community, gather data, and present findings to an authentic audience such as a school board."
      },
      lookFors: [
        "Texts and examples that reflect students' identities",
        "Multilingual resources welcomed in learning",
        "Rigorous tasks with scaffolds, not lowered expectations"
      ],
      caution: "This is not about adding a cultural \"theme\" once a month. It requires ongoing relationships with students and families and reflection on one's own assumptions."
    }
  ];

  /* ---------- State ---------- */

  const state = {
    query: "",
    family: "all",
    band: "all"
  };

  /* ---------- Elements ---------- */

  const els = {
    grid: document.getElementById("theoryGrid"),
    search: document.getElementById("search"),
    chips: document.getElementById("familyChips"),
    bands: document.getElementById("gradeBands"),
    empty: document.getElementById("emptyState"),
    status: document.getElementById("resultsStatus"),
    statShown: document.getElementById("statShown"),
    statTheorists: document.getElementById("statTheorists"),
    statPrompts: document.getElementById("statPrompts"),
    statBand: document.getElementById("statBand"),
    dialog: document.getElementById("detailDialog"),
    dialogContent: document.getElementById("dialogContent"),
    dialogClose: document.getElementById("dialogClose"),
    toast: document.getElementById("toast"),
    themeToggle: document.getElementById("themeToggle")
  };

  /* ---------- Helpers ---------- */

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function searchableText(t) {
    return [
      t.name,
      FAMILIES[t.family],
      t.summary,
      t.ideas.join(" "),
      t.theorists.map(p => p.name + " " + p.note).join(" "),
      Object.values(t.prompts).join(" ")
    ].join(" ").toLowerCase();
  }

  const INDEX = THEORIES.map(t => ({ id: t.id, text: searchableText(t) }));

  function filtered() {
    const q = state.query.trim().toLowerCase();
    const terms = q ? q.split(/\s+/) : [];
    return THEORIES.filter((t, i) => {
      if (state.family !== "all" && t.family !== state.family) return false;
      return terms.every(term => INDEX[i].text.includes(term));
    });
  }

  function bandsToShow() {
    return state.band === "all" ? BANDS.slice(1).map(b => b.id) : [state.band];
  }

  let toastTimer;
  function showToast(msg) {
    els.toast.textContent = msg;
    els.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove("show"), 1800);
  }

  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      showToast("Prompt copied to clipboard");
    } catch (err) {
      showToast("Copy not available in this browser");
    }
  }

  function storageGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function storageSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ }
  }

  /* ---------- Rendering ---------- */

  function promptHTML(theory, band) {
    const text = theory.prompts[band];
    return `
      <div class="prompt">
        <span class="prompt-band">GRADES ${escapeHTML(band)}</span>
        <p class="prompt-text">${escapeHTML(text)}</p>
        <button class="copy-btn" type="button" data-copy="${escapeHTML(theory.id)}|${escapeHTML(band)}"
          aria-label="Copy ${escapeHTML(theory.name)} prompt for grades ${escapeHTML(band)}">Copy</button>
      </div>`;
  }

  function cardHTML(theory) {
    const num = THEORIES.indexOf(theory) + 1;
    const theoristNames = theory.theorists.map(p => p.name).join(", ");
    return `
      <article class="card" data-family="${theory.family}" aria-labelledby="title-${theory.id}">
        <div class="card-top">
          <span class="card-num">${String(num).padStart(2, "0")}</span>
          <span class="family-tag">${escapeHTML(FAMILIES[theory.family])}</span>
        </div>
        <h2 id="title-${theory.id}">${escapeHTML(theory.name)}</h2>
        <p class="theorists"><strong>Key theorists:</strong> ${escapeHTML(theoristNames)}</p>
        <p class="summary">${escapeHTML(theory.summary)}</p>
        <div>
          <p class="section-label">Core ideas</p>
          <ul class="ideas">${theory.ideas.map(i => `<li>${escapeHTML(i)}</li>`).join("")}</ul>
        </div>
        <div>
          <p class="section-label">Classroom prompts</p>
          <div class="prompts">${bandsToShow().map(b => promptHTML(theory, b)).join("")}</div>
        </div>
        <div class="card-actions">
          <button class="more-btn" type="button" data-detail="${theory.id}">More detail</button>
        </div>
      </article>`;
  }

  function render() {
    const list = filtered();
    els.grid.innerHTML = list.map(cardHTML).join("");
    els.empty.hidden = list.length > 0;

    const theoristCount = list.reduce((n, t) => n + t.theorists.length, 0);
    const promptCount = list.length * bandsToShow().length;

    els.statShown.textContent = list.length;
    els.statTheorists.textContent = theoristCount;
    els.statPrompts.textContent = promptCount;
    els.statBand.textContent = state.band === "all" ? "K-12" : state.band;

    const famText = state.family === "all" ? "all families" : FAMILIES[state.family];
    els.status.textContent = `Showing ${list.length} of ${THEORIES.length} theories (${famText}${state.query ? `, matching "${state.query}"` : ""}).`;
  }

  function renderFamilyChips() {
    const entries = [["all", "All"]].concat(Object.entries(FAMILIES));
    els.chips.innerHTML = entries.map(([id, label]) => `
      <button class="chip" type="button" data-family-filter="${id}" ${id !== "all" ? `data-family="${id}"` : ""}
        aria-pressed="${state.family === id}">
        ${id !== "all" ? '<span class="dot" aria-hidden="true"></span>' : ""}${escapeHTML(label)}
      </button>`).join("");
  }

  function renderBands() {
    els.bands.innerHTML = BANDS.map(b => `
      <button type="button" role="radio" data-band="${b.id}"
        aria-checked="${state.band === b.id}" tabindex="${state.band === b.id ? 0 : -1}">
        ${escapeHTML(b.label)}
      </button>`).join("");
  }

  function openDetail(id) {
    const t = THEORIES.find(x => x.id === id);
    if (!t) return;
    const inner = els.dialog.querySelector(".dialog-inner");
    inner.setAttribute("data-family", t.family);

    els.dialogContent.innerHTML = `
      <span class="family-tag">${escapeHTML(FAMILIES[t.family])}</span>
      <h2 id="dialogTitle">${escapeHTML(t.name)}</h2>
      <p>${escapeHTML(t.summary)}</p>

      <h3>Key theorists</h3>
      <ul class="theorist-list">
        ${t.theorists.map(p => `
          <li><strong>${escapeHTML(p.name)}</strong> <span class="years">(${escapeHTML(p.years)})</span><br>${escapeHTML(p.note)}</li>
        `).join("")}
      </ul>

      <h3>Core ideas</h3>
      <ul class="ideas">${t.ideas.map(i => `<li>${escapeHTML(i)}</li>`).join("")}</ul>

      <h3>Classroom prompts by grade band</h3>
      <div class="dialog-prompts">${BANDS.slice(1).map(b => promptHTML(t, b.id)).join("")}</div>

      <h3>What to look for in the classroom</h3>
      <ul class="look-fors">${t.lookFors.map(l => `<li>${escapeHTML(l)}</li>`).join("")}</ul>

      <h3>Keep in mind</h3>
      <p class="caution">${escapeHTML(t.caution)}</p>
    `;

    if (typeof els.dialog.showModal === "function") {
      els.dialog.showModal();
    } else {
      els.dialog.setAttribute("open", "");
    }
    els.dialogClose.focus();
  }

  function closeDetail() {
    if (typeof els.dialog.close === "function") {
      els.dialog.close();
    } else {
      els.dialog.removeAttribute("open");
    }
  }

  /* ---------- Theme ---------- */

  function applyTheme(theme) {
    const dark = theme === "dark";
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    els.themeToggle.setAttribute("aria-pressed", String(dark));
    els.themeToggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    els.themeToggle.querySelector(".theme-icon").innerHTML = dark ? "&#9788;" : "&#9790;";
    els.themeToggle.querySelector(".theme-label").textContent = dark ? "Light" : "Dark";
  }

  /* ---------- Events ---------- */

  let searchTimer;
  els.search.addEventListener("input", e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = e.target.value;
      render();
    }, 120);
  });

  els.chips.addEventListener("click", e => {
    const btn = e.target.closest("[data-family-filter]");
    if (!btn) return;
    state.family = btn.dataset.familyFilter;
    renderFamilyChips();
    render();
  });

  function selectBand(id, focus) {
    state.band = id;
    renderBands();
    render();
    if (focus) els.bands.querySelector(`[data-band="${id}"]`).focus();
  }

  els.bands.addEventListener("click", e => {
    const btn = e.target.closest("[data-band]");
    if (btn) selectBand(btn.dataset.band, false);
  });

  // Arrow-key navigation for the radio group
  els.bands.addEventListener("keydown", e => {
    const keys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const i = BANDS.findIndex(b => b.id === state.band);
    const step = (e.key === "ArrowLeft" || e.key === "ArrowUp") ? -1 : 1;
    const next = BANDS[(i + step + BANDS.length) % BANDS.length];
    selectBand(next.id, true);
  });

  // Delegated clicks for copy and detail buttons (cards and dialog)
  document.addEventListener("click", e => {
    const copyBtn = e.target.closest("[data-copy]");
    if (copyBtn) {
      const [id, band] = copyBtn.dataset.copy.split("|");
      const t = THEORIES.find(x => x.id === id);
      if (t) copyText(`${t.name} (Grades ${band}): ${t.prompts[band]}`);
      return;
    }
    const detailBtn = e.target.closest("[data-detail]");
    if (detailBtn) openDetail(detailBtn.dataset.detail);
  });

  els.dialogClose.addEventListener("click", closeDetail);

  // Close the dialog when clicking the backdrop
  els.dialog.addEventListener("click", e => {
    if (e.target === els.dialog) closeDetail();
  });

  els.themeToggle.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    storageSet("lt-theme", next);
  });

  /* ---------- Init ---------- */

  const savedTheme = storageGet("lt-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

  renderFamilyChips();
  renderBands();
  render();
})();
