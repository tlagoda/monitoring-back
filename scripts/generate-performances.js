import { v4 } from 'uuid';

const userInternalId = '6ab69e6e-4607-4f33-b4dd-68a4b99d1c8a';
const internalId = v4();

function generateRandomDate() {
  const today = new Date();
  const tenDaysAgo = new Date(today.getTime() - 10 * 24 * 60 * 60 * 1000);

  const randomTimestamp =
    Math.random() * (today.getTime() - tenDaysAgo.getTime()) +
    tenDaysAgo.getTime();
  const randomDate = new Date(randomTimestamp);

  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, '0');
  const day = String(randomDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function getRandomInt(x, y) {
  const min = Math.ceil(x);
  const max = Math.floor(y);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
