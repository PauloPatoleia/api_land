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

function ApiCard(props) {
  const { classes } = props;
  const bull = <span className="">•</span>;

  return (
    <Card className="p-2">
      <CardContent>
       
        <Typography variant="h5" component="h2" className="mb-2">
            {props.api.API}    
        </Typography>
        <Typography className="" component="p" gutterBottom>
        {props.api.Description}
        </Typography>

        <Typography className="mt-3" color="textSecondary">
        <i class="fas fa-unlock-alt"></i> HTTPS: {props.api.HTTPS.toString()}
        </Typography>

        <Typography className="" color="textSecondary">
        <i class="fas fa-shield-alt"></i> Auth: { props.api.Auth = props.api.Auth == "" ? "None" : props.api.Auth}
        </Typography>

        <Typography className="" color="textSecondary">
        <i class="fas fa-file-signature"></i> Cors: {props.api.Cors}
        </Typography>

        <Typography className="" color="textSecondary">
        <i class="fas fa-tags"></i> Category: {props.api.Category}
        </Typography>

      </CardContent>
      <CardActions>

        
       
       
        

      <Button href={props.api.Link} style={{borderColor: "#2196f3", color: "#2196f3"}} variant="outlined" color="primary" className="">
        Visit Website
      </Button>

      </CardActions>
    </Card>
  );
}

export default ApiCard;