/* eslint-disable no-undef */
/* eslint-env node */
/**
 * Converts a 24-hour format time string to 12-hour format with AM/PM
 * @param {string} time24 - Time in 24-hour format (e.g., "14:30")
 * @return {string} Time in 12-hour format with AM/PM (e.g., "2:30 PM")
 */
const convertTo12HourFormat = (time24) => {
  // Validate input format
  if (!/^\d{1,2}:\d{2}$/.test(time24)) {
    throw new Error("Invalid time format. Expected format: HH:MM");
  }

  // Split the input into hours and minutes
  const [hourStr, minutesStr] = time24.split(":");
  let hour = parseInt(hourStr, 10);
  
  // Determine AM/PM
  const period = hour >= 12 ? "PM" : "AM";
  
  // Convert hour to 12-hour format
  if (hour === 0) {
    hour = 12; // Midnight (00:00) becomes 12 AM
  } else if (hour > 12) {
    hour = hour - 12; // Convert hours greater than 12 (e.g., 13 becomes 1)
  }
  
  // Format the time string - ensure minutes always has 2 digits
  return `${hour}:${minutesStr} ${period}`;
};

module.exports = {
  convertTo12HourFormat,
};
