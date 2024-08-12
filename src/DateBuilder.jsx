// DateBuilder.js
const DateBuilder = ({ date }) => {
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    const days = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
  
    const day = days[date.getDay()];
    const dateNum = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    return <div>{`${day} ${dateNum} ${month} ${year}`}</div>;
  };
  
  export default DateBuilder;
  