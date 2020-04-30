// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false
const isBalanced = str => {
let balanced = {
    "parenthesisOpen" : 0,
    "parenthesisClosed" : 0,
    "curlyBracketsOpen" : 0, 
    "curlyBracketsClosed" : 0,
    "squareBracketsOpen" : 0,
    "squareBracketsClosed" : 0,
}
    for(var i = 0; i < str.length; i++){
        if(str[i] === "("){
            balanced["parenthesisOpen"] += 1;
        }
        if(str[i] === ")"){
            balanced["parenthesisClosed"] += 1;
        }
        if(str[i] === "{"){
            balanced["curlyBracketsOpen"] += 1;
        }
        if(str[i] === "}"){
            balanced["curlyBracketsClosed"] += 1;
        }
        if(str[i] === "["){
            balanced["squareBracketsOpen"] += 1;
        }
        if(str[i] === "]"){
            balanced["squareBracketsClosed"] += 1;
        }
    }
    if(balanced["parenthesisOpen"] !== balanced["parenthesisClosed"]){
        return false;
    }
    if(balanced["curlyBracketsOpen"] !== balanced["curlyBracketsClosed"]){
        return false;
    }
    if(balanced["squareBracketsOpen"] !== balanced["squareBracketsClosed"]){
        return false;
    }
    return true;
};

// create an object with a parenthesisOpen, parenthesisClosed, curlyBracketsOpen, curlyBracketsClosed, squareBracketsOpen, squareBracketsClosed keys
// iterate through the string
// create 6 if statements asking if [i] === (,),{,},[,] 
// if so increment that key in the object
// create 3 more conditionals seeing if the open/close numbers are equal, if so true, if not false
