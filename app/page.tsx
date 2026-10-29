"use client";

const modules = [
  { number: "01", status: "ГОТОВО К ПИЛОТУ", statusClass: "border-emerald-300/25 bg-emerald-300/[.06] text-emerald-200", title: "Поиск альтернатив и технических данных", body: "Поиск документации производителей и технических данных для компонентов, которые сняты с производства, недоступны или стали слишком дорогими.", deliverable: "Список альтернатив · ссылки на даташиты" },
  { number: "02", status: "ГОТОВО К ПИЛОТУ", statusClass: "border-emerald-300/25 bg-emerald-300/[.06] text-emerald-200", title: "Подбор и сравнение замен компонентов", body: "Сравнение возможных замен по электрическим параметрам, корпусу, распиновке, рабочим ограничениям и доступным данным. Выявление несоответствий и вопросов для инженерной проверки.", deliverable: "Список альтернатив · таблица совместимости · ссылки на даташиты" },
  { number: "03", status: "ПИЛОТ ПО СОГЛАСОВАНИЮ", statusClass: "border-cyan-300/25 bg-cyan-300/[.06] text-cyan-200", title: "Оценка совместимости и влияния на плату", body: "Оценка возможных последствий замены компонента для существующей схемы, выявление конфликтов параметров и подготовка списка потенциальных изменений для проверки инженером.", deliverable: "Выводы о совместимости · риски · список проверок" },
  { number: "04", status: "ПРОТОТИП / ИНТЕГРАЦИЯ", statusClass: "border-violet-300/25 bg-violet-300/[.06] text-violet-200", title: "Поиск устаревших и рискованных компонентов в BOM", body: "Анализ ведомости компонентов (BOM) для выявления устаревших, снятых с производства или труднодоступных позиций и определения приоритетов для подбора замен.", deliverable: "Отчёт о рисках BOM · список компонентов для проверки" },
  { number: "05", status: "В РАЗРАБОТКЕ", statusClass: "border-amber-300/25 bg-amber-300/[.06] text-amber-200", title: "Поддержка перепроектирования платы", body: "Долгосрочное направление: объединить исследование компонентов с анализом файлов схемы, моделированием цепей и инженерной валидацией. Полное автоматическое перепроектирование платы — цель развития, а не готовая функция.", deliverable: "Цель дорожной карты — требует инженерной проверки" },
];

const workflow = [
  ["01", "Определение компонента и ограничений", "Начинаем с BOM, конкретного компонента или уведомления о снятии с производства. Фиксируем ограничения по корпусу, напряжению, току, температуре, стоимости и другим параметрам."],
  ["02", "Поиск кандидатов на замену", "Собираем даташиты производителей, сведения о жизненном цикле и другие доступные источники с прямыми ссылками."],
  ["03", "Сравнение технической совместимости", "Сопоставляем электрические параметры, корпус, распиновку и рабочие пределы; отмечаем неизвестные и несовпадения."],
  ["04", "Отчёт для проверки инженером", "Предоставляем список альтернатив, риски и необходимые проверки. Перед установкой замены решение подтверждает квалифицированный инженер."],
];

const examples = [
  "Найти альтернативы компоненту, снятому с производства или недоступному у поставщиков.",
  "Сравнить даташиты и ключевые параметры нескольких кандидатов на замену.",
  "Выявить несовпадения по корпусу, распиновке, напряжению, току и температуре.",
  "Проверить BOM на устаревшие и потенциально проблемные компоненты.",
];

