export function makeCoffee(callback) {
  const estimationTime = 5000;

  const InSecond = Math.ceil(estimationTime / 1000);
  console.log(
    `Mohon menunggu, Pramusaji sedang membuatkan kopi dalam ${InSecond} detik...`
  );

  setTimeout(() => {
    // Do some tasks to make coffee...
    console.log(`Pramusaji selesai membuat kopi.`);
    callback();
  }, estimationTime);
}
