"use client";
import { useMemo, useState } from "react";

const projects = [
  {
    tag: "Impacto",
    icon: "◉",
    title: "HydroAlert AI",
    text: "Alertas preditivos de enchentes usando IoT e inteligência artificial.",
    author: "Abner Luiz",
    role: "Backend & Dados",
    progress: 72,
    people: 8,
    color: "cyan",
  },
  {
    tag: "Tecnologia",
    icon: "✦",
    title: "Mapa de Oportunidades",
    text: "Conectando talentos iniciantes a projetos reais e mentores de tecnologia.",
    author: "Marina Costa",
    role: "Product Designer",
    progress: 46,
    people: 14,
    color: "violet",
  },
  {
    tag: "Comunidade",
    icon: "⌁",
    title: "Bairro Circular",
    text: "Uma rede local para compartilhar objetos, serviços e conhecimento.",
    author: "Lucas Freitas",
    role: "Community Lead",
    progress: 88,
    people: 23,
    color: "lime",
  },
];

export default function Home() {
  const [filter, setFilter] = useState("Todos");
  const [joined, setJoined] = useState<string[]>([]);
  const [likes, setLikes] = useState<Record<string, number>>({
    "HydroAlert AI": 128,
    "Mapa de Oportunidades": 94,
    "Bairro Circular": 211,
  });
  const [saved, setSaved] = useState<string[]>([]);
  const [draft, setDraft] = useState("");
  const [posts, setPosts] = useState<string[]>([]);
  const visible = useMemo(
    () =>
      filter === "Todos" ? projects : projects.filter((p) => p.tag === filter),
    [filter],
  );
  const join = (title: string) =>
    setJoined((v) =>
      v.includes(title) ? v.filter((x) => x !== title) : [...v, title],
    );
  const like = (title: string) =>
    setLikes((v) => ({ ...v, [title]: v[title] + 1 }));
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#">
          <span>n</span>nexo
        </a>
        <nav>
          <a className="active" href="#feed">
            Explorar
          </a>
          <a href="#missoes">Missões</a>
          <a href="#conexoes">Conexões</a>
        </nav>
        <div className="header-actions">
          <button aria-label="Pesquisar">⌕</button>
          <button className="bell" aria-label="Notificações">
            ♢<i />
          </button>
          <div className="avatar">AL</div>
        </div>
      </header>
      <section className="shell" id="feed">
        <aside className="intro">
          <p className="eyebrow">REDE DE QUEM FAZ</p>
          <h1>
            Ideias encontram
            <br />
            <em>pessoas.</em>
          </h1>
          <p className="lead">
            Uma rede social para tirar projetos do papel. Compartilhe o que você
            quer construir, encontre talentos e evolua em público.
          </p>
          <button className="primary">＋ Criar novo projeto</button>
          <div className="stat">
            <strong>12.8k</strong>
            <span>pessoas construindo juntas</span>
          </div>
          <div className="faces">
            <b>MC</b>
            <b>LF</b>
            <b>JP</b>
            <b>AS</b>
            <b>+2k</b>
          </div>
        </aside>
        <section className="content">
          <div className="stories">
            <button className="story create-story">
              <b>＋</b>
              <span>Seu momento</span>
            </button>
            {["Marina", "Lucas", "Joana", "Arthur"].map((x, i) => (
              <button className={`story s${i}`} key={x}>
                <b>{x.slice(0, 2)}</b>
                <span>{x}</span>
              </button>
            ))}
          </div>
          <div className="composer">
            <div className="avatar">AL</div>
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Compartilhe uma ideia, conquista ou desafio..."
            />
            <button
              className="publish"
              disabled={!draft.trim()}
              onClick={() => {
                setPosts((v) => [draft, ...v]);
                setDraft("");
              }}
            >
              Publicar
            </button>
            <div className="compose-actions">
              <span>▣ Foto</span>
              <span>◉ Projeto</span>
              <span>⚡ Missão</span>
            </div>
          </div>
          {posts.map((post, i) => (
            <article className="quick-post" key={i}>
              <div className="author">
                <div className="mini-avatar">AL</div>
                <div>
                  <strong>Abner Luiz</strong>
                  <span>Agora · Público</span>
                </div>
              </div>
              <p>{post}</p>
              <div>
                <button>♡ Curtir</button>
                <button>◯ Comentar</button>
                <button>↗ Compartilhar</button>
              </div>
            </article>
          ))}
          <div className="section-head">
            <div>
              <p>FEED PARA VOCÊ</p>
              <h2>Projetos que estão ganhando força</h2>
            </div>
            <button>Ver todos →</button>
          </div>
          <div className="filters">
            {["Todos", "Impacto", "Tecnologia", "Comunidade"].map((x) => (
              <button
                className={filter === x ? "selected" : ""}
                onClick={() => setFilter(x)}
                key={x}
              >
                {x}
              </button>
            ))}
          </div>
          <div className="cards">
            {visible.map((p) => (
              <article className={`card ${p.color}`} key={p.title}>
                <div className="card-top">
                  <span className="tag">
                    {p.icon} {p.tag}
                  </span>
                  <button
                    onClick={() =>
                      setSaved((v) =>
                        v.includes(p.title)
                          ? v.filter((x) => x !== p.title)
                          : [...v, p.title],
                      )
                    }
                    aria-label="Salvar"
                  >
                    {saved.includes(p.title) ? "★" : "☆"}
                  </button>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className="progress-label">
                  <span>Progresso</span>
                  <strong>{p.progress}%</strong>
                </div>
                <div className="progress">
                  <i style={{ width: `${p.progress}%` }} />
                </div>
                <div className="author">
                  <div className="mini-avatar">
                    {p.author
                      .split(" ")
                      .map((x) => x[0])
                      .join("")}
                  </div>
                  <div>
                    <strong>{p.author}</strong>
                    <span>{p.role}</span>
                  </div>
                </div>
                <div className="card-foot">
                  <button onClick={() => like(p.title)}>
                    ♡ {likes[p.title]}
                  </button>
                  <span>◎ {p.people} colaboradores</span>
                  <button
                    className={joined.includes(p.title) ? "joined" : "join"}
                    onClick={() => join(p.title)}
                  >
                    {joined.includes(p.title)
                      ? "Participando ✓"
                      : "Participar →"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
      <section className="mission" id="missoes">
        <div>
          <span>MISSÃO DA SEMANA</span>
          <h2>Faça uma ideia avançar em 7 dias.</h2>
          <p>
            Escolha um desafio real, monte uma equipe e publique cada etapa. Na
            Nexo, seu portfólio é aquilo que você faz acontecer.
          </p>
        </div>
        <button>
          Começar missão <b>→</b>
        </button>
      </section>
      <footer>
        <a className="brand" href="#">
          <span>n</span>nexo
        </a>
        <p>Menos seguidores. Mais colaboradores.</p>
        <small>Conceito criado por Abner Luiz · 2026</small>
      </footer>
    </main>
  );
}
