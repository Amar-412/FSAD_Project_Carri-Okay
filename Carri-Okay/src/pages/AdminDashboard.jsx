import { useState } from 'react';
import { adminMetrics } from '../data/adminData';
import { careers } from '../data/careers';
import { counsellors } from '../data/counsellors';
import { resources } from '../data/resources';
import Card from '../components/Card';
import './AdminDashboard.css';

function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="admin-dashboard">
      <div className="admin-container">
        <aside className="admin-sidebar">
          <h2 className="sidebar-title">Admin Panel</h2>
          <nav className="sidebar-nav">
            <button
              className={`nav-item ${activeSection === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveSection('overview')}
            >
              Overview
            </button>
            <button
              className={`nav-item ${activeSection === 'careers' ? 'active' : ''}`}
              onClick={() => setActiveSection('careers')}
            >
              Manage Careers
            </button>
            <button
              className={`nav-item ${activeSection === 'counsellors' ? 'active' : ''}`}
              onClick={() => setActiveSection('counsellors')}
            >
              Manage Counsellors
            </button>
            <button
              className={`nav-item ${activeSection === 'resources' ? 'active' : ''}`}
              onClick={() => setActiveSection('resources')}
            >
              Manage Resources
            </button>
          </nav>
        </aside>

        <main className="admin-main">
          {activeSection === 'overview' && (
            <div className="admin-section">
              <h1 className="admin-page-title">Dashboard Overview</h1>
              <div className="metrics-grid">
                <Card className="metric-card">
                  <div className="metric-icon">👥</div>
                  <div className="metric-value">{adminMetrics.totalUsers.toLocaleString()}</div>
                  <div className="metric-label">Total Users</div>
                </Card>
                <Card className="metric-card">
                  <div className="metric-icon">📅</div>
                  <div className="metric-value">{adminMetrics.activeSessions}</div>
                  <div className="metric-label">Active Sessions</div>
                </Card>
                <Card className="metric-card">
                  <div className="metric-icon">📚</div>
                  <div className="metric-value">{adminMetrics.totalResources}</div>
                  <div className="metric-label">Total Resources</div>
                </Card>
                <Card className="metric-card">
                  <div className="metric-icon">🤝</div>
                  <div className="metric-value">{adminMetrics.totalCounsellors}</div>
                  <div className="metric-label">Counsellors</div>
                </Card>
                <Card className="metric-card">
                  <div className="metric-icon">📈</div>
                  <div className="metric-value">{adminMetrics.monthlyGrowth}%</div>
                  <div className="metric-label">Monthly Growth</div>
                </Card>
                <Card className="metric-card">
                  <div className="metric-icon">⭐</div>
                  <div className="metric-value">{adminMetrics.averageSessionRating}</div>
                  <div className="metric-label">Avg. Session Rating</div>
                </Card>
              </div>
            </div>
          )}

          {activeSection === 'careers' && (
            <div className="admin-section">
              <div className="section-header">
                <h1 className="admin-page-title">Manage Career Resources</h1>
                <button className="btn btn-primary">Add New Career</button>
              </div>
              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Skills Count</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {careers.map(career => (
                      <tr key={career.id}>
                        <td>{career.id}</td>
                        <td>{career.title}</td>
                        <td><span className="badge">{career.category}</span></td>
                        <td>{career.skills.length}</td>
                        <td>
                          <div className="table-actions">
                            <button className="btn-action edit">Edit</button>
                            <button className="btn-action delete">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeSection === 'counsellors' && (
            <div className="admin-section">
              <div className="section-header">
                <h1 className="admin-page-title">Manage Counsellors</h1>
                <button className="btn btn-primary">Add New Counsellor</button>
              </div>
              <div className="counsellors-admin-grid">
                {counsellors.map(counsellor => (
                  <Card key={counsellor.id} className="counsellor-admin-card">
                    <div className="counsellor-admin-header">
                      <h3>{counsellor.name}</h3>
                      <span className="experience-badge">{counsellor.experience} years</span>
                    </div>
                    <p className="counsellor-admin-bio">{counsellor.bio}</p>
                    <div className="counsellor-admin-expertise">
                      <strong>Expertise:</strong> {counsellor.expertise.join(', ')}
                    </div>
                    <div className="counsellor-admin-actions">
                      <button className="btn btn-outline">Edit</button>
                      <button className="btn btn-outline">Delete</button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'resources' && (
            <div className="admin-section">
              <div className="section-header">
                <h1 className="admin-page-title">Manage Resources</h1>
                <button className="btn btn-primary">Add New Resource</button>
              </div>
              <div className="resources-admin-grid">
                {resources.map(resource => (
                  <Card key={resource.id} className="resource-admin-card">
                    <div className="resource-admin-header">
                      <h3>{resource.title}</h3>
                      <span className="resource-type-badge">{resource.type}</span>
                    </div>
                    <p className="resource-admin-description">{resource.description}</p>
                    <div className="resource-admin-meta">
                      <span className="resource-category">{resource.category}</span>
                    </div>
                    <div className="resource-admin-actions">
                      <button className="btn btn-outline">Edit</button>
                      <button className="btn btn-outline">Delete</button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;

