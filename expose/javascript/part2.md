1. print out length based on i, 3
2. print discounted price which is the final price which is discounted price of last element in array, 150
3. print final price which is discounted price of last element in array, 150
4. return nothing because of empty array
5. ReferenceError: i is not defined
6. ReferenceError: discountedPrice is not defined
7. print final price which is discounted price of last element in array, 150
8. return nothing because of empty array
9. ReferenceError: i is not defined
10. print out length based on array length, 33
11. return nothing because of empty array
12.
    A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. Arithmetic:

    - '3' + 2 -> '32', When '+' is used with a string and a number, the number gets coerced into a string and then both strings are concatenated.

    - '3' - 2 -> 1, The '-' operator triggers type coercion and converts the string '3' into a number.

    - 3 + null -> 3, Null is converted to 0 in arithmetic operations.

    - '3' + null -> '3null', Similar to first case, '3' is a string and null is coerced into a string and then concatenated.

    - true + 3 -> 4, true is coerced into 1 in arithmetic operations.

    - false + null -> 0, false is coerced into 0 in arithmetic operations, and null is also converted to 0.

    - '3' + undefined -> '3undefined', undefined is converted to a string 'undefined' and concatenated with '3'.

    - '3' - undefined -> NaN, Undefined cannot be converted to a number, so the operation results in NaN (Not a Number).

14. Comparison:

    - '2' > 1 -> true, '2' is converted to a number and compared with 1.

    - '2' < '12' -> false, As strings, '2' is greater than '1' lexically, resulting in false.

    - 2 == '2' -> true, The == operator coerces the operands to the same type before comparing.

    - 2 === '2' -> false, The === operator does not perform type coercion, so the comparison of a number and a string results in false.

    - true == 2 -> false, The boolean value true is coerced into a number (1) before comparison, resulting in false.

    - true === Boolean(2) -> false, The boolean value true is not the same as the Boolean object created with 2 as a value.

15. == checks for equality after type coercion, which means that values being compared are converted to a common type before comparison. === checks for strict equality without type coercion, meaning that operands must be of the same type and have the same value for comparison to result in true.
17. Result will be [2,4,6].
modifyArray function takes in array [1,2,3] and callback function doSomething, iterates through each element in the array [1,2,3]. For each element, it calls the callback function doSomething with the element as an argument. doSomething function multiplies the number by 2, and callback function will return [2,4,6]. These values are then pushed into a new array newArr. modifyArray function then returns new array, which is [2,4,6].
19.
    1
    4
    3
