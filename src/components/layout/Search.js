import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

function Search() {
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
        value={this.state.name}
        onChange={this.handleChange("name")}
        margin="normal"
      />
    </form>
  );
}

TextField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
// export default Search;
