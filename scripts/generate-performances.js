/* eslint-disable @typescript-eslint/no-var-requires */

const uuid = require('uuid');
const muscles = require('./data/data');
const exercises = require('./data/data');
const axios = require('axios');

const userInternalId = '6ab69e6e-4607-4f33-b4dd-68a4b99d1c8a';
const internalId = uuid.v4();

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
const generatePerformances = async () => {
  for (let i = 1; i++; i <= 1000) {
    const performances = {
      userInternalId,
      date: generateRandomDate(),
      exercise: exercises[getRandomInt(0, exercises.length - 1)],
      sets: getRandomInt(3, 12),
      repetitions: getRandomInt(6, 20),
      restTime: getRandomInt(30, 180),
      weight: getRandomInt(5, 50),
      muscles: muscles[getRandomInt(0, muscles.length - 1)],
    };

    try {
      await axios.post('http://localhost:3000/performances', performance);
    } catch (err) {
      console.log(`Error while creating performance #${i} : ${err.message}`);
      break;
    }
  }
};

generatePerformances();
