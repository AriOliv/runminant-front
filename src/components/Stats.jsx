import React from 'react'
import { Text } from '@geist-ui/core'
import { motion } from 'framer-motion'
import { Github } from '@geist-ui/icons'

export default function Stats() {
  return (
    <div style={{ 
      background: '#111827',
      padding: '120px 20px',
      color: 'white',
      textAlign: 'center'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Text h2 style={{ 
          color: 'white',
          marginBottom: '1rem',
          fontSize: '2.5rem'
        }}>
          Rely on <span style={{ color: '#818CF8' }}>SLMify</span>
        </Text>
        <Text p style={{ 
          color: '#9CA3AF',
          maxWidth: '600px',
          margin: '0 auto',
          marginBottom: '4rem'
        }}>
          We've been developing small language models since before their rise in 2023.
          Nearly every part of our technology stack has been built in-house.
        </Text>

        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '1rem',
              minWidth: '240px'
            }}
          >
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              <Github size={32} />
              30k
            </div>
            <Text span style={{ color: '#9CA3AF' }}>Stars on GitHub</Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
              padding: '2rem',
              borderRadius: '1rem',
              minWidth: '280px'
            }}
          >
            <div style={{ 
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              53,339,896
            </div>
            <Text span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Models trained and deployed
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '1rem',
              minWidth: '240px'
            }}
          >
            <div style={{ 
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              1M+
            </div>
            <Text span style={{ color: '#9CA3AF' }}>Users across our platform</Text>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            marginTop: '6rem',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '3rem',
            borderRadius: '1rem',
            maxWidth: '800px',
            margin: '6rem auto 0'
          }}
        >
          <img 
            src="https://logo.clearbit.com/vercel.com" 
            alt="Company Logo"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              marginBottom: '1.5rem'
            }}
          />
          <Text h3 style={{ 
            color: 'white',
            fontSize: '1.8rem',
            lineHeight: 1.4,
            marginBottom: '1rem'
          }}>
            "SLMify helps us train and deploy hundreds of specialized language models every month, saving us thousands of dollars in compute costs."
          </Text>
          <Text p style={{ color: '#9CA3AF' }}>
            John Smith • AI Lead at Vercel
          </Text>
        </motion.div>
      </motion.div>
    </div>
  )
}
