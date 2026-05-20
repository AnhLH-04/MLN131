import { useState, useEffect } from 'react'
import './App.css'
import {
  brickFactory,
  hoaBinhDam,
  metroSaigon,
  nationalAssembly,
  powerPlant1900,
  studentsAi,
  textileFactory,
  tonkinCraft,
  tramSaigon1900,
  vibeCoding,
  vinfast,
  wefJobs1,
  wefJobs2,
} from './assets/images.js'
import { ComparePair, MediaBlock, MediaFigure, MediaGrid } from './components/SectionMedia.jsx'

/* ── SVG Icons ─────────────────────────────── */
const IconGear = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const IconBook = () => (
  <svg className="section-icon" viewBox="0 0 32 32" fill="none">
    <path d="M5 26V8a3 3 0 013-3h18v20H8a3 3 0 000 6h18v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 26a3 3 0 003 3h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="11" y1="11" x2="21" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="11" y1="15" x2="21" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="11" y1="19" x2="17" y2="19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const IconCpu = () => (
  <svg className="section-icon" viewBox="0 0 32 32" fill="none">
    <rect x="8" y="8" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    <rect x="11" y="11" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
    <line x1="11" y1="4" x2="11" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="4" x2="16" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="21" y1="4" x2="21" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="11" y1="24" x2="11" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="24" x2="16" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="21" y1="24" x2="21" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="4" y1="11" x2="8" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="4" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="4" y1="21" x2="8" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="24" y1="11" x2="28" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="24" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="24" y1="21" x2="28" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const IconRobot = () => (
  <svg className="section-icon" viewBox="0 0 32 32" fill="none">
    <rect x="6" y="12" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
    <rect x="10" y="5" width="12" height="9" rx="3" stroke="currentColor" strokeWidth="2"/>
    <line x1="16" y1="5" x2="16" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="3" r="1.5" fill="currentColor"/>
    <circle cx="12" cy="18" r="3" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="20" cy="18" r="3" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="12" cy="18" r="1.2" fill="currentColor" opacity="0.5"/>
    <circle cx="20" cy="18" r="1.2" fill="currentColor" opacity="0.5"/>
    <path d="M12 23h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="2"  y1="16" x2="6"  y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="26" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="2"  y1="21" x2="6"  y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="26" y1="21" x2="30" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const IconTrend = () => (
  <svg className="section-icon" viewBox="0 0 32 32" fill="none">
    <polyline points="3,23 10,14 15,18 22,8 29,4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="22,4 29,4 29,11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="3" y1="28" x2="29" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="10" cy="14" r="2" fill="currentColor" opacity="0.5"/>
    <circle cx="15" cy="18" r="2" fill="currentColor" opacity="0.5"/>
  </svg>
)

const IconStar = () => (
  <svg className="section-icon" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2"/>
    <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4"/>
    <polygon points="16,7 18.4,13.3 25.4,13.3 19.8,17.3 21.8,23.7 16,19.6 10.2,23.7 12.2,17.3 6.6,13.3 13.6,13.3" fill="currentColor" opacity="0.85"/>
  </svg>
)

const IconWorld = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2a14.5 14.5 0 010 20M12 2a14.5 14.5 0 000 20M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const IconAlertTrend = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="16,7 22,7 22,13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconFlag = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="4" y1="22" x2="4" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const IconArrowUp = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* ── Hero background illustration ── */
const HeroNetwork = () => (
  <svg className="hero-bg-illustration" viewBox="0 0 380 360" fill="none">
    <circle cx="190" cy="180" r="155" stroke="white" strokeWidth="1" strokeOpacity="0.1"/>
    <circle cx="190" cy="180" r="112" stroke="white" strokeWidth="1" strokeDasharray="5 8" strokeOpacity="0.08"/>
    <circle cx="190" cy="180" r="70"  stroke="white" strokeWidth="1" strokeOpacity="0.12"/>
    <circle cx="190" cy="65"  r="9"  fill="white" fillOpacity="0.22" stroke="white" strokeWidth="1.5" strokeOpacity="0.55"/>
    <circle cx="300" cy="135" r="7"  fill="white" fillOpacity="0.18" stroke="white" strokeWidth="1.5" strokeOpacity="0.45"/>
    <circle cx="278" cy="265" r="8"  fill="white" fillOpacity="0.18" stroke="white" strokeWidth="1.5" strokeOpacity="0.45"/>
    <circle cx="102" cy="272" r="6"  fill="white" fillOpacity="0.18" stroke="white" strokeWidth="1.5" strokeOpacity="0.45"/>
    <circle cx="80"  cy="120" r="8"  fill="white" fillOpacity="0.18" stroke="white" strokeWidth="1.5" strokeOpacity="0.45"/>
    <circle cx="318" cy="215" r="4"  fill="white" fillOpacity="0.14" stroke="white" strokeOpacity="0.35"/>
    <circle cx="62"  cy="205" r="3"  fill="white" fillOpacity="0.14" stroke="white" strokeOpacity="0.35"/>
    <line x1="190" y1="65"  x2="300" y2="135" stroke="white" strokeWidth="1" strokeOpacity="0.15"/>
    <line x1="300" y1="135" x2="278" y2="265" stroke="white" strokeWidth="1" strokeOpacity="0.13"/>
    <line x1="278" y1="265" x2="102" y2="272" stroke="white" strokeWidth="1" strokeOpacity="0.12"/>
    <line x1="102" y1="272" x2="80"  y2="120" stroke="white" strokeWidth="1" strokeOpacity="0.13"/>
    <line x1="80"  y1="120" x2="190" y2="65"  stroke="white" strokeWidth="1" strokeOpacity="0.15"/>
    <line x1="300" y1="135" x2="318" y2="215" stroke="white" strokeWidth="1" strokeOpacity="0.08"/>
    <line x1="80"  y1="120" x2="62"  y2="205" stroke="white" strokeWidth="1" strokeOpacity="0.08"/>
    <circle cx="190" cy="165" r="16" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5" strokeOpacity="0.4"/>
    <path d="M168 212c0-12 10-23 22-23s22 11 22 23" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round"/>
    <line x1="190" y1="150" x2="190" y2="102" stroke="white" strokeWidth="1" strokeOpacity="0.22" strokeDasharray="4 5"/>
    <line x1="204" y1="172" x2="280" y2="148" stroke="white" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="4 5"/>
    <line x1="176" y1="172" x2="100" y2="148" stroke="white" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="4 5"/>
    <circle cx="190" cy="180" r="6" stroke="white" strokeWidth="1" strokeOpacity="0.28"/>
    <circle cx="190" cy="180" r="2" fill="white" fillOpacity="0.45"/>
  </svg>
)

/* ── App ─────────────────────────────────── */
const NAV_LINKS = [
  { href: '#phan-1', id: 'phan-1', label: 'Cơ sở lý luận' },
  { href: '#phan-2', id: 'phan-2', label: 'Thời đại 4.0'  },
  { href: '#phan-3', id: 'phan-3', label: 'AI & công nhân' },
  { href: '#phan-4', id: 'phan-4', label: 'Thách thức · Cơ hội' },
  { href: '#phan-5', id: 'phan-5', label: 'Việt Nam 2030'  },
]

const OVERVIEW = [
  { num:'01', label:'Cơ sở lý luận',       href:'#phan-1' },
  { num:'02', label:'Thời đại 4.0',         href:'#phan-2' },
  { num:'03', label:'AI & Công nhân',       href:'#phan-3' },
  { num:'04', label:'Thách thức & Cơ hội',  href:'#phan-4' },
  { num:'05', label:'Việt Nam 2030',         href:'#phan-5' },
]

export default function App() {
  const [progress, setProgress] = useState(0)
  const [active, setActive]     = useState('top')

  /* Reading progress */
  useEffect(() => {
    const update = () => {
      const doc   = document.documentElement
      const total = doc.scrollHeight - doc.clientHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  /* Active section tracker */
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-28% 0px -62% 0px', threshold: 0 }
    )
    document.querySelectorAll('[id]').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  /* Scroll reveal */
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="app">

      {/* ── Reading progress bar ── */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* ══════════════ TOPBAR ══════════════ */}
      <header className="topbar">
        <div className="brand">
          <span className="brand-dot"><IconGear /></span>
          <div>
            <p className="brand-title">Triết học Mác – Lênin</p>
            <p className="brand-subtitle">Chương 2 · Sứ mệnh lịch sử của giai cấp công nhân</p>
          </div>
        </div>
        <nav className="nav">
          {NAV_LINKS.map(({ href, id, label }) => (
            <a key={id} href={href} className={active === id ? 'active' : ''}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* ══════════════ HERO ══════════════ */}
      <section className="hero" id="top">
        <div className="hero-grid" />
        <HeroNetwork />
        <div className="hero-orbs">
          <span className="orb orb-1"/><span className="orb orb-2"/>
          <span className="orb orb-3"/><span className="orb orb-4"/>
          <span className="orb orb-5"/><span className="orb orb-6"/>
          <span className="orb orb-7"/>
        </div>

        <div className="hero-content">
          <p className="eyebrow">Bài thuyết trình nhóm · Triết học Mác – Lênin</p>
          <h1>Sứ mệnh lịch sử của giai cấp công nhân trong thời đại 4.0</h1>
          <p className="lead">
            Từ cơ sở lý luận của chủ nghĩa Mác – Lênin đến những biến đổi của giai cấp
            công nhân hiện đại, cùng câu hỏi về "công nhân số" và vai trò của AI.
          </p>
          <div className="hero-meta">
            <div className="meta-item">
              <p className="meta-label">Chủ đề</p>
              <p className="meta-value">Công nhân 4.0: Thách thức & Cơ hội</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">Mục tiêu</p>
              <p className="meta-value">Khái quát lý luận · Phân tích thực tiễn</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">Thông điệp</p>
              <p className="meta-value">Làm chủ công nghệ để phát triển bền vững</p>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <svg className="hero-card-icon" viewBox="0 0 44 44" fill="none">
            <circle cx="22" cy="22" r="20" stroke="rgba(165,180,252,0.35)" strokeWidth="1.5"/>
            <circle cx="22" cy="22" r="13" stroke="rgba(165,180,252,0.25)" strokeWidth="1" strokeDasharray="4 4"/>
            <circle cx="22" cy="22" r="7"  stroke="rgba(165,180,252,0.5)"  strokeWidth="1.5"/>
            <circle cx="22" cy="22" r="3"  fill="rgba(165,180,252,0.7)"/>
            <line x1="22" y1="2"  x2="22" y2="9"  stroke="rgba(165,180,252,0.5)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="22" y1="35" x2="22" y2="42" stroke="rgba(165,180,252,0.5)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="2"  y1="22" x2="9"  y2="22" stroke="rgba(165,180,252,0.5)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="35" y1="22" x2="42" y2="22" stroke="rgba(165,180,252,0.5)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="6.7"  y1="6.7"  x2="11.6" y2="11.6" stroke="rgba(165,180,252,0.32)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="32.4" y1="32.4" x2="37.3" y2="37.3" stroke="rgba(165,180,252,0.32)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="37.3" y1="6.7"  x2="32.4" y2="11.6" stroke="rgba(165,180,252,0.32)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="11.6" y1="32.4" x2="6.7"  y2="37.3" stroke="rgba(165,180,252,0.32)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <h3>Tóm tắt nhanh</h3>
          <ul>
            <li>Giai cấp công nhân là lực lượng sản xuất tiên tiến của lịch sử.</li>
            <li>4.0 tạo ra công nhân tri thức và công nhân số.</li>
            <li>AI thay đổi hình thức lao động nhưng không xóa bỏ giai cấp công nhân.</li>
            <li>Thách thức lớn: tự động hóa, bất bình đẳng số, thiếu kỹ năng.</li>
            <li>Cơ hội: nghề mới, tăng năng suất, nâng cao vị thế người lao động.</li>
          </ul>
        </div>

        <a href="#phan-1" className="scroll-down" aria-label="Cuộn xuống">
          <span>Bắt đầu</span>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>

      {/* ══════════════ OVERVIEW STRIP ══════════════ */}
      <div className="overview reveal">
        {OVERVIEW.map(item => (
          <a key={item.num} href={item.href} className="overview-item">
            <span className="overview-num">{item.num}</span>
            <span className="overview-label">{item.label}</span>
          </a>
        ))}
      </div>

      {/* ══════════════ PHẦN I ══════════════ */}
      <section className="section" id="phan-1">
        <span className="sec-watermark" aria-hidden="true">01</span>
        <div className="section-header reveal">
          <div className="section-tag-row">
            <IconBook />
            <p className="section-tag">PHẦN I</p>
          </div>
          <h2>Cơ sở lý luận về giai cấp công nhân</h2>
          <p className="section-desc">
            Quan điểm cơ bản của chủ nghĩa Mác – Lênin về giai cấp công nhân và sứ mệnh lịch sử.
          </p>
        </div>

        {/* ── 1. Khái niệm và đặc điểm ── */}
        <div className="sub-heading reveal">
          <span className="sub-num">1</span>
          <h3>Khái niệm và đặc điểm của giai cấp công nhân</h3>
        </div>

        <p className="section-intro reveal">
          Theo chủ nghĩa Mác – Lênin, giai cấp công nhân là giai cấp ra đời và phát triển cùng với
          nền đại công nghiệp tư bản chủ nghĩa. C. Mác và Ph. Ăngghen dùng nhiều thuật ngữ như{' '}
          <em>giai cấp vô sản</em>, <em>giai cấp vô sản hiện đại</em>,{' '}
          <em>giai cấp công nhân hiện đại</em>… để chỉ lực lượng lao động đại diện cho nền sản xuất
          tiên tiến. Giai cấp công nhân được xác định trên hai phương diện:
        </p>

        <div className="grid two">
          <article className="card reveal delay-1">
            <h3>Phương diện kinh tế – xã hội</h3>
            <ul className="list">
              <li>Là sản phẩm và chủ thể của nền đại công nghiệp.</li>
              <li>Lao động bằng phương thức công nghiệp hiện đại, sử dụng máy móc và công nghệ.</li>
              <li>Lao động mang tính xã hội hóa cao, tạo ra năng suất lao động lớn.</li>
              <li>Đại diện cho lực lượng sản xuất tiên tiến và phương thức sản xuất hiện đại.</li>
            </ul>
          </article>
          <article className="card reveal delay-2">
            <h3>Phương diện chính trị – xã hội</h3>
            <ul className="list">
              <li>Không sở hữu tư liệu sản xuất chủ yếu.</li>
              <li>Phải bán sức lao động để sinh sống.</li>
              <li>Bị giai cấp tư sản bóc lột giá trị thặng dư.</li>
              <li>Có lợi ích đối lập trực tiếp với giai cấp tư sản.</li>
            </ul>
          </article>
        </div>

        <div className="callout reveal">
          <h3>Khẳng định của chủ nghĩa Mác – Lênin</h3>
          <p>
            Giai cấp công nhân là một tập đoàn xã hội ổn định, hình thành và phát triển cùng với
            quá trình phát triển của nền công nghiệp hiện đại; là giai cấp đại diện cho lực lượng
            sản xuất tiên tiến; là lực lượng chủ yếu của tiến trình lịch sử quá độ từ chủ nghĩa tư
            bản lên chủ nghĩa xã hội.
          </p>
        </div>

        <div className="grid three">
          <article className="card soft reveal delay-1">
            <h3>Lao động bằng phương thức công nghiệp hiện đại</h3>
            <ul className="list">
              <li>Công cụ lao động chủ yếu là máy móc.</li>
              <li>Lao động có tính tổ chức và xã hội hóa cao.</li>
              <li>Tạo ra năng suất lao động lớn.</li>
            </ul>
          </article>
          <article className="card soft reveal delay-2">
            <h3>Đại biểu cho lực lượng sản xuất tiên tiến</h3>
            <ul className="list">
              <li>Là sản phẩm của nền đại công nghiệp.</li>
              <li>Giữ vai trò quyết định trong sản xuất vật chất hiện đại.</li>
              <li>Đại diện cho xu hướng phát triển tiến bộ của xã hội.</li>
            </ul>
          </article>
          <article className="card soft reveal delay-3">
            <h3>Tính tổ chức, kỷ luật và tinh thần cách mạng triệt để</h3>
            <ul className="list">
              <li>Được rèn luyện trong môi trường công nghiệp hiện đại.</li>
              <li>Có ý thức tổ chức, hợp tác và kỷ luật cao.</li>
              <li>Có khả năng đoàn kết và lãnh đạo cách mạng.</li>
            </ul>
          </article>
        </div>

        {/* ── 2. Nội dung sứ mệnh lịch sử ── */}
        <div className="sub-heading reveal">
          <span className="sub-num">2</span>
          <h3>Nội dung sứ mệnh lịch sử của giai cấp công nhân</h3>
        </div>

        <div className="callout reveal">
          <h3>Định nghĩa</h3>
          <p>
            Sứ mệnh lịch sử của giai cấp công nhân là thông qua Đảng Cộng sản lãnh đạo nhân dân
            lao động đấu tranh xóa bỏ chế độ bóc lột, xây dựng xã hội xã hội chủ nghĩa và cộng
            sản chủ nghĩa.
          </p>
        </div>

        <div className="grid three">
          <article className="card reveal delay-1">
            <h3>Nội dung kinh tế</h3>
            <ul className="list">
              <li>Là lực lượng sản xuất hàng đầu của xã hội hiện đại.</li>
              <li>Tạo ra cơ sở vật chất – kỹ thuật cho xã hội mới.</li>
              <li>Thúc đẩy lực lượng sản xuất phát triển.</li>
              <li>Xây dựng quan hệ sản xuất mới dựa trên chế độ công hữu về tư liệu sản xuất.</li>
              <li>Thực hiện công nghiệp hóa, hiện đại hóa đất nước.</li>
            </ul>
          </article>
          <article className="card reveal delay-2">
            <h3>Nội dung chính trị – xã hội</h3>
            <ul className="list">
              <li>Đấu tranh lật đổ sự thống trị của giai cấp tư sản.</li>
              <li>Giành chính quyền về tay nhân dân lao động.</li>
              <li>Thiết lập nhà nước mang bản chất giai cấp công nhân.</li>
              <li>Xây dựng nền dân chủ xã hội chủ nghĩa.</li>
              <li>Thực hiện công bằng, bình đẳng và tiến bộ xã hội.</li>
            </ul>
          </article>
          <article className="card reveal delay-3">
            <h3>Nội dung văn hóa – tư tưởng</h3>
            <ul className="list">
              <li>Xây dựng hệ giá trị mới: lao động, công bằng, dân chủ, bình đẳng, tự do.</li>
              <li>Đấu tranh xóa bỏ tư tưởng lạc hậu, phản động.</li>
              <li>Xây dựng nền văn hóa xã hội chủ nghĩa.</li>
              <li>Phát triển con người mới xã hội chủ nghĩa.</li>
              <li>Củng cố hệ tư tưởng của giai cấp công nhân là chủ nghĩa Mác – Lênin.</li>
            </ul>
          </article>
        </div>

        {/* ── 3. Điều kiện ── */}
        <div className="sub-heading reveal">
          <span className="sub-num">3</span>
          <h3>Những điều kiện quy định và thực hiện sứ mệnh lịch sử</h3>
        </div>

        <div className="grid two">
          <article className="card reveal delay-1">
            <h3>Điều kiện khách quan</h3>
            <div className="card-sub">
              <h4>Địa vị kinh tế</h4>
              <ul className="list">
                <li>Là sản phẩm của nền đại công nghiệp.</li>
                <li>Đại diện cho lực lượng sản xuất hiện đại.</li>
                <li>Tạo ra phần lớn của cải vật chất cho xã hội.</li>
                <li>Có khả năng lãnh đạo xây dựng phương thức sản xuất mới.</li>
              </ul>
            </div>
            <div className="card-sub">
              <h4>Địa vị chính trị – xã hội</h4>
              <ul className="list">
                <li>Bị bóc lột trong CNTB nên có tinh thần cách mạng triệt để.</li>
                <li>Có tính tổ chức, kỷ luật và đoàn kết cao.</li>
                <li>Có lợi ích thống nhất với nhân dân lao động.</li>
                <li>Được trang bị lý luận cách mạng là chủ nghĩa Mác – Lênin.</li>
              </ul>
            </div>
          </article>
          <article className="card reveal delay-2">
            <h3>Điều kiện chủ quan</h3>
            <div className="card-sub">
              <h4>Sự phát triển của bản thân giai cấp công nhân</h4>
              <ul className="list">
                <li>Phát triển cả về số lượng và chất lượng.</li>
                <li>Nâng cao trình độ chính trị, ý thức giai cấp.</li>
                <li>Làm chủ khoa học – công nghệ hiện đại.</li>
              </ul>
            </div>
            <div className="card-sub">
              <h4>Vai trò của Đảng Cộng sản</h4>
              <ul className="list">
                <li>Là đội tiên phong của giai cấp công nhân.</li>
                <li>Lãnh đạo và tổ chức phong trào cách mạng.</li>
                <li>Đại diện cho lợi ích của giai cấp công nhân và nhân dân lao động.</li>
              </ul>
            </div>
            <div className="card-sub">
              <h4>Liên minh giai cấp</h4>
              <ul className="list">
                <li>Liên minh giữa giai cấp công nhân, nông dân, các tầng lớp lao động khác.</li>
                <li>Dưới sự lãnh đạo của Đảng Cộng sản.</li>
              </ul>
            </div>
          </article>
        </div>

        <div className="callout reveal">
          <h3>Kết luận phần I</h3>
          <p>
            Theo chủ nghĩa Mác – Lênin, giai cấp công nhân là giai cấp đại diện cho lực lượng sản
            xuất tiên tiến và xu thế phát triển tất yếu của lịch sử. Với địa vị kinh tế – xã hội và
            những phẩm chất cách mạng đặc biệt, giai cấp công nhân có sứ mệnh lịch sử lãnh đạo nhân
            dân lao động xóa bỏ chủ nghĩa tư bản, xây dựng chủ nghĩa xã hội và tiến tới chủ nghĩa
            cộng sản.
          </p>
        </div>

        <MediaBlock title="Minh họa: Hai chiều của giai cấp công nhân Việt Nam">
          <MediaGrid columns={2}>
            <MediaFigure
              title="Kinh tế – xã hội: Hình thành cùng công nghiệp"
              src={brickFactory}
              alt="Xưởng gạch Bourgoin và Meiffre tại Hà Nội, khoảng 1900"
              caption="Xưởng gạch Bourgoin & Meiffre, Hà Nội (khoảng 1900) — lao động công nghiệp thời thuộc địa"
              credit="Robert Dubois, Xứ Bắc Kỳ (1900) · Wikimedia Commons"
              sourceUrl="https://commons.wikimedia.org/wiki/File:X%C6%B0%E1%BB%9Fng_G%E1%BA%A1ch_c%E1%BB%A7a_c%C3%A1c_%C3%B4ng_Bourgoin_v%C3%A0_Meiffre_t%E1%BA%A1i_H%C3%A0_N%E1%BB%99i_(s%C3%A1ch_X%E1%BB%A9_B%E1%BA%AFc_K%E1%BB%B3_c%E1%BB%A7a_Robert_Dubois_n%C4%83m_1900).png"
            />
            <MediaFigure
              title="Chính trị – pháp lý: Hiến pháp & bản chất Nhà nước"
              src={nationalAssembly}
              alt="Tòa nhà Quốc hội Việt Nam, Quảng trường Ba Đình, Hà Nội"
              caption="Nhà Quốc hội — thể chế pháp lý khẳng định vai trò giai cấp công nhân và liên minh công – nông – trí thức"
              credit="Wikimedia Commons"
              sourceUrl="https://commons.wikimedia.org/wiki/File:National_Assembly_Building_of_Vietnam.jpg"
            />
          </MediaGrid>
        </MediaBlock>
      </section>

      {/* ══════════════ PHẦN II ══════════════ */}
      <section className="section" id="phan-2">
        <span className="sec-watermark" aria-hidden="true">02</span>
        <div className="section-header reveal">
          <div className="section-tag-row">
            <IconCpu />
            <p className="section-tag">PHẦN II</p>
          </div>
          <h2>Giai cấp công nhân trong thời đại 4.0</h2>
          <p className="section-desc">
            Cách mạng công nghiệp 4.0 làm biến đổi cơ cấu lao động và hình thức của giai cấp công nhân.
          </p>
        </div>

        <div className="grid two">
          <article className="card reveal delay-1">
            <h3>Khái quát 4.0</h3>
            <div className="badge-row">
              <span className="badge">AI</span>
              <span className="badge">Robot</span>
              <span className="badge">Big Data</span>
              <span className="badge">IoT</span>
              <span className="badge">Cloud</span>
              <span className="badge">Blockchain</span>
            </div>
            <p>
              4.0 là giai đoạn sản xuất dựa trên công nghệ số, trí tuệ nhân tạo và tự động hóa thông minh.
              Không chỉ đổi mới công cụ mà còn thay đổi cách con người sản xuất, làm việc và giao tiếp.
            </p>
          </article>
          <article className="card reveal delay-2">
            <h3>Sự biến đổi của giai cấp công nhân</h3>
            <ul className="list">
              <li>Từ lao động chân tay sang lao động trí tuệ.</li>
              <li>Xuất hiện "công nhân số" trên nền tảng công nghệ.</li>
              <li>Môi trường lao động linh hoạt: nhà máy thông minh, làm việc từ xa.</li>
              <li>Áp lực học tập và cập nhật kỹ năng liên tục.</li>
            </ul>
          </article>
        </div>

        <div className="timeline reveal">
          <div className="timeline-item">
            <span className="timeline-dot" />
            <div className="timeline-content">
              <h4>Vai trò mới</h4>
              <p>Giai cấp công nhân tiếp tục là lực lượng sản xuất chủ yếu, thúc đẩy chuyển đổi số.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-dot" />
            <div className="timeline-content">
              <h4>Năng lực cốt lõi</h4>
              <p>Kỷ luật, sáng tạo, làm chủ công nghệ và trách nhiệm xã hội.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-dot" />
            <div className="timeline-content">
              <h4>Kết luận phần II</h4>
              <p>Giai cấp công nhân không biến mất mà đang hiện đại hóa và tri thức hóa.</p>
            </div>
          </div>
        </div>

        <ComparePair
          title="Năng lượng & công nghiệp: từ nhà máy điện đầu thế kỷ XX đến thủy điện quy mô lớn"
          left={{
            src: powerPlant1900,
            alt: 'Nhà máy điện thành phố Hà Nội năm 1900',
            caption: 'Nhà máy điện thành phố Hà Nội (khoảng 1900)',
            credit: 'Trung tâm Lưu trữ quốc gia I · Phot. R. Dubois',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nh%C3%A0_m%C3%A1y_%C4%91i%E1%BB%87n_th%C3%A0nh_ph%E1%BB%91_H%C3%A0_N%E1%BB%99i_n%C4%83m_1900_-_Trung_t%C3%A2m_L%C6%B0u_tr%E1%BB%AF_qu%E1%BB%91c_gia_I.jpg',
          }}
          right={{
            src: hoaBinhDam,
            alt: 'Toàn cảnh đập và nhà máy thủy điện Hòa Bình',
            caption: 'Nhà máy Thủy điện Hòa Bình — công nghiệp hóa hiện đại',
            credit: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tr%C3%AAn_%C4%91%E1%BA%ADp_th%E1%BB%A7y_%C4%91i%E1%BB%87n_H%C3%B2a_B%C3%ACnh_nh%C3%ACn_to%C3%A0n_c%E1%BA%A3nh_(3).jpg',
          }}
        />

        <ComparePair
          title="Hạ tầng đô thị: từ xe điện hơi Sài Gòn đến Metro số 1"
          left={{
            src: tramSaigon1900,
            alt: 'Xe điện hơi Sài Gòn đầu thế kỷ XX, Boulevard Charner',
            caption: 'Xe điện Sài Gòn — đầu thế kỷ XX',
            credit: 'Wikimedia Commons · Compagnie Française de Tramways de l\'Indochine',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Le_Tramway_%C3%A0_Saigon,_early_1900s,_showing_1m-gauge_Borsig_0-4-0T_steam_locomotive_No_5_outside_the_Compagnie_Fran%C3%A7aise_de_Tramways_de_l%27Indochine_Boulevard_Charner_interchange_near_the_old_March%C3%A9.jpg',
          }}
          right={{
            src: metroSaigon,
            alt: 'Ga Metro số 1 TP.HCM, tàu điện ngầm hiện đại',
            caption: 'Metro số 1 TP.HCM — giao thông công nghệ cao',
            credit: 'Ảnh minh họa dự án Metro TP.HCM',
          }}
        />
      </section>

      {/* ══════════════ PHẦN III ══════════════ */}
      <section className="section" id="phan-3">
        <span className="sec-watermark" aria-hidden="true">03</span>
        <div className="section-header reveal">
          <div className="section-tag-row">
            <IconRobot />
            <p className="section-tag">PHẦN III</p>
          </div>
          <h2>Ai là giai cấp công nhân trong thời đại 4.0?</h2>
          <p className="section-desc">
            Tranh luận về các nhóm lao động mới và tiêu chí xác định theo quan điểm Mác – Lênin.
          </p>
        </div>

        <div className="grid three">
          <article className="card reveal delay-1">
            <h3>Cách hiểu truyền thống</h3>
            <p>
              Công nhân từng được hiểu là lao động chân tay trong nhà máy. 4.0 mở rộng khái niệm khi
              lao động trí tuệ và công nghệ trở thành chủ đạo.
            </p>
          </article>
          <article className="card reveal delay-2">
            <h3>Nhóm lao động gây tranh luận</h3>
            <ul className="list">
              <li>Lập trình viên, kỹ sư AI.</li>
              <li>Giáo viên, bác sĩ, y tá.</li>
              <li>Streamer, freelancer, lao động nền tảng.</li>
            </ul>
          </article>
          <article className="card reveal delay-3">
            <h3>Tiêu chí cốt lõi</h3>
            <ul className="list">
              <li>Có sở hữu tư liệu sản xuất hay không.</li>
              <li>Có phải bán sức lao động hay không.</li>
              <li>Có tham gia nền sản xuất hiện đại hay không.</li>
            </ul>
          </article>
        </div>

        <ComparePair
          title="Ai là công nhân? Từ thủ công truyền thống đến nhà máy dệt may hiện đại"
          description="Khái niệm lao động mở rộng: không chỉ xưởng cơ khí mà cả lao động trong chuỗi sản xuất công nghiệp – dịch vụ."
          left={{
            src: tonkinCraft,
            alt: 'Thợ thủ công làm ô tại miền Bắc, khoảng 1900',
            caption: 'Thợ thủ công miền Bắc',
            credit: 'Le Tonkin vers 1900 · Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Le_Tonkin_vers_1900_-_Ki%E1%BA%BFn_Tr%C3%BAc_Vi%E1%BB%87t-Vietnam_Architecture_10.jpg',
          }}
          right={{
            src: textileFactory,
            alt: 'Công nhân may trong nhà máy dệt may tại Việt Nam',
            caption: 'Nhà máy dệt may — lao động tập trung, quy mô lớn',
            credit: 'ILO / Better Work · Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Seco-betterwork.jpg',
          }}
        />

        <MediaGrid columns={2}>
          <MediaFigure
            title="Lao động tri thức & công nghệ số"
            src={vibeCoding}
            alt="Minh họa lập trình viên làm việc với AI và vibe coding"
            caption="Lập trình, AI và nền tảng số — hình thức lao động mới của thời đại 4.0"
            credit="Ảnh minh họa · Vibe coding & AI"
          />
          <MediaFigure
            title="Liên hệ sinh viên"
            src={studentsAi}
            alt="Sinh viên Việt Nam trong lớp học công nghệ AI"
            caption="Sinh viên là lực lượng lao động tri thức tương lai — cần kỹ năng số và AI có trách nhiệm"
            credit="Ảnh minh họa giáo dục · Nhóm MLN131"
          />
        </MediaGrid>

        <div className="callout reveal">
          <h3>Kết luận phần III</h3>
          <p>
            Giai cấp công nhân hiện đại bao gồm lao động công nghiệp, lao động trí tuệ, lao động công nghệ
            và lao động trên nền tảng số. Công nghệ tái định nghĩa hình thức nhưng không thay đổi bản chất
            quan hệ lao động.
          </p>
        </div>

        <div className="card emphasis reveal">
          <h3>Liên hệ sinh viên</h3>
          <p>
            Sinh viên là lực lượng lao động tương lai của xã hội số. Cần nâng cao chuyên môn, kỹ năng số,
            tư duy sáng tạo và khả năng thích nghi để đáp ứng yêu cầu của thời đại 4.0.
          </p>
        </div>
      </section>

      {/* ══════════════ PHẦN IV ══════════════ */}
      <section className="section" id="phan-4">
        <span className="sec-watermark" aria-hidden="true">04</span>
        <div className="section-header reveal">
          <div className="section-tag-row">
            <IconTrend />
            <p className="section-tag">PHẦN IV</p>
          </div>
          <h2>Thách thức và cơ hội của giai cấp công nhân thời đại 4.0</h2>
        </div>

        <div className="grid two">
          <article className="card reveal delay-1">
            <h3>Thách thức nổi bật</h3>
            <ul className="list">
              <li>Nguy cơ thất nghiệp do tự động hóa và AI.</li>
              <li>Áp lực học tập liên tục vì vòng đời kỹ năng ngắn.</li>
              <li>Bất bình đẳng số giữa nhóm lao động trình độ cao và phổ thông.</li>
              <li>Lao động nền tảng thiếu bảo vệ và cơ chế thương lượng.</li>
            </ul>
          </article>
          <article className="card reveal delay-2">
            <h3>Cơ hội mở ra</h3>
            <ul className="list">
              <li>Tiếp cận và làm chủ tư liệu sản xuất mới: AI, dữ liệu, tự động hóa.</li>
              <li>Nhiều nghề mới xuất hiện: AI, an ninh mạng, phân tích dữ liệu.</li>
              <li>Hình thành tầng lớp "công nhân tri thức".</li>
              <li>Điều kiện làm việc và mức sống có thể được cải thiện nhờ năng suất tăng.</li>
            </ul>
          </article>
        </div>

        {/* Dark stats band */}
        <div className="stats-band reveal">
          <div className="stats-band-heading">
            <p>Số liệu thực tế</p>
            <h3>Tác động của 4.0 tới thị trường lao động</h3>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="stat-icon"><IconWorld /></div>
              <h3>83M</h3>
              <p>Việc làm toàn cầu có nguy cơ bị thay thế đến 2027 (WEF 2023).</p>
            </div>
            <div className="stat">
              <div className="stat-icon"><IconAlertTrend /></div>
              <h3>87%</h3>
              <p>Doanh nghiệp thiếu hụt kỹ năng số (McKinsey 2023).</p>
            </div>
            <div className="stat">
              <div className="stat-icon"><IconFlag /></div>
              <h3>27%</h3>
              <p>Tỷ lệ lao động qua đào tạo tại Việt Nam (2023).</p>
            </div>
          </div>
        </div>

        <MediaBlock
          title="Cơ hội: Công nghiệp ô tô và sản xuất công nghệ cao tại Việt Nam"
          description="Tự động hóa và chuỗi giá trị lớn tạo việc làm mới, đòi hỏi công nhân tri thức — đồng thời đặt áp lực nâng cao kỹ năng."
        >
          <MediaFigure
            src={vinfast}
            alt="Toàn cảnh nhà máy VinFast Hải Phòng lúc hoàng hôn"
            caption="Nhà máy VinFast Hải Phòng — biểu tượng công nghiệp 4.0 và năng lực sản xuất hiện đại"
            credit="Ảnh minh họa · Nhóm MLN131"
            wide
          />
        </MediaBlock>
      </section>

      {/* ══════════════ PHẦN V ══════════════ */}
      <section className="section" id="phan-5">
        <span className="sec-watermark" aria-hidden="true">05</span>
        <div className="section-header reveal">
          <div className="section-tag-row">
            <IconStar />
            <p className="section-tag">PHẦN V</p>
          </div>
          <h2>Việt Nam, định hướng 2030 và thông điệp tương lai</h2>
        </div>

        <div className="grid two">
          <article className="card reveal delay-1">
            <h3>Chuyển đổi số quốc gia</h3>
            <ul className="list">
              <li>Đưa kinh tế số đạt khoảng 30% GDP vào năm 2030.</li>
              <li>Thúc đẩy khoa học công nghệ và đổi mới sáng tạo.</li>
              <li>Phát triển nguồn nhân lực số chất lượng cao.</li>
            </ul>
          </article>
          <article className="card reveal delay-2">
            <h3>Quan điểm của Đảng và Nhà nước</h3>
            <ul className="list">
              <li>Xây dựng giai cấp công nhân Việt Nam hiện đại, lớn mạnh.</li>
              <li>Đào tạo và bồi dưỡng kỹ năng nghề, kỷ luật lao động.</li>
              <li>Hoàn thiện cơ chế, chính sách phát triển khoa học – công nghệ.</li>
            </ul>
          </article>
        </div>

        <div className="grid three">
          <article className="card soft reveal delay-1">
            <h3>Hình mẫu công nhân 2030</h3>
            <ul className="list">
              <li>Tri thức và kỹ năng số vững.</li>
              <li>Biết sử dụng và làm chủ AI.</li>
              <li>Sáng tạo, thích nghi nhanh, có đạo đức nghề nghiệp.</li>
            </ul>
          </article>
          <article className="card soft reveal delay-2">
            <h3>Trách nhiệm của thế hệ trẻ</h3>
            <ul className="list">
              <li>Học tập nghiêm túc, rèn luyện kỹ năng số.</li>
              <li>Ứng dụng AI có trách nhiệm.</li>
              <li>Chủ động thích nghi với chuyển đổi số.</li>
            </ul>
          </article>
          <article className="card soft reveal delay-3">
            <h3>Thông điệp cuối</h3>
            <p>
              Giai cấp công nhân không biến mất; công nghệ đang tái định nghĩa hình thức lao động.
              Con người cần làm chủ công nghệ để phát triển xã hội bền vững.
            </p>
          </article>
        </div>

        <MediaBlock
          title="Định hướng 2030: Xu hướng việc làm toàn cầu (2025–2030)"
          description="Nguồn nhân lực cần chuyển dịch sang kỹ năng số, AI và công nghệ xanh — phù hợp mục tiêu kinh tế số và công nhân tri thức của Việt Nam."
        >
          <MediaGrid columns={2}>
            <MediaFigure
              title="Nghề tăng trưởng nhanh nhất"
              src={wefJobs1}
              alt="Biểu đồ WEF: các nghề tăng trưởng và suy giảm nhanh nhất 2025-2030"
              caption="Big Data, AI, phần mềm, xe điện tự hành… — cơ hội cho lao động tri thức"
              credit="World Economic Forum · Future of Jobs Report 2025"
              sourceUrl="https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf"
            />
            <MediaFigure
              title="Nghề suy giảm mạnh"
              src={wefJobs2}
              alt="Biểu đồ WEF: tăng trưởng và suy giảm việc làm theo nghề 2025-2030"
              caption="Nhập liệu, thu ngân, bưu điện… — nguy cơ bị thay thế bởi tự động hóa"
              credit="World Economic Forum · Future of Jobs Report 2025"
              sourceUrl="https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf"
            />
          </MediaGrid>
        </MediaBlock>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="brand-dot"><IconGear /></span>
            <p className="brand-title" style={{ color:'#f1f5f9', marginTop:14 }}>Triết học Mác – Lênin</p>
            <p className="brand-subtitle">Chương 2 · Sứ mệnh lịch sử của giai cấp công nhân</p>
            <p>Bài thuyết trình học phần Triết học Mác – Lênin, trình bày về sứ mệnh lịch sử của giai cấp công nhân trong thời đại 4.0.</p>
          </div>

          <div className="footer-links">
            <h4>Nội dung</h4>
            <ul>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-cta">
            <div className="footer-message">
              <strong>Chúc buổi thuyết trình thành công!</strong>
              <p>Giai cấp công nhân không biến mất — họ đang tiến hóa. Công nghệ tái định nghĩa hình thức, nhưng không xóa bỏ sứ mệnh.</p>
            </div>
            <a href="#top" className="btn-top">
              <IconArrowUp />
              Quay lại đầu trang
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Triết học Mác – Lênin · Chương 2</p>
          <p>Sứ mệnh lịch sử của giai cấp công nhân trong thời đại 4.0</p>
        </div>
      </footer>

    </div>
  )
}
