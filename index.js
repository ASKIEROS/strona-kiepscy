setTimeout(() => {
    console.log('Test JS')
}, 4000);

function showhide(id) {
  let element = document.getElementById(id);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}