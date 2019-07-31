/**
 * methods:
 * test - returns true    re.test(str)
 * match - returns array of matches - returns an array with index, input.   str.match(re)
 *                                    if more than 1, only match is returned
 * search - returns index str.search(re)
 * exec - return array of matches re.exec(str)
 * 
 * 
 * attributes:
 * i- ignore case
 * g- global
 * 
 * constructiong expresions:
 * [] - checks if a single char is in this range or chars. 
 * []{2} - checks if 2 chars is in this range. (2 occurences)
 * * []{2,3} - checks if 2 or 3 chars is in this range. (2 occurences)
 * [^..] - not in range
 * 
 * quantifiers:
 * + - 1 or more
 * * - 0 or more
 * 
 * 
 */