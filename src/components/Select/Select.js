import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 60,
        maxWidth: 200,
        background: "#FFFFFF"
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SimpleSelect extends React.Component {
    state = {
        type: '',
        owner: '',
        campaign: '',
        name: 'hai',
        labelWidth: 0,
    };


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <Select
                        value={this.state.type}
                        onChange={this.handleChange}
                        name="type"
                        autoWidth={true}
                        displayEmpty
                        className={classes.selectEmpty}
                    >
                        <MenuItem value="" disabled>Type</MenuItem>
                        <MenuItem value={10}>All</MenuItem>
                        <MenuItem value={20}>News</MenuItem>
                        <MenuItem value={30}>Event</MenuItem>
                        <MenuItem value={40}>Action Required</MenuItem>
                    </Select>
                    <FormHelperText></FormHelperText>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <Select
                        value={this.state.owner}
                        onChange={this.handleChange}
                        name="owner"
                        autoWidth={true}
                        displayEmpty
                        className={classes.selectEmpty}
                    >
                        <MenuItem value="" disabled>Owner</MenuItem>
                        <MenuItem value={50}>All</MenuItem>
                        <MenuItem value={60}>Lydia Fernandez</MenuItem>
                        <MenuItem value={70}>Long Title blah blah blah blah blah blah</MenuItem>
                    </Select>
                    <FormHelperText></FormHelperText>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <Select
                        value={this.state.campaign}
                        onChange={this.handleChange}
                        name="campaign"
                        autoWidth={true}
                        displayEmpty
                        className={classes.selectEmpty}
                    >
                        <MenuItem value="" disabled>Campaign</MenuItem>
                        <MenuItem value={80}>All</MenuItem>
                        <MenuItem value={90}>Short Title</MenuItem>
                        <MenuItem value={100}>Long Title blah blah blah blah blah blah</MenuItem>
                        <MenuItem value={110}>3 ways to grow your 401k</MenuItem>
                    </Select>
                    <FormHelperText></FormHelperText>
                </FormControl>


            </form>
        );
    }
}

SimpleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);