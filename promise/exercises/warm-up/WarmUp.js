function warmUp() {
  setTimeout(() => {
    console.log("TIMED OUT!");
  }, 300);
}
warmUp();
module.exports = warmUp;
