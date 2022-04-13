function handler(n1, n2, cb) {
  cb(n1 + n2);
}
handler(1, 3, function (result) {
  console.log(result);
});
