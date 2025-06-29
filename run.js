setInterval(() => {
     date = new Date();
     htime = date.getHours();
     mtime = date.getMinutes();
     stime = date.getSeconds();
     hrotation = 30 * htime + mtime / 2; 
     mrotation = 6 * mtime; 
     srotation = 6 * stime; 
     hourBlock = document.getElementById("hour_block");
 minBlock = document.getElementById("min_block");
secBlock = document.getElementById("sec_block");
    hourBlock.style.transform = `rotate(${hrotation}deg)`;
    minBlock.style.transform = `rotate(${mrotation}deg)`;
    secBlock.style.transform = `rotate(${srotation}deg)`;

}, 1000);
