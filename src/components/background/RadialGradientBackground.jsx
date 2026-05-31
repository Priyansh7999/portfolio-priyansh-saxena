import React from 'react'

// Section order: hero → about → skills → services → experience → projects → contact
const VARIANT_CONFIG = {
  hero: {
    gridOpacity: 0.07,
    gridSize: '44px 44px',
    gridSpeed: '20s',
    glows: [
      {
        position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        size: 'w-[500px] h-[320px]',
        gradient: 'radial-gradient(ellipse at center, rgba(141,255,105,0.18) 0%, rgba(141,255,105,0.06) 40%, transparent 70%)',
        animation: 'pulse-center 4s ease-in-out infinite',
      },
    ],
    vignette: 'radial-gradient(ellipse at 50% 50%, transparent 20%, #000 75%)',
    corners: true,
    scanlines: true,
    scanlineOpacity: 0.015,
  },

  about: {
    gridOpacity: 0.07,
    gridSize: '44px 44px',
    gridSpeed: '20s',
    glows: [
      {
        position: 'top-[-10%] left-[-5%]',
        size: 'w-[55%] h-[70%]',
        gradient: 'radial-gradient(ellipse at 30% 30%, rgba(141,255,105,0.14) 0%, rgba(141,255,105,0.04) 45%, transparent 70%)',
        animation: 'pulse-tl 6s ease-in-out infinite',
      },
      {
        position: 'bottom-[-15%] right-[-5%]',
        size: 'w-[40%] h-[55%]',
        gradient: 'radial-gradient(ellipse at 70% 70%, rgba(141,255,105,0.08) 0%, transparent 65%)',
        animation: 'pulse-br 8s ease-in-out infinite',
      },
    ],
    vignette: 'radial-gradient(ellipse at 30% 40%, transparent 25%, #000 78%)',
    corners: false,
    scanlines: true,
    scanlineOpacity: 0.012,
  },

  skills: {
    gridOpacity: 0.08,
    gridSize: '36px 36px',
    gridSpeed: '16s',
    glows: [
      {
        position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        size: 'w-[70%] h-[60%]',
        gradient: 'radial-gradient(ellipse at center, rgba(141,255,105,0.1) 0%, rgba(141,255,105,0.03) 50%, transparent 70%)',
        animation: 'pulse-center 5s ease-in-out infinite',
      },
      {
        position: 'top-[-5%] right-[-5%]',
        size: 'w-[35%] h-[45%]',
        gradient: 'radial-gradient(ellipse at 70% 20%, rgba(141,255,105,0.12) 0%, transparent 60%)',
        animation: 'pulse-tl 7s ease-in-out infinite',
      },
    ],
    vignette: 'radial-gradient(ellipse at 50% 50%, transparent 15%, #000 72%)',
    corners: true,
    scanlines: true,
    scanlineOpacity: 0.018,
  },

  services: {
    gridOpacity: 0.065,
    gridSize: '44px 44px',
    gridSpeed: '22s',
    glows: [
      {
        position: 'top-[-5%] left-1/2 -translate-x-1/2',
        size: 'w-[60%] h-[55%]',
        gradient: 'radial-gradient(ellipse at 50% 20%, rgba(141,255,105,0.15) 0%, rgba(141,255,105,0.04) 45%, transparent 70%)',
        animation: 'pulse-tl 7s ease-in-out infinite',
      },
      {
        position: 'bottom-[-10%] left-[-5%]',
        size: 'w-[35%] h-[45%]',
        gradient: 'radial-gradient(ellipse at 20% 80%, rgba(141,255,105,0.08) 0%, transparent 60%)',
        animation: 'pulse-br 10s ease-in-out infinite',
      },
    ],
    vignette: 'radial-gradient(ellipse at 50% 35%, transparent 22%, #000 78%)',
    corners: false,
    scanlines: true,
    scanlineOpacity: 0.013,
  },

  experience: {
    gridOpacity: 0.05,
    gridSize: '52px 52px',
    gridSpeed: '30s',
    glows: [
      {
        position: 'bottom-[-10%] left-[-5%]',
        size: 'w-[50%] h-[65%]',
        gradient: 'radial-gradient(ellipse at 25% 75%, rgba(141,255,105,0.13) 0%, rgba(141,255,105,0.04) 45%, transparent 68%)',
        animation: 'pulse-br 9s ease-in-out infinite',
      },
      {
        position: 'top-[-5%] right-[2%]',
        size: 'w-[40%] h-[40%]',
        gradient: 'radial-gradient(ellipse at 70% 30%, rgba(141,255,105,0.08) 0%, transparent 60%)',
        animation: 'pulse-tl 11s ease-in-out infinite',
      },
    ],
    vignette: 'radial-gradient(ellipse at 40% 60%, transparent 20%, #000 80%)',
    corners: true,
    scanlines: true,
    scanlineOpacity: 0.01,
  },

  projects: {
    gridOpacity: 0.05,
    gridSize: '52px 52px',
    gridSpeed: '30s',
    glows: [
      {
        position: 'top-1/2 left-1/2 ',
        size: 'w-[420px] h-[420px]',
        gradient: 'radial-gradient(ellipse at center, rgba(141,255,105,0.2) 0%, rgba(141,255,105,0.07) 35%, transparent 65%)',
        animation: 'pulse-center 3.5s ease-in-out infinite',
      },
    ],
    vignette: 'radial-gradient(ellipse at 40% 60%, transparent 20%, #000 80%)',
    corners: false,
    scanlines: true,
    scanlineOpacity: 0.01,
  },

  contact: {
    gridOpacity: 0.09,
    gridSize: '44px 44px',
    gridSpeed: '18s',
    glows: [
      {
        position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        size: 'w-[420px] h-[420px]',
        gradient: 'radial-gradient(ellipse at center, rgba(141,255,105,0.2) 0%, rgba(141,255,105,0.07) 35%, transparent 65%)',
        animation: 'pulse-center 3.5s ease-in-out infinite',
      },
    ],
    vignette: 'radial-gradient(ellipse at 50% 50%, transparent 18%, #000 72%)',
    corners: true,
    scanlines: true,
    scanlineOpacity: 0.02,
  },
}

