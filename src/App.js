import React, { Component } from 'react';
import './App.css';
import EnhancedTable from './components/PaginatedSortableTable/EnhancedTable';

class App extends Component {
  render() {
    return (
      <div className="App">
          <EnhancedTable/>
      </div>
    );
  }
}

export default App;


/*
import Select from './Select';
<Select/>
 */