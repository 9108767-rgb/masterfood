/* Прототип конструктора рационов — клиентская логика макета.
   Данные демонстрационные; расчёт повторяет серверную формулу ТЗ п.9. */

const CATS = [
  { key: "basic", name: "Базовый", note: "Простые блюда, 4 приёма пищи" },
  { key: "optimal", name: "Оптимальный", note: "Больше белка и овощей" },
  { key: "premium", name: "Премиальный", note: "Рыба, стейки, фермерские продукты" },
];

const CAT_GEN = { basic: "Базового", optimal: "Оптимального", premium: "Премиального" };

const MEALS = [
  { key: "breakfast", name: "Завтрак" },
  { key: "lunch", name: "Обед" },
  { key: "snack", name: "Полдник" },
  { key: "dinner", name: "Ужин" },
];

const THUMB = {
  breakfast: "img/dish-breakfast.webp",
  lunch: "img/dish-lunch.webp",
  snack: "img/dish-snack.webp",
  dinner: "img/dish-dinner.webp",
};
const BOWL = { basic: "img/bowl-basic.webp", optimal: "img/bowl-optimal.webp", premium: "img/bowl-premium.webp" };

const DISHES = {
  basic: {
    breakfast: [
      { code: "BR-01", name: "Овсяная каша с яблоком", kcal: 320, price: 150 },
      { code: "BR-02", name: "Гречневая каша с маслом", kcal: 300, price: 150 },
      { code: "BR-03", name: "Рисовая каша с тыквой", kcal: 310, price: 150 },
    ],
    lunch: [
      { code: "LN-01", name: "Куриная грудка с рисом", kcal: 520, price: 350 },
      { code: "LN-02", name: "Тефтели с гречкой", kcal: 540, price: 350 },
      { code: "LN-03", name: "Рыбные котлеты с пюре", kcal: 500, price: 350 },
    ],
    snack: [
      { code: "SN-01", name: "Йогурт натуральный", kcal: 180, price: 150 },
      { code: "SN-02", name: "Яблоко с корицей", kcal: 120, price: 150 },
      { code: "SN-03", name: "Творог с зеленью", kcal: 200, price: 150 },
    ],
    dinner: [
      { code: "DN-01", name: "Тушёные овощи с курицей", kcal: 480, price: 350 },
      { code: "DN-02", name: "Куриная котлета с гречкой", kcal: 500, price: 350 },
      { code: "DN-03", name: "Овощное рагу с фасолью", kcal: 430, price: 350 },
    ],
  },
  optimal: {
    breakfast: [
      { code: "BR-11", name: "Блинчики с творогом", kcal: 420, price: 200 },
      { code: "BR-12", name: "Омлет с сыром и зеленью", kcal: 400, price: 200 },
      { code: "BR-13", name: "Сырники с изюмом", kcal: 440, price: 200 },
    ],
    lunch: [
      { code: "LN-11", name: "Индейка с гречкой и овощами", kcal: 610, price: 450 },
      { code: "LN-12", name: "Куриное филе с булгуром", kcal: 590, price: 450 },
      { code: "LN-13", name: "Говядина тушёная с рисом", kcal: 620, price: 450 },
    ],
    snack: [
      { code: "SN-11", name: "Творожная запеканка", kcal: 260, price: 200 },
      { code: "SN-12", name: "Смузи ягодный", kcal: 210, price: 200 },
      { code: "SN-13", name: "Хумус с овощными палочками", kcal: 240, price: 200 },
    ],
    dinner: [
      { code: "DN-11", name: "Котлеты из индейки с пюре", kcal: 590, price: 450 },
      { code: "DN-12", name: "Куриное бедро с овощами", kcal: 570, price: 450 },
      { code: "DN-13", name: "Зразы с грибами и рисом", kcal: 600, price: 450 },
    ],
  },
  premium: {
    breakfast: [
      { code: "BR-21", name: "Сырники с ягодным соусом", kcal: 480, price: 250 },
      { code: "BR-22", name: "Яйца Бенедикт с лососем", kcal: 520, price: 250 },
      { code: "BR-23", name: "Овсянка с киноа и манго", kcal: 450, price: 250 },
    ],
    lunch: [
      { code: "LN-21", name: "Лосось с овощами гриль", kcal: 640, price: 550 },
      { code: "LN-22", name: "Стейк из мраморной говядины", kcal: 700, price: 550 },
      { code: "LN-23", name: "Утиная грудка с киноа", kcal: 660, price: 550 },
    ],
    snack: [
      { code: "SN-21", name: "Чиа-пудинг с манго", kcal: 310, price: 250 },
      { code: "SN-22", name: "Протеиновый десерт с ягодами", kcal: 300, price: 250 },
      { code: "SN-23", name: "Сырная тарелка", kcal: 330, price: 250 },
    ],
    dinner: [
      { code: "DN-21", name: "Стейк из говядины с овощами", kcal: 720, price: 550 },
      { code: "DN-22", name: "Лосось на гриле с брокколи", kcal: 680, price: 550 },
      { code: "DN-23", name: "Креветки с овощами и рисом", kcal: 650, price: 550 },
    ],
  },
};

/* Варианты: калорийность ИТОГОВАЯ (блюдо + добавка). "none" = без добавки. */
const VARIANTS = {
  "BR-01": [
    { code: "none", name: "Без добавки", kcal: 320 },
    { code: "butter", name: "С сливочным маслом", kcal: 360 },
    { code: "honey", name: "С мёдом", kcal: 380 },
  ],
  "BR-11": [
    { code: "none", name: "Без соуса", kcal: 420 },
    { code: "strawberry", name: "С клубничным соусом", kcal: 470 },
    { code: "sourcream", name: "Со сметаной", kcal: 460 },
    { code: "chocolate", name: "С шоколадным соусом", kcal: 520 },
  ],
  "BR-12": [
    { code: "none", name: "Без добавки", kcal: 400 },
    { code: "cheese", name: "С двойным сыром", kcal: 470 },
  ],
  "BR-21": [
    { code: "none", name: "Без соуса", kcal: 480 },
    { code: "berry", name: "С ягодным соусом", kcal: 520 },
    { code: "condensed", name: "Со сгущённым молоком", kcal: 560 },
  ],
  "SN-11": [
    { code: "none", name: "Без топпинга", kcal: 260 },
    { code: "jam", name: "С джемом", kcal: 300 },
    { code: "condensed", name: "Со сгущённым молоком", kcal: 330 },
  ],
};

const DAYS = 10;
const MIN_DAYS = 3;
const MAX_DAYS = 10;
const TZ = "Asia/Yekaterinburg"; // Челябинск

/* Ближайшая доставка зависит от времени приёма заказов (SITE.cutoff, правится в админке).
   До отсечения заказ оформляется на завтра, после — только на послезавтра. */
let DATES = [];
let SCHED = null;

