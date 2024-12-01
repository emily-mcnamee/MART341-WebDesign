
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Set canvas size
    function resizeCanvas() {
        canvas.width = 60; // Fixed width
        canvas.height = window.innerHeight; // Full height
        drawTriangles();
    }

    // Draw overlapping triangles with strokes
    function drawTriangles() {
        // Fill background with dark gray
        ctx.fillStyle = "#141414"; // Dark gray
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const triangleHeight = 50; // Height of each triangle
        const triangleBase = canvas.width; // Full width

        let y = 0;
        while (y < canvas.height) {
            ctx.beginPath();
            ctx.moveTo(0, y); // Bottom-left corner
            ctx.lineTo(triangleBase / 2, y + triangleHeight); // Top center
            ctx.lineTo(triangleBase, y); // Bottom-right corner
            ctx.closePath();

            ctx.strokeStyle = "#f0f0f0"; // Off-white
            ctx.lineWidth = 2; // Stroke width
            ctx.stroke();

            y += triangleHeight / 2; // Overlap by half
        }
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