export default function Home() {
  const agents = [
    { name: "Research", x: 15, y: 24, task: "Публикации" },
    { name: "Components", x: 26, y: 74, task: "Элементная база" },
    { name: "Design", x: 74, y: 24, task: "Расчёты" },
    { name: "Verify", x: 85, y: 74, task: "Проверка" },
  ];

  return (
    <main>
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#05070b]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-mono text-sm font-bold tracking-[.28em]">SWARMCORE</a>
          <div className="hidden gap-7 text-sm text-slate-400 md:flex">
            <a href="#modules" className="hover:text-white">Модули</a>
            <a href="#workflow" className="hover:text-white">Как работает</a>
            <a href="#pilot" className="hover:text-white">Пилот</a>
            <a href="#contact" className="hover:text-white">Контакты</a>
          </div>
          <span className="rounded-full border border-cyan-300/30 bg-cyan-300/5 px-3 py-1 text-[10px] font-semibold tracking-[.12em] text-cyan-200">ELECTRONIC COMPONENT INTELLIGENCE</span>
        </div>
      </nav>

      <section className="grid-bg relative overflow-hidden px-6 pb-24 pt-36 sm:pt-44">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-5 font-mono text-xs tracking-[.16em] text-cyan-300">SWARMCORE · АНАЛИЗ И ЗАМЕНА ЭЛЕКТРОННЫХ КОМПОНЕНТОВ</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-.04em] sm:text-7xl">
              Находим замену электронным компонентам <span className="text-cyan-200">быстрее и обоснованнее.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              SwarmCore помогает инженерным командам искать альтернативы устаревшим или недоступным компонентам, сравнивать даташиты, оценивать риски совместимости и понимать возможное влияние замены на существующую плату.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#pilot" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-cyan-100">Обсудить пилот</a>
              <a href="#modules" className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-white/30">Как работает процесс</a>
            </div>
            <p className="mt-6 text-xs leading-5 text-slate-500">Рекомендации основаны на доступных технических данных и предназначены для проверки инженером. Окончательный выбор компонента и утверждение изменений остаются за специалистом.</p>
          </div>

          <div className="glow relative h-[390px] overflow-hidden rounded-3xl border border-white/10 bg-[#080c13]/80 sm:h-[430px]">
            <div className="grid-bg absolute inset-0 opacity-40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.09),transparent_48%)]" />
            <div className="relative h-full w-full">
              <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-200/40 bg-[#08121d]/90 shadow-[0_0_70px_rgba(125,211,252,.18)]">
                <div className="text-center font-mono text-[10px] leading-5 tracking-[.22em] text-cyan-100">SWARM<br/>CORE<br/><span className="text-[8px] tracking-[.12em]">BOM / EDA</span></div>
              </div>
              <div className="network-orbit network-orbit-one" />
              <div className="network-orbit network-orbit-two" />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <defs><linearGradient id="linkGlow"><stop offset="0%" stopColor="#64748b" stopOpacity=".18"/><stop offset="50%" stopColor="#67e8f9" stopOpacity=".85"/><stop offset="100%" stopColor="#64748b" stopOpacity=".18"/></linearGradient></defs>
                <line x1="15" y1="24" x2="50" y2="50" className="network-link network-link-a" />
                <line x1="26" y1="74" x2="50" y2="50" className="network-link network-link-b" />
                <line x1="74" y1="24" x2="50" y2="50" className="network-link network-link-c" />
                <line x1="85" y1="74" x2="50" y2="50" className="network-link network-link-d" />
                <circle cx="50" cy="50" r="21" className="network-ring" />
                <circle cx="50" cy="50" r="30" className="network-ring network-ring-slow" />
              </svg>
              {agents.map((agent, i) => (
                <div key={agent.name} className={`agent-node agent-node-${i + 1}`} style={{ left: `${agent.x}%`, top: `${agent.y}%` }}>
                  <span className="agent-dot" />
                  <span className="mt-3 block whitespace-nowrap text-[10px] uppercase tracking-[.12em] text-slate-400">{agent.name}</span>
                  <span className="agent-task">{agent.task} → swarm</span>
                </div>
              ))}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[9px] tracking-[.1em] text-slate-500">
                <span className="flex items-center gap-2"><span className="live-indicator" /> АГЕНТНАЯ АРХИТЕКТУРА</span>
                <span>ИССЛЕДОВАТЬ / РАССЧИТАТЬ / ПРОВЕРИТЬ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          {[
            ["Исследование компонентов", "Даташиты и сведения о жизненном цикле"],
            ["Совместимость", "Параметры, корпус и распиновка"],
            ["Проверяемость", "Ссылки, допущения и инженерный контроль"],
          ].map(([title, body]) => <div key={title} className="rounded-2xl border border-white/10 bg-white/[.025] p-5"><p className="text-sm font-semibold text-cyan-200">{title}</p><p className="mt-2 text-sm text-slate-400">{body}</p></div>)}
        </div>
      </section>

      <section id="modules" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-[.22em] text-cyan-300">ВОЗМОЖНОСТИ И ДОРОЖНАЯ КАРТА</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">От поиска компонентов — к обоснованной замене.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-400">Начинаем с прослеживаемого поиска компонентов и отчётов о совместимости. Анализ файлов схем и проверку через симуляцию можно добавлять по мере развития продукта.</p>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {modules.map((module) => (
              <article key={module.number} className={`flex flex-col rounded-2xl border p-6 transition hover:-translate-y-1 hover:border-cyan-200/25 ${module.number === "05" ? "border-amber-300/20 bg-amber-300/[.025] lg:col-span-2" : "border-white/10 bg-white/[.025]"}`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-xs text-cyan-300">{module.number} / MODULE</span>
                  <span className={`rounded-full border px-3 py-1 text-[10px] font-semibold tracking-[.08em] ${module.statusClass}`}>{module.status}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{module.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{module.body}</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-xs uppercase tracking-[.12em] text-slate-500">Формат результата</p>
                  <p className="mt-2 text-sm text-slate-300">{module.deliverable}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="border-t border-white/10 bg-[#070a10] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-[.22em] text-cyan-300">КАК РАБОТАЕТ ПИЛОТ</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Конкретная задача. Измеримый результат.</h2>
              <p className="mt-5 leading-7 text-slate-400">Подстраиваем сценарий под реальные процессы команды, доступную документацию и используемые инструменты. На выходе — артефакт, который инженер может проверить.</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {examples.map((example) => <li key={example} className="flex gap-3"><span className="text-cyan-300">↗</span><span>{example}</span></li>)}
              </ul>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {workflow.map(([number, title, body]) => (
                <div key={number} className="rounded-xl border border-white/10 bg-white/[.02] p-5">
                  <span className="font-mono text-xs text-cyan-300">{number}</span>
                  <h3 className="mt-3 font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pilot" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[.07] to-violet-400/[.05] p-8 sm:p-12 lg:grid-cols-[1fr_.8fr]">
            <div>
              <p className="font-mono text-xs tracking-[.22em] text-cyan-300">ИНЖЕНЕРНЫЕ ПИЛОТЫ</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">Проверим на вашей задаче.</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-400">Пришлите ведомость компонентов (BOM) или пример компонента, который нужно заменить. Согласуем ограничения, источники данных, критерии проверки и результат пилота.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#05070b]/50 p-6">
              <p className="text-sm font-semibold">Подходит для первого пилота</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
                <li>• Проверка BOM и поиск замен</li>
                <li>• Сравнение даташитов и совместимости</li>
                <li>• Оценка рисков и влияния замены на плату</li>
                <li>• Рекомендации по замене для проверки инженером</li>
              </ul>
              <a href="mailto:aiagentquantum@gmail.com?subject=SwarmCore%20Component%20Replacement%20Pilot" className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-100">Обсудить задачу</a>
              <p className="mt-4 text-xs leading-5 text-slate-500">aiagentquantum@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-6xl flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div><p className="font-mono text-xs tracking-[.22em] text-cyan-300">SWARMCORE · АНАЛИЗ ЭЛЕМЕНТНОЙ БАЗЫ</p><p className="mt-2 text-sm text-slate-400">AI-помощь в поиске замен компонентов и оценке технической совместимости.</p></div>
          <a href="mailto:aiagentquantum@gmail.com" className="text-sm text-cyan-200 hover:text-white">aiagentquantum@gmail.com ↗</a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-xs text-slate-600 sm:flex-row">
          <span>© 2026 SwarmCore</span>
          <span>Анализ электронных компонентов · Инженерное исследование</span>
        </div>
        <p className="mx-auto mt-4 max-w-6xl text-[11px] leading-5 text-slate-600">Статусы отражают формат доступности пилотных работ и текущую дорожную карту, а не сертификацию инженерных результатов. AI-выводы требуют проверки квалифицированным специалистом; электромагнитные характеристики подтверждаются профильной САПР и, где необходимо, измерениями.</p>
      </footer>
    </main>
  );
}