function cutoffMinutes() {
  const [h, m] = String(SITE.cutoff || "17:00").split(":").map(Number);
  return (h || 0) * 60 + (m || 0);
}

function nowInTz() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hour12: false,
  }).formatToParts(new Date());
  const get = (t) => Number(parts.find((p) => p.type === t).value);
  return { y: get("year"), m: get("month"), d: get("day"), hh: get("hour") % 24, mm: get("minute") };
}

function buildDates() {
  const n = nowInTz();
  const nowMin = n.hh * 60 + n.mm;
  const open = nowMin < cutoffMinutes();
  const start = new Date(n.y, n.m - 1, n.d);
  start.setDate(start.getDate() + (open ? 1 : 2));
  DATES = Array.from({ length: DAYS }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d;
  });
  SCHED = { open, now: new Date(n.y, n.m - 1, n.d), hh: n.hh, mm: n.mm, start: new Date(start) };
  return SCHED;
}

const isoOf = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const iso = (i) => isoOf(DATES[i]);

/* Если вкладка открыта долго, дата может «перейти» через время отсечения или полночь:
   пересобираем календарь и переносим правки по фактическим датам, а не по индексам. */
function shiftIdxMap(map, oldIso, newIso) {
  const out = new Map();
  for (const [k, v] of map) {
    const parts = String(k).split("|");
    const at = newIso.indexOf(oldIso[Number(parts[0])]);
    if (at >= 0) out.set([at, ...parts.slice(1)].join("|"), v);
  }
  return out;
}

function refreshSchedule() {
  const oldIso = DATES.map(isoOf);
  const oldSel = [...state.selected].map((i) => oldIso[i]);
  const oldOpen = oldIso[state.openDay];
  buildDates();
  const newIso = DATES.map(isoOf);
  if (oldIso[0] === newIso[0]) return false;
  state.dayCat = shiftIdxMap(state.dayCat, oldIso, newIso);
  state.overrides = shiftIdxMap(state.overrides, oldIso, newIso);
  state.variants = shiftIdxMap(state.variants, oldIso, newIso);
  state.saved = shiftIdxMap(state.saved, oldIso, newIso);
  state.selected = new Set(oldSel.map((d) => newIso.indexOf(d)).filter((i) => i >= 0));
  if (!state.selected.size) state.selected = new Set([0, 1, 2]);
  const at = newIso.indexOf(oldOpen);
  state.openDay = at >= 0 ? at : [...state.selected].sort((a, b) => a - b)[0];
  state.swap = "";
  renderAll();
  return true;
}

const state = {
  base: "basic",
  dayCat: new Map(),    // dateIdx -> basic|optimal|premium (рацион конкретного дня)
  selected: new Set([0, 1, 2]),
  overrides: new Map(), // "dateIdx|meal" -> {code,name,kcal,price,cat}
  variants: new Map(),  // "dateIdx|meal" -> variant code
  saved: new Map(),     // "dateIdx|cat" -> {ov, vars} — правки дня, сохранённые для каждого рациона
  openDay: 0,
  mode: "overview",     // overview = краткий список, edit = замена блюд
  compare: new Set(),   // дни, где раскрыто сравнение трёх категорий
  swap: "",             // "dateIdx|meal" — в какой строке открыт выбор замены
  info: new Set(),      // "dateIdx|meal" — где раскрыт состав и КБЖУ
};

/* Рацион дня: если для даты выбрана своя категория — она, иначе базовый рацион заказа. */
const catOf = (i) => state.dayCat.get(i) || state.base;
const catName = (key) => (CATS.find((c) => c.key === key) || CATS[0]).name;

/* Настройки витрины: правятся в админке (admin.html → «Рационы и контакты»),
   хранятся в localStorage, чтобы макет и админка читали одно и то же. */
const SETTINGS_KEY = "mf_site_settings";
const DEFAULT_SETTINGS = {
  cal: { basic: [1500, 1700], optimal: [1700, 2000], premium: [1800, 2100] },
  phone: "+7 (351) 2-400-400",
  phoneNote: "Челябинск, ежедневно 9:00–20:00",
  cutoff: "17:00",   // до этого времени (по Челябинску) заказ можно оформить на завтра
};
let SITE = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));

function loadSiteSettings() {
  try {
    const raw = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "null");
    if (!raw) return;
    if (raw.phone) SITE.phone = String(raw.phone);
    if (raw.phoneNote) SITE.phoneNote = String(raw.phoneNote);
    if (/^([01]\d|2[0-3]):[0-5]\d$/.test(String(raw.cutoff || ""))) SITE.cutoff = String(raw.cutoff);
    if (raw.cal) {
      Object.keys(DEFAULT_SETTINGS.cal).forEach((k) => {
        const v = raw.cal[k];
        if (Array.isArray(v) && v.length === 2 && v.every((x) => Number.isFinite(+x)) && +v[0] > 0 && +v[1] >= +v[0]) {
          SITE.cal[k] = [Math.round(+v[0]), Math.round(+v[1])];
        }
      });
    }
  } catch (e) { /* битые настройки игнорируем — остаются стандартные */ }
}

const num = (n) => Math.round(n).toLocaleString("ru-RU");
const calOf = (cat) => SITE.cal[cat] || DEFAULT_SETTINGS.cal[cat];
const calText = (cat) => `${num(calOf(cat)[0])}–${num(calOf(cat)[1])} ккал`;

function applySiteSettings() {
  const a = document.getElementById("head-phone");
  if (a) {
    a.href = "tel:" + String(SITE.phone).replace(/[^\d+]/g, "");
    const t = document.getElementById("head-phone-num");
    const n = document.getElementById("head-phone-note");
    if (t) t.textContent = SITE.phone;
    if (n) n.textContent = SITE.phoneNote;
  }
}

const rub = (n) => n.toLocaleString("ru-RU") + " ₽";
const DOW = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
const MON = ["января", "февраля", "марта", "апреля", "мая", "июня",
             "июля", "августа", "сентября", "октября", "ноября", "декабря"];

function dishFor(dateIdx, cat, meal) {
  const ov = state.overrides.get(`${dateIdx}|${meal}`);
  if (ov && ov.cat === cat) return ov;
  const list = DISHES[cat][meal];
  return list[dateIdx % list.length];
}

function baseDish(dateIdx, meal) {
  const list = DISHES[catOf(dateIdx)][meal];
  return list[dateIdx % list.length];
}

function effectiveDish(dateIdx, meal) {
  const ov = state.overrides.get(`${dateIdx}|${meal}`);
  if (ov) return ov;
  return baseDish(dateIdx, meal);
}

function dishKcal(dateIdx, meal, dish) {
  const v = state.variants.get(`${dateIdx}|${meal}`);
  if (v) {
    const list = VARIANTS[dish.code] || [];
    const found = list.find((x) => x.code === v);
    if (found) return found.kcal;
  }
  return dish.kcal;
}

