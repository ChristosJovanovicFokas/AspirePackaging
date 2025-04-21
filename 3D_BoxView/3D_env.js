let rotationX = 0;
let rotationY = 0;
let isDragging = false;
let lastX = 0;
let lastY = 0;

function drawImage() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Set the center of the canvas for rotation
  ctx.translate(canvas.width / 2, canvas.height / 2);

  // Apply 3D rotation
  ctx.rotateX(rotationX);
  ctx.rotateY(rotationY);

  // Draw the image on the canvas at (0, 0)
  ctx.drawImage(img, -img.width / 2, -img.height / 2);

  // Reset the transformation
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

// Mouse events to track dragging
canvas.addEventListener('mousedown', function (e) {
  isDragging = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

canvas.addEventListener('mousemove', function (e) {
  if (isDragging) {
    const deltaX = e.offsetX - lastX;
    const deltaY = e.offsetY - lastY;

    // Update rotation angles based on mouse movement
    rotationX += deltaY * 0.01;  // Adjust sensitivity
    rotationY += deltaX * 0.01;  // Adjust sensitivity

    // Redraw the image with new rotations
    drawImage();

    // Update last position for next movement
    lastX = e.offsetX;
    lastY = e.offsetY;
  }
});

canvas.addEventListener('mouseup', function () {
  isDragging = false;
});

canvas.addEventListener('mouseleave', function () {
  isDragging = false;
});
