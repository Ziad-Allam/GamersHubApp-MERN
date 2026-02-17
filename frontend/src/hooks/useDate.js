import React from 'react'

function useDate(creationDate) {
    const date = new Date(creationDate);
    const day = date.getDate(); // Get the day of the month (1-31)
    const month = date.toLocaleString('en-US', { month: 'short' }); // Get the abbreviated month
    const year = date.getFullYear(); // Get the year

    return `${day} ${month}, ${year}`;
}

export default useDate