/* ============ Christmas at Utövägen — danick-events ============ */

/* ---------------- i18n ---------------- */

const I18N = {
  en: {
    "hero.kicker": "You are warmly invited to",
    "hero.title": "Christmas Eve 2026",
    "hero.sub": "An evening of food, warmth and Christmas cheer",
    "hero.when": "Thursday, 24 December · from 18:00 · Saltsjö-Boo",

    "countdown.label": "Counting down to the party",
    "countdown.days": "days",
    "countdown.hours": "hours",
    "countdown.mins": "minutes",
    "countdown.secs": "seconds",
    "countdown.now": "It's happening right now — come on in!",

    "party.heading": "The Main Event",
    "party.whenLabel": "When:",
    "party.when": "Thursday, 24 December 2026, from 18:00",
    "party.whereLabel": "Where:",
    "party.dressLabel": "Dress code:",
    "party.dress": "Festive — Christmas sweaters strongly encouraged",
    "party.rsvpLabel": "RSVP:",
    "party.rsvp": "Please let us know by 17 December using the form below",
    "party.hostsLabel": "Your hosts:",
    "party.hostNote": "Sherlock: Chief of Security & Treats",

    "rsvp.heading": "RSVP",
    "rsvp.intro": "Tell us if you're coming — it takes less time than a Slussen transfer.",
    "rsvp.notSoon": "RSVP opens soon — the hosts are still untangling the Christmas lights.",
    "rsvp.name": "Your name",
    "rsvp.namePh": "e.g. Rudolph Reindeer",
    "rsvp.attending": "Will you join us on Christmas Eve?",
    "rsvp.yes": "Yes, wouldn't miss it!",
    "rsvp.no": "Sadly, no",
    "rsvp.guests": "Number of guests (including you)",
    "rsvp.dietary": "Dietary restrictions or allergies",
    "rsvp.dietaryPh": "None",
    "rsvp.message": "Message or Christmas song request",
    "rsvp.messagePh": "Anything we should know? A song Sherlock should howl along to?",
    "rsvp.submit": "Send RSVP",
    "rsvp.sending": "Sending…",
    "rsvp.success": "Thank you! Your RSVP was sent — we can't wait to celebrate with you!",
    "rsvp.error": "Something went wrong on our end. Please try again, or message Daniel directly.",
    "rsvp.required": "Please fill in your name and whether you're coming.",

    "music.play": "Play a Christmas song",
    "music.pause": "Pause the music",

    "footer.made": "Hosted with love (and minor delays) by Daniel, Victoria & Sherlock 🐾",
    "footer.sub": "Saltsjö-Boo · Christmas Eve 2026",
  },

  pt: {
    "hero.kicker": "Você está calorosamente convidado(a) para",
    "hero.title": "Véspera de Natal 2026",
    "hero.sub": "Uma noite de comida, aconchego e alegria natalina",
    "hero.when": "Quinta-feira, 24 de dezembro · a partir das 18:00 · Saltsjö-Boo",

    "countdown.label": "Contagem regressiva para a festa",
    "countdown.days": "dias",
    "countdown.hours": "horas",
    "countdown.mins": "minutos",
    "countdown.secs": "segundos",
    "countdown.now": "Está acontecendo agora — pode entrar!",

    "party.heading": "O Evento Principal",
    "party.whenLabel": "Quando:",
    "party.when": "Quinta-feira, 24 de dezembro de 2026, a partir das 18:00",
    "party.whereLabel": "Onde:",
    "party.dressLabel": "Traje:",
    "party.dress": "Festivo — suéteres de Natal fortemente encorajados",
    "party.rsvpLabel": "Confirmação:",
    "party.rsvp": "Por favor, confirme até 17 de dezembro usando o formulário abaixo",
    "party.hostsLabel": "Seus anfitriões:",
    "party.hostNote": "Sherlock: Chefe de Segurança e Petiscos",

    "rsvp.heading": "Confirme sua presença",
    "rsvp.intro": "Diga se você vem — leva menos tempo do que uma baldeação em Slussen.",
    "rsvp.notSoon": "A confirmação abre em breve — os anfitriões ainda estão desenrolando as luzes de Natal.",
    "rsvp.name": "Seu nome",
    "rsvp.namePh": "ex. Rodolfo Rena",
    "rsvp.attending": "Você vem à nossa véspera de Natal?",
    "rsvp.yes": "Sim, não perderia por nada!",
    "rsvp.no": "Infelizmente não",
    "rsvp.guests": "Número de convidados (incluindo você)",
    "rsvp.dietary": "Restrições alimentares ou alergias",
    "rsvp.dietaryPh": "Nenhuma",
    "rsvp.message": "Mensagem ou pedido de música de Natal",
    "rsvp.messagePh": "Algo que devamos saber? Uma música para o Sherlock uivar junto?",
    "rsvp.submit": "Enviar confirmação",
    "rsvp.sending": "Enviando…",
    "rsvp.success": "Obrigado! Sua confirmação foi enviada — mal podemos esperar para celebrar com você!",
    "rsvp.error": "Algo deu errado do nosso lado. Tente de novo ou mande uma mensagem direta para o Daniel.",
    "rsvp.required": "Por favor, preencha seu nome e diga se você vem.",

    "music.play": "Tocar uma música de Natal",
    "music.pause": "Pausar a música",

    "footer.made": "Feito com amor (e pequenos atrasos) por Daniel, Victoria & Sherlock 🐾",
    "footer.sub": "Saltsjö-Boo · Véspera de Natal 2026",
  },
};

let currentLang = "en";

