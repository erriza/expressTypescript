import arg = require("arg");

interface InputValues {
    value1: number
    value2: number
}

const parseArgumentsBmi = (args: string[]): InputValues => {
    if(args.length < 4) throw new Error('not enough arguments, try again')
    if(args.length > 4) throw new Error('too many arguments')

    if(!isNaN(Number(args[2] && !isNaN(Number(args[3]))))){
        return {
            value1 : Number(args[2]),
            value2 : Number(args[3])
        }
    } else {
        throw new Error('Provided values were not numbers')
    }
}

function calculateBmi(height: number, mass: number): number | string {
    let bmi = mass / Math.pow(height / 100, 2);
    let result = `Your BMI is: ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
        return `${result} Underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return `${result} Normal Weight`;
    } else if (bmi > 24.9 && bmi <= 29.9) { // Changed the condition to exclude 25
        return `${result} Overweight`;
    } else {
        return `${result} Obesity`;
    }
}

try {
    const {value1, value2} = parseArgumentsBmi(process.argv)
    console.log(value1, value2, ' valuesss ');

    let res = calculateBmi(180, 70);
    console.log(res);

} catch (error: unknown) {
    let errorMessage = 'Something went bad'
    if(error instanceof Error) {
        errorMessage += ' Error ' + errorMessage
    }
    console.log(errorMessage);
    
}