function dayTotals(dateIdx) {
  let price = 0, kcal = 0;
  for (const m of MEALS) {
    const d = effectiveDish(dateIdx, m.key);
    price += d.price;
    kcal += dishKcal(dateIdx, m.key, d);
  }
  return { price, kcal };
}

function orderTotals() {
  let price = 0, kcal = 0;
  for (const i of state.selected) {
    const t = dayTotals(i);
    price += t.price;
    kcal += t.kcal;
  }
  const n = state.selected.size || 1;
  return { price, kcal, days: state.selected.size, avgKcal: Math.round(kcal / n) };
}

function renderTariffs() {
  const host = document.getElementById("tariffs-list");
  host.innerHTML = CATS.map((c) => {
    const price = MEALS.reduce((s, m) => s + DISHES[c.key][m.key][0].price, 0);
    return `<button class="tariff ${state.base === c.key ? "on" : ""}" data-cat="${c.key}" aria-pressed="${state.base === c.key}">
      <span class="tariff-check" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12.5 9.5 18 20 6.5"/></svg></span>
      <span class="tariff-photo"><img decoding="async" src="${BOWL[c.key]}" alt="${c.name}"></span>
      <span class="tariff-body">
        <b class="tariff-name">${c.name}</b>
        <span class="tariff-note">${c.note}</span>
        <span class="tariff-kcal" title="Ориентир по калорийности дня, настраивается в админке"><svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M12 3c4 4 6 7 6 10a6 6 0 0 1-12 0c0-3 2-6 6-10Z"/></svg>${calText(c.key)}</span>
        <span class="tariff-price">${rub(price)}<i> / день</i></span>
      </span>
    </button>`;
  }).join("");
  host.querySelectorAll(".tariff").forEach((b) => {
    b.addEventListener("click", () => {
      if (b.dataset.cat === state.base) return;
      DATES.forEach((_, i) => stashDay(i));      // запоминаем правки под текущий рацион
      state.base = b.dataset.cat;
      state.dayCat.clear();
      DATES.forEach((_, i) => { dropActive(i); restoreDay(i); });
      renderAll();
      toast("Рацион заказа: " + catName(state.base) + " — применён ко всем датам. Ваши настройки дней сохранены");
    });
  });
}

function datesNote() {
  if (!SCHED) return "";
  const hhmm = String(SITE.cutoff || "17:00");
  const f = (d) => `${d.getDate()} ${MON[d.getMonth()]}`;
  const tomorrow = new Date(SCHED.now); tomorrow.setDate(tomorrow.getDate() + 1);
  if (SCHED.open) {
    return `Сейчас ${String(SCHED.hh).padStart(2, "0")}:${String(SCHED.mm).padStart(2, "0")} — до ${hhmm} заказ ещё можно оформить на <b>${f(DATES[0])}</b> (завтра). Позже ближайшая дата будет ${f(DATES[1])}.`;
  }
  return `Приём на ${f(tomorrow)} сегодня закрыт (был до ${hhmm}). Ближайшая дата доставки — <b>${f(DATES[0])}</b>.`;
}

function renderDates() {
  const note = document.getElementById("dates-note");
  if (note) note.innerHTML = datesNote();
  const lead = document.getElementById("dates-lead");
  if (lead) lead.innerHTML = `Доставка ежедневно вечером. Заказ на завтра принимается до ${String(SITE.cutoff || "17:00")} по Челябинску.`;
  const host = document.getElementById("dates");
  host.innerHTML = DATES.map((d, i) => `
    <button class="date-chip" data-i="${i}" aria-pressed="${state.selected.has(i)}">
      <span class="dow">${DOW[d.getDay()]}</span>
      <span class="day">${d.getDate()}</span>
      <span class="mon">${MON[d.getMonth()].slice(0, 3)}</span>
      <span class="dc-check" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12.5 9.5 18 20 6.5"/></svg></span>
    </button>`).join("");
  host.querySelectorAll(".date-chip").forEach((b) => {
    b.addEventListener("click", () => {
      const i = Number(b.dataset.i);
      if (state.selected.has(i)) {
        if (state.selected.size <= MIN_DAYS) {
          toast(`Минимум ${MIN_DAYS} дня — снимите другую дату`);
          return;
        }
        state.selected.delete(i);
      } else {
        if (state.selected.size >= MAX_DAYS) {
          toast(`Максимум ${MAX_DAYS} дней`);
          return;
        }
        state.selected.add(i);
        state.openDay = i;
      }
      renderAll();
    });
  });
}

/* ---------- рацион конкретного дня ---------- */
/* Правки дня хранятся отдельно для каждого рациона: переключили рацион и вернулись —
   замены на месте. Сброс к стандартному набору — кнопка «Стандартный набор» у дня. */
function stashDay(i) {
  const cat = catOf(i);
  const ov = new Map(), vars = new Map();
  MEALS.forEach((m) => {
    const k = `${i}|${m.key}`;
    if (state.overrides.has(k)) ov.set(m.key, state.overrides.get(k));
    const v = state.variants.get(k);
    if (v && v !== "none") vars.set(m.key, v);
  });
  const key = `${i}|${cat}`;
  if (ov.size || vars.size) state.saved.set(key, { ov, vars });
  else state.saved.delete(key);
}

function dropActive(i) {
  [...state.overrides.keys()].forEach((k) => { if (k.startsWith(i + "|")) state.overrides.delete(k); });
  [...state.variants.keys()].forEach((k) => { if (k.startsWith(i + "|")) state.variants.delete(k); });
  state.swap = "";
}

function restoreDay(i) {
  const rec = state.saved.get(`${i}|${catOf(i)}`);
  if (!rec) return;
  rec.ov.forEach((d, meal) => state.overrides.set(`${i}|${meal}`, d));
  rec.vars.forEach((v, meal) => state.variants.set(`${i}|${meal}`, v));
}

function resetDay(i) {
  CATS.forEach((c) => state.saved.delete(`${i}|${c.key}`));
  dropActive(i);
  state.dayCat.delete(i);
  renderAll();
  toast(`${DATES[i].getDate()} ${MON[DATES[i].getMonth()]}: стандартный набор рациона ${catName(state.base)}`);
}

function resetAllDays() {
  state.saved.clear();
  state.dayCat.clear();
  DATES.forEach((_, i) => dropActive(i));
  renderAll();
  toast("Все замены сброшены — меню по базовому рациону");
}

function setDayCat(i, cat) {
  if (!DATES[i] || cat === catOf(i)) return false;
  stashDay(i);                                  // правки текущего рациона остаются в памяти
  if (cat === state.base) state.dayCat.delete(i);
  else state.dayCat.set(i, cat);
  dropActive(i);
  restoreDay(i);                                // возвращаем то, что уже настраивали под этот рацион
  renderAll();
  toast(`${DATES[i].getDate()} ${MON[DATES[i].getMonth()]}: рацион ${catName(cat)}`);
  return true;
}

