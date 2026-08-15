import React from 'react';

const TeamMember10 = () => {
  const name = ""; // Leave blank for now
  
  // Return null if name is blank
  if (!name.trim()) {
    return null;
  }
  
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      transition: 'box-shadow 0.3s ease'
    }}
    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}
    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)'}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{
          width: '5rem',
          height: '5rem',
          background: 'linear-gradient(to bottom right, #10b981, #059669)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          {name.charAt(0).toUpperCase()}
        </div>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#1f2937',
          marginBottom: '0.5rem'
        }}>
          {name}
        </h3>
        <p style={{
          color: '#6b7280',
          fontSize: '0.875rem',
          textAlign: 'center',
          marginBottom: '1rem'
        }}>
          Team B Member
        </p>
        <div style={{
          backgroundColor: '#f3f4f6',
          borderRadius: '0.375rem',
          padding: '0.75rem',
          width: '100%'
        }}>
          <p style={{
            fontSize: '0.75rem',
            color: '#4b5563',
            margin: 0
          }}>
            "Ready to collaborate and build amazing things!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember10;
