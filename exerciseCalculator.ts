import arg = require("arg")

type Input = number[]
// const dayliExerciseHours = [3, 0, 2, 4.5, 0, 3, 1]
// const dayliExerciseHours = [2,4,6,2,3,2,2]

const target: number = 2

interface ResultObject {
    periodLength: number
    trainingDays: number
    success: boolean
    rating: number
    ratingDescription: string
    target: number
    average: number
}

interface InputValues {
    inputArray : number[]
}

const parseArgumentsCalc = (args: string[]): InputValues => {
    if (args.length !== 12) throw new Error('Exactly 13 arguments are required');
  
    const inputArray: number[] = args.slice(2).map(arg => {
      const parsed = Number(arg);
      if (isNaN(parsed)) {
        throw new Error(`Invalid argument: ${arg} is not a number`);
      }
      return parsed;
    });
  
    return {
      inputArray: inputArray
    };
  };

function calculateExercises(dayliExerciseHours: Input, target: number) : ResultObject {
    console.log(dayliExerciseHours, target)
    
    let average = dayliExerciseHours.reduce((acc, curr) => acc + curr, 0)/dayliExerciseHours.length
    let trainingDays = dayliExerciseHours.filter(day => day !== 0).length
    let success = dayliExerciseHours.every(day => day >= target)
    let rating = 0
    let description = ''

    if(trainingDays <= 2) {
        rating = 1
    } else if( trainingDays <= 5) {
        rating = 2
    } else if( trainingDays <= 7) {
        rating = 3
    }
    
    if(rating == 1) description = 'Workout lazy ass fck'
    if(rating == 2) description = 'Nice work, can do better'
    if(rating == 3) description = 'Mr Olympia here we GO'

    const ObjectResult = {
        periodLength: dayliExerciseHours.length,
        trainingDays: trainingDays,
        success: success,
        rating: rating,
        ratingDescription: description,
        target: target,
        average: average
    }
    return ObjectResult
}

try {
    const inputValues = parseArgumentsCalc(process.argv);
    console.log('Input Array:', inputValues.inputArray);
    console.log('Exercise Calculation Result:', calculateExercises(inputValues.inputArray, target));
  } catch (error) {
    console.error('Error:', error.message);
  }


// console.log(calculateExercises(dayliExerciseHours, target))