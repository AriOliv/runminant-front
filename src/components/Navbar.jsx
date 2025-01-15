import React from 'react'
import { Button, useTheme } from '@geist-ui/core'
import { Github } from '@geist-ui/icons'

export default function Navbar() {
  return (
    <nav style={{ 
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(12px)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{ 
        fontSize: '1.25rem',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <span style={{ 
          background: 'var(--primary-gradient)',
          width: '24px',
          height: '24px',
          borderRadius: '6px',
          display: 'inline-block'
        }}></span>
        SLMify
      </div>

      <div style={{ 
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        <a href="#" style={{ color: '#4B5563', textDecoration: 'none' }}>Docs</a>
        <a href="#" style={{ color: '#4B5563', textDecoration: 'none' }}>Pricing</a>
        <a href="#" style={{ color: '#4B5563', textDecoration: 'none' }}>Blog</a>
        <Button 
          auto 
          scale={0.8}
          style={{ background: 'var(--primary-gradient)', border: 'none' }}
        >
          Get Started
        </Button>
      </div>
    </nav>
  )
}
