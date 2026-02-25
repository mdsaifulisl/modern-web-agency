import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h6 className="vibrant-cyan text-uppercase ls-2 fw-bold mb-2">
            Creative Minds
          </h6>
          <h2 className="display-5 fw-bold text-navy">Meet Our Leadership</h2>
          <div className="heading-underline mx-auto mt-3"></div>
        </div>
        <div className="row g-4">
          {[
            {
              name: "Alex Rivera",
              role: "CEO & Founder",
              img: "https://i.pravatar.cc/300?img=11",
            },
            {
              name: "Sophia Chen",
              role: "Creative Director",
              img: "https://i.pravatar.cc/300?img=26",
            },
            {
              name: "Marcus Thorne",
              role: "Head of Tech",
              img: "https://i.pravatar.cc/300?img=12",
            },
            {
              name: "Elena Gilbert",
              role: "Client Success",
              img: "https://i.pravatar.cc/300?img=32",
            },
          ].map((member, idx) => (
            <div className="col-6 col-lg-3" key={idx}>
              <div className="card border-0 text-center hover-lift h-100 p-3">
                <div
                  className="mx-auto mb-3"
                  style={{
                    width: "150px",
                    height: "150px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="rounded-circle object-fit-cover shadow-sm border border-4 border-white"
                  />
                </div>
                <h5 className="fw-bold text-navy mb-1">{member.name}</h5>
                <p className="text-mid-gray small">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
