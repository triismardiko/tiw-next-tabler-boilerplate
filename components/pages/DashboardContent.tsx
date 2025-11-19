// src/components/pages/DashboardContent.tsx
"use client";

import { useTranslation } from "../i18n/LanguageProvider";

export function DashboardContent() {
  const { t } = useTranslation();

  return (
    <div className="page-body">
      <div className="container-xl">
        {/* Overview title */}
        <div className="page-header d-print-none mb-3">
          <div className="row align-items-center">
            <div className="col">
              <div className="page-pretitle">Overview</div>
              <h2 className="page-title">Dashboard</h2>
            </div>
          </div>
        </div>

        {/* First row: welcome card + metrics */}
        <div className="row row-cards mb-3">
          {/* Welcome card */}
          <div className="col-12 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="card-title">
                      Welcome back, Pawel
                    </h3>
                    <p className="text-muted">
                      You have 5 new messages and 2 new notifications.
                    </p>

                    <div className="row g-2">
                      <div className="col-6">
                        <div className="text-muted">Today's sales</div>
                        <div className="h2 mb-0">6,782</div>
                        <div className="d-flex align-items-center text-success">
                          <span className="me-1">7%</span>
                          <span className="text-muted">↑</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="text-muted">Growth rate</div>
                        <div className="h2 mb-0">78.4%</div>
                        <div className="d-flex align-items-center text-danger">
                          <span className="me-1">-1%</span>
                          <span className="text-muted">↓</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ilustrasi placeholder */}
                  <div className="col-auto d-none d-md-block">
                    <div className="avatar avatar-xl bg-primary-lt">
                      <span className="fs-1">📊</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KPI cards kanan */}
          <div className="col-12 col-lg-6">
            <div className="row row-cards">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="text-muted mb-1">Total users</div>
                    <div className="h2 mb-0">75,782</div>
                    <div className="d-flex align-items-center mt-1">
                      <span className="text-success me-2">2% ↑</span>
                      <span className="text-muted small">
                        24,635 users increased from last month
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="text-muted mb-1">Active users</div>
                    <div className="h2 mb-3">25,782</div>
                    <div className="d-flex align-items-center">
                      <div
                        className="progress flex-fill"
                        style={{ height: 8 }}
                      >
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: "78%" }}
                        />
                      </div>
                      <span className="ms-2 fw-bold">78%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* extra cards bawah */}
              <div className="col-sm-6">
                <div className="card card-sm">
                  <div className="card-body">
                    <div className="text-muted">Sales</div>
                    <div className="h2 mb-0">75%</div>
                    <div className="text-muted small">Conversion rate</div>
                    <div className="progress mt-2" style={{ height: 4 }}>
                      <div
                        className="progress-bar bg-green"
                        style={{ width: "70%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="card card-sm">
                  <div className="card-body">
                    <div className="text-muted">Revenue</div>
                    <div className="h2 mb-0">$4,300</div>
                    <div className="text-success small">8% ↑</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second row: small stat cards (Sales, Orders, Shares, Likes) */}
        <div className="row row-cards mb-3">
          <div className="col-sm-6 col-lg-3">
            <div className="card card-sm">
              <div className="card-body d-flex align-items-center">
                <span className="avatar bg-primary-lt me-3">💰</span>
                <div>
                  <div className="h3 mb-0">132</div>
                  <div className="text-muted">Sales</div>
                  <div className="text-muted small">12 waiting payments</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-sm">
              <div className="card-body d-flex align-items-center">
                <span className="avatar bg-success-lt me-3">📦</span>
                <div>
                  <div className="h3 mb-0">78</div>
                  <div className="text-muted">Orders</div>
                  <div className="text-muted small">32 shipped</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-sm">
              <div className="card-body d-flex align-items-center">
                <span className="avatar bg-dark text-white me-3">✖</span>
                <div>
                  <div className="h3 mb-0">623</div>
                  <div className="text-muted">Shares</div>
                  <div className="text-muted small">16 today</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-sm">
              <div className="card-body d-flex align-items-center">
                <span className="avatar bg-blue-lt me-3">f</span>
                <div>
                  <div className="h3 mb-0">132</div>
                  <div className="text-muted">Likes</div>
                  <div className="text-muted small">21 today</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder untuk section lain (traffic summary, map, dll) */}
        {/* Bisa kamu lanjutkan sendiri kalau mau full sama persis */}
      </div>
    </div>
  );
}
