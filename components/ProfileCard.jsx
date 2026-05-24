"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import "./ProfileCard.css";

const ProfileCard = ({
  name = "Rene Franco",
  title = "Software Engineer",
  handle = "renefranco",
  status = "Online",
  contactText = "Contact Me",
  avatarUrl = "/assets/image-okok.png",
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  onContactClick,
  behindGlowColor = "rgba(178, 118, 230, 0.6)",
  behindGlowEnabled = true,
  innerGradient = "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",
  iconUrl,
}) => {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  const handleMouseMove = useCallback(
    (e) => {
      if (!enableTilt) return;
      if (isMobile && !enableMobileTilt) return;

      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const maxTilt = 12;
      const rotateY = (dx / (rect.width / 2)) * maxTilt;
      const rotateX = -(dy / (rect.height / 2)) * maxTilt;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

      if (glareRef.current) {
        const glareX = ((e.clientX - rect.left) / rect.width) * 100;
        const glareY = ((e.clientY - rect.top) / rect.height) * 100;
        glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.10) 0%, transparent 65%)`;
      }
    },
    [enableTilt, enableMobileTilt, isMobile]
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    if (glareRef.current) {
      glareRef.current.style.background =
        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06) 0%, transparent 70%)";
    }
  }, []);

  return (
    <div className="profile-card-wrapper">
      {/* Behind glow */}
      {behindGlowEnabled && (
        <div
          className="profile-card-behind-glow"
          style={{ background: behindGlowColor }}
        />
      )}

      <div
        ref={cardRef}
        className="profile-card"
        style={{ background: innerGradient }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glare overlay */}
        <div ref={glareRef} className="profile-card-glare" />

        <div className="profile-card-inner">
          {/* Avatar section */}
          <div className="profile-card-avatar-section">
            {/* Icon pattern overlay */}
            {iconUrl && (
              <div
                className="profile-card-icon-pattern"
                style={{ backgroundImage: `url(${iconUrl})` }}
              />
            )}

            <Image
              src={avatarUrl}
              alt={name}
              fill
              sizes="300px"
              className="object-cover"
              priority
            />

            {/* Status badge */}
            <div className="profile-card-status">
              <span className="profile-card-status-dot" />
              {status}
            </div>
          </div>

          {/* Info section */}
          {showUserInfo !== false && (
            <div
              className="profile-card-info"
              style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(12px)" }}
            >
              <p className="profile-card-name">{name}</p>
              <p className="profile-card-title">{title}</p>
              <p className="profile-card-handle">@{handle}</p>

              <button
                className="profile-card-contact-btn"
                onClick={onContactClick}
              >
                {contactText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
