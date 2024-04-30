1. 3
2. 150
3. 150
4.
5.
6. ReferenceError: discountedPrice is not defined
7. 150
8.
9. ReferenceError: i is not defined
10. 3
11. 
12.
A. student.name
B. student['Grad Year']
C. student.greeting()
D. student['Favorite Teacher'].name
E. student.courseLoad[0]
13. Arithmetic:

    - '3' + 2
        Output: '32'
        Explanation: When '+' is used with a string and a number, the number gets coerced into a string and then both strings are concatenated.

    - '3' - 2
        Output: 1
        Explanation: The '-' operator triggers type coercion and converts the string '3' into a number.

    - 3 + null
        Output: 3
        Explanation: Null is converted to 0 in arithmetic operations.

    - '3' + null
        Output: '3null'
        Explanation: Similar to the first case, '3' is a string and null is coerced into a string and then concatenated.

    - true + 3
        Output: 4
        Explanation: true is coerced into 1 in arithmetic operations.

    - false + null
        Output: 0
        Explanation: false is coerced into 0 in arithmetic operations, and null is also converted to 0.

    - '3' + undefined
        Output: '3undefined'
        Explanation: undefined is converted to a string 'undefined' and concatenated with '3'.

    - '3' - undefined
        Output: NaN
        Explanation: Undefined cannot be converted to a number, so the operation results in NaN (Not a Number).

14. Comparison:

    - '2' > 1
        Output: true
        Explanation: '2' is converted to a number and compared with 1.

    - '2' < '12'
        Output: false
        Explanation: As strings, '2' is greater than '1' lexically, resulting in false.

    - 2 == '2'
        Output: true
        Explanation: The == operator coerces the operands to the same type before comparing.

    - 2 === '2'
        Output: false
        Explanation: The === operator does not perform type coercion, so the comparison of a number and a string results in false.

    - true == 2
        Output: false
        Explanation: The boolean value true is coerced into a number (1) before comparison, resulting in false.

    - true === Boolean(2)
        Output: false
        Explanation: The boolean value true is not the same as the Boolean object created with 2 as a value.

15. Difference between == and === operators:
    - The == operator checks for equality after type coercion, which means that the values being compared are converted to a common type before comparison.
    - The === operator checks for strict equality without type coercion, meaning that the operands must be of the same type and have the same value for the comparison to result in true.
17.
19.
1
4
3
