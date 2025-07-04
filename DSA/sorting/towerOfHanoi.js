function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 From ${fromRod} to ${toRod}`);
    return
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move Disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}
towerOfHanoi(3,'A','C','B')

//O(2^n)