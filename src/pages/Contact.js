import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h2>ติดต่อเรา</h2>
      <p>หากคุณมีข้อสงสัยหรือต้องการสอบถามข้อมูลเพิ่มเติม กรุณาติดต่อเราผ่านช่องทางด้านล่าง</p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">ชื่อของคุณ</label>
          <input type="text" className="form-control" id="name" placeholder="กรุณากรอกชื่อ" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">อีเมล์</label>
          <input type="email" className="form-control" id="email" placeholder="กรุณากรอกอีเมล์" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">ข้อความ</label>
          <textarea className="form-control" id="message" rows="4" placeholder="กรุณากรอกข้อความของคุณ"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">ส่งข้อความ</button>
      </form>
    </div>
  );
}

export default Contact;
