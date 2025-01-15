import React from 'react'
import { Grid, Card, Text } from '@geist-ui/core'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Box, 
  BarChart2,
  Shield,
  Cpu,
  Code
} from '@geist-ui/icons'

const features = [
  {
    icon: <Cpu />,
    title: 'Efficient Models',
    description: 'Up to 10x faster inference with optimized SLMs'
  },
  {
    icon: <Box />,
    title: 'Easy Deployment',
    description: 'Deploy models with a single API call'
  },
  {
    icon: <BarChart2 />,
    title: 'Real-time Analytics',
    description: 'Monitor performance and usage in real-time'
  },
  {
    icon: <Shield />,
    title: 'Enterprise Security',
    description: 'SOC2 compliant with encrypted endpoints'
  },
  {
    icon: <Zap />,
    title: 'Fast Integration',
    description: 'Integrate in minutes with our SDKs'
  },
  {
    icon: <Code />,
    title: 'Custom Training',
    description: 'Fine-tune models on your specific data'
  }
]

export default function Features() {
  return (
    <div style={{ padding: '80px 20px' }}>
      <Text h2 style={{ 
        textAlign: 'center', 
        marginBottom: '3rem',
        fontSize: '2.5rem'
      }}>
        Built for developers
      </Text>
      
      <Grid.Container gap={2} justify="center">
        {features.map((feature, i) => (
          <Grid xs={24} sm={8} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ width: '100%' }}
            >
              <Card className="card-hover" style={{ height: '100%' }}>
                <div style={{ color: '#6366F1', marginBottom: '1rem' }}>
                  {feature.icon}
                </div>
                <Text h4 style={{ marginBottom: '0.5rem' }}>
                  {feature.title}
                </Text>
                <Text type="secondary">
                  {feature.description}
                </Text>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  )
}
