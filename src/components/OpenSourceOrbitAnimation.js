import React, { useRef, useEffect } from 'react';

const OpenSourceOrbitAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const width = 340;
    const height = 340;
    canvas.width = width;
    canvas.height = height;

    const center = { x: width / 2, y: height / 2 };
    const numNodes = 8;
    const orbitRadius = 110;
    const nodeRadius = 10;
    const nodes = Array.from({ length: numNodes }, (_, i) => ({
      angle: (i / numNodes) * Math.PI * 2,
      speed: 0.008 + Math.random() * 0.004
    }));

    function drawOpenSourceIcon(cx, cy, size) {
      // Open Source Initiative "keyhole" logo (simplified)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.globalAlpha = 0.95;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.55, 0, Math.PI * 2);
      ctx.fillStyle = '#111';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, size * 0.45, size * 0.18, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.restore();
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      // Draw orbits
      ctx.save();
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.beginPath();
      ctx.arc(center.x, center.y, orbitRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      // Draw central icon
      drawOpenSourceIcon(center.x, center.y, 38);
      // Draw orbiting nodes
      nodes.forEach((node, i) => {
        node.angle += node.speed;
        const x = center.x + orbitRadius * Math.cos(node.angle);
        const y = center.y + orbitRadius * Math.sin(node.angle);
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.globalAlpha = 0.85;
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.restore();
        // Draw line to center
        ctx.save();
        ctx.strokeStyle = 'rgba(255,255,255,0.13)';
        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.restore();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={340}
      height={340}
      className="mx-auto block opacity-90"
      style={{ maxWidth: '340px', maxHeight: '340px' }}
    />
  );
};

export default OpenSourceOrbitAnimation; 