function baseDayPrice(i) {
  return MEALS.reduce((s, m) => {
    const list = DISHES[state.base][m.key];
    return s + list[i % list.length].price;
  }, 0);
}

/* Калорийность заказа: пока день не правили — диапазон рациона из настроек,
   после замен — факт по выбранным блюдам. Общая и в среднем на день. */
function kcalSummary() {
  let min = 0, max = 0, edits = 0;
  const days = [...state.selected];
  days.forEach((i) => {
    const ch = dayChanges(i);
    if (ch.replaced || ch.variant) {
      edits++;
      const k = dayTotals(i).kcal;
      min += k; max += k;
    } else {
      const r = calOf(catOf(i));
      min += r[0]; max += r[1];
    }
  });
  const n = days.length;
  return {
    min, max, n, edits,
    exact: min === max,
    avgMin: n ? Math.round(min / n) : 0,
    avgMax: n ? Math.round(max / n) : 0,
  };
}

function kcalParts() {
  const s = kcalSummary();
  if (!s.n) return { main: "—", sub: "" };
  return {
    main: s.exact ? `${num(s.min)} ккал` : `${num(s.min)}–${num(s.max)} ккал`,
    sub: s.exact ? `${num(s.avgMin)} ккал/день` : `${num(s.avgMin)}–${num(s.avgMax)} ккал/день`,
  };
}

function catSwitchHtml(i) {
  const cur = catOf(i);
  const delta = dayTotals(i).price - baseDayPrice(i);
  let note = "";
  if (cur !== state.base && delta !== 0) {
    const sign = delta > 0 ? "+" : "−";
    note = `<span class="cat-delta ${delta > 0 ? "plus" : "minus"}" title="Разница с рационом ${catName(state.base).toLowerCase()}">${sign}${Math.abs(delta).toLocaleString("ru-RU")} ₽ к цене дня</span>`;
  }
  const reset = dayChanges(i).changed
    ? `<button class="day-reset" data-resetday="${i}" title="Вернуть стандартные блюда рациона ${catName(cur)}">↺ Стандартный набор</button>`
    : "";
  return `<div class="cat-row"><div class="daycat" role="group" aria-label="Рацион дня">${CATS.map((c) =>
    `<button class="cat-btn ${c.key === cur ? "on" : ""}" data-setcat="${i}|${c.key}" aria-pressed="${c.key === cur}">${c.name}</button>`).join("")}</div>${note}${reset}</div>`;
}

const dayTitle = (i) => {
  const t = DATES[i].toLocaleDateString("ru-RU", { weekday: "long", day: "numeric", month: "long" });
  return t.charAt(0).toUpperCase() + t.slice(1);
};

/* Строка меню дня: краткий вид или подробный (замены), с раскрытием */
function thumbsHtml(i) {
  return `<span class="thumbs">${MEALS.map((m) => {
    const d = effectiveDish(i, m.key);
    return `<img decoding="async" src="${THUMB[m.key]}" alt="${m.name}: ${d.name}" title="${m.name}: ${d.name}">`;
  }).join("")}</span>`;
}

function menuRowHtml(i, edit) {
  const t = dayTotals(i);
  const own = state.dayCat.has(i) && state.dayCat.get(i) !== state.base;
  const open = state.openDay === i;
  const cmp = state.compare.has(i);
  let body = "";
  if (open) {
    if (edit) {
      body = `${catSwitchHtml(i)}
        <div class="day-tools"><button class="mini" data-compare="${i}">${cmp ? "Скрыть сравнение" : "Сравнить три категории"}</button></div>
        ${cmp
          ? `<div class="cols">${CATS.map((c) => colHtml(i, c)).join("")}</div>
             <div class="cmp-hint">Нажмите на блок с блюдами — этот рацион встанет на весь день</div>`
          : `<div class="meal-list">${MEALS.map((m) => mealRowHtml(i, m)).join("")}</div>`}`;
    } else {
      body = `${catSwitchHtml(i)}
        <ul class="brief-meals">${MEALS.map((m) => {
          const d = effectiveDish(i, m.key);
          const rep = state.overrides.has(`${i}|${m.key}`);
          return `<li><span class="bm">${m.name}</span><span class="bn">${d.name}${rep ? ' <span class="badge">замена</span>' : ""}</span><span class="bk">${dishKcal(i, m.key, d)} ккал</span><span class="bp">${d.price} ₽</span></li>`;
        }).join("")}</ul>
        <div class="brief-foot"><button class="mini" data-edit-day="${i}">Заменить блюда</button>
        <span class="dmeta">Любое блюдо можно заменить на блюдо другой категории — цена дня пересчитается</span></div>`;
    }
  }
  return `<section class="mrow${open ? " open" : ""}${edit ? " edit" : ""}" id="day-${i}" data-i="${i}">
    <div class="mrow-head" data-toggle="${i}">
      <div class="mrow-when">
        <b>${dayTitle(i)}</b>
        <span>${catName(catOf(i))}${own ? " · рацион дня" : ""} · доставка вечером</span>
      </div>
      ${thumbsHtml(i)}
      <div class="mrow-nums"><b>${rub(t.price)}</b><span>${t.kcal} ккал</span></div>
      <span class="chev" aria-hidden="true"></span>
    </div>
    ${open ? `<div class="mrow-body">${body}</div>` : ""}
  </section>`;
}

function vLabel(m) {
  return m.key === "breakfast" ? "Соус" : m.key === "snack" ? "Топпинг" : "Вариант";
}

/* ── Краткий список: карточки дней по 3 в строку, замена и состав на месте ── */

const ICO = {
  cal: '<path d="M7 3v3M17 3v3M4 8h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>',
  breakfast: '<path d="M4 8h10v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zM14 9h3a2.5 2.5 0 0 1 0 5h-3M4 21h10"/>',
  lunch: '<path d="M3 11h18a9 9 0 0 1-18 0zM12 3v6M9 6l3 3 3-3"/>',
  snack: '<path d="M12 7c-3.2-3-7-1-7 3 0 4 3.2 8.6 4.6 8.6.9 0 1.5-.6 2.4-.6s1.5.6 2.4.6C15.8 18.6 19 14 19 10c0-4-3.8-6-7-3z"/>',
  dinner: '<path d="M3 17h18M6 17a6 6 0 0 1 12 0M12 3v2.5"/>',
  swap: '<path d="M3 8h13M13 4.5L16.5 8 13 11.5M21 16H8M11 12.5L7.5 16 11 19.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  check: '<path d="M4 12.5l5 5L20 6.5"/>',
};
const mic = (k) => `<svg viewBox="0 0 24 24" class="ico" aria-hidden="true">${ICO[k] || ""}</svg>`;

