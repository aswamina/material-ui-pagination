import React from 'react';
import SelectedListItem from "./SelectedListItem";

const FilterPublications = () => {
    const publications = [
        {
            iconColor: 'transparent',
            category: 'All Publications'
        },
        {
            iconColor: 'gray',
            category: 'Draft'
        },
        {
            iconColor: 'orange',
            category: 'Scheduled'
        },
        {
            iconColor: 'green',
            category: 'Published'
        }
    ];

    return (<SelectedListItem filterItems={publications} />)
};

export default FilterPublications;