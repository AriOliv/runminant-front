import React from 'react'
import { Text, Button, Grid, Card } from '@geist-ui/core'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div style={{ 
      padding: '120px 20px',
      background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)',
      textAlign: 'center'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Text span style={{ 
          fontSize: '0.875rem',
          fontWeight: 500,
          color: '#6366F1',
          background: '#EEF2FF',
          padding: '0.5rem 1rem',
          borderRadius: '2rem',
          marginBottom: '2rem',
          display: 'inline-block'
        }}>
          SLMify raises $4M+ →
        </Text>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', marginTop: '2rem' }}>
          <Text h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: 1.1,
            marginBottom: '1.5rem'
          }}>
            End-to-end
            <br />
            <span className="gradient-text">SLM finetuning</span>
          </Text>
          
          <Text p style={{ 
            fontSize: '1.25rem',
            color: '#4B5563',
            marginBottom: '2.5rem',
            lineHeight: 1.5
          }}>
            Effortlessly train and deploy small language models at scale.
            <br />
            No infrastructure. No maintenance. No worries.
          </Text>

          <Button 
            type="secondary" 
            scale={1.5}
            style={{
              background: 'var(--primary-gradient)',
              border: 'none',
              padding: '0 2rem',
              height: '3.5rem'
            }}
          >
            Book an intro call
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ marginTop: '4rem' }}
      >
        <Card width="100%" style={{ 
          background: '#FFF',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          overflow: 'hidden'
        }}>
          <pre style={{ 
            background: '#1E1E1E',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            color: '#FFF',
            margin: 0
          }}>
{`// Initialize SLMify client
const slm = new SLMify({
  apiKey: process.env.SLMIFY_API_KEY
});

// Fine-tune your model
const model = await slm.finetune({
  baseModel: "slm-1b",
  dataset: "./training-data.jsonl",
  parameters: {
    epochs: 3,
    batchSize: 8
  }
});

// Generate text
const response = await model.generate({
  prompt: "Explain quantum computing",
  maxTokens: 100
});`}
          </pre>
        </Card>
      </motion.div>
    </div>
  )
}