function dishInfo(code) {
  return (typeof DISH_INFO !== "undefined" && DISH_INFO[code]) || { comp: "", p: 0, f: 0, c: 0, w: 0 };
}

function infoHtml(i, m, d) {
  const x = dishInfo(d.code);
  const kcal = dishKcal(i, m.key, d);
  return `<div class="dc-comp"><b>Состав:</b> ${x.comp || "уточняется"}</div>
    <div class="dc-kbju"><span><b>${kcal}</b> ккал</span><span>Б <b>${x.p}</b> г</span><span>Ж <b>${x.f}</b> г</span><span>У <b>${x.c}</b> г</span>${x.w ? `<span>порция ${x.w} г</span>` : ""}</div>`;
}

function pickHtml(i, m, cur) {
  // замены — блюда того же дня и того же приёма пищи, но из других рационов
  const alts = CATS.map((c) => ({ ...dishFor(i, c.key, m.key), cat: c.key }));
  alts.sort((a, b) => (a.code === cur.code ? -1 : b.code === cur.code ? 1 : a.price - b.price));
  const vlist = VARIANTS[cur.code];
  const vcur = state.variants.get(`${i}|${m.key}`) || "none";
  return `<div class="pick-head"><span>Чем заменить ${m.name.toLowerCase()}</span><button class="pick-x" data-swap-x aria-label="Закрыть">×</button></div>
    <div class="pick-grid">${alts.map((d) => {
      const isCur = d.code === cur.code;
      const diff = d.price - cur.price;
      const dtxt = isCur ? "сейчас" : diff === 0 ? "0 ₽" : (diff > 0 ? "+" : "−") + Math.abs(diff) + " ₽";
      return `<button class="pick" data-pick="${i}|${m.key}|${d.cat}|${d.code}"${isCur ? " data-cur" : ""}>
        <span class="pick-ico"><svg viewBox="0 0 24 24" class="ico" aria-hidden="true">${isCur ? ICO.check : ICO.plus}</svg></span>
        <span>${d.name}<span class="pick-meta">${catName(d.cat)} · ${d.price} ₽ · ${d.kcal} ккал</span></span>
        <span class="pick-diff${diff > 0 ? " plus" : ""}">${dtxt}</span>
      </button>`;
    }).join("")}</div>
    ${vlist ? `<div class="pick-var"><span class="pv-lbl">${vLabel(m)}</span>${vlist.map((v) => `<button class="chip${v.code === vcur ? " on" : ""}" data-variant="${i}|${m.key}|${v.code}">${v.name}${v.code === "none" ? "" : ` · ${v.kcal} ккал`}</button>`).join("")}</div>` : ""}`;
}

function briefRowHtml(i, m) {
  const key = `${i}|${m.key}`;
  const d = effectiveDish(i, m.key);
  const kcal = dishKcal(i, m.key, d);
  const isOv = state.overrides.has(key);
  const openInfo = state.info.has(key);
  const openSwap = state.swap === key;
  return `<li class="dc-row${openSwap ? " on" : ""}">
      <span class="dc-mico">${mic(m.key)}</span>
      <span class="dc-label">${m.name}</span>
      <span class="dc-body">
        <button class="dc-name" data-info="${key}" aria-expanded="${openInfo}" title="Состав и КБЖУ">${d.name}${isOv ? '<span class="badge">замена</span>' : ""}</button>
        <span class="dc-kcal">${kcal} ккал</span>
      </span>
      <button class="ico-btn${openSwap ? " on" : ""}" data-swap="${key}" aria-label="Заменить блюдо" title="Заменить блюдо"><svg viewBox="0 0 24 24" class="ico" aria-hidden="true">${ICO.swap}</svg></button>
    </li>
    ${openInfo ? `<li class="dc-info">${infoHtml(i, m, d)}</li>` : ""}
    ${openSwap ? `<li class="dc-pick">${pickHtml(i, m, d)}</li>` : ""}`;
}

function briefCardHtml(i) {
  const t = dayTotals(i);
  const own = state.dayCat.has(i) && state.dayCat.get(i) !== state.base;
  const photo = THUMB[MEALS[i % MEALS.length].key];
  return `<section class="day-card" id="day-${i}" data-i="${i}">
    <div class="dc-head">
      <div class="dc-when">
        <span class="dc-date"><svg viewBox="0 0 24 24" class="ico" aria-hidden="true">${ICO.cal}</svg>${dayTitle(i)}</span>
        <span class="dc-sub">${catName(catOf(i))}${own ? " · рацион дня" : ""} · доставка вечером</span>
      </div>
      <img class="dc-photo" src="${photo}" alt="" decoding="async">
    </div>
    <div class="dc-nums"><b>${rub(t.price)}</b><span>${t.kcal} ккал</span></div>
    <ul class="dc-meals">${MEALS.map((m) => briefRowHtml(i, m)).join("")}</ul>
    <div class="dc-foot"><span>${state.selected.size} из ${MAX_DAYS} дней</span><button class="mini" data-edit-day="${i}">Подробно →</button></div>
  </section>`;
}

function replaceInBrief(i, meal, cat, code) {
  const key = `${i}|${meal}`;
  const dish = DISHES[cat][meal].find((d) => d.code === code);
  if (!dish) return;
  const base = baseDish(i, meal);
  if (cat === catOf(i) && dish.code === base.code) state.overrides.delete(key);
  else state.overrides.set(key, { ...dish, cat });
  state.variants.delete(key);
  state.swap = "";
  renderAll();
  toast("Блюдо заменено · цена дня пересчитана");
}

/* Один приём пищи в режиме замен */
function mealRowHtml(i, m) {
  const key = `${i}|${m.key}`;
  const dish = effectiveDish(i, m.key);
  const isOv = state.overrides.has(key);
  const vlist = VARIANTS[dish.code];
  const vcur = state.variants.get(key) || "none";
  const kcal = dishKcal(i, m.key, dish);
  return `<div class="meal ${isOv ? "replaced" : ""}">
    <div class="meal-label">${m.name}</div>
    <div class="dish">
      <div class="dish-main">
        <div class="dish-name">${dish.name}${isOv ? ' <span class="badge">замена</span>' : ""}</div>
        <div class="dish-meta">${kcal} ккал</div>
      </div>
      <div class="dish-price">${dish.price} ₽</div>
    </div>
    <label class="vfield${vlist ? "" : " ghost"}"><span>${vlist ? vLabel(m) : "—"}</span>${vlist ? `<select class="variant-sel" data-i="${i}" data-meal="${m.key}">
        ${vlist.map((v) => `<option value="${v.code}" ${v.code === vcur ? "selected" : ""}>${v.name} · ${v.kcal} ккал</option>`).join("")}
      </select>` : `<span class="vnone">—</span>`}</label>
    <div class="dish-actions">
      <button class="mini" data-replace="${key}">Заменить</button>
      ${isOv ? `<button class="mini" data-reset="${key}">Вернуть</button>` : ""}
    </div>
  </div>`;
}

