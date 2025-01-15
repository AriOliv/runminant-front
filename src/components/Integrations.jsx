import React from 'react'
import { Text } from '@geist-ui/core'
import { motion } from 'framer-motion'

const integrations = [
  [
    { name: 'OpenAI', logo: 'https://logo.clearbit.com/openai.com' },
    { name: 'Google Cloud', logo: 'https://logo.clearbit.com/google.com' },
    { name: 'AWS', logo: 'https://logo.clearbit.com/aws.amazon.com' },
    { name: 'Azure', logo: 'https://logo.clearbit.com/azure.com' },
    { name: 'Vercel', logo: 'https://logo.clearbit.com/vercel.com' }
  ],
  [
    { name: 'MongoDB', logo: 'https://logo.clearbit.com/mongodb.com' },
    { name: 'Hugging Face', logo: 'https://logo.clearbit.com/huggingface.co' },
    { name: 'Anthropic', logo: 'https://logo.clearbit.com/anthropic.com' },
    { name: 'Cohere', logo: 'https://logo.clearbit.com/cohere.ai' },
    { name: 'Nvidia', logo: 'https://logo.clearbit.com/nvidia.com' }
  ],
  [
    { name: 'Databricks', logo: 'https://logo.clearbit.com/databricks.com' },
    { name: 'Snowflake', logo: 'https://logo.clearbit.com/snowflake.com' },
    { name: 'Confluent', logo: 'https://logo.clearbit.com/confluent.io' },
    { name: 'Pinecone', logo: 'https://logo.clearbit.com/pinecone.io' },
    { name: 'Redis', logo: 'https://logo.clearbit.com/redis.com' }
  ]
]

export default function Integrations() {
  return (
    <div style={{ 
      background: '#111827',
      padding: '120px 20px',
      overflow: 'hidden'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <Text h2 style={{ 
          color: 'white',
          fontSize: '2.5rem',
          marginBottom: '1rem'
        }}>
          Connect your existing tools
        </Text>
        <Text p style={{ 
          color: '#9CA3AF',
          fontSize: '1.125rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Choose from hundreds of integrations and data sources. Can't find what you're looking for? Build your own custom integration.
        </Text>
      </motion.div>

      <div style={{ position: 'relative' }}>
        {/* Gradient overlays for scroll effect */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '100px',
          background: 'linear-gradient(to right, #111827, transparent)',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '100px',
          background: 'linear-gradient(to left, #111827, transparent)',
          zIndex: 1
        }} />

        {integrations.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            initial={{ x: rowIndex % 2 === 0 ? -100 : 100 }}
            animate={{ 
              x: rowIndex % 2 === 0 ? 100 : -100,
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            style={{
              display: 'flex',
              gap: '2rem',
              marginBottom: '2rem',
              padding: '1rem 0'
            }}
          >
            {/* Duplicate the row for seamless infinite scroll */}
            {[...row, ...row].map((integration, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '1rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  minWidth: 'fit-content'
                }}
              >
                <img 
                  src={integration.logo}
                  alt={integration.name}
                  style={{
                    width: '24px',
                    height: '24px',
                    objectFit: 'contain'
                  }}
                />
                <Text span style={{ color: '#E5E7EB', whiteSpace: 'nowrap' }}>
                  {integration.name}
                </Text>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
