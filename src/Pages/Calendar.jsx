// import { useState } from "react";
// import { Button } from "@chakra-ui/react";

// function Calendar() {
//   const [currentDay, setCurrentDay] = useState(0);
//   const [nextTwoWeeks, setNextTwoWeeks] = useState(getNextTwoWeeks());

//   function getNextTwoWeeks() {
//     const today = new Date();
//     const nextTwoWeeks = [];
//     for (let i = 0; i < 14; i++) {
//       const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
//       nextTwoWeeks.push(date);
//     }
//     return nextTwoWeeks;
//   }


//   // first div days of week
//   // current day
//   // map over each day will be a modal

//   console.log(currentDay);

//   return (
//     <>
//     {nextTwoWeeks.map((item)=> ) }

//       <Button
//         onChange={(e) => setCurrentDay(currentDay)}
//         background="yellow.200"
//         variant="outline"
//       ></Button>
//     </>
//   );
// }

// export default Calendar;