/* Колонка категории в режиме сравнения: клик по блоку = выбрать рацион дня */
function colHtml(i, c) {
  const taken = c.key === catOf(i);
  const meals = MEALS.map((m) => {
    // в выбранной колонке показываем фактическое блюдо дня (с заменой), в остальных — базовое меню категории
    const dish = taken ? effectiveDish(i, m.key) : dishFor(i, c.key, m.key);
    const isOv = taken && state.overrides.has(`${i}|${m.key}`);
    const vlist = VARIANTS[dish.code];
    const vcur = state.variants.get(`${i}|${m.key}`) || "none";
    const kcal = dishKcal(i, m.key, dish);
    return `<div class="meal ${isOv ? "replaced" : ""}">
      <div class="meal-label">${m.name}</div>
      <div class="dish">
        <div class="dish-main">
          <div class="dish-name">${dish.name}${isOv ? ' <span class="badge">замена</span>' : ""}</div>
          <div class="dish-meta">${kcal} ккал</div>
        </div>
        <div class="dish-price">${dish.price} ₽</div>
      </div>
      <label class="vfield${taken ? "" : " ghost"}"><span>${vLabel(m)}</span>${vlist ? `<select class="variant-sel" data-i="${i}" data-meal="${m.key}">
          ${vlist.map((v) => `<option value="${v.code}" ${v.code === vcur ? "selected" : ""}>${v.name} · ${v.kcal} ккал</option>`).join("")}
        </select>` : `<span class="vnone">—</span>`}</label>
      <div class="dish-actions${taken ? "" : " ghost"}">
        <button class="mini" data-replace="${i}|${m.key}">Заменить</button>
        ${isOv ? `<button class="mini" data-reset="${i}|${m.key}">Вернуть</button>` : ""}
      </div>
    </div>`;
  }).join("");
  const sum = taken ? dayTotals(i).price : MEALS.reduce((s, m) => s + dishFor(i, c.key, m.key).price, 0);
  return `<div class="col ${taken ? "taken" : ""}" data-colcat="${c.key}" data-i="${i}">
    <div class="col-head"><b>${c.name}</b><span>${sum} ₽</span></div>
    ${meals}
    ${taken ? '<div class="col-flag">выбран на этот день</div>' : '<div class="col-flag">нажмите, чтобы выбрать</div>'}
  </div>`;
}

function dayEditHtml(i) {
  const t = dayTotals(i);
  const own = state.dayCat.has(i) && state.dayCat.get(i) !== state.base;
  const open = state.openDay === i;
  const cmp = state.compare.has(i);
  const body = cmp
    ? `<div class="cols">${CATS.map((c) => colHtml(i, c)).join("")}</div>
       <div class="cmp-hint">Нажмите на блок с блюдами — этот рацион встанет на весь день</div>`
    : `<div class="meal-list">${MEALS.map((m) => mealRowHtml(i, m)).join("")}</div>`;
  return `<section class="menu-day ${cmp ? "cmp" : ""}" data-open="${open}" data-i="${i}" id="day-${i}">
    <div class="menu-day-head" data-toggle="${i}">
      <div>
        <div class="dtitle">${dayTitle(i)}${own ? ' <span class="daycat-tag">рацион дня</span>' : ""}</div>
        <div class="dmeta">${catName(catOf(i))} · доставка вечером</div>
      </div>
      ${catSwitchHtml(i)}
      <div class="dright">
        <div class="dsum">${rub(t.price)}</div>
        <div class="dmeta">${t.kcal} ккал</div>
        <span class="chev">▾</span>
      </div>
    </div>
    <div class="menu-day-body">
      ${body}
      <div class="day-tools">
        <button class="mini" data-compare="${i}">${cmp ? "Скрыть сравнение" : "Сравнить три категории"}</button>
      </div>
    </div>
  </section>`;
}

function renderMenu() {
  const host = document.getElementById("menu-list");
  const days = [...state.selected].sort((a, b) => a - b);
  const ovBtn = document.getElementById("mode-overview");
  const edBtn = document.getElementById("mode-edit");
  if (ovBtn && edBtn) {
    ovBtn.classList.toggle("on", state.mode !== "edit");
    edBtn.classList.toggle("on", state.mode === "edit");
    ovBtn.setAttribute("aria-pressed", String(state.mode !== "edit"));
    edBtn.setAttribute("aria-pressed", String(state.mode === "edit"));
  }
  if (!days.length) {
    host.innerHTML = `<p class="empty">Сначала отметьте даты доставки — здесь появится меню на выбранные дни.</p>`;
    return;
  }
  host.innerHTML = state.mode === "edit"
    ? days.map((i) => menuRowHtml(i, true)).join("")
    : `<div class="day-grid">${days.map((i) => briefCardHtml(i)).join("")}</div>`;
  bindMenu(host);
}

function bindMenu(host) {
  host.querySelectorAll("[data-info]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const k = el.dataset.info;
      if (state.info.has(k)) state.info.delete(k); else state.info.add(k);
      state.swap = "";
      renderAll();
    });
  });
  host.querySelectorAll("[data-swap]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const k = el.dataset.swap;
      state.swap = state.swap === k ? "" : k;
      renderAll();
    });
  });
  host.querySelectorAll("[data-swap-x]").forEach((el) => {
    el.addEventListener("click", (e) => { e.stopPropagation(); state.swap = ""; renderAll(); });
  });
  host.querySelectorAll("[data-pick]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const [i, meal, cat, code] = el.dataset.pick.split("|");
      replaceInBrief(Number(i), meal, cat, code);
    });
  });
  host.querySelectorAll("[data-variant]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const [i, meal, v] = el.dataset.variant.split("|");
      state.variants.set(`${i}|${meal}`, v);
      renderAll();
    });
  });
  host.querySelectorAll("[data-resetday]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      resetDay(Number(el.dataset.resetday));
    });
  });
  host.querySelectorAll("[data-setcat]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const [iStr, cat] = el.dataset.setcat.split("|");
      setDayCat(Number(iStr), cat);
    });
  });
  host.querySelectorAll("[data-edit-day]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      state.mode = "edit";
      state.openDay = Number(el.dataset.editDay);
      renderAll();
      document.getElementById("menu").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  host.querySelectorAll("[data-brief]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      state.mode = "overview";
      renderAll();
    });
  });
  host.querySelectorAll("[data-toggle]").forEach((el) => {
    el.addEventListener("click", () => {
      const i = Number(el.dataset.toggle);
      state.openDay = state.openDay === i ? -1 : i;
      renderAll();
    });
  });
  host.querySelectorAll("[data-compare]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const i = Number(el.dataset.compare);
      if (state.compare.has(i)) state.compare.delete(i);
      else state.compare.add(i);
      renderAll();
    });
  });
  // клик по блоку с блюдами = поставить этот рацион на день
  host.querySelectorAll(".col[data-colcat]").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.closest("button, select, option")) return;
      setDayCat(Number(el.dataset.i), el.dataset.colcat);
    });
  });
  host.querySelectorAll("[data-replace]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      openReplace(el.dataset.replace);
    });
  });
  host.querySelectorAll("[data-reset]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const key = el.dataset.reset;
      state.overrides.delete(key);
      state.variants.delete(key);
      renderAll();
    });
  });
  host.querySelectorAll(".variant-sel").forEach((el) => {
    el.addEventListener("change", (e) => {
      e.stopPropagation();
      state.variants.set(`${el.dataset.i}|${el.dataset.meal}`, el.value);
      renderMenu();
      renderSummary();
    });
  });
}

