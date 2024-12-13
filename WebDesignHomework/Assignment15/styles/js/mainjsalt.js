const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Set canvas size
    function resizeCanvas() {
        canvas.width = 30; // Fixed width
        canvas.height = window.innerHeight; // Full height
        drawTriangles();
    }

    // Draw overlapping triangles
    function drawTriangles() {
        // Fill background with dark gray
        ctx.fillStyle = "#141414"; // Dark gray
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const triangleHeight = 40; // Height of each triangle
        const triangleBase = canvas.width; // Full width
        const smallTriangleScale = 0.48; // Smaller triangles are 48% of the base width
        const smallHeightScale = 0.38; // Smaller triangles are 38% of the height

        let y = 0;
        while (y < canvas.height) {
            // Draw larger triangles
            ctx.beginPath();
            ctx.moveTo(0, y); // Bottom-left corner
            ctx.lineTo(triangleBase / 2, y + triangleHeight); // Top center
            ctx.lineTo(triangleBase, y); // Bottom-right corner
            ctx.closePath();

            const gradient = ctx.createLinearGradient(0, y, 0, y + triangleHeight);
            
            gradient.addColorStop(0, "#7a7a7a"); // Dark gray
            gradient.addColorStop(1, "#f0f0f0"); // off-white

            // Apply gradient as fill style
            ctx.fillStyle = gradient;
            ctx.fill();

            // Stroke left and right edges of the larger triangle
            ctx.strokeStyle = "#f0f0f0"; // Off-white
            ctx.lineWidth = 2;
            // Left side
            ctx.beginPath();
            ctx.moveTo(0, y); // Bottom-left corner
            ctx.lineTo(triangleBase / 2, y + triangleHeight); // Top center
            ctx.stroke();
            
            // Right side
            ctx.beginPath();
            ctx.moveTo(triangleBase, y); // Bottom-right corner
            ctx.lineTo(triangleBase / 2, y + triangleHeight); // Top center
            ctx.stroke();

            // Stroke the bottom edge with a thinner line
            ctx.lineWidth = 0.5; // Thinner stroke for bottom
            ctx.beginPath();
            ctx.moveTo(0, y); // Bottom-left corner
            ctx.lineTo(triangleBase, y); // Bottom-right corner
            ctx.stroke();

            // Draw smaller triangle inside the larger triangle
            const smallBase = triangleBase * smallTriangleScale;
            const smallHeight = triangleHeight * smallHeightScale;

            const smallXOffset = (triangleBase - smallBase) / 2; // Center horizontally
            const smallYOffset = y + triangleHeight * 0.09; // Push down to fit inside

            ctx.beginPath();
            ctx.moveTo(smallXOffset, smallYOffset); // Bottom-left corner of smaller triangle
            ctx.lineTo(triangleBase / 2, smallYOffset + smallHeight); // Top center
            ctx.lineTo(triangleBase - smallXOffset, smallYOffset); // Bottom-right corner
            ctx.closePath();

            // Fill smaller triangle 
            ctx.fillStyle = "#141414"; // Dark Gray
            ctx.fill();

            // Top edge
            ctx.beginPath();
            ctx.moveTo(smallXOffset, smallYOffset); // Bottom-left corner
            ctx.lineTo(triangleBase / 2, smallYOffset + smallHeight); // Top center
            ctx.stroke();

            // Left side
            ctx.beginPath();
            ctx.moveTo(smallXOffset, smallYOffset); // Bottom-left corner
            ctx.lineTo(triangleBase / 2, smallYOffset + smallHeight); // Top center
            ctx.stroke();

            // Right side
            ctx.beginPath();
            ctx.moveTo(triangleBase - smallXOffset, smallYOffset); // Bottom-right corner
            ctx.lineTo(triangleBase / 2, smallYOffset + smallHeight); // Top center
            ctx.stroke();

            ctx.lineWidth = 0.2;

            y += triangleHeight / 2; // Overlap by half

            // Duplicate the canvas
            const mirroredCanvas = document.createElement('canvas');
            mirroredCanvas.id = 'myCanvasMirror';
            document.body.appendChild(mirroredCanvas);

            // Set mirrored canvas size
            mirroredCanvas.width = canvas.width;
            mirroredCanvas.height = canvas.height;

            // Copy the drawing to the mirrored canvas
            const mirrorCtx = mirroredCanvas.getContext('2d');
            mirrorCtx.scale(-1, 1); // Flip horizontally
            mirrorCtx.translate(-canvas.width, 0);
            mirrorCtx.drawImage(canvas, 0, 0);

        }
    }

    // Listen for resizing of window
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();