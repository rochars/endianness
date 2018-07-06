# CHANGELOG

## version 7.0.2 (2018-07-06)
- Fix: make 'offset' param not optional in index.d.ts

## version 7.0.1 (2018-07-03)
- Smaller browser dist file (312 bytes)
- Add TypeScript declaration file
- Add Closure Compiler externs file

## version 7.0.0 (2018-06-25)
- Allow better use of this lib as a dependency:
	- package.json refactored with bundlers and ES6 envs in mind
	- endianness() as the default export

## version 6.0.0 (2018-06-21)
- **endianness** as a ES6 module
- Option to swap only a slice of the buffer