import React from 'react';
import '../styles/tags.css';

function Tags({ tags }) {
  return (
    <div className="Tags">
      {Object.entries(tags).map(([key, tag]) => (
        <div key={key} className="Tags-Button">
          <span className="Tags-Button-Title">{tag}</span>
        </div>
      ))}
    </div>
  );
}

export default Tags;
