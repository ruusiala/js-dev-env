import numeral from 'numeral';
import './index.css';

const courseValue = numeral( 1000).format('$0,0.00');
console.log(`I would pay ${courseValue}`); //eslint-disable-line no-console
