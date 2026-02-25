"use client";

import React, { useState, useEffect, useRef } from "react";

const statsData = [
  { label: "Projects Completed", count: 250 },
  { label: "Satisfied Clients", count: 180 },
  { label: "Expert Team", count: 15 },
  { label: "Years Experience", count: 5 },
];

const Statistics = () => {
  // শুরুতে বেস নাম্বার সেট করার লজিক
  const initialCounts = statsData.map((stat) => {
    if (stat.count >= 100) return 100; 
    if (stat.count >= 50) return 50;
    if (stat.count >= 20) return 20;
    if (stat.count >= 10) return 10;
    if (stat.count >= 5) return 2;     
    return 0;
  });

  const [counts, setCounts] = useState(initialCounts);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000; 
          const frameRate = 1000 / 60; 
          const totalFrames = Math.round(duration / frameRate);

          let frame = 0;
          const interval = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts(
              statsData.map((stat, i) => {
                const startValue = initialCounts[i];
                const remainingValue = stat.count - startValue;
                // বেস নাম্বার + বাকি অংশের অ্যানিমেশন
                const currentCount = Math.floor(startValue + (easeOut * remainingValue));
                return currentCount > stat.count ? stat.count : currentCount;
              })
            );

            if (frame >= totalFrames) clearInterval(interval);
          }, frameRate);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated, initialCounts]);

  return (
    <section ref={sectionRef} className="py-5 bg-navy text-white text-center position-relative">
      <div className="container py-4 position-relative z-index-2">
        <div className="row g-4">
          {statsData.map((stat, i) => (
            <div className="col-6 col-md-3" key={i}>
              <h1 className="display-4 fw-bold text-yellow mb-1">
                {counts[i]}
                {stat.count >= 5 ? "+" : ""}
              </h1>
              <p className="small text-uppercase opacity-75 ls-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;