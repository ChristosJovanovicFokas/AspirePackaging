document.getElementById('fileUpload').addEventListener('change', function (e) {

	//Get the selected file
	const file = e.target.files[0];

	if (file) {

		//create a FileReader to read the file
		const reader = new FileReader();
		
		//When the file is read, update the image source
		reader.onload = function (event) {
			
			//Get the image preview element
			const preview = document.getElementById('preview');
			//Set the image source to the file's data URL
			preview.src = event.target.result;

			//Display the image
			preview.style.display = 'block';
			
			const img = new Image();

			img.onload = function(){
				const canvas = document.getElementById('edge');
				const  ctx = canvas.getContext('2d');
				ctx.clearRect(0, 0, canvas.width, canvas.height);

				ctx.drawImage(img, 10, 10);

				applyEdgeDetection(ctx, canvas, img);
			};
			img.src = event.target.result;
		};

		//Read the file as a data URL (base64)
		reader.readAsDataURL(file);

	}
});

// Function to apply Sobel edge detection
function applyEdgeDetection(ctx, canvas, img) {
  // Get the image data from the canvas
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  // Sobel operator matrices for edge detection
  const sobelX = [
    [-1, 0, 1],
    [-2, 0, 2],
    [-1, 0, 1]
  ];
  const sobelY = [
    [-1, -2, -1],
    [ 0,  0,  0],
    [ 1,  2,  1]
  ];

  // Create a new array to store edge detection result
  const edgeData = new Uint8ClampedArray(data.length);

  // Perform the Sobel edge detection
  for (let y = 1; y < canvas.height - 1; y++) {
    for (let x = 1; x < canvas.width - 1; x++) {
      let gx = 0;
      let gy = 0;

      // Apply the Sobel operator to the current pixel and its neighbors
      for (let ky = 0; ky < 3; ky++) {
        for (let kx = 0; kx < 3; kx++) {
          const pixelIndex = ((y + ky - 1) * canvas.width + (x + kx - 1)) * 4;
          const r = data[pixelIndex];  // Red channel
          const g = data[pixelIndex + 1];  // Green channel
          const b = data[pixelIndex + 2];  // Blue channel

          // Sobel X
          gx += sobelX[ky][kx] * (r + g + b);
          // Sobel Y
          gy += sobelY[ky][kx] * (r + g + b);
        }
      }

      // Calculate the gradient magnitude
      const magnitude = Math.sqrt(gx * gx + gy * gy);

      // Set the edge color based on the gradient magnitude (thresholded)
      const edgeColor = magnitude > 100 ? 255 : 0;

      // Update the edge data with white (255) or black (0)
      const edgeIndex = (y * canvas.width + x) * 4;
      edgeData[edgeIndex] = edgeColor;  // Red channel (and Green, Blue for black and white)
      edgeData[edgeIndex + 1] = edgeColor;  // Green channel
      edgeData[edgeIndex + 2] = edgeColor;  // Blue channel
      edgeData[edgeIndex + 3] = 255;  // Alpha channel (fully opaque)
    }
  }

  // Put the processed edge data back onto the canvas
  const edgeImageData = new ImageData(edgeData, canvas.width, canvas.height);
  ctx.putImageData(edgeImageData, 0, 0);  // Draw the edges on the canvas
}
