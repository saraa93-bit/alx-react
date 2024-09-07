// Import the functions from the utils file
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear function
describe('getFullYear', () => {
  it('should return the current year', () => {
    // Get the current year using JavaScript's Date object
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
});

// Test for getFooterCopy function
describe('getFooterCopy', () => {
  it('should return "Holberton School" when argument is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School');
  });

  it('should return "Holberton School main dashboard" when argument is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School main dashboard');
  });
});

// Test for getLatestNotification function
describe('getLatestNotification', () => {
  it('should return "<strong>Urgent requirement</strong> - complete by EOD"', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
