import React from 'react';

const BackgroundAnimation = () => {
  // Generate random molecules
  const molecules = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 20,
    animationDuration: 15 + Math.random() * 15,
  }));

  return (
    <div className="floating-molecules">
      {molecules.map((molecule) => (
        <div
          key={molecule.id}
          className="molecule"
          style={{
            left: `${molecule.left}%`,
            animationDelay: `${molecule.animationDelay}s`,
            animationDuration: `${molecule.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
