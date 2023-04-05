'use strict'
/**
 * (c) Copy05 2019-2022
 * A Little Crypto project i made in just less than 40 min
 */

/**
 * Encryption Class
 */
export default class Crypto {
     /**
     * 
     * @param {string} _Value 
     * @returns 
     */
     static Decrypt_KCORD = (_Value) => {
          var R = _Value.toString().toLowerCase().replaceAll('1q', 'q').replaceAll('1a', 'a').replaceAll('1y', 'y').replaceAll('2q', 'w').replaceAll('2a', 's').replaceAll('2y', 'x').replaceAll('3q', 'e').replaceAll('3a', 'd').replaceAll('3y', 'c').replaceAll('4q','r').replaceAll('4a', 'f').replaceAll('4y', 'c').replaceAll('5q', 't').replaceAll('5a', 'g').replaceAll('5y', 'b').replaceAll('6q', 'z').replaceAll('6a', 'h').replaceAll('6y', 'n').replaceAll('7q', 'u').replaceAll('7a', 'j').replaceAll('7y', 'm').replaceAll('8q', 'i').replaceAll('8a', 'k').replaceAll('9q', 'o').replaceAll('9a', 'l').replaceAll('0q', 'p')
          return R;
     }

     /**
     * 
     * @param {string} _VAL 
     * @returns 
     */
     static Encrypt_KCORD = (_VAL) => {
          var R = _VAL.toString().toLowerCase().replaceAll('q', '1q').replaceAll('a', '1a').replaceAll('y','1y').replaceAll('w', '2q').replaceAll('s', '2a').replaceAll('x', '2y').replaceAll('e', '3q').replaceAll('d', '3a').replaceAll('c', '3y').replaceAll('r', '4q').replaceAll('f', '4a').replaceAll('v', '4y').replaceAll('t', '5q').replaceAll('g', '5a').replaceAll('b', '5y').replaceAll('z', '6q').replaceAll('h', '6a').replaceAll('n', '6y').replaceAll('u', '7q').replaceAll('j', '7a').replaceAll('m', '7y').replaceAll('i', '8q').replaceAll('k', '8a').replaceAll('o', '9q').replaceAll('l', '9a').replaceAll('p', '0q')
          return R;
     }
}