/* Прототип админпанели: данные демонстрационные */

const MEALS = [
  ["Завтрак", ["Овсяная каша с яблоком", 150, 320], ["Блинчики с творогом", 200, 420], ["Сырники с ягодным соусом", 250, 480]],
  ["Обед", ["Куриная грудка с рисом", 350, 520], ["Индейка с гречкой и овощами", 450, 610], ["Лосось с овощами гриль", 550, 640]],
  ["Полдник", ["Йогурт натуральный", 150, 180], ["Творожная запеканка", 200, 260], ["Чиа-пудинг с манго", 250, 310]],
  ["Ужин", ["Тушёные овощи с курицей", 350, 480], ["Котлеты из индейки с пюре", 450, 590], ["Стейк из говядины с овощами", 550, 720]],
];

const STATUS = {
  paid: { label: "Оплачен", cls: "ok" },
  pending: { label: "Ожидает оплаты", cls: "wait" },
  expired: { label: "Истёк срок оплаты", cls: "grey" },
  cancelled: { label: "Отменён", cls: "grey" },
};
const MAIL = {
  sent: { label: "Отправлено", cls: "ok" },
  pending: { label: "Ожидает отправки", cls: "wait" },
  failed: { label: "Ошибка отправки", cls: "bad" },
  na: { label: "Не требуется", cls: "grey" },
};

const ORDERS = [
  {
    no: "R-20261105-0007", created: "05.11.2026 14:32", name: "Ирина Ковалёва", phone: "+7 951 123-45-67",
    email: "i.kovaleva@example.ru", cat: "Оптимальный", total: 6500, refunded: 0, status: "paid", mail: "sent",
    address: "Челябинск, ул. Кирова, 12, кв. 45 (подъезд 2, этаж 5, домофон 45К)",
    dates: ["06.11", "07.11", "08.11", "10.11", "12.11"], payId: "3029914523", payAt: "05.11.2026 14:41",
    comment: "Позвонить за 10 минут",
  },
  {
    no: "R-20261105-0006", created: "05.11.2026 13:07", name: "Дмитрий Соколов", phone: "+7 902 555-11-22",
    email: "d.sokolov@example.ru", cat: "Премиальный", total: 7800, refunded: 1600, status: "paid", mail: "sent",
    address: "Челябинск, пр. Ленина, 71, кв. 208", dates: ["06.11", "07.11", "09.11", "11.11", "13.11"],
    payId: "3029914101", payAt: "05.11.2026 13:15", comment: "",
  },
  {
    no: "R-20261105-0005", created: "05.11.2026 12:44", name: "Анна Пирогова", phone: "+7 963 777-00-33",
    email: "a.pirogova@example.ru", cat: "Базовый", total: 3900, refunded: 0, status: "pending", mail: "na",
    address: "Челябинск, ул. Молодогвардейцев, 5, кв. 12", dates: ["07.11", "08.11", "09.11"],
    payId: "3029913988", payAt: "", comment: "Без лука",
  },
  {
    no: "R-20261105-0004", created: "05.11.2026 11:20", name: "Сергей Литвинов", phone: "+7 951 900-12-34",
    email: "s.litvinov@example.ru", cat: "Оптимальный", total: 5200, refunded: 0, status: "paid", mail: "failed",
    address: "Челябинск, ул. Братьев Кашириных, 88, кв. 301", dates: ["06.11", "08.11", "10.11", "12.11"],
    payId: "3029913712", payAt: "05.11.2026 11:27", comment: "",
  },
  {
    no: "R-20261105-0003", created: "05.11.2026 09:58", name: "Ольга Тимофеева", phone: "+7 904 220-45-66",
    email: "o.timofeeva@example.ru", cat: "Премиальный", total: 9600, refunded: 0, status: "paid", mail: "sent",
    address: "Челябинск, ул. Труда, 153, кв. 77", dates: ["06.11", "07.11", "08.11", "09.11", "10.11", "11.11"],
    payId: "3029913450", payAt: "05.11.2026 10:04", comment: "",
  },
  {
    no: "R-20261104-0019", created: "04.11.2026 19:12", name: "Павел Гордеев", phone: "+7 951 333-22-11",
    email: "p.gordeev@example.ru", cat: "Базовый", total: 4000, refunded: 1000, status: "paid", mail: "sent",
    address: "Челябинск, ул. Свободы, 20, кв. 5", dates: ["05.11", "06.11", "07.11", "08.11"],
    payId: "3029901220", payAt: "04.11.2026 19:20", comment: "",
  },
  {
    no: "R-20261104-0018", created: "04.11.2026 18:47", name: "Мария Зверева", phone: "+7 999 121-31-41",
    email: "m.zvereva@example.ru", cat: "Оптимальный", total: 3900, refunded: 0, status: "expired", mail: "na",
    address: "Челябинск, ул. Энтузиастов, 30, кв. 114", dates: ["05.11", "06.11", "07.11"],
    payId: "3029901105", payAt: "", comment: "",
  },
  {
    no: "R-20261104-0017", created: "04.11.2026 16:03", name: "Артём Белов", phone: "+7 951 505-05-05",
    email: "a.belov@example.ru", cat: "Премиальный", total: 6400, refunded: 6400, status: "paid", mail: "sent",
    address: "Челябинск, ул. Воровского, 40, кв. 22", dates: ["05.11", "06.11", "08.11", "09.11"],
    payId: "3029900877", payAt: "04.11.2026 16:11", comment: "Отмена по просьбе клиента",
  },
  {
    no: "R-20261103-0011", created: "03.11.2026 20:15", name: "Юлия Наумова", phone: "+7 902 808-77-66",
    email: "y.naumova@example.ru", cat: "Базовый", total: 3000, refunded: 0, status: "cancelled", mail: "na",
    address: "Челябинск, ул. Куйбышева, 64, кв. 90", dates: ["04.11", "05.11", "06.11"],
    payId: "—", payAt: "", comment: "Клиент не вышел на связь",
  },
];