function openReplace(key) {
  const [iStr, meal] = key.split("|");
  const i = Number(iStr);
  const cur = effectiveDish(i, meal);
  const m = MEALS.find((x) => x.key === meal);
  document.getElementById("replace-title").textContent = `${m.name}, ${DATES[i].getDate()} ${MON[DATES[i].getMonth()]}`;
  document.getElementById("replace-sub").textContent =
    `Текущее блюдо: ${cur.name} · ${cur.price} ₽ · ${dishKcal(i, meal, cur)} ккал`;

  document.getElementById("replace-list").innerHTML = CATS.map((c) => {
    const dish = dishFor(i, c.key, meal);
    const diff = dish.price - cur.price;
    const isCur = dish.code === cur.code;
    const diffTxt = diff === 0 ? "0 ₽" : (diff > 0 ? "+" : "−") + Math.abs(diff) + " ₽";
    return `<button class="alt ${isCur ? "current" : ""}" data-pick="${c.key}|${dish.code}">
      <div>
        <div class="who">${c.name}</div>
        <div class="an">${dish.name}</div>
        <div class="am">${dish.kcal} ккал · ${dish.price} ₽</div>
      </div>
      <div class="diff ${diff > 0 ? "plus" : diff < 0 ? "minus" : ""}">${isCur ? "выбрано" : diffTxt}</div>
    </button>`;
  }).join("");

  document.getElementById("replace-list").querySelectorAll("[data-pick]").forEach((b) => {
    b.addEventListener("click", () => {
      const [cat, code] = b.dataset.pick.split("|");
      const dish = DISHES[cat][meal].find((x) => x.code === code) || cur;
      if (cat === catOf(i) && code === baseDish(i, meal).code) {
        state.overrides.delete(key);
      } else {
        state.overrides.set(key, { ...dish, cat });
      }
      state.variants.delete(key);
      closeModal("replace-modal");
      renderAll();
      toast("Блюдо заменено · сумма пересчитана на сервере");
    });
  });
  openModal("replace-modal");
}

function renderSummary() {
  const t = orderTotals();
  document.getElementById("sum-days").textContent = `${t.days} / ${MAX_DAYS}`;
  const kp = kcalParts();
  const kEl = document.getElementById("sum-kcal");
  kEl.innerHTML = kp.sub ? `${kp.main}<small>${kp.sub}</small>` : kp.main;
  kEl.title = "Пока меню не меняли — диапазон выбранного рациона. После замен считается по фактическим блюдам.";
  document.getElementById("sum-total").textContent = rub(t.price);
  document.getElementById("btn-order").disabled = t.days < MIN_DAYS;

  // «Заказать быстро, без изменений» доступна только когда в заказе нет правок
  const cleanBtn = document.getElementById("btn-order-clean");
  if (cleanBtn) {
    const changed = [...state.selected].some((i) => dayChanges(i).changed);
    cleanBtn.disabled = changed;
    cleanBtn.setAttribute("aria-disabled", changed ? "true" : "false");
    cleanBtn.title = changed ? "В заказе есть изменения: эта кнопка оформила бы меню без них — используйте «Оформить заказ»" : "";
    const hint = document.getElementById("clean-hint");
    if (hint) {
      if (!hint.dataset.orig) hint.dataset.orig = hint.textContent;
      hint.dataset.changed = changed ? "1" : "";
      hint.textContent = changed
        ? "В заказе уже есть изменения — оформите через «Оформить заказ», иначе они не сохранятся."
        : hint.dataset.orig;
    }
  }

  const resetAllBtn = document.getElementById("btn-reset-all");
  if (resetAllBtn) resetAllBtn.hidden = ![...state.selected].some((i) => dayChanges(i).changed);

  const own = [...state.selected].filter((i) => state.dayCat.has(i) && state.dayCat.get(i) !== state.base).length;
  const cats = document.getElementById("sum-cats");
  if (cats) cats.textContent = own
    ? `${catName(state.base)} + ${own} ${pluralRu(own, "замена", "замены", "замен")}`
    : catName(state.base);

  const c = document.getElementById("counter");
  const n = state.selected.size;
  const word = n % 10 === 1 && n % 100 !== 11 ? "день" : [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100) ? "дня" : "дней";
  if (n < MIN_DAYS) c.innerHTML = `Выбрано: <b>${n}</b> ${word} — нужно от ${MIN_DAYS} до ${MAX_DAYS}`;
  else c.innerHTML = `Выбрано: <b>${n}</b> ${word}`;
  c.classList.toggle("err", n < MIN_DAYS || n > MAX_DAYS);

  const step = document.getElementById("step-3");
  if (step) step.classList.toggle("active", n >= MIN_DAYS);
}

function renderAll() {
  renderTariffs();
  renderDates();
  renderMenu();
  renderSummary();
}

function openModal(id) { document.getElementById(id).dataset.open = "true"; }
function closeModal(id) { document.getElementById(id).dataset.open = "false"; }

let toastTimer;
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

function dayChanges(i) {
  // что именно изменено в дне: рацион дня, замены блюд, другие варианты
  let replaced = 0, variant = 0;
  MEALS.forEach((m) => {
    const k = `${i}|${m.key}`;
    if (state.overrides.has(k)) replaced++;
    const v = state.variants.get(k);
    if (v && v !== "none") variant++;
  });
  const own = state.dayCat.has(i) && state.dayCat.get(i) !== state.base;
  return { own, replaced, variant, changed: own || replaced > 0 || variant > 0 };
}

function pluralRu(n, one, few, many) {
  const a = Math.abs(n) % 100, b = a % 10;
  if (a > 10 && a < 20) return many;
  if (b === 1) return one;
  if (b >= 2 && b <= 4) return few;
  return many;
}

function changesText(c) {
  const parts = [];
  if (c.replaced) parts.push(`${c.replaced} ${pluralRu(c.replaced, "замена", "замены", "замен")}`);
  if (c.variant) parts.push(`${c.variant} ${pluralRu(c.variant, "вариант", "варианта", "вариантов")}`);
  if (c.own) parts.push("свой рацион");
  return parts.join(", ");
}

