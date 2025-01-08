import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Modal, Button } from 'react-bootstrap';
import '../styles/BuffetMenu.css';

function BuffetMenu() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);  // สถานะการแสดง modal

  // ข้อมูลสินค้า
  const products = [
    { id: 1, name: 'น้ำดำ', price: 199, category: 'น้ำชาบู' },
    { id: 2, name: 'น้ำใส', price: 159, category: 'น้ำชาบู' },
    { id: 3, name: 'ชาบูเนื้อ', price: 179, category: 'เนื้อ' },
    { id: 4, name: 'กุ้งสด', price: 229, category: 'อาหารทะเล' },
    { id: 5, name: 'ปลาแซลมอน', price: 250, category: 'อาหารทะเล' },
    { id: 6, name: 'เห็ดหอม', price: 120, category: 'ผัก' },
    { id: 7, name: 'ผักกาดหอม', price: 90, category: 'ผัก' },
    { id: 8, name: 'ไข่ไก่', price: 50, category: 'อื่นๆ' },
    { id: 9, name: 'น้ำซุปชาบู', price: 100, category: 'อื่นๆ' },
  ];

  // ฟังก์ชันเพิ่มสินค้าในตะกร้า
  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex !== -1) {
      // ถ้ามีสินค้าในตะกร้าแล้ว ให้เพิ่มจำนวน
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1; // เพิ่มจำนวนสินค้า
      setCart(updatedCart);
    } else {
      // ถ้าไม่มีสินค้าในตะกร้าเลย ให้เพิ่มสินค้านั้นไปพร้อมจำนวน 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // ฟังก์ชันลบสินค้าออกจากตะกร้า
  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  // คำนวณราคาทั้งหมดและส่วนลด
  const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  const discount = cart.length >= 5 ? totalPrice * 0.1 : 0;
  const finalPrice = totalPrice - discount;

  // ฟังก์ชันเพื่อแสดงและซ่อน modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="buffet-menu">
      <h2>เมนูบุฟเฟ่ต์</h2>

      {/* เริ่มต้นแถบ Tab สำหรับแยกหมวดหมู่สินค้า */}
      <Tabs>
        <TabList className="nav nav-tabs">
          <Tab>น้ำซุปชาบู</Tab>
          <Tab>เนื้อ</Tab>
          <Tab>อาหารทะเล</Tab>
          <Tab>ผัก</Tab>
          <Tab>อื่นๆ</Tab>
        </TabList>

        {/* Tab สำหรับหมู */}
        <TabPanel>
          <div className="row">
            {products.filter(product => product.category === 'น้ำชาบู').map(product => (
              <div className="col-12 col-md-4 mb-4" key={product.id}>
                <div className="card">
                  <img src="https://via.placeholder.com/300x200" alt={product.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">ราคา: {product.price} บาท</p>
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>เพิ่มลงตะกร้า</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        {/* Tab สำหรับเนื้อ */}
        <TabPanel>
          <div className="row">
            {products.filter(product => product.category === 'เนื้อ').map(product => (
              <div className="col-12 col-md-4 mb-4" key={product.id}>
                <div className="card">
                  <img src="https://via.placeholder.com/300x200" alt={product.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">ราคา: {product.price} บาท</p>
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>เพิ่มลงตะกร้า</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        {/* Tab สำหรับอาหารทะเล */}
        <TabPanel>
          <div className="row">
            {products.filter(product => product.category === 'อาหารทะเล').map(product => (
              <div className="col-12 col-md-4 mb-4" key={product.id}>
                <div className="card">
                  <img src="https://via.placeholder.com/300x200" alt={product.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">ราคา: {product.price} บาท</p>
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>เพิ่มลงตะกร้า</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        {/* Tab สำหรับผัก */}
        <TabPanel>
          <div className="row">
            {products.filter(product => product.category === 'ผัก').map(product => (
              <div className="col-12 col-md-4 mb-4" key={product.id}>
                <div className="card">
                  <img src="https://via.placeholder.com/300x200" alt={product.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">ราคา: {product.price} บาท</p>
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>เพิ่มลงตะกร้า</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        {/* Tab สำหรับอื่นๆ */}
        <TabPanel>
          <div className="row">
            {products.filter(product => product.category === 'อื่นๆ').map(product => (
              <div className="col-12 col-md-4 mb-4" key={product.id}>
                <div className="card">
                  <img src="https://via.placeholder.com/300x200" alt={product.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">ราคา: {product.price} บาท</p>
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>เพิ่มลงตะกร้า</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>

      {/* ปุ่มแสดง Modal สำหรับชำระเงิน */}
      <div className="cart-summary mt-4">
        <h4>สรุปการสั่งซื้อ</h4>
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              {product.name} x {product.quantity} <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(product.id)}>ลบ</button>
            </li>
          ))}
        </ul>
        <p>รวมทั้งหมด: {totalPrice} บาท</p>
        {discount > 0 && <p>ส่วนลด 10%: -{discount} บาท</p>}
        <p>ยอดที่ต้องชำระ: {finalPrice} บาท</p>
        <button className="btn btn-success" onClick={handleShowModal}>ชำระเงิน</button>
      </div>

      {/* Modal แสดงรายการและราคา */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>รายละเอียดการสั่งซื้อ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {cart.map(product => (
              <li key={product.id}>
                {product.name} x {product.quantity} = {product.price * product.quantity} บาท
              </li>
            ))}
          </ul>
          <p>รวมทั้งหมด: {totalPrice} บาท</p>
          {discount > 0 && <p>ส่วนลด 10%: -{discount} บาท</p>}
          <p>ยอดที่ต้องชำระ: {finalPrice} บาท</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            ปิด
          </Button>
          <Button variant="primary" onClick={() => alert('ชำระเงินสำเร็จ')}>
            ชำระเงิน
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BuffetMenu;