function RadialGradientBackground({ variant = 'hero' }) {
  const cfg = VARIANT_CONFIG[variant] ?? VARIANT_CONFIG.hero

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Animated grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(141,255,105,${cfg.gridOpacity}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(141,255,105,${cfg.gridOpacity}) 1px, transparent 1px)
          `,
          backgroundSize: cfg.gridSize,
          animation: `gridshift ${cfg.gridSpeed} linear infinite`,
        }}
      />

      {/* Scanlines */}
      {cfg.scanlines && (
        <div
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 3px,
              rgba(141,255,105,${cfg.scanlineOpacity}) 3px,
              rgba(141,255,105,${cfg.scanlineOpacity}) 4px
            )`,
            animation: 'scanline-drift 8s linear infinite',
          }}
        />
      )}

      {/* Radial vignette — darkens grid edges */}
      <div className="absolute inset-0" style={{ background: cfg.vignette }} />

      {/* Section glows */}
      {cfg.glows.map((glow, i) => (
        <div
          key={i}
          className={`absolute ${glow.position} ${glow.size}`}
          style={{ background: glow.gradient, animation: glow.animation }}
        />
      ))}

      {/* Corner brackets — hero, skills, experience, contact only */}
      {cfg.corners && (
        <>
          <div className="absolute top-5 left-5 w-10 h-10" style={{ borderTop: '1px solid rgba(141,255,105,0.5)', borderLeft: '1px solid rgba(141,255,105,0.5)', animation: 'bracket-pulse 4s ease-in-out infinite' }} />
          <div className="absolute top-5 right-5 w-10 h-10" style={{ borderTop: '1px solid rgba(141,255,105,0.5)', borderRight: '1px solid rgba(141,255,105,0.5)', animation: 'bracket-pulse 4s ease-in-out infinite 0.5s' }} />
          <div className="absolute bottom-5 left-5 w-10 h-10" style={{ borderBottom: '1px solid rgba(141,255,105,0.5)', borderLeft: '1px solid rgba(141,255,105,0.5)', animation: 'bracket-pulse 4s ease-in-out infinite 1s' }} />
          <div className="absolute bottom-5 right-5 w-10 h-10" style={{ borderBottom: '1px solid rgba(141,255,105,0.5)', borderRight: '1px solid rgba(141,255,105,0.5)', animation: 'bracket-pulse 4s ease-in-out infinite 1.5s' }} />
        </>
      )}
    </div>
  )
}

export default RadialGradientBackground