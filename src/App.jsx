import './App.css'

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
            <p className="brand-subtitle">Chương 2 · Sứ mệnh lịch sử của giai cấp công nhân</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#phan-1">Cơ sở lý luận</a>
          <a href="#phan-2">Thời đại 4.0</a>
          <a href="#phan-3">AI & công nhân</a>
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
            <li>Giai cấp công nhân là lực lượng sản xuất tiên tiến của lịch sử.</li>
            <li>4.0 tạo ra công nhân tri thức và công nhân số.</li>
            <li>AI thay đổi hình thức lao động nhưng không xóa bỏ giai cấp công nhân.</li>
            <li>Thách thức lớn: tự động hóa, bất bình đẳng số, thiếu kỹ năng.</li>
            <li>Cơ hội: nghề mới, tăng năng suất, nâng cao vị thế người lao động.</li>
          </ul>
        </div>
      </section>

      {/* ── PHẦN I ── */}
      <section className="section" id="phan-1">
        <div className="section-header">
          <div className="section-tag-row">
            <IconBook />
            <p className="section-tag">PHẦN I</p>
          </div>
          <h2>Cơ sở lý luận về giai cấp công nhân</h2>
          <p className="section-desc">
            Quan điểm cơ bản của chủ nghĩa Mác – Lênin về giai cấp công nhân và sứ mệnh lịch sử.
          </p>
        </div>

        <div className="grid two">
          <article className="card">
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
          </article>

          <article className="card">
            <h3>Sứ mệnh lịch sử</h3>
            <p>
              Thông qua Đảng Cộng sản, giai cấp công nhân lãnh đạo nhân dân lao động xóa bỏ bóc
              lột, xây dựng xã hội xã hội chủ nghĩa và cộng sản chủ nghĩa.
            </p>
            <ul className="list">
              <li><strong>Kinh tế:</strong> tạo cơ sở vật chất, thúc đẩy lực lượng sản xuất.</li>
              <li><strong>Chính trị – xã hội:</strong> giành chính quyền, xây dựng dân chủ XHCN.</li>
              <li><strong>Văn hóa – tư tưởng:</strong> xây dựng hệ giá trị mới và con người mới.</li>
            </ul>
          </article>
        </div>

        <div className="grid three">
          <article className="card soft">
            <h3>Điều kiện khách quan</h3>
            <ul className="list">
              <li>Địa vị kinh tế của giai cấp công nhân trong nền đại công nghiệp.</li>
              <li>Tạo ra phần lớn của cải vật chất xã hội.</li>
              <li>Có khả năng lãnh đạo xây dựng phương thức sản xuất mới.</li>
            </ul>
          </article>
          <article className="card soft">
            <h3>Điều kiện chủ quan</h3>
            <ul className="list">
              <li>Phát triển về số lượng, chất lượng và trình độ chính trị.</li>
              <li>Vai trò của Đảng Cộng sản – đội tiên phong.</li>
              <li>Liên minh công – nông – các tầng lớp lao động khác.</li>
            </ul>
          </article>
          <article className="card soft">
            <h3>Kết luận phần I</h3>
            <p>
              Giai cấp công nhân là lực lượng chủ yếu của tiến trình lịch sử quá độ từ chủ nghĩa
              tư bản lên chủ nghĩa xã hội.
            </p>
          </article>
        </div>
      </section>

      {/* ── PHẦN II ── */}
      <section className="section" id="phan-2">
        <div className="section-header">
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
          <article className="card">
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
          <article className="card">
            <h3>Sự biến đổi của giai cấp công nhân</h3>
            <ul className="list">
              <li>Từ lao động chân tay sang lao động trí tuệ.</li>
              <li>Xuất hiện "công nhân số" trên nền tảng công nghệ.</li>
              <li>Môi trường lao động linh hoạt: nhà máy thông minh, làm việc từ xa.</li>
              <li>Áp lực học tập và cập nhật kỹ năng liên tục.</li>
            </ul>
          </article>
        </div>

        <div className="timeline">
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
      </section>

      {/* ── PHẦN III ── */}
      <section className="section" id="phan-3">
        <div className="section-header">
          <div className="section-tag-row">
            <IconRobot />
            <p className="section-tag">PHẦN III</p>
          </div>
          <h2>AI là giai cấp công nhân trong thời đại 4.0?</h2>
          <p className="section-desc">
            Tranh luận về các nhóm lao động mới và tiêu chí xác định theo quan điểm Mác – Lênin.
          </p>
        </div>

        <div className="grid three">
          <article className="card">
            <h3>Cách hiểu truyền thống</h3>
            <p>
              Công nhân từng được hiểu là lao động chân tay trong nhà máy. 4.0 mở rộng khái niệm khi
              lao động trí tuệ và công nghệ trở thành chủ đạo.
            </p>
          </article>
          <article className="card">
            <h3>Nhóm lao động gây tranh luận</h3>
            <ul className="list">
              <li>Lập trình viên, kỹ sư AI.</li>
              <li>Giáo viên, bác sĩ, y tá.</li>
              <li>Streamer, freelancer, lao động nền tảng.</li>
            </ul>
          </article>
          <article className="card">
            <h3>Tiêu chí cốt lõi</h3>
            <ul className="list">
              <li>Có sở hữu tư liệu sản xuất hay không.</li>
              <li>Có phải bán sức lao động hay không.</li>
              <li>Có tham gia nền sản xuất hiện đại hay không.</li>
            </ul>
          </article>
        </div>

        <div className="callout">
          <h3>Kết luận phần III</h3>
          <p>
            Giai cấp công nhân hiện đại bao gồm lao động công nghiệp, lao động trí tuệ, lao động công nghệ
            và lao động trên nền tảng số. Công nghệ tái định nghĩa hình thức nhưng không thay đổi bản chất
            quan hệ lao động.
          </p>
        </div>

        <div className="card emphasis">
          <h3>Liên hệ sinh viên</h3>
          <p>
            Sinh viên là lực lượng lao động tương lai của xã hội số. Cần nâng cao chuyên môn, kỹ năng số,
            tư duy sáng tạo và khả năng thích nghi để đáp ứng yêu cầu của thời đại 4.0.
          </p>
        </div>
      </section>

      {/* ── PHẦN IV ── */}
      <section className="section" id="phan-4">
        <div className="section-header">
          <div className="section-tag-row">
            <IconTrend />
            <p className="section-tag">PHẦN IV</p>
          </div>
          <h2>Thách thức và cơ hội của giai cấp công nhân thời đại 4.0</h2>
        </div>

        <div className="grid two">
          <article className="card">
            <h3>Thách thức nổi bật</h3>
            <ul className="list">
              <li>Nguy cơ thất nghiệp do tự động hóa và AI.</li>
              <li>Áp lực học tập liên tục vì vòng đời kỹ năng ngắn.</li>
              <li>Bất bình đẳng số giữa nhóm lao động trình độ cao và phổ thông.</li>
              <li>Lao động nền tảng thiếu bảo vệ và cơ chế thương lượng.</li>
            </ul>
          </article>
          <article className="card">
            <h3>Cơ hội mở ra</h3>
            <ul className="list">
              <li>Tiếp cận và làm chủ tư liệu sản xuất mới: AI, dữ liệu, tự động hóa.</li>
              <li>Nhiều nghề mới xuất hiện: AI, an ninh mạng, phân tích dữ liệu.</li>
              <li>Hình thành tầng lớp "công nhân tri thức".</li>
              <li>Điều kiện làm việc và mức sống có thể được cải thiện nhờ năng suất tăng.</li>
            </ul>
          </article>
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
      </section>

      {/* ── PHẦN V ── */}
      <section className="section" id="phan-5">
        <div className="section-header">
          <div className="section-tag-row">
            <IconStar />
            <p className="section-tag">PHẦN V</p>
          </div>
          <h2>Việt Nam, định hướng 2030 và thông điệp tương lai</h2>
        </div>

        <div className="grid two">
          <article className="card">
            <h3>Chuyển đổi số quốc gia</h3>
            <ul className="list">
              <li>Đưa kinh tế số đạt khoảng 30% GDP vào năm 2030.</li>
              <li>Thúc đẩy khoa học công nghệ và đổi mới sáng tạo.</li>
              <li>Phát triển nguồn nhân lực số chất lượng cao.</li>
            </ul>
          </article>
          <article className="card">
            <h3>Quan điểm của Đảng và Nhà nước</h3>
            <ul className="list">
              <li>Xây dựng giai cấp công nhân Việt Nam hiện đại, lớn mạnh.</li>
              <li>Đào tạo và bồi dưỡng kỹ năng nghề, kỷ luật lao động.</li>
              <li>Hoàn thiện cơ chế, chính sách phát triển khoa học – công nghệ.</li>
            </ul>
          </article>
        </div>

        <div className="grid three">
          <article className="card soft">
            <h3>Hình mẫu công nhân 2030</h3>
            <ul className="list">
              <li>Tri thức và kỹ năng số vững.</li>
              <li>Biết sử dụng và làm chủ AI.</li>
              <li>Sáng tạo, thích nghi nhanh, có đạo đức nghề nghiệp.</li>
            </ul>
          </article>
          <article className="card soft">
            <h3>Trách nhiệm của thế hệ trẻ</h3>
            <ul className="list">
              <li>Học tập nghiêm túc, rèn luyện kỹ năng số.</li>
              <li>Ứng dụng AI có trách nhiệm.</li>
              <li>Chủ động thích nghi với chuyển đổi số.</li>
            </ul>
          </article>
          <article className="card soft">
            <h3>Thông điệp cuối</h3>
            <p>
              Giai cấp công nhân không biến mất; công nghệ đang tái định nghĩa hình thức lao động. Con
              người cần làm chủ công nghệ để phát triển xã hội bền vững.
            </p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <p>Chúc buổi thuyết trình thành công!</p>
        <a href="#top">Quay lại đầu trang</a>
      </footer>

    </div>
  )
}

export default App
