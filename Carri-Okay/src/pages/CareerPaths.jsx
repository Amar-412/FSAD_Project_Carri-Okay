import { useState } from 'react';
import { careers } from '../data/careers';
import Card from '../components/Card';
import './CareerPaths.css';

function CareerPaths() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(careers.map(c => c.category))];

  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || career.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="career-paths-page">
      <div className="container">
        <section className="career-paths-header">
          <h1 className="page-title">Explore Career Paths</h1>
          <p className="page-subtitle">Discover opportunities that align with your interests and skills</p>
        </section>

        <section className="filters-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search careers..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="careers-section">
          <div className="careers-grid">
            {filteredCareers.map(career => (
              <Card key={career.id} className="career-path-card">
                <div className="career-path-header">
                  <h3 className="career-path-title">{career.title}</h3>
                  <span className="career-path-category">{career.category}</span>
                </div>
                <p className="career-path-description">{career.description}</p>
                <div className="career-path-skills">
                  <h4 className="skills-heading">Required Skills:</h4>
                  <div className="skills-list">
                    {career.skills.map((skill, idx) => (
                      <span key={idx} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          {filteredCareers.length === 0 && (
            <div className="no-results">
              <p>No careers found matching your criteria.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default CareerPaths;