function applyLang(lang) {
  if (!I18N[lang]) lang = "en";
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (I18N[lang][key] !== undefined) el.textContent = I18N[lang][key];
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (I18N[lang][key] !== undefined) el.placeholder = I18N[lang][key];
  });

  document.getElementById("lang-en").classList.toggle("active", lang === "en");
  document.getElementById("lang-pt").classList.toggle("active", lang === "pt");

  try { localStorage.setItem("danick-lang", lang); } catch (e) { /* private mode */ }
}

function initLang() {
  let lang = "en";
  try {
    lang = localStorage.getItem("danick-lang")
      || (navigator.language || "en").toLowerCase().split("-")[0];
  } catch (e) { /* private mode */ }
  applyLang(lang);

  document.getElementById("lang-en").addEventListener("click", () => applyLang("en"));
  document.getElementById("lang-pt").addEventListener("click", () => applyLang("pt"));
}

/* ---------------- countdown ---------------- */

const PARTY_DATE = new Date("2026-12-24T18:00:00+01:00");

function tickCountdown() {
  const diff = PARTY_DATE - new Date();
  const grid = document.querySelector(".countdown-grid");

  if (diff <= 0) {
    grid.innerHTML = "";
    const label = document.querySelector(".countdown-label");
    label.textContent = I18N[currentLang]["countdown.now"];
    return;
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  document.getElementById("cd-days").textContent = days;
  document.getElementById("cd-hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("cd-mins").textContent = String(mins).padStart(2, "0");
  document.getElementById("cd-secs").textContent = String(secs).padStart(2, "0");
}

/* ---------------- snow ---------------- */

function initSnow() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const container = document.getElementById("snow");
  const glyphs = ["❄", "❅", "❆", "•"];
  const count = Math.min(70, Math.floor(window.innerWidth / 18));

  for (let i = 0; i < count; i++) {
    const flake = document.createElement("span");
    flake.className = "snowflake";
    flake.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
    flake.style.left = Math.random() * 100 + "vw";
    flake.style.fontSize = (Math.random() * 0.9 + 0.5) + "rem";
    flake.style.opacity = (Math.random() * 0.6 + 0.3).toFixed(2);
    const duration = Math.random() * 8 + 7;
    flake.style.animationDuration = duration + "s";
    flake.style.animationDelay = (-Math.random() * duration) + "s";
    container.appendChild(flake);
  }
}

/* ---------------- RSVP form ---------------- */

function initForm() {
  const form = document.getElementById("rsvp-form");
  const status = document.getElementById("form-status");
  const notSoon = document.getElementById("rsvp-not-soon");
  const submitBtn = form.querySelector(".submit-btn");

  const configured = typeof RSVP_CONFIG !== "undefined"
    && RSVP_CONFIG.formId
    && RSVP_CONFIG.fields.name
    && RSVP_CONFIG.fields.attending;

  if (!configured) {
    notSoon.hidden = false;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.className = "form-status";

    if (!form.reportValidity()) {
      status.textContent = I18N[currentLang]["rsvp.required"];
      status.classList.add("err");
      return;
    }

    if (!configured) {
      notSoon.hidden = false;
      notSoon.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    submitBtn.disabled = true;
    status.textContent = I18N[currentLang]["rsvp.sending"];

    const data = new FormData(form);
    const body = new URLSearchParams();
    body.append(RSVP_CONFIG.fields.name, data.get("name") || "");
    body.append(RSVP_CONFIG.fields.attending, data.get("attending") || "");
    body.append(RSVP_CONFIG.fields.guests, data.get("guests") || "");
    body.append(RSVP_CONFIG.fields.dietary, data.get("dietary") || "");
    body.append(RSVP_CONFIG.fields.message, data.get("message") || "");

    try {
      // Google Forms accepts cross-site POSTs; the response is opaque
      // (no-cors), so a resolved promise means the submission went out.
      await fetch(
        `https://docs.google.com/forms/d/e/${RSVP_CONFIG.formId}/formResponse`,
        { method: "POST", mode: "no-cors", body }
      );
      form.reset();
      status.textContent = I18N[currentLang]["rsvp.success"];
      status.classList.add("ok");
    } catch (err) {
      status.textContent = I18N[currentLang]["rsvp.error"];
      status.classList.add("err");
    } finally {
      submitBtn.disabled = false;
    }
  });
}

/* ---------------- Christmas music ----------------
   "Jingly Bells" by Scott Holmes, source: Free Music Archive,
   licensed CC BY-NC. Played from assets/jinglebells.mp3.
   Browsers require a user gesture before playing sound,
   hence the button. */

let musicPlaying = false;

function initMusic() {
  const btn = document.getElementById("music-btn");
  const audio = new Audio("assets/jinglebells.mp3");
  audio.loop = true;

  btn.addEventListener("click", () => {
    if (musicPlaying) {
      audio.pause();
      musicPlaying = false;
    } else {
      audio.play().then(() => {
        musicPlaying = true;
      }).catch(() => {
        musicPlaying = false;
      }).finally(() => {
        updateMusicBtn();
      });
      return;
    }
    updateMusicBtn();
  });

  function updateMusicBtn() {
    btn.classList.toggle("playing", musicPlaying);
    btn.setAttribute("aria-pressed", String(musicPlaying));
    document.getElementById("music-label").textContent =
      I18N[currentLang][musicPlaying ? "music.pause" : "music.play"];
    btn.querySelector(".music-icon").textContent = musicPlaying ? "🎶" : "🎵";
  }

  // If the language changes while playing, keep the label in sync.
  document.getElementById("lang-en").addEventListener("click", updateMusicBtn);
  document.getElementById("lang-pt").addEventListener("click", updateMusicBtn);
}

/* ---------------- boot ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  tickCountdown();
  setInterval(tickCountdown, 1000);
  initSnow();
  initForm();
  initMusic();
});
