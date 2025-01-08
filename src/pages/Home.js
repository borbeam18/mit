import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>ยินดีต้อนรับสู่ร้าน ชาบู...สุดโหดดด</h1>
        <p>สัมผัสประสบการณ์บุฟเฟ่ต์หมูกระทะสุดพิเศษกับเรา</p>
        <a href="/buffet-menu" className="btn btn-primary">ดูเมนูบุฟเฟ่ต์</a>
      </div>
    </div>
  );
}

export default Home;
