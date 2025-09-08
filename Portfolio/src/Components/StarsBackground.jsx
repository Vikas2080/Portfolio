import { useEffect, useRef } from "react";

const StarsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    const starCount = 200;
    const shootingStars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    // create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random(),
        fade: Math.random() * 0.02 + 0.005,
      });
    }

    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height / 2),
        length: Math.random() * 80 + 100,
        speed: Math.random() * 8 + 4,
        opacity: 1,
      });
    };

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 20, 0.5)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // twinkling stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        // subtle glow for stars ✨
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 3);
        gradient.addColorStop(0, `rgba(255,255,255,${star.alpha})`);
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = gradient;

        ctx.fill();

        star.alpha += star.fade;
        if (star.alpha <= 0 || star.alpha >= 1) {
          star.fade = -star.fade;
        }
      });

      // shooting stars
      for (let i = 0; i < shootingStars.length; i++) {
        const s = shootingStars[i];
        ctx.beginPath();
        const grad = ctx.createLinearGradient(s.x, s.y, s.x + s.length, s.y + s.length);
        grad.addColorStop(0, `rgba(255,255,255,${s.opacity})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + s.length, s.y + s.length);
        ctx.stroke();

        s.x += s.speed;
        s.y += s.speed;
        s.opacity -= 0.02;

        if (s.opacity <= 0) {
          shootingStars.splice(i, 1);
          i--;
        }
      }

      if (Math.random() < 0.005) {
        createShootingStar();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{ background: "linear-gradient(to bottom, #0f172a, #000)" }}
    />
  );
};

export default StarsBackground;
