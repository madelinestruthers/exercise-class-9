/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 *  
 */
/**
 * initialize a variable called shoe types to the values : converse, nike, vans.
 * then initialize a variable called more shoe types to the values : adidas, toms.
 * then concatenate the 2 arrays with shoe types first then the more shoe types.
 */
var shoeTypes = ["converse", "nike", "vans"];
var moreShoeTypes = ["adidas", "toms"];
console.log(shoeTypes.concat(moreShoeTypes));




/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * 

 */

/**initialise the variable `snacks` to a 2-Dimensional array rating snacks containing the values below:
 * 
 *          column[0]   column[1]                           column[2]   column[3]
 * Row 1    chips         doritos                           cool ranch  9/10
 * Row 2    candy      lollipop                              purple     10/10
 * 
 * 
 * then use console.table() to showcase the information in a table.
 * 
 * Then based on the values stored in the schedule 2D array, console log out the following sentence (use backticks):
 * My favourite _chips_ are _doritos_, I rate them _9/10_
 * */

var snacks = [
    ["chips", "doritos", "cool ranch", "9/10"],
     ["candy", "lollipop", "purple", "10/10"],
 ] 
 console.table(snacks);
 console.log(`My favourite ${snacks[0][0]} are ${snacks[0][1]}, I rate them ${snacks[0][3]}.`);
 