function renderOrderPreview() {
  const t = orderTotals();
  let changedDays = 0;
  const rows = [...state.selected].sort((a, b) => a - b).map((i) => {
    const d = DATES[i];
    const own = state.dayCat.has(i) && state.dayCat.get(i) !== state.base;
    const label = own ? `${catName(catOf(i))} вместо ${CAT_GEN[state.base]}` : catName(catOf(i));
    const ch = dayChanges(i);
    if (ch.changed) changedDays++;
    const tag = ch.changed
      ? `<span class="ol-tag chg" title="${changesText(ch)}">изменено · ${changesText(ch)}</span>`
      : `<span class="ol-tag ok">без изменений</span>`;
    return `<div class="order-line"><span class="ol-name">${d.getDate()} ${MON[d.getMonth()]}, ${label}${tag}</span><b>${rub(dayTotals(i).price)}</b></div>`;
  }).join("");
  const own = [...state.selected].filter((i) => state.dayCat.has(i) && state.dayCat.get(i) !== state.base).length;
  document.getElementById("order-preview").innerHTML = rows + `
    <div class="order-total"><span>Итого</span><span>${rub(t.price)}</span></div>
    <div class="dmeta" style="text-align:right;color:var(--muted);font-size:12px;margin-top:4px">
      ${t.days} дн. · ${kcalParts().main} · ${kcalParts().sub} · ${changedDays ? `с изменениями ${changedDays} из ${t.days}` : "все дни без изменений"}
    </div>`;
}

// Баннер в подвале: заменяется в админке (mockups/admin.html → «Баннер в подвале»).
// Хранится в localStorage как { src, href, hidden }, изображение сжимается до 1600 px.
function applyFooterBanner() {
  const wrap = document.getElementById("foot-banner-wrap");
  const img = document.getElementById("foot-banner-img");
  const a = document.getElementById("foot-banner-link");
  if (!wrap || !img || !a) return;
  let cfg = null;
  try { cfg = JSON.parse(localStorage.getItem("mf_footer_banner") || "null"); } catch (e) { cfg = null; }
  if (!cfg) return;
  if (cfg.hidden) { wrap.style.display = "none"; return; }
  if (cfg.src) img.src = cfg.src;
  if (cfg.href) a.href = cfg.href;
  if (cfg.blank && /^https?:/i.test(a.href)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
  else { a.removeAttribute("target"); a.removeAttribute("rel"); }
}

function openOrder() {
  if (state.selected.size < MIN_DAYS) { toast(`Выберите минимум ${MIN_DAYS} даты`); return; }
  renderOrderPreview();
  openModal("order-modal");
}

function bindShell() {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }
  applyFooterBanner();
}

document.addEventListener("DOMContentLoaded", () => {
  loadSiteSettings();
  applySiteSettings();
  buildDates();
  // страницы без конструктора (политика и т. п.) — только общая обвязка
  if (!document.getElementById("order-form") || !document.getElementById("orderbar")) {
    bindShell();
    return;
  }
  // ?mode=edit открывает режим замен (удобно для демонстрации и скриншотов)
  const q = new URLSearchParams(location.search);
  if (q.get("mode") === "edit") state.mode = "edit";
  (q.get("cmp") || "").split(",").filter((x) => x !== "").forEach((x) => state.compare.add(Number(x)));
  // ?swap=0|breakfast — раскрыть замену, ?info=0|breakfast — состав (для скриншотов и демо)
  if (q.get("swap")) state.swap = q.get("swap");
  if (q.get("info")) q.get("info").split(",").forEach((k) => state.info.add(k));
  // ?daycat=1|premium — свой рацион у дня, ?cart=1 — открыть корзину (демо и скриншоты)
  (q.get("daycat") || "").split(",").filter((x) => x.includes("|")).forEach((x) => {
    const [i, cat] = x.split("|");
    if (cat && cat !== state.base) state.dayCat.set(Number(i), cat);
  });
  if (q.get("openday") !== null) state.openDay = Number(q.get("openday"));
  if (q.get("cart")) setTimeout(() => openOrder(), 60);
  renderAll();

  document.getElementById("btn-order").addEventListener("click", openOrder);
  const resetAll = document.getElementById("btn-reset-all");
  if (resetAll) resetAll.addEventListener("click", resetAllDays);
  const clean = document.getElementById("btn-order-clean");
  if (clean) clean.addEventListener("click", () => { if (!clean.disabled) openOrder(); });
  const setMode = (mode) => {
    state.mode = mode;
    if (mode === "edit" && state.openDay < 0) state.openDay = [...state.selected].sort((a, b) => a - b)[0];
    renderAll();
    document.getElementById("menu").scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const ovBtn = document.getElementById("mode-overview");
  const edBtn = document.getElementById("mode-edit");
  if (ovBtn) ovBtn.addEventListener("click", () => setMode("overview"));
  if (edBtn) edBtn.addEventListener("click", () => setMode("edit"));
  // шаги: переход по клику + подсветка текущего раздела
  document.querySelectorAll(".step[data-goto]").forEach((b) => {
    b.addEventListener("click", () => {
      const el = document.getElementById(b.dataset.goto);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setStep(b.id.replace("step-", ""));
    });
  });
  const stepSections = [["1", "dates-sec"], ["2", "tariffs"], ["3", "menu"], ["4", "how"]];
  function setStep(n) {
    document.querySelectorAll(".step").forEach((s) => s.classList.toggle("active", s.id === `step-${n}`));
  }
  function syncSteps() {
    let cur = "1";
    stepSections.forEach(([n, id]) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 140) cur = n;
    });
    setStep(cur);
  }
  window.addEventListener("scroll", syncSteps, { passive: true });
  syncSteps();

  const heroCta = document.getElementById("hero-cta");
  if (heroCta) heroCta.addEventListener("click", () => document.getElementById("dates-sec").scrollIntoView({ behavior: "smooth", block: "start" }));

  document.querySelectorAll("[data-close]").forEach((b) => {
    b.addEventListener("click", () => closeModal(b.dataset.close));
  });
  document.querySelectorAll(".overlay").forEach((ov) => {
    ov.addEventListener("click", (e) => { if (e.target === ov) ov.dataset.open = "false"; });
  });

  document.getElementById("order-form").addEventListener("submit", (e) => {
    e.preventDefault();
    closeModal("order-modal");
    toast("Макет: заказ сохранён в БД, создан платёж Т-Банка, ссылка действует 30 минут");
  });

  document.getElementById("btn-demo-dates").addEventListener("click", () => {
    state.selected = new Set([0, 1, 3, 5, 7]);
    state.openDay = 0;
    renderAll();
  });

  setInterval(refreshSchedule, 30000);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) refreshSchedule();
  });
  bindShell();
});
