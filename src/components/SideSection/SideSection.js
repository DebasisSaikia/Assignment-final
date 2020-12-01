import React, { useState } from "react";
import useStyles from "./styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Typography,
  Paper,
  Slider,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Checkbox,
  FormControl,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";

const SideSection = () => {
  // MUi theming
  const classes = useStyles();

  // Hooks
  const [value, setValue] = useState([20, 50]);
  const [checked, setChecked] = useState(true);

  // onchange functions for checkbox
  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };

  // onchange functions for Slider
  const handleChangeA = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" className={classes.heading}>
        FILTERS
      </Typography>
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Format</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheck}
                      checked={checked}
                      name="one"
                    />
                  }
                  label="Buffet"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleCheck} name="two" />}
                  label="Lunch Box"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleCheck} name="three" />}
                  label="Snack Box"
                />
              </FormGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Price Rs 500-2000
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              className={classes.slider}
              value={value}
              onChange={handleChangeA}
              aria-labelledby="range-slider"
            />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Occasion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={handleCheck} name="one" />}
                  label="House Party"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleCheck} name="two" />}
                  label="Birthday"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleCheck} name="three" />}
                  label="Baby Shower"
                />
              </FormGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </div>
    </Paper>
  );
};

export default SideSection;
