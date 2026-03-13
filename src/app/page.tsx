import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      {/* Background Layer */}
      <Image
        src="/bg-main.png"
        alt="Background"
        fill
        priority
        className="bg-image"
      />

      {/* Brand Icon Watermark */}
      <div className="mask">
        <Image
          src="/mask.png"
          alt="Daena Icon"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Header */}
      <header className="header-logo serif">
        Daena
      </header>

      {/* Hero Content */}
      <main>
        <h1 className="hero-title serif">
          The Private AI Stack<br />
          Enterprises Own Outright
        </h1>
        <p className="hero-subtitle">
          Infrastructure, autonomous agents, and an embedded partner that
          compounds in value with every client, every year.
        </p>
      </main>

      {/* Footer Navigation */}
      <footer className="footer">
        <div className="footer-nav">
          <span>Executive Summary for Investors</span>
          <span>•</span>
          <span>Seed Round 3M</span>
        </div>

        <div>Coming Soon</div>

        <div className="footer-nav">
          <span>Daena Technologies Inc.</span>
          <span>•</span>
          <span>Carmel, California</span>
        </div>
      </footer>
    </div>
  );
}

