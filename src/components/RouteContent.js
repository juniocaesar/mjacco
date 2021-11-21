import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Dashboard from "./Dashboard";
import DaftarProduk from "./Produk/DaftarProduk";

const { Content } = Layout;

export default function MainContent() {
  return (
    <div>
      <Content
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/produk/daftar_produk" element={<DaftarProduk />} />
        </Routes>
      </Content>
    </div>
  );
}
