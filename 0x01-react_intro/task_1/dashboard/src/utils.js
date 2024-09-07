// Function to get the current year
export function getFullYear() {
    return new Date().getFullYear();
  }
  
  // Function to return the footer text based on the argument
  export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
  }
  