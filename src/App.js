import React, {Component} from 'react';
import './App.css';
import EnhancedTable from './components/PaginatedSortableTable/EnhancedTable';
//import SelectedListItem from "./components/LegendFilter/SelectedListItem";
import FilterPublications from "./components/LegendFilter/FilterPublications";

class App extends Component {
    render() {
        return (
            <div style={styles} className="App">
                <FilterPublications/>
                <EnhancedTable/>
            </div>
        );
    }
}

export default App;


const styles = {
    display:'flex',
    direction:'row',
    //background: 'linear-gradient(45deg, #bebebe 30%, #bebebe 90%)',
};


/*
import Select from './Select';
import ThemedRadioButtonsGroup from "./components/RadioGroup/RadioButtonsGroup";
<ThemedRadioButtonsGroup/>
<Select/>
background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
 */