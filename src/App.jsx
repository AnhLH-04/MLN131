import './App.css'
import { Reveal } from './Reveal.jsx'
import { RevealBlocks } from './RevealBlocks.jsx'

/* ── SVG Icons ── */
const IconGear = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const IconBook = () => (
  <svg className="section-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 26V8a3 3 0 013-3h18v20H8a3 3 0 000 6h18v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 26a3 3 0 003 3h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="11" y1="11" x2="21" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="11" y1="15" x2="21" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="11" y1="19" x2="17" y2="19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const IconCpu = () => (
  <svg className="section-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg className="section-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg className="section-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="3,23 10,14 15,18 22,8 29,4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="22,4 29,4 29,11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="3" y1="28" x2="29" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="10" cy="14" r="2" fill="currentColor" opacity="0.5"/>
    <circle cx="15" cy="18" r="2" fill="currentColor" opacity="0.5"/>
  </svg>
)

const IconStar = () => (
  <svg className="section-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2"/>
    <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4"/>
    <polygon points="16,7 18.4,13.3 25.4,13.3 19.8,17.3 21.8,23.7 16,19.6 10.2,23.7 12.2,17.3 6.6,13.3 13.6,13.3" fill="currentColor" opacity="0.85"/>
  </svg>
)

/* ── Stat icons ── */
const IconWorld = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2a14.5 14.5 0 010 20M12 2a14.5 14.5 0 000 20M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const IconAlertTrend = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="16,7 22,7 22,13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconFlag = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="4" y1="22" x2="4" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

/* ── Hero background network illustration ── */
const HeroNetwork = () => (
  <svg className="hero-bg-illustration" viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Rings */}
    <circle cx="150" cy="140" r="120" stroke="white" strokeWidth="1" strokeOpacity="0.12"/>
    <circle cx="150" cy="140" r="88"  stroke="white" strokeWidth="1" strokeDasharray="5 7" strokeOpacity="0.1"/>
    <circle cx="150" cy="140" r="55"  stroke="white" strokeWidth="1" strokeOpacity="0.15"/>
    {/* Network nodes */}
    <circle cx="150" cy="52"  r="8" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
    <circle cx="236" cy="108" r="6" fill="white" fillOpacity="0.2"  stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
    <circle cx="218" cy="208" r="7" fill="white" fillOpacity="0.2"  stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
    <circle cx="82"  cy="212" r="5" fill="white" fillOpacity="0.2"  stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
    <circle cx="64"  cy="100" r="7" fill="white" fillOpacity="0.2"  stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
    <circle cx="248" cy="175" r="4" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1"   strokeOpacity="0.4"/>
    <circle cx="52"  cy="162" r="3" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1"   strokeOpacity="0.4"/>
    <circle cx="170" cy="22"  r="3" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1"   strokeOpacity="0.4"/>
    {/* Connection lines */}
    <line x1="150" y1="52"  x2="236" y2="108" stroke="white" strokeWidth="1" strokeOpacity="0.18"/>
    <line x1="236" y1="108" x2="218" y2="208" stroke="white" strokeWidth="1" strokeOpacity="0.15"/>
    <line x1="218" y1="208" x2="82"  y2="212" stroke="white" strokeWidth="1" strokeOpacity="0.15"/>
    <line x1="82"  y1="212" x2="64"  y2="100" stroke="white" strokeWidth="1" strokeOpacity="0.15"/>
    <line x1="64"  y1="100" x2="150" y2="52"  stroke="white" strokeWidth="1" strokeOpacity="0.18"/>
    <line x1="236" y1="108" x2="248" y2="175" stroke="white" strokeWidth="1" strokeOpacity="0.1"/>
    <line x1="64"  y1="100" x2="52"  y2="162" stroke="white" strokeWidth="1" strokeOpacity="0.1"/>
    <line x1="150" y1="52"  x2="170" y2="22"  stroke="white" strokeWidth="1" strokeOpacity="0.12"/>
    {/* Center – person silhouette */}
    <circle cx="150" cy="128" r="14" fill="white" fillOpacity="0.12" stroke="white" strokeWidth="1.5" strokeOpacity="0.45"/>
    <path d="M128 168c0-12 10-22 22-22s22 10 22 22" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5" strokeOpacity="0.45" strokeLinecap="round"/>
    {/* Dashed data lines from person outward */}
    <line x1="150" y1="116" x2="150" y2="80"  stroke="white" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 4"/>
    <line x1="162" y1="135" x2="222" y2="116" stroke="white" strokeWidth="1" strokeOpacity="0.2"  strokeDasharray="3 4"/>
    <line x1="138" y1="135" x2="78"  y2="116" stroke="white" strokeWidth="1" strokeOpacity="0.2"  strokeDasharray="3 4"/>
    {/* Gear accent */}
    <circle cx="150" cy="140" r="6" stroke="white" strokeWidth="1" strokeOpacity="0.3"/>
    <circle cx="150" cy="140" r="2" fill="white" fillOpacity="0.4"/>
  </svg>
)

