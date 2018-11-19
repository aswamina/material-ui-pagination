import React from 'react';
import PropTypes from 'prop-types';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import orange from '@material-ui/core/colors/orange';


const styles = theme => ({
    root: {
        display: 'flex',
        color: theme.status.color,
        '&$checked': {
            color: theme.status.color,
        },
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    checked: {
        background: 'linear-gradient(45deg, #2196F3 30%, #2196F3 90%)'
    }
});

const MyLabel = (props) => {
    const checked = (props.name === props.value);

    return (
        checked ?
            <div>
                <div style={{width: '200px', background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'}}>{props.name}</div>
            </div>
        :
            <div>
                <div>{props.name}</div>
            </div>
    );
};


class RadioButtonsGroup extends React.Component {
    state = {
        value: 'All',
    };

    handleChange = event => {
        this.setState({value: event.target.value});
    };

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Type</FormLabel>

                    <RadioGroup
                        aria-label="type"
                        name="type2"
                        classes={{
                            root: classes.root,
                            checked: classes.checked,
                        }}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel
                            value="All"
                            control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>}
                            label={<MyLabel name="All" value={this.state.value}/>}
                        />
                        <FormControlLabel
                            value="Draft"
                            control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>}
                            label={<MyLabel name="Draft" value={this.state.value}/>}
                        />
                        <FormControlLabel
                            value="Scheduled"
                            control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>}
                            label={<MyLabel name="Scheduled" value={this.state.value}/>}
                        />
                        <FormControlLabel
                            value="Published"
                            control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>}
                            label={<MyLabel name="Published" value={this.state.value}/>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

RadioButtonsGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

const NestedRadioButtons = withStyles(styles)(RadioButtonsGroup);

const theme1 = createMuiTheme({
    status: {
        color: orange[500],
    },
});

const ThemedRadioButtonsGroup = () => {
    return (
        <MuiThemeProvider theme={theme1}>
            <NestedRadioButtons />
        </MuiThemeProvider>
    );
};

export default ThemedRadioButtonsGroup;
