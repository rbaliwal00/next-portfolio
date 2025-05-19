import React from "react";

const HelloIntro = () => {
  return (
    <div className="intro">
      <div className="intro__first">Hi all. I am</div>
      <div className="intro__name">Rajan Baliwal</div>
      <div className="intro__position">&gt; Full-stack developer</div>
      <div className="intro__description">
        I create full-stack applications for web & mobile.
      </div>
      <div className="intro__tech">Java, Spring Boot, React, React Native.</div>
      <div className="intro__tech_info">
        My work includes designing and deploying scalable microservice
        architectures, optimizing CI/CD pipelines, and managing high-traffic
        systems with technologies like Docker, Kubernetes, and Kafka.
      </div>
    </div>
  );
};

export default HelloIntro;