function App() {
  return (
    <div className="app">

      {/* ── TOPBAR ── */}
      <header className="topbar">
        <div className="brand">
          <span className="brand-dot">
            <IconGear />
          </span>
          <div>
            <p className="brand-title">Triết học Mác – Lênin</p>
            <p className="brand-subtitle">Chương 2 · Giai cấp công nhân thời đại 4.0</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#phan-1">Cơ sở lý luận</a>
          <a href="#phan-2">Thời đại 4.0</a>
          <a href="#phan-3">Mác – Lênin</a>
          <a href="#phan-4">Thách thức · Cơ hội</a>
          <a href="#phan-5">Việt Nam 2030</a>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="hero" id="top">
        <div className="hero-grid" />
        <HeroNetwork />
        <div className="hero-orbs">
          <span className="orb orb-1" />
          <span className="orb orb-2" />
          <span className="orb orb-3" />
          <span className="orb orb-4" />
          <span className="orb orb-5" />
          <span className="orb orb-6" />
          <span className="orb orb-7" />
        </div>

        <Reveal className="hero-reveal-col">
        <div className="hero-content">
          <p className="eyebrow">Bài thuyết trình nhóm · Triết học Mác – Lênin</p>
          <h1>Giai cấp công nhân thời đại 4.0: Thách thức và cơ hội</h1>
          <p className="lead">
            Khảo sát{' '}
            <strong>sứ mệnh lịch sử của giai cấp công nhân</strong> theo chủ nghĩa Mác – Lênin,
            cách mạng công nghiệp 4.0 đang đổi hình thức lao động thế nào, và dòng thông điệp
            gửi gắm tương lai gắn với định hướng phát triển đất nước đến 2030.
          </p>
          <div className="hero-meta">
            <div className="meta-item">
              <p className="meta-label">Khung chủ đề</p>
              <p className="meta-value">GC công nhân 4.0 &amp; 5 nội dung dàn bài</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">Mục tiêu</p>
              <p className="meta-value">Lý luận giáo trình · Thực tiễn &amp; văn kiện Đại hội</p>
            </div>
            <div className="meta-item">
              <p className="meta-label">Thông điệp</p>
              <p className="meta-value">Làm chủ công nghệ, phát triển bền vững, con người là trung tâm</p>
            </div>
          </div>
        </div>
        </Reveal>

        <Reveal className="hero-reveal-col" delay={110}>
        <div className="hero-card">
          {/* Rotating gear icon */}
          <svg className="hero-card-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="20" stroke="rgba(165,180,252,0.4)" strokeWidth="1.5"/>
            <circle cx="22" cy="22" r="13" stroke="rgba(165,180,252,0.3)" strokeWidth="1" strokeDasharray="4 4"/>
            <circle cx="22" cy="22" r="7"  stroke="rgba(165,180,252,0.5)" strokeWidth="1.5"/>
            <circle cx="22" cy="22" r="3"  fill="rgba(165,180,252,0.7)"/>
            <line x1="22" y1="2"  x2="22" y2="9"  stroke="rgba(165,180,252,0.5)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="22" y1="35" x2="22" y2="42" stroke="rgba(165,180,252,0.5)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="2"  y1="22" x2="9"  y2="22" stroke="rgba(165,180,252,0.5)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="35" y1="22" x2="42" y2="22" stroke="rgba(165,180,252,0.5)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="6.7"  y1="6.7"  x2="11.6" y2="11.6" stroke="rgba(165,180,252,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="32.4" y1="32.4" x2="37.3" y2="37.3" stroke="rgba(165,180,252,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="37.3" y1="6.7"  x2="32.4" y2="11.6" stroke="rgba(165,180,252,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="11.6" y1="32.4" x2="6.7"  y2="37.3" stroke="rgba(165,180,252,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <h3>Tóm tắt nhanh</h3>
          <ul>
            <li>Khái niệm GC công nhân: tập đoàn xã hội gắn đại công nghiệp; không sở hữu TLSX chính; bán sức lao động.</li>
            <li>4.0: từ lao động chân tay sang trí tuệ; “công nhân số”, nền tảng, làm việc từ xa.</li>
            <li>Tiêu chí Mác – Lênin giúp phân tích trình tự phức tạp: lập trình viên, y bác sĩ, công chức, shipper…</li>
            <li>Thách thức: tự động hóa, bất bình đẳng số, áp lực lao động nền tảng.</li>
            <li>Việt Nam: chuyển đổi số, GC công nhân hiện đại, kinh tế số ~30% GDP đến 2030.</li>
          </ul>
        </div>
        </Reveal>
      </section>

      {/* ── PHẦN I ── */}
      <section className="section" id="phan-1">
        <div className="section-header">
          <RevealBlocks>
            <div className="section-tag-row">
              <IconBook />
              <p className="section-tag">PHẦN I</p>
            </div>
            <h2>Cơ sở lý luận về giai cấp công nhân</h2>
            <p className="section-desc">
              Quan điểm cơ bản của chủ nghĩa Mác – Lênin về giai cấp công nhân và sứ mệnh lịch sử.
            </p>
          </RevealBlocks>
        </div>

        <div className="grid two">
          <article className="card">
            <RevealBlocks>
              <h3>Khái niệm và đặc điểm</h3>
              <p>
                Giai cấp công nhân ra đời cùng nền đại công nghiệp, đại diện cho lực lượng sản xuất
                tiên tiến và phương thức sản xuất hiện đại.
              </p>
              <div className="pill-group">
                <span className="pill">Sản phẩm của đại công nghiệp</span>
                <span className="pill">Không sở hữu tư liệu sản xuất</span>
                <span className="pill">Bán sức lao động để sinh sống</span>
              </div>
              <ul className="list">
                <li>Lao động bằng phương thức công nghiệp hiện đại, sử dụng máy móc.</li>
                <li>Tính tổ chức, kỷ luật và xã hội hóa cao.</li>
                <li>Đại biểu cho xu hướng phát triển tiến bộ của xã hội.</li>
              </ul>
            </RevealBlocks>
          </article>

          <article className="card">
            <RevealBlocks>
              <h3>Sứ mệnh lịch sử</h3>
              <p>
                Thông qua Đảng Cộng sản, giai cấp công nhân lãnh đạo nhân dân lao động đấu tranh xóa bỏ
                chế độ bóc lột, xây dựng xã hội xã hội chủ nghĩa và cộng sản chủ nghĩa.
              </p>
              <ul className="list">
                <li>
                  <strong>Kinh tế:</strong> lực lượng sản xuất hàng đầu; tạo CSVC – KT; xây quan hệ sản xuất
                  mới trên chế độ công hữu TLSX; công nghiệp hóa, hiện đại hóa.
                </li>
                <li>
                  <strong>Chính trị – xã hội:</strong> giành chính quyền; nhà nước mang bản chất giai cấp
                  công nhân; dân chủ XHCN; công bằng – tiến bộ.
                </li>
                <li>
                  <strong>Văn hóa – tư tưởng:</strong> hệ giá trị lao động, công bằng, dân chủ, bình đẳng,
                  tự do; đấu tranh tư tưởng lạc hậu; củng cố Mác – Lênin.
                </li>
              </ul>
            </RevealBlocks>
          </article>
        </div>

        <div className="grid two narrow-top">
          <article className="card soft">
            <RevealBlocks>
              <h3>Hai phương diện nhận diện (Mác – Lênin)</h3>
              <p className="muted-intro">Giai cấp công nhân được xác định thống nhất trên kinh tế – xã hội và chính trị – xã hội.</p>
              <ul className="list">
                <li>
                  <strong>Kinh tế – xã hội:</strong> chủ thể của đại công nghiệp; lao động công nghiệp hiện đại;
                  xã hội hóa cao, năng suất lớn; đại diện LLSX tiên tiến.
                </li>
                <li>
                  <strong>Chính trị – xã hội:</strong> không sở hữu TLSX chủ yếu; bán sức lao động; bị bóc lột
                  giá trị thặng dư; lợi ích đối lập với tư sản.
                </li>
              </ul>
            </RevealBlocks>
          </article>
          <article className="card soft">
            <RevealBlocks>
              <h3>Đặc điểm bổ sung</h3>
              <ul className="list">
                <li>Tổ chức, kỷ luật, tinh thần cách mạng được rèn trong công nghiệp hiện đại.</li>
                <li>Tập đoàn xã hội ổn định, gắn quá trình phát triển công nghiệp.</li>
                <li>Lực lượng chủ yếu của quá độ từ CNTB lên chủ nghĩa xã hội.</li>
              </ul>
            </RevealBlocks>
          </article>
        </div>

        <div className="grid three">
          <article className="card soft">
            <RevealBlocks>
              <h3>Điều kiện khách quan</h3>
              <ul className="list">
                <li>Địa vị kinh tế của giai cấp công nhân trong nền đại công nghiệp.</li>
                <li>Tạo ra phần lớn của cải vật chất xã hội.</li>
                <li>Có khả năng lãnh đạo xây dựng phương thức sản xuất mới.</li>
              </ul>
            </RevealBlocks>
          </article>
          <article className="card soft">
            <RevealBlocks>
              <h3>Điều kiện chủ quan</h3>
              <ul className="list">
                <li>Phát triển về số lượng, chất lượng và trình độ chính trị.</li>
                <li>Vai trò của Đảng Cộng sản – đội tiên phong.</li>
                <li>Liên minh công – nông – các tầng lớp lao động khác.</li>
              </ul>
            </RevealBlocks>
          </article>
          <article className="card soft">
            <RevealBlocks>
              <h3>Kết luận phần I</h3>
              <p>
                Giai cấp công nhân là lực lượng chủ yếu của tiến trình lịch sử quá độ từ chủ nghĩa
                tư bản lên chủ nghĩa xã hội. Với địa vị và phẩm chất cách mạng, giai cấp này có sứ mệnh
                lãnh đạo nhân dân lao động tiến tới xã hội mới.
              </p>
            </RevealBlocks>
          </article>
        </div>

        <div className="grid two">
          <article className="card">
            <RevealBlocks>
              <h3>Giai cấp công nhân Việt Nam</h3>
              <p>
                Ra đời cuối thế kỷ XIX – đầu thế kỷ XX trong bối cảnh khai thác thuộc địa; có truyền thống
                yêu nước; trở thành lực lượng lãnh đạo cách mạng thông qua Đảng Cộng sản Việt Nam.
              </p>
              <ul className="list">
                <li>Kết nối khát vọng dân tộc với con đường tiến lên chủ nghĩa xã hội.</li>
                <li>Trong hiện tại: đội ngũ công nhân có trình độ là nhân tố cho cạnh tranh và chuyển đổi số.</li>
              </ul>
            </RevealBlocks>
          </article>
          <article className="card">
            <RevealBlocks>
              <h3>Quan điểm Hiến pháp Việt Nam</h3>
              <p>
                Hiến pháp khẳng định nhà nước ta có bản chất giai cấp công nhân. Nền tảng chính trị là
                liên minh chặt chẽ:
              </p>
              <ul className="list">
                <li>Giai cấp công nhân,</li>
                <li>Giai cấp nông dân,</li>
                <li>Tầng lớp trí thức.</li>
              </ul>
              <p className="tight-p">
                Ý nghĩa: ghi nhận vai trò trung tâm của giai cấp công nhân trong sự nghiệp xây dựng và
                bảo vệ Tổ quốc.
              </p>
            </RevealBlocks>
          </article>
        </div>
      </section>

      <section className="section" id="phan-2">
        <div className="section-header">
          <RevealBlocks>
            <div className="section-tag-row">
              <IconCpu />
              <p className="section-tag">PHẦN II</p>
            </div>
            <h2>Giai cấp công nhân trong thời đại 4.0</h2>
            <p className="section-desc">
              Cách mạng công nghiệp 4.0 làm biến đổi cơ cấu lao động và hình thức của giai cấp công nhân.
            </p>
          </RevealBlocks>
        </div>

        <div className="grid two">
          <article className="card">
            <RevealBlocks>
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
                Cuộc Cách mạng công nghiệp lần thứ tư dựa trên công nghệ số, trí tuệ nhân tạo và tự động hóa
                thông minh. Không chỉ thay đổi công cụ mà làm thay đổi toàn diện cách con người sản xuất,
                làm việc và giao tiếp. Nhiều ngành nghề mới (kỹ sư AI, phân tích dữ liệu, an ninh mạng,
                sáng tạo nội dung số…) song song nguy cơ lao động giản đơn bị thay thế bởi robot và tự động hóa.
              </p>
            </RevealBlocks>
          </article>
          <article className="card">
            <RevealBlocks>
              <h3>Sự biến đổi của giai cấp công nhân</h3>
              <ul className="list">
                <li>Từ lao động chân tay sang lao động trí tuệ — vận hành tự động hóa, phần mềm, phối hợp với AI.</li>
                <li>
                  <strong>&ldquo;Công nhân số&rdquo;:</strong> lập trình viên, kỹ sư AI, phân tích dữ liệu,
                  shipper công nghệ, tài xế công nghệ, freelancer trực tuyến, nhân sự vận hành nền tảng…
                </li>
                <li>Môi trường mới: nhà máy thông minh, làm việc từ xa, lao động linh hoạt theo dự án.</li>
                <li>Áp lực học tập liên tục, cạnh tranh cao, phải cập nhật kiến thức để không tụt hậu.</li>
              </ul>
              <p className="tight-p">
                Theo Mác – Lênin, nếu không sở hữu TLSX chủ yếu và phải lao động tạo giá trị trong nền
                sản xuất hiện đại (kể cả sản xuất số), nhiều nhóm trên vẫn mang đặc điểm giai cấp công nhân hiện đại.
              </p>
            </RevealBlocks>
          </article>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-dot" />
            <div className="timeline-content">
              <RevealBlocks step={80}>
                <h4>Vai trò mới</h4>
                <p>
                  Tiếp tục là lực lượng sản xuất chủ yếu, thúc đẩy chuyển đổi số, công nghiệp hóa và hiện đại hóa.
                  Trong bối cảnh Việt Nam hội nhập sâu, đội ngũ công nhân có trình độ là nhân tố quyết định năng lực cạnh tranh.
                </p>
              </RevealBlocks>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-dot" />
            <div className="timeline-content">
              <RevealBlocks step={80}>
                <h4>Năng lực cốt lõi</h4>
                <p>Kỷ luật, sáng tạo, làm chủ công nghệ và trách nhiệm xã hội.</p>
              </RevealBlocks>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-dot" />
            <div className="timeline-content">
              <RevealBlocks step={80}>
                <h4>Kết luận phần II</h4>
                <p>Giai cấp công nhân không biến mất mà đang hiện đại hóa và tri thức hóa.</p>
              </RevealBlocks>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="phan-3">
        <div className="section-header">
          <RevealBlocks>
            <div className="section-tag-row">
              <IconRobot />
              <p className="section-tag">PHẦN III</p>
            </div>
            <h2>Ai là &ldquo;công nhân&rdquo; trong thời đại 4.0?</h2>
            <p className="section-desc">
              Tiêu đề gợi mở tranh luận: trí tuệ nhân tạo <strong>không</strong> là giai cấp xã hội; trọng tâm là
              phân tích <strong>người lao động</strong> trong nền sản xuất hiện đại theo các tiêu chí Mác – Lênin.
            </p>
          </RevealBlocks>
        </div>

        <div className="grid three">
          <article className="card">
            <RevealBlocks>
              <h3>Cách hiểu truyền thống</h3>
              <p>
                Công nhân thường gắn với lao động chân tay trong nhà máy, xí nghiệp (Cách mạng công nghiệp
                1–3). Sang 4.0, lao động dựa nhiều hơn vào tri thức, công nghệ và xử lý thông tin — đặt câu hỏi
                liệu khái niệm còn giới hạn trong xưởng máy hay không.
              </p>
            </RevealBlocks>
          </article>
          <article className="card">
            <RevealBlocks>
              <h3>Nhóm lao động gây tranh luận</h3>
              <ul className="list">
                <li>Lập trình viên, kỹ sư AI, phân tích dữ liệu.</li>
                <li>Giáo viên, bác sĩ, y tá (thường gần trí thức; cần xét lao động thuê cụ thể).</li>
                <li>Công chức nhà nước; streamer, freelancer, shipper, tài xế công nghệ.</li>
              </ul>
            </RevealBlocks>
          </article>
          <article className="card">
            <RevealBlocks>
              <h3>Tiêu chí cốt lõi</h3>
              <ul className="list">
                <li>Có sở hữu tư liệu sản xuất hay không.</li>
                <li>Có phải bán sức lao động hay không.</li>
                <li>Có tham gia nền sản xuất hiện đại hay không.</li>
              </ul>
            </RevealBlocks>
          </article>
        </div>

        <div className="debate-grid">
          <article className="card debate-card">
            <RevealBlocks step={80}>
              <h4>Lập trình viên, kỹ sư AI</h4>
              <p>
                Phần lớn không sở hữu doanh nghiệp hay TLSX lớn; bán sức lao động trí tuệ theo hợp đồng, nhận lương —
                nhiều trường hợp mang đặc điểm giai cấp công nhân hiện đại.
              </p>
            </RevealBlocks>
          </article>
          <article className="card debate-card">
            <RevealBlocks step={80}>
              <h4>Giáo viên, bác sĩ, y tá</h4>
              <p>
                Thường được xếp gần tầng lớp trí thức hơn là &ldquo;công nhân nhà máy&rdquo;, nhưng nếu làm thuê
                trong cơ chế tương tự, vẫn cần xét vị trí trong quan hệ sản xuất cụ thể.
              </p>
            </RevealBlocks>
          </article>
          <article className="card debate-card">
            <RevealBlocks step={80}>
              <h4>Công chức nhà nước</h4>
              <p>
                Làm việc trong bộ máy nhà nước, không trực tiếp tham gia sản xuất công nghiệp — thường{' '}
                <strong>không</strong> được xem là giai cấp công nhân theo nghĩa hẹp.
              </p>
            </RevealBlocks>
          </article>
          <article className="card debate-card">
            <RevealBlocks step={80}>
              <h4>Streamer, freelancer, shipper…</h4>
              <p>
                Phụ thuộc nền tảng, thuật toán, doanh nghiệp công nghệ; ranh giới lao động tự do và làm thuê
                mờ đi — vẫn phân tích qua tiêu chí sở hữu TLSX và bán sức lao động.
              </p>
            </RevealBlocks>
          </article>
        </div>

        <div className="callout">
          <RevealBlocks step={90}>
            <h3>Kết luận phần III</h3>
            <p>
              Giai cấp công nhân hiện đại bao gồm lao động công nghiệp, lao động trí tuệ, lao động công nghệ
              và lao động trên nền tảng số. Công nghệ tái định nghĩa hình thức nhưng không thay đổi bản chất
              quan hệ lao động.
            </p>
          </RevealBlocks>
        </div>

        <div className="card emphasis">
          <RevealBlocks step={90}>
            <h3>Liên hệ sinh viên</h3>
            <p>
              Sinh viên hôm nay là lực lượng lao động tương lai: sau khi ra trường, phần lớn sẽ làm việc cho
              doanh nghiệp, tham gia nền kinh tế số, bán sức lao động trí tuệ và sử dụng AI trong công việc.
              Cần nâng cao chuyên môn, kỹ năng số, tư duy sáng tạo và khả năng thích nghi với môi trường lao động
              hiện đại.
            </p>
          </RevealBlocks>
        </div>
      </section>

      <section className="section" id="phan-4">
        <div className="section-header">
          <RevealBlocks>
            <div className="section-tag-row">
              <IconTrend />
              <p className="section-tag">PHẦN IV</p>
            </div>
            <h2>Thách thức và cơ hội của giai cấp công nhân thời đại 4.0</h2>
          </RevealBlocks>
        </div>

        <div className="grid two">
          <article className="card">
            <RevealBlocks>
              <h3>Thách thức nổi bật</h3>
              <ul className="list">
                <li>Robot và AI thay thế lao động giản đơn, lặp lại — nguy cơ thất nghiệp cơ cấu.</li>
                <li>Vòng đời kỹ năng rút ngắn (ước tính trước đây 20–30 năm, nay nhiều lĩnh vực 5–7 năm).</li>
                <li>Bất bình đẳng số: đô thị – nông thôn, lao động có đào tạo và lao động phổ thông.</li>
                <li>Lao động nền tảng: thu nhập bấp bênh, phụ thuộc thuật toán; thiếu hợp đồng và bảo hiểm.</li>
              </ul>
            </RevealBlocks>
          </article>
          <article className="card">
            <RevealBlocks>
              <h3>Cơ hội mở ra</h3>
              <ul className="list">
                <li>Tiếp cận và làm chủ công nghệ: AI, dữ liệu, tự động hóa như năng lực — không chỉ mối đe dọa.</li>
                <li>Nghề mới: kỹ sư AI, phân tích dữ liệu, an ninh mạng, sáng tạo nội dung, kỹ sư robot…</li>
                <li>&ldquo;Công nhân tri thức&rdquo; — tri thức &amp; kỹ năng số như tư liệu lao động chủ đạo.</li>
                <li>Giảm lao động nặng nhọc/nguy hiểm; năng suất tăng tạo cơ sở cải thiện đời sống (ILO ghi nhận giảm tai nạn khi tự động hóa hiệu quả).</li>
              </ul>
            </RevealBlocks>
          </article>
        </div>

        <div className="fact-strip">
          <RevealBlocks step={90}>
            <p>
              <strong>Thực tiễn:</strong> WEF (2023) cảnh báo ~83 triệu việc làm toàn cầu có nguy cơ bị thay thế
              đến 2027; nhiều KCN tại Bình Dương, Đồng Nai triển khai dây chuyền tự động trong may mặc, điện tử.
              McKinsey (2023): 87% doanh nghiệp thiếu kỹ năng số; Việt Nam ~27% lao động qua đào tạo (2023) — hơn 70% đối mặt
              áp lực chuyển đổi.
            </p>
          </RevealBlocks>
        </div>

        <div className="stats">
          <div className="stat">
            <div className="stat-icon"><IconWorld /></div>
            <RevealBlocks step={80}>
              <h3>83M</h3>
              <p>Việc làm toàn cầu có nguy cơ bị thay thế đến 2027 (WEF 2023).</p>
            </RevealBlocks>
          </div>
          <div className="stat">
            <div className="stat-icon"><IconAlertTrend /></div>
            <RevealBlocks step={80}>
              <h3>87%</h3>
              <p>Doanh nghiệp thiếu hụt kỹ năng số (McKinsey 2023).</p>
            </RevealBlocks>
          </div>
          <div className="stat">
            <div className="stat-icon"><IconFlag /></div>
            <RevealBlocks step={80}>
              <h3>27%</h3>
              <p>Tỷ lệ lao động qua đào tạo tại Việt Nam (2023).</p>
            </RevealBlocks>
          </div>
        </div>
      </section>

      <section className="section" id="phan-5">
        <div className="section-header">
          <RevealBlocks>
            <div className="section-tag-row">
              <IconStar />
              <p className="section-tag">PHẦN V</p>
            </div>
            <h2>Thực tiễn Việt Nam, định hướng 2030 và thông điệp tương lai</h2>
            <p className="section-desc">
              Thông tin thêm: {' '}
              <a
                className="inline-link"
                href="https://xaydungchinhsach.chinhphu.vn/toan-van-nghi-quyet-dai-hoi-dai-bieu-toan-quoc-lan-thu-xiv-cua-dang-119260206221643667.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                văn kiện Đại hội đại biểu toàn quốc lần thứ XIV
              </a>
            </p>
          </RevealBlocks>
        </div>

        <div className="grid two">
          <article className="card">
            <h3>Việt Nam trong chuyển đổi số</h3>
            <ul className="list">
              <li>
                <strong>Chuyển đổi số quốc gia:</strong> lấy KHCN, đổi mới sáng tạo và chuyển đổi số làm động lực
                chính cho phát triển nhanh, bền vững.
              </li>
              <li>
                <strong>Kinh tế số:</strong> phấn đấu tỉ trọng kinh tế số ~30% GDP vào năm 2030.
              </li>
              <li>
                <strong>KHCN &amp; công nghiệp hóa:</strong> hiện đại hóa dựa trên tiến bộ khoa học – công nghệ.
              </li>
              <li>
                <strong>Nhân lực số:</strong> đột phá chất lượng nguồn nhân lực trình độ cao, đáp ứng đổi mới công nghệ.
              </li>
            </ul>
          </article>
          <article className="card">
            <h3>Quan điểm Đảng và Nhà nước (khái quát từ văn kiện)</h3>
            <ul className="list">
              <li>Xây dựng giai cấp công nhân hiện đại: đông về số lượng, vững về chất lượng; nhận thức chính trị rõ ràng.</li>
              <li>Nâng cao trình độ: đào tạo, bồi dưỡng chuyên môn, kỹ năng nghề, kỷ luật — thích ứng CMCN 4.0.</li>
              <li>Thúc đẩy KHCN: hoàn thiện cơ chế, chính sách; tạo nền tảng cho lực lượng sản xuất mới.</li>
              <li>Nhân lực số: trang bị kỹ năng số toàn diện cho người lao động.</li>
            </ul>
          </article>
        </div>

        <div className="grid three">
          <article className="card soft">
            <h3>Hình mẫu công nhân đến 2030</h3>
            <ul className="list">
              <li>Có tri thức; chuyển từ hao phí cơ bắp sang hao phí trí lực.</li>
              <li>Kỹ năng số toàn diện trong kinh tế số &amp; xã hội số.</li>
              <li>Nắm bắt AI, tự động hóa; sáng tạo, thích nghi nhanh.</li>
              <li>Đạo đức nghề nghiệp, kỷ luật, trách nhiệm công dân.</li>
            </ul>
          </article>
          <article className="card soft">
            <h3>Trách nhiệm thế hệ trẻ / sinh viên</h3>
            <ul className="list">
              <li>Kiên trì học tập — nuôi hoài bão, ý chí vươn lên.</li>
              <li>Nâng kỹ năng số, ngoại ngữ, tư duy với AI trong giáo dục hiện đại.</li>
              <li>Ứng dụng AI có trách nhiệm: đạo đức, an toàn, trách nhiệm xã hội.</li>
              <li>Chủ động chuyển đổi số, làm chủ KHCN để tham gia nền kinh tế số.</li>
            </ul>
          </article>
          <article className="card soft">
            <h3>Thông điệp khép lại</h3>
            <ul className="list">
              <li>Giai cấp công nhân không biến mất; xung đột lợi ích cơ bản trong quan hệ lao động vẫn cần được nhận thức đầy đủ.</li>
              <li>Công nghệ và kinh tế tri thức tái cấu trúc nghề nghiệp, &ldquo;trí tuệ hóa&rdquo; — bản chất giai cấp không đơn giản bị xóa bỏ.</li>
              <li>Lấy con người làm trung tâm: làm chủ công nghệ vì phát triển kinh tế – xã hội nhanh và bền vững.</li>
            </ul>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-note">
          <RevealBlocks step={90}>
            <p>
              <strong>Khai báo sử dụng AI:</strong> Phần code được hỗ trợ
              bởi <strong>Cursor</strong>.
            </p>
          </RevealBlocks>
        </div>
      </footer>

    </div>
  )
}

export default App
