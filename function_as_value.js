// FAMILIAR
s = "My text";
d = (s) => s
console.log(d(s))

f = (x) => x * 2; //LIKE LINE 2 WE ARE PUTTING A VALUEINTO A VARIATE F
console.log(f(33));// APPLY THE FUNCTION

/*
1. PULL FUNCTION OUT F "f".
2. CALL/INVOKE THE FUNCTION USONG (33) PASSING IN ARGUMENET 33.
3. RECEIVE THE RETURN VALUE 66.
4. LOG THE VALUE 66 TO THE CONSOLE.
*/
function apply(callBackFunction1, parameter2){
    result = callBackFunction1(parameter2);
    console.log(result);
}
apply(f,33);
apply(s =>s + s +s, "HELLO");//ANONYMOUS FUNCTION AK LAMDA

const f2 = f;//NEW VARIABLEGET VALUE INSIDE F
apply(f2,11)//THE RESULT WILL BE 22 BECAUSE F = 2 AND IT WILL DOUBLE IT