import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Lens from '@material-ui/icons/Lens';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 300,
        backgroundColor: theme.palette.background.paper,
    }
});

class SelectedListItem extends React.Component {
    state = {
        selectedIndex: 0,
    };

    handleListItemClick = (event, index) => {
        this.setState({selectedIndex: index});
    };

    render() {
        const {classes, filterItems} = this.props;

        return (
            <div className={classes.root}>
                <List component="nav">
                    {filterItems.map((element, index, array) =>
                        <ListItem
                            button
                            selected={this.state.selectedIndex === index}
                            onClick={event => this.handleListItemClick(event, index)}
                        >
                            <ListItemIcon>
                                <Lens style={{color: element.iconColor}}/>
                            </ListItemIcon>

                            <ListItemText primary={element.category}/>
                        </ListItem>
                    )}
                </List>
            </div>
        );
    }
}

SelectedListItem.propTypes = {
    classes: PropTypes.object.isRequired,
    filterItems: PropTypes.object
};

export default withStyles(styles)(SelectedListItem);
