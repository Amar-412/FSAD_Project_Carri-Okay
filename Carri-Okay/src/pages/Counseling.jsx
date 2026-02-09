import { useState } from 'react';
import { counsellors } from '../data/counsellors';
import Card from '../components/Card';
import './Counseling.css';

function Counseling() {
  const [selectedCounsellor, setSelectedCounsellor] = useState(null);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    topic: ''
  });

  const handleScheduleClick = (counsellor) => {
    setSelectedCounsellor(counsellor);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Session scheduling form submitted (UI only - no data storage)');
    setSelectedCounsellor(null);
    setFormData({ date: '', time: '', topic: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="counseling-page">
      <div className="container">
        <section className="counseling-header">
          <h1 className="page-title">Book a Counseling Session</h1>
          <p className="page-subtitle">Connect with expert counselors to guide your career journey</p>
        </section>

        <section className="counsellors-section">
          <div className="counsellors-grid">
            {counsellors.map(counsellor => (
              <Card key={counsellor.id} className="counsellor-card">
                <div className="counsellor-header">
                  <h3 className="counsellor-name">{counsellor.name}</h3>
                  <span className="counsellor-experience">{counsellor.experience} years experience</span>
                </div>
                <p className="counsellor-bio">{counsellor.bio}</p>
                <div className="counsellor-expertise">
                  <strong>Expertise:</strong>
                  <div className="expertise-tags">
                    {counsellor.expertise.map((exp, idx) => (
                      <span key={idx} className="expertise-tag">{exp}</span>
                    ))}
                  </div>
                </div>
                <div className="counsellor-availability">
                  <strong>Availability:</strong> {counsellor.availability}
                </div>
                <button
                  className="btn btn-primary schedule-btn"
                  onClick={() => handleScheduleClick(counsellor)}
                >
                  Schedule Session
                </button>
              </Card>
            ))}
          </div>
        </section>

        {selectedCounsellor && (
          <section className="scheduling-modal">
            <div className="modal-overlay" onClick={() => setSelectedCounsellor(null)}></div>
            <div className="modal-content">
              <div className="modal-header">
                <h2>Schedule Session with {selectedCounsellor.name}</h2>
                <button className="modal-close" onClick={() => setSelectedCounsellor(null)}>×</button>
              </div>
              <form onSubmit={handleFormSubmit} className="scheduling-form">
                <div className="form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Preferred Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="topic">Discussion Topic</label>
                  <textarea
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    required
                    className="form-textarea"
                    rows="4"
                  />
                </div>
                <div className="form-actions">
                  <button type="button" className="btn btn-outline" onClick={() => setSelectedCounsellor(null)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Counseling;