const EVENTS = [
  ["05.11.2026 14:32", "Заказ создан", "сайт"],
  ["05.11.2026 14:32", "Платёж создан, ссылка действует до 15:02", "система"],
  ["05.11.2026 14:41", "Оплата подтверждена банком (CONFIRMED)", "webhook"],
  ["05.11.2026 14:41", "Письма клиенту и организации поставлены в очередь", "система"],
  ["05.11.2026 14:42", "Письмо клиенту отправлено", "система"],
  ["05.11.2026 14:42", "Письмо организации отправлено", "система"],
];

let view = "list";

function money(n) { return n.toLocaleString("ru-RU") + " ₽"; }

function pill(map, key) {
  const s = map[key];
  return `<span class="pill ${s.cls}">${s.label}</span>`;
}

function daysCell(o) {
  const shown = o.dates.slice(0, 3).join(", ") + (o.dates.length > 3 ? "…" : "");
  return `<span title="${o.dates.join(", ")}">${o.dates.length} дн. · ${shown}</span>`;
}

function renderRows(filter = "", status = "all") {
  const q = filter.trim().toLowerCase();
  const digits = q.replace(/\D/g, "");
  const rows = ORDERS.filter((o) => {
    const okQ = !q || o.no.toLowerCase().includes(q) || o.name.toLowerCase().includes(q) ||
      (digits.length >= 3 && o.phone.replace(/\D/g, "").includes(digits));
    const okS = status === "all" || o.status === status;
    return okQ && okS;
  });
  const body = document.getElementById("orders-body");
  body.innerHTML = rows.map((o) => `
    <tr data-no="${o.no}">
      <td class="mono">${o.no}</td>
      <td class="nowrap">${o.created}</td>
      <td>${o.name}</td>
      <td class="nowrap">${o.phone}</td>
      <td class="nowrap muted">${daysCell(o)}</td>
      <td class="right-align num">${money(o.total)}</td>
      <td class="right-align num">${o.refunded ? money(o.refunded) : "—"}</td>
      <td class="right-align num"><b>${money(o.total - o.refunded)}</b></td>
      <td>${pill(STATUS, o.status)}</td>
      <td>${pill(MAIL, o.mail)}</td>
    </tr>`).join("") || `<tr><td colspan="10" class="muted" style="padding:26px;text-align:center">Заказы не найдены</td></tr>`;
  body.querySelectorAll("tr[data-no]").forEach((tr) => {
    tr.addEventListener("click", () => openOrder(tr.dataset.no));
  });
  document.getElementById("found").textContent = `${rows.length} из ${ORDERS.length}`;
}

