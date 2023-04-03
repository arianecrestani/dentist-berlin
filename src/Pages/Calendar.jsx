import { Grid, Text, Box } from "@chakra-ui/react";
import { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const endDate = new Date();
  endDate.setDate(date.getDate() + 13);
  
  const availability = {
    "2023-04-06": {
      hour1: "9:00 am",
      hour2: "2:00 pm",
    },
    "2023-04-07": null,
    "2023-04-08": null,
    "2023-04-09": null,
    "2023-04-10": {
      hour1: "9:00 am",
      hour2: "1:00 pm",
    },
    "2023-04-11": null,
    "2023-04-12": null,
    "2023-04-13": {
      hour1: "9:00 am",
      hour2: "2:00 pm",
    },
    "2023-04-14": null,
    "2023-04-15": null,
    "2023-04-16": null,
  };

  const schedule = Object.keys(availability).map((dateString) => {
    const isAvailable = availability[dateString] !== null;
    const workHours1 = isAvailable ? availability[dateString].hour1 : null;
    const workHours2 = isAvailable ? availability[dateString].hour2 : null;
    const date = new Date(dateString);
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });

    return (
      <Box key={dateString}>
        <Text fontWeight="bold">
          {dayOfWeek}, {dateString}
        </Text>
        {isAvailable ? (
          <Text>
            {workHours1} - {workHours2}
          </Text>
        ) : (
          <Text>No availability</Text>
        )}
      </Box>
    );
  });

  return <Grid gap={4}>{schedule}</Grid>;
};

export default Calendar;
