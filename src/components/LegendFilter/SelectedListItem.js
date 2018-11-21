import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
        selectedIndex: 1,
    };

    handleListItemClick = (event, index) => {
        this.setState({ selectedIndex: index });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <List component="nav">
                    <ListItem
                        button
                        selected={this.state.selectedIndex === 0}
                        onClick={event => this.handleListItemClick(event, 0)}
                    >
                        <ListItemText primary="All Publications" />
                    </ListItem>
                    <ListItem
                        button
                        selected={this.state.selectedIndex === 1}
                        onClick={event => this.handleListItemClick(event, 1)}
                    >
                        <ListItemIcon>
                            <Lens style={{color: 'gray'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Draft" />
                    </ListItem>
                    <ListItem
                        button
                        selected={this.state.selectedIndex === 2}
                        onClick={event => this.handleListItemClick(event, 2)}
                    >
                        <ListItemIcon>
                            <Lens style={{color: 'orange'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Scheduled" />
                    </ListItem>
                    <ListItem
                        button
                        selected={this.state.selectedIndex === 3}
                        onClick={event => this.handleListItemClick(event, 3)}
                    >
                        <ListItemIcon>
                            <Lens style={{color: 'green'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Published" />
                    </ListItem>
                </List>
            </div>
        );
    }
}

SelectedListItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectedListItem);
