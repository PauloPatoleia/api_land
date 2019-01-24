import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });
function ApiCard(props) {
  const { classes } = props;
  const bull = <span className="">•</span>;

  return (
    <Card className="p-2">
      <CardContent>
        <Typography className="" color="textSecondary" gutterBottom>
          HTTPS  OAuth
        </Typography>
        <Typography variant="h5" component="h2">
            RescueGroups 
        </Typography>
        <Typography className="" color="textSecondary" gutterBottom>
        Books published in the Netherlands and Flanders (about 2.5 million), book covers and related data.
        </Typography>
      </CardContent>
      <CardActions>
      <Button style={{borderColor: "#2196f3", color: "#2196f3"}} variant="outlined" color="primary" className="">
        Learn more
      </Button>

      </CardActions>
    </Card>
  );
}

ApiCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ApiCard;