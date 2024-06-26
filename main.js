AOS.init();

document.getElementById('ferrari').addEventListener('mouseover', function() {
    document.getElementById('ferrari').style.visibility = 'hidden';
    document.getElementById('ferrari-img').style.display = 'block';
});

document.getElementById('ferrari-container').addEventListener('mouseout', function() {
    document.getElementById('ferrari').style.visibility = 'visible';
    document.getElementById('ferrari-img').style.display = 'none';
});
