import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import {Todo} from "./todo"


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const items = [{text:"hola"},{},{},{}]

const todoList = items.map((todo, i) => {
    return (
        <Todo key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
    );
});

export default function MediaCard() {
  const classes = useStyles();

  return (


    
    <Grid container spacing={1}>
        <Grid xs={2} sm={4}>
            <Card className={classes.root}>
            
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            some description text
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Santiago Carrillo
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            sancarbar@gmail
                        </Typography>
                        </CardContent>
                    </CardActionArea>
            
            </Card>
        </Grid>
        
    </Grid>

  );
}
