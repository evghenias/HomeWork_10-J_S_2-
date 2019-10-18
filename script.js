var working_day = prompt('What day it is today?');
        console.log('You choosed:', working_day);

switch (working_day) {
    case 'Monday':
        console.log('Monday is working day');
        break;
    case 'Tuesday':
        console.log('Tuesday is working day');
        break;
    case 'Wednesday':
        console.log('Wednesday is working day');
        break;
    case 'Thursday':
        console.log('Thursday is working day');
        break;
    case 'Friday':
        console.log('Friday is working day');
        break;
        
    case 'Saturday':
         console.log('Saturday is weekend');
         break;
    case 'Sunday':
        console.log('Sunday is weekend');
         break;  
    default:
        console.log("Sorry " + working_day + "is another value");
}