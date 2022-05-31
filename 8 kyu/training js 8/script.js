// switch is the keyword, n is the variable to switch, case 1 means when n===1, following the ":",you can add some executable statement, with keyword break as termination(if you forgot "break", code will running with case 2, case 3...until a "break" appear),default like else in the if..else statement.

// In some cases, use the switch statement to look more clearly than the if..else statement.

// For example, we can write a function to calculate what day is today, like this:
function howManydays(month){
    let days;
    switch (month){
        case 2: 
        days = 28
          break;
        case 4:
        case 6: 
        case 9:
        case 11:
        days = 30
          break;
        default:
        days = 31
    }
    return days;
  }