import React from 'react';
import './Recents.css';

const Recents = () => {
  const recentActivities = {
    Registration: [
      { id: 1, activity: 'Patient John Doe registered', timestamp: '2023-10-01 10:00 AM' },
      { id: 2, activity: 'Patient Mary Johnson registered', timestamp: '2023-09-30 05:00 PM' },
    ],
    Admission: [
      { id: 3, activity: 'Patient John Doe admitted to Room 101', timestamp: '2023-10-01 11:00 AM' },
    ],
    Login: [
      { id: 4, activity: 'Admin logged in', timestamp: '2023-10-01 08:00 AM' },
      { id: 5, activity: 'Doctor Jane Smith logged in', timestamp: '2023-10-01 09:00 AM' },
    ],
  };

  return (
    <div className="recents">
      <h1>Recent Activities</h1>
      {Object.keys(recentActivities).map((category) => (
        <div key={category} className="recents-category">
          <h2>{category}</h2>
          <ul>
            {recentActivities[category].map((activity) => (
              <li key={activity.id}>
                <span>{activity.activity}</span>
                <span className="timestamp">{activity.timestamp}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Recents;