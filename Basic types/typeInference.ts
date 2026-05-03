// Type inference describes where and how TypeScript 
// infers types when you don’t explicitly annotate them.

let items = [1, 2, 3, null];
// To infer the type of items variable, TypeScript needs to consider the type of each element in the array.

// It uses the best common type algorithm to analyze each candidate type and select the type that is compatible with all other candidates.

// In this case, TypeScript selects the number or null array type (number | null) []) as the best common type. Note that the | means the OR operator in types.

// If you add a string to the items array, TypeScript will infer the type for the items as an array of numbers and strings: (number | string)[]

let items2 = [1, 2, 3, 'Cheese'];

// The following shows the difference between type inference and type annotations:

// Type inference- TypeScript guesses the type
// Type annotations- You explicitly tell TypeScript the type

// So, when do you use type inference and type annotations?

// In practice, you should always use the type inference as much as possible.
//  You use the type annotation in the following cases:

// When you declare a variable and assign it a value later.
// When you want a variable that can’t be inferred.
// When a function returns the any type, you need to clarify the value.


// Type inference occurs when you initialize variables, set parameter default values,
// and determine function return types.
// TypeScript uses the best common type algorithm to select the best candidate 
// types that are compatible with all variables.
// TypeScript also uses contextual typing to infer types of variables 
// based on the locations of the variables.