function dayItems(o, idx) {
  const out = [];
  MEALS.forEach((m, mi) => {
    const baseIdx = { "Базовый": 0, "Оптимальный": 1, "Премиальный": 2 }[o.cat];
    let dish = m[baseIdx + 1];
    let replacedFrom = null;
    if (mi === 0 && idx === 0) {
      replacedFrom = dish;
      dish = ["Сырники с ягодным соусом", 250, 480];
    }
    if (mi === 2 && idx === 1) {
      replacedFrom = dish;
      dish = ["Хумус с овощными палочками", 200, 240];
    }
    out.push({ meal: m[0], dish, replacedFrom });
  });
  return out;
}

function openOrder(no) {
  const o = ORDERS.find((x) => x.no === no);
  if (!o) return;
  view = "card";
  document.getElementById("list-view").style.display = "none";
  const host = document.getElementById("card-view");
  host.style.display = "block";

  let dayBlocks = "";
  o.dates.forEach((d, i) => {
    const items = dayItems(o, i);
    const sum = items.reduce((s, x) => s + x.dish[1], 0);
    const kcal = items.reduce((s, x) => s + x.dish[2], 0);
    dayBlocks += `<details class="day-group" ${i === 0 ? "open" : ""}>
      <summary>${d}.2026 · доставка 18:00–22:00 <span class="muted">${kcal} ккал</span><span class="sum">${money(sum)}</span></summary>
      <div class="rows">
        ${items.map((x) => `<div class="item-row">
          <span class="meal">${x.meal}</span>
          <span>${x.dish[0]}${x.replacedFrom ? `<span class="replaced-mark">замена</span><br><span class="old-dish">было: ${x.replacedFrom[0]}</span>` : ""}</span>
          <span class="kcal">${x.dish[2]} ккал</span>
          <span class="price">${x.dish[1]} ₽</span>
        </div>`).join("")}
      </div>
    </details>`;
  });

  const refunds = [];
  if (o.refunded) {
    refunds.push(
      o.refunded === o.total
        ? { date: "04.11.2026 18:05", amount: o.refunded, reason: "Отмена заказа клиентом", op: "2000111223", who: "Е. Морозова", kind: "Полный" }
        : { date: "05.11.2026 09:40", amount: o.refunded, reason: "Не привезли полдник 07.11", op: "2000110987", who: "Е. Морозова", kind: "Частичный" }
    );
  }

  host.innerHTML = `
    <button class="back" id="back-link">← Все заказы</button>
    <div style="display:flex;gap:14px;align-items:flex-start;flex-wrap:wrap;margin-bottom:16px">
      <div>
        <h2 style="margin:0 0 4px;font-size:19px" class="mono">${o.no}</h2>
        <div class="muted" style="font-size:12.5px">Оформлен ${o.created} · ${o.dates.length} дат доставки · ${o.cat}</div>
      </div>
      <div style="margin-left:auto;display:flex;gap:8px;flex-wrap:wrap">
        ${pill(STATUS, o.status)} ${pill(MAIL, o.mail)}
        <button class="btn ghost small" id="btn-resend">Отправить письма повторно</button>
        <button class="btn small" id="btn-refund">Зарегистрировать возврат</button>
      </div>
    </div>

    <div class="grid-2">
      <div>
        <div class="card" style="margin-bottom:14px">
          <div class="card-head"><h2>Состав заказа</h2><div class="right muted" style="font-size:12.5px">снимок на момент оформления</div></div>
          <div class="card-body">
            ${dayBlocks}
            <p class="muted" style="font-size:11.5px;margin:10px 0 0">Состав, названия, цены и калорийность зафиксированы при оформлении. Изменение запрещено, в том числе до оплаты.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-head"><h2>История операций</h2></div>
          <div class="card-body">
            <ul class="timeline">
              ${EVENTS.map(([t, a, src]) => `<li><time>${t}</time><span>${a} <span class="muted">· ${src}</span></span></li>`).join("")}
              ${refunds.map((r) => `<li><time>${r.date}</time><span>Возврат ${r.amount.toLocaleString("ru-RU")} ₽ зарегистрирован · ${r.who}</span></li>`).join("")}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div class="card" style="margin-bottom:14px">
          <div class="card-head"><h2>Клиент и доставка</h2></div>
          <div class="card-body">
            <dl class="kv">
              <dt>Имя</dt><dd>${o.name}</dd>
              <dt>Телефон</dt><dd><a href="tel:${o.phone.replace(/\s/g, "")}">${o.phone}</a></dd>
              <dt>Email</dt><dd>${o.email}</dd>
              <dt>Адрес</dt><dd>${o.address}</dd>
              <dt>Комментарий</dt><dd>${o.comment || "—"}</dd>
              <dt>Даты</dt><dd>${o.dates.join(", ")}</dd>
            </dl>
          </div>
        </div>

        <div class="card" style="margin-bottom:14px">
          <div class="card-head"><h2>Деньги</h2></div>
          <div class="card-body">
            <table class="money-table">
              <tr><td>Первоначальная сумма</td><td>${money(o.total)}</td></tr>
              <tr><td>Возвраты</td><td>${o.refunded ? "−" + money(o.refunded) : "—"}</td></tr>
              <tr class="total"><td>Остаток</td><td>${money(o.total - o.refunded)}</td></tr>
            </table>
            <div class="section-title" style="margin-top:16px">Платёж</div>
            <dl class="kv">
              <dt>Провайдер</dt><dd>Т-Банк</dd>
              <dt>PaymentId</dt><dd class="mono">${o.payId}</dd>
              <dt>Подтверждён</dt><dd>${o.payAt || "—"}</dd>
            </dl>
            ${refunds.length ? `<div class="section-title" style="margin-top:16px">Возвраты</div>
            ${refunds.map((r) => `<div style="font-size:12.5px;border:1px solid var(--line);border-radius:9px;padding:9px 11px;margin-bottom:8px">
              <b>${r.kind} · ${money(r.amount)}</b><br>
              <span class="muted">${r.date} · ${r.reason}<br>операция ${r.op} · ${r.who}</span>
            </div>`).join("")}` : ""}
          </div>
        </div>

        <div class="card">
          <div class="card-head"><h2>Письма</h2></div>
          <div class="card-body">
            <div style="display:flex;gap:10px;align-items:center;margin-bottom:8px;font-size:13px">
              <span>Клиенту</span>${pill(MAIL, o.mail)}<span class="muted" style="margin-left:auto;font-size:12px">5 попыток</span>
            </div>
            <div style="display:flex;gap:10px;align-items:center;font-size:13px">
              <span>Организации</span>${pill(MAIL, o.mail === "failed" ? "failed" : "sent")}
              <span class="muted" style="margin-left:auto;font-size:12px">orders@example.ru</span>
            </div>
            ${o.mail === "failed" ? `<div class="errors" style="margin-top:12px"><b>Ошибка отправки</b><ul><li>SMTP 550: mailbox unavailable — все 5 попыток исчерпаны, следующая только вручную</li></ul></div>` : ""}
          </div>
        </div>
      </div>
    </div>`;

  document.getElementById("back-link").addEventListener("click", backToList);
  document.getElementById("btn-resend").addEventListener("click", () => toast("Письма поставлены в очередь: 2 новых записи, заказ и платёж не создаются"));
  document.getElementById("btn-refund").addEventListener("click", () => {
    document.getElementById("refund-order-no").textContent = `${o.no} · оплачено ${money(o.total)} · доступно ${money(o.total - o.refunded)}`;
    document.getElementById("refund-form").dataset.no = o.no;
    document.getElementById("refund-modal").dataset.open = "true";
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function backToList() {
  view = "list";
  document.getElementById("card-view").style.display = "none";
  document.getElementById("list-view").style.display = "block";
}

let toastTimer;
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2800);
}

/* ---------- баннер в подвале: замена изображения ---------- */
const BANNER_KEY = "mf_footer_banner";
const BANNER_DEFAULT = "img/banner-footer.webp";
let bannerDraft = null;

function bannerStored() {
  try { return JSON.parse(localStorage.getItem(BANNER_KEY) || "null"); } catch (e) { return null; }
}

function bannerLog(action, object) {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  const when = `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}`;
  const tr = document.createElement("tr");
  tr.innerHTML = `<td class="nowrap">${when}</td><td>Е. Морозова</td><td>${action}</td><td>${object}</td><td class="mono">85.26.…</td>`;
  const body = document.getElementById("log-body");
  if (body) body.prepend(tr);
}

function bannerSync() {
  const cfg = bannerStored();
  const img = document.getElementById("banner-preview");
  const href = document.getElementById("banner-href");
  const hide = document.getElementById("banner-hide");
  const state = document.getElementById("banner-state");
  if (!img) return;
  bannerDraft = null;
  img.src = (cfg && cfg.src) || BANNER_DEFAULT;
  href.value = (cfg && cfg.href) || "#menu";
  const blank = document.getElementById("banner-blank");
  if (blank) blank.checked = !!(cfg && cfg.blank);
  hide.checked = !!(cfg && cfg.hidden);
  state.textContent = cfg && cfg.src
    ? "Загруженное изображение · применяется на сайте"
    : "Исходное изображение · 1600 × 533 px";
}

function bannerPickFile(file) {
  if (!file) return;
  if (!/^image\/(jpeg|png|webp)$/.test(file.type)) { toast("Нужен JPG, PNG или WebP"); return; }
  if (file.size > 8 * 1024 * 1024) { toast("Файл больше 8 МБ — сожмите изображение"); return; }
  const reader = new FileReader();
  reader.onload = () => {
    const im = new Image();
    im.onload = () => {
      const maxW = 1600;
      const k = Math.min(1, maxW / im.width);
      const cv = document.createElement("canvas");
      cv.width = Math.round(im.width * k);
      cv.height = Math.round(im.height * k);
      const g = cv.getContext("2d");
      g.fillStyle = "#ffffff";
      g.fillRect(0, 0, cv.width, cv.height);
      g.drawImage(im, 0, 0, cv.width, cv.height);
      bannerDraft = cv.toDataURL("image/jpeg", 0.86);
      document.getElementById("banner-preview").src = bannerDraft;
      document.getElementById("banner-state").textContent =
        `${file.name} · ${cv.width} × ${cv.height} px · нажмите «Сохранить баннер»`;
    };
    im.src = reader.result;
  };
  reader.readAsDataURL(file);
}

document.addEventListener("DOMContentLoaded", () => {
  renderRows();
  bannerSync();

  document.getElementById("banner-file")?.addEventListener("change", (e) => bannerPickFile(e.target.files[0]));

  document.getElementById("btn-banner-save")?.addEventListener("click", () => {
    const prev = bannerStored();
    const src = bannerDraft || (prev && prev.src) || "";
    const cfg = {
      src,
      href: document.getElementById("banner-href").value.trim() || "#menu",
      blank: !!document.getElementById("banner-blank")?.checked,
      hidden: document.getElementById("banner-hide").checked,
    };
    if (!cfg.src && !cfg.hidden) delete cfg.src;
    localStorage.setItem(BANNER_KEY, JSON.stringify(cfg));
    bannerLog(cfg.hidden ? "Скрытие баннера в подвале" : "Замена баннера в подвале", "Баннер в подвале");
    toast("Баннер сохранён · обновите страницу сайта");
  });

  document.getElementById("btn-banner-reset")?.addEventListener("click", () => {
    localStorage.removeItem(BANNER_KEY);
    bannerSync();
    document.getElementById("banner-file").value = "";
    bannerLog("Возврат исходного баннера в подвале", "Баннер в подвале");
    toast("Возвращён исходный баннер");
  });

/* ===== Рационы и телефон: ключ общий с сайтом (site.js → mf_site_settings) ===== */
const SHOW_KEY = "mf_site_settings";
const SHOW_DEFAULT = {
  cal: { basic: [1500, 1700], optimal: [1700, 2000], premium: [1800, 2100] },
  phone: "+7 (351) 2-400-400",
  phoneNote: "Челябинск, ежедневно 9:00–20:00",
  cutoff: "17:00",
};

function showRead() {
  try {
    const raw = JSON.parse(localStorage.getItem(SHOW_KEY) || "null") || {};
    const cal = {};
    Object.keys(SHOW_DEFAULT.cal).forEach((k) => {
      const v = (raw.cal || {})[k];
      cal[k] = Array.isArray(v) && v.length === 2 && v.every((x) => Number.isFinite(+x)) && +v[0] > 0 && +v[1] >= +v[0]
        ? [Math.round(+v[0]), Math.round(+v[1])]
        : SHOW_DEFAULT.cal[k].slice();
    });
    const cutoff = /^([01]\d|2[0-3]):[0-5]\d$/.test(String(raw.cutoff || "")) ? String(raw.cutoff) : SHOW_DEFAULT.cutoff;
    return { cal, phone: raw.phone || SHOW_DEFAULT.phone, phoneNote: raw.phoneNote || SHOW_DEFAULT.phoneNote, cutoff };
  } catch (e) {
    return JSON.parse(JSON.stringify(SHOW_DEFAULT));
  }
}

function showSync() {
  const v = showRead();
  Object.keys(SHOW_DEFAULT.cal).forEach((k) => {
    const [mn, mx] = v.cal[k];
    const a1 = document.getElementById(`cal-${k}-min`);
    const a2 = document.getElementById(`cal-${k}-max`);
    if (a1) a1.value = mn;
    if (a2) a2.value = mx;
  });
  const p = document.getElementById("set-phone");
  const n = document.getElementById("set-phone-note");
  if (p) p.value = v.phone;
  if (n) n.value = v.phoneNote;
  const c = document.getElementById("set-cutoff");
  if (c) c.value = v.cutoff;
  cutoffRender(v.cutoff);
}

/* предпросмотр: какая дата ближайшая при текущем времени и отсечении */
function cutoffRender(cut) {
  const box = document.getElementById("cutoff-preview");
  if (!box) return;
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Yekaterinburg", year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hour12: false,
  }).formatToParts(new Date());
  const g = (t) => Number(parts.find((p) => p.type === t).value);
  const today = new Date(g("year"), g("month") - 1, g("day"));
  const nowMin = (g("hour") % 24) * 60 + g("minute");
  const [h, m] = String(cut || "17:00").split(":").map(Number);
  const open = nowMin < h * 60 + m;
  const start = new Date(today);
  start.setDate(today.getDate() + (open ? 1 : 2));
  const prev = new Date(start); prev.setDate(start.getDate() - 1);
  const f = (d) => d.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
  const hhmm = `${String(g("hour") % 24).padStart(2, "0")}:${String(g("minute")).padStart(2, "0")}`;
  box.innerHTML = open
    ? `Сейчас ${hhmm} · до <b>${cut}</b> приём открыт: ближайшая доставка — <b>${f(start)}</b>.<br>После ${cut} сайт оставит ближайшей датой ${f(new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1))}.`
    : `Сейчас ${hhmm} · приём на ${f(prev)} закрыт (был до ${cut}). Ближайшая доставка на сайте — <b>${f(start)}</b>.`;
}

showSync();

function showSave() {
  const cal = {};
  for (const k of Object.keys(SHOW_DEFAULT.cal)) {
    const mn = Number(document.getElementById(`cal-${k}-min`).value);
    const mx = Number(document.getElementById(`cal-${k}-max`).value);
    if (!(mn > 0) || !(mx > 0)) return toast("Заполните калорийность по всем рационам");
    if (mx < mn) return toast("Максимум не может быть меньше минимума");
    cal[k] = [Math.round(mn), Math.round(mx)];
  }
  const phone = document.getElementById("set-phone").value.trim();
  if (phone.replace(/\D/g, "").length < 10) return toast("Проверьте номер телефона");
  const cut = document.getElementById("set-cutoff").value || SHOW_DEFAULT.cutoff;
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(cut)) return toast("Укажите время в формате ЧЧ:ММ");
  const cfg = { cal, phone, phoneNote: document.getElementById("set-phone-note").value.trim(), cutoff: cut };
  localStorage.setItem(SHOW_KEY, JSON.stringify(cfg));
  cutoffRender(cut);
  bannerLog("Обновлены калорийность рационов, телефон в шапке и время приёма заказов", "Рационы и телефон");
  toast("Сохранено · обновите страницу сайта");
}

