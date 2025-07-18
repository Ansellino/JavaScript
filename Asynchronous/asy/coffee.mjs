export function makeCoffee() {
  // 1000 milidetik = 1 detik
  const estimationTime = 10000;

  const InSecond = Math.ceil(estimationTime / 1000);
  console.log(
    `Mohon menunggu, Pramusaji sedang membuatkan kopi dalam ${InSecond} detik.`
  );

  setTimeout(() => {
    // Do some tasks to make coffee...
    console.log("Pramusaji selesai membuat kopi.");
  }, estimationTime);
}
