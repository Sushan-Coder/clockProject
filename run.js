setInterval(() => {
     date = new Date(); // Fixed the new Date() syntax
     htime = date.getHours();
     mtime = date.getMinutes();
     stime = date.getSeconds();
     hrotation = 30 * htime + mtime / 2; // Calculates hour rotation
     mrotation = 6 * mtime; // Calculates minute rotation
     srotation = 6 * stime; // Calculates second rotation

    // Get the hour, minute, and second blocks by their IDs and apply rotations
     hourBlock = document.getElementById("hour_block");
 minBlock = document.getElementById("min_block");
secBlock = document.getElementById("sec_block");
    hourBlock.style.transform = `rotate(${hrotation}deg)`;
    minBlock.style.transform = `rotate(${mrotation}deg)`;
    secBlock.style.transform = `rotate(${srotation}deg)`;

}, 1000);
