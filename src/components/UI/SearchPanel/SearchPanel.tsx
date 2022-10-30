import React from 'react';

import './SearchPanel.css';

interface SearchPanelProps {
  placeholder?: string;
}

const SearchPanel: React.FC<SearchPanelProps> = ({placeholder}) => {
  return (
    <input className='search-panel' type='search' placeholder={placeholder}/>
  );
};

export default SearchPanel;
