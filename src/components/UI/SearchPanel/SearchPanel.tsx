import React from 'react';

import './SearchPanel.css';

interface SearchPanelProps {
  placeholder?: string;
}

const SearchPanel: React.FC<SearchPanelProps> = ({placeholder}) => {
  return (
    <div className='search-panel__wrapper'>
      <input className='search-panel' type='search' placeholder={placeholder}/>
    </div>
  );
};

export default SearchPanel;
