// memory buttons
// 8gb
document.getElementById('mem8gb').addEventListener('click', function () {
    memoryextra(false);
});
document.getElementById('mem16gb').addEventListener('click', function () {
    memoryextra(true);
});
function memoryextra(isextramemory) {
    const extra_mem = document.getElementById('extramem');
    if (isextramemory == false) {
        extra_mem.innerText = 0;
    }
    else {
        extra_mem.innerText = 180;
    }

}