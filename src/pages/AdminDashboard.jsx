import React from "react";
import { FiUsers, FiShoppingCart, FiDollarSign, FiActivity, FiTrendingUp, FiAlertCircle } from "react-icons/fi";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  // Sample data - in a real app this would come from API/state
  const stats = [
    {
      title: "Total Users",
      value: 150,
      change: "+12%",
      trend: "up",
      icon: <FiUsers className="stat-icon" />
    },
    {
      title: "Total Orders",
      value: 75,
      change: "+5%",
      trend: "up",
      icon: <FiShoppingCart className="stat-icon" />
    },
    {
      title: "Revenue",
      value: "$12,500",
      change: "+18%",
      trend: "up",
      icon: <FiDollarSign className="stat-icon" />
    },
    {
      title: "Active Sessions",
      value: 42,
      change: "-3%",
      trend: "down",
      icon: <FiActivity className="stat-icon" />
    }
  ];

  const recentActivities = [
    { id: 1, user: "John Doe", action: "placed an order", time: "2 mins ago", icon: <FiShoppingCart /> },
    { id: 2, user: "Sarah Smith", action: "registered", time: "15 mins ago", icon: <FiUsers /> },
    { id: 3, user: "Admin", action: "updated inventory", time: "1 hour ago", icon: <FiAlertCircle /> }
  ];

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Admin Dashboard</h1>
          <p className="dashboard-subtitle">Welcome back! Here's your overview</p>
        </div>
        <div className="header-actions">
          <button className="date-filter">
            Last 7 days
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </header>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon-container">
              {stat.icon}
            </div>
            <div className="stat-content">
              <h3 className="stat-title">{stat.title}</h3>
              <p className="stat-value">{stat.value}</p>
              <div className={`stat-change ${stat.trend}`}>
                {stat.change}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  {stat.trend === "up" ? (
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  ) : (
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  )}
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="main-content">
          <div className="content-card">
            <div className="card-header">
              <h3>Revenue Overview</h3>
              <button className="view-report">View Report</button>
            </div>
            <div className="chart-placeholder">
              <FiTrendingUp className="chart-icon" />
              <p>Revenue chart will appear here</p>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <div className="content-card">
            <div className="card-header">
              <h3>Recent Activity</h3>
            </div>
            <div className="activity-list">
              {recentActivities.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">
                    {activity.icon}
                  </div>
                  <div className="activity-details">
                    <p>
                      <span className="activity-user">{activity.user}</span> {activity.action}
                    </p>
                    <p className="activity-time">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;