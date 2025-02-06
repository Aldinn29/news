document.getElementById('nav-img').addEventListener('click', function(){
    document.getElementById('nav-menu').style.right= '0';
    document.getElementById('nav-overlay').style.display = 'block';
});

document.getElementById('close').addEventListener('click', function(){
    document.getElementById('nav-menu').style.right= '-100%';
    document.getElementById('nav-overlay').style.display = 'none';
});