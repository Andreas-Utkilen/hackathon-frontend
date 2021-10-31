import green from './monsters1x/green.png';
import squid from './monsters2x/squid.png';

const sMonsters = () => {
  return [
    green
  ];
};

const lMonsters = () => {
  return [
    squid
  ];
};
const m = {
  sMonsters: sMonsters,
  lMonsters: lMonsters
};
export default m;