document.getElementById("btn-save-showcase")?.addEventListener("click", showSave);
document.getElementById("btn-save-cutoff")?.addEventListener("click", () => {
  showSave();
  cutoffRender(document.getElementById("set-cutoff").value);
});

document.getElementById("set-cutoff")?.addEventListener("input", (e) => cutoffRender(e.target.value));

document.getElementById("btn-reset-showcase")?.addEventListener("click", () => {
  localStorage.removeItem(SHOW_KEY);
  showSync();
  bannerLog("Калорийность, телефон и время приёма заказов возвращены к стандартным", "Рационы и телефон");
  toast("Возвращены стандартные значения");
});

  document.querySelectorAll(".nav-item[data-panel]").forEach((b) => {
    b.addEventListener("click", () => {
      document.querySelectorAll(".nav-item").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
      document.getElementById("panel-" + b.dataset.panel).classList.add("active");
      const titles = { orders: ["Заказы", `${ORDERS.length} заказов всего`], menu: ["Меню", "Загрузка через Excel"], settings: ["Настройки", "Параметры заказов и уведомлений"], showcase: ["Рационы и телефон", "Калорийность и контакт в шапке"], banner: ["Баннер в подвале", "Изображение над контактами"], log: ["Журнал действий", "Неизменяемая история"] };
      document.getElementById("page-title").textContent = titles[b.dataset.panel][0];
      document.getElementById("page-sub").textContent = titles[b.dataset.panel][1];
    });
  });

  document.getElementById("q").addEventListener("input", (e) => renderRows(e.target.value, document.getElementById("f-status").value));
  document.getElementById("f-status").addEventListener("change", (e) => renderRows(document.getElementById("q").value, e.target.value));

  document.getElementById("refund-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const no = document.getElementById("refund-form").dataset.no;
    const amount = Number(document.getElementById("refund-amount").value || 0);
    const o = ORDERS.find((x) => x.no === no);
    if (o && amount > 0 && amount <= o.total - o.refunded) {
      o.refunded += amount;
      document.getElementById("refund-modal").dataset.open = "false";
      toast(`Возврат ${money(amount)} зарегистрирован · остаток ${money(o.total - o.refunded)}`);
      renderRows(document.getElementById("q").value, document.getElementById("f-status").value);
      openOrder(no);
    } else {
      toast("Сумма превышает остаток по заказу");
    }
  });
  document.querySelectorAll("[data-close]").forEach((b) => {
    b.addEventListener("click", () => { document.getElementById(b.dataset.close).dataset.open = "false"; });
  });
  document.getElementById("btn-save-settings").addEventListener("click", () => toast("Настройки сохранены · изменения записаны в журнал"));
  document.getElementById("btn-publish").addEventListener("click", () => {
    document.getElementById("import-ok").style.display = "block";
    toast("Импорт опубликован: 120 позиций, 10 дат");
  });
});
