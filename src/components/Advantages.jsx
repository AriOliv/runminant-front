import React from 'react'
import { Text, Grid } from '@geist-ui/core'
import { motion } from 'framer-motion'
import { Clock, DollarSign, CheckCircle, Zap, Shield, Database } from '@geist-ui/icons'

const advantages = [
  {
    icon: <Clock size={32} />,
    title: 'Save time',
    description: 'Deploy fine-tuned models in minutes, not weeks. Our automated pipeline handles the entire process from training to deployment.',
    color: '#4F46E5'
  },
  {
    icon: <DollarSign size={32} />,
    title: 'Save money',
    description: 'Cut costs by up to 90% compared to large language models. Our SLMs are optimized for efficiency and performance.',
    color: '#0EA5E9'
  },
  {
    icon: <CheckCircle size={32} />,
    title: 'Save hassle',
    description: 'No infrastructure management needed. We handle scaling, monitoring, and maintenance so you can focus on your application.',
    color: '#8B5CF6'
  }
]

export default function Advantages() {
  return (
    <div style={{ 
      padding: '120px 20px',
      background: '#fff'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Text span style={{ color: '#6366F1', fontSize: '0.875rem', fontWeight: 500 }}>
            WHY CHOOSE SLMIFY?
          </Text>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '1rem' }}>
            <Text h2 style={{ 
              fontSize: '2.5rem',
              maxWidth: '500px',
              margin: '0'
            }}>
              Let SLMify
              <br />
              do the hard work
            </Text>
            <Text p style={{ 
              color: '#666',
              maxWidth: '400px',
              fontSize: '1.125rem',
              margin: '0'
            }}>
              SLMify automates your entire ML pipeline end-to-end. We handle model training, deployment, and scaling—all from one simple platform.
            </Text>
          </div>
        </motion.div>

        <Grid.Container gap={4} style={{ marginTop: '60px' }}>
          {advantages.map((advantage, i) => (
            <Grid xs={24} md={8} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{ width: '100%' }}
              >
                <div style={{ 
                  color: advantage.color,
                  marginBottom: '1.5rem'
                }}>
                  {advantage.icon}
                </div>
                <Text h3 style={{ marginBottom: '1rem' }}>
                  {advantage.title}
                </Text>
                <Text p style={{ color: '#666' }}>
                  {advantage.description}
                </Text>
              </motion.div>
            </Grid>
          ))}
        </Grid.Container>

        {/* Demo Interface */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ 
            marginTop: '80px',
            background: '#F8FAFC',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #E2E8F0'
          }}
        >
          <div style={{ 
            background: '#fff',
            borderBottom: '1px solid #E2E8F0',
            padding: '12px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{ 
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#FC6D6D'
            }}></div>
            <div style={{ 
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#FCD36D'
            }}></div>
            <div style={{ 
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#6DFC8F'
            }}></div>
          </div>
          <pre style={{ 
            margin: 0,
            padding: '24px',
            background: '#F8FAFC',
            fontSize: '14px',
            lineHeight: 1.6,
            overflow: 'auto'
          }}>
{`// Initialize SLMify client
const slm = new SLMify({
  apiKey: process.env.SLMIFY_API_KEY
});

// Train and deploy in one step
const model = await slm.deploy({
  task: 'text-classification',
  data: './training-data.jsonl',
  config: {
    model_size: '1B',
    epochs: 3
  }
});

// Start making predictions
const result = await model.predict(
  "This product is amazing!"
);

console.log(result.sentiment); // "positive"`}
          </pre>
        </motion.div>
      </div>
    </div>
  )
}
