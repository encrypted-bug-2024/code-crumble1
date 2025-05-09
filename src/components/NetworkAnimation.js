import React, { useEffect, useRef } from 'react';

const NetworkAnimation = () => {
  const canvasRef = useRef(null);
  const nodes = useRef([]);
  const connections = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      nodes.current = []; // Reset nodes on resize
      createNodes();
    };

    // Create nodes
    const createNodes = () => {
      for (let i = 0; i < 30; i++) {
        nodes.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 4,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1
        });
      }
    };

    // Update node positions
    const updateNodes = () => {
      nodes.current.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });
    };

    // Draw connections between nearby nodes
    const drawConnections = () => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.current.length; i++) {
        for (let j = i + 1; j < nodes.current.length; j++) {
          const dx = nodes.current[i].x - nodes.current[j].x;
          const dy = nodes.current[i].y - nodes.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes.current[i].x, nodes.current[i].y);
            ctx.lineTo(nodes.current[j].x, nodes.current[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Draw nodes
    const drawNodes = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      nodes.current.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateNodes();
      drawConnections();
      drawNodes();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full opacity-30"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default NetworkAnimation; 