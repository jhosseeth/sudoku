
$('#fileInput').onchange = e => {
  $('#imageSrc').src = URL.createObjectURL(e.target.files[0]);
}

$('#imageSrc').onload = () => {
  let mat = cv.imread($('#imageSrc'));
  cv.imshow('canvasOutput', mat);
  mat.delete();
};