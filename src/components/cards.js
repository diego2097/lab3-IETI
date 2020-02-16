import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import {Todo} from "./todo"


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "10%",
    marginLeft: "5%",
    background: "yellow" 
  },
  media: {
    height: 140,
  },
});

const items = [{text:"tarea", priority:1, dueDate:new Date(),description:"description",responsable:["diego corredor","diego@mail.com"],status:"Pending"},
              {text:"tarea1", priority:1, dueDate:new Date(),description:"description",responsable:["diego corredor","diego@mail.com"],status:"Pending"},
              {text:"tarea2", priority:1, dueDate:new Date(),description:"description",responsable:["diego corredor","diego@mail.com"],status:"Pending"},
              {text:"tarea3", priority:1, dueDate:new Date(),description:"description",responsable:["diego corredor","diego@mail.com"],status:"Pending"}]

const todoList = items.map((todo, i) => {
    return (
        <Todo key={i} text={todo.text} priority={todo.priority} 
        dueDate={todo.dueDate.toDateString()} description={todo.description}
        responsable={todo.responsable} status={todo.status}/>
    );
});

export default function MediaCard() {
  console.log(todoList)
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      {todoList.map((todo) =>{
        return (
          <Grid xs={2} sm={4}>
             <Card className={classes.root}>
                {todo}
             </Card>
        </Grid>
        )
      })}
    </Grid>
  );
}