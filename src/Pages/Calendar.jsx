import { useState } from "react";
import { GridItem, Grid } from "@chakra-ui/react";

function Calendar() {

  // const [currentDay, setCurrentDay]= useState(new Date().getDay())
  const [currentDay, setCurrentDay]= useState(new Date())

  // first div days of week
  // current day
  // map over each day will be a modal

  console.log(currentDay)


  return (
    <>
  
      <Grid templateColumns="repeat(7, 1fr)" gap={5} mb="5">
        <GridItem bg="pink" colSpan={1}>
          Sun
        </GridItem>
        <GridItem bg="pink" colSpan={1}>
          Mon
        </GridItem>
        <GridItem bg="pink" colSpan={1}>
          Tue
        </GridItem>
        <GridItem bg="pink" colSpan={1}>
          Wed
        </GridItem>
        <GridItem bg="pink" colSpan={1}>
          Thu
        </GridItem>
        <GridItem bg="pink" colSpan={1}>
          Fri
        </GridItem>
        <GridItem bg="pink" colSpan={1}>
          Sat
        </GridItem>
      </Grid>
    </>
  );
}

export default Calendar;
