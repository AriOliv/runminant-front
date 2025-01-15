import React from 'react'
import { Text, Button, Card } from '@geist-ui/core'
import { Check, Zap } from '@geist-ui/icons'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for testing and small projects',
    features: [
      'Up to 100k tokens/month',
      '1 model deployment',
      'Basic analytics',
      'Community support',
      'REST API access'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    description: 'For growing teams and applications',
    features: [
      'Up to 1M tokens/month',
      '10 model deployments',
      'Advanced analytics',
      'Priority support',
      'Custom domain',
      'Team access',
      'API key management'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale deployments',
    features: [
      'Unlimited tokens',
      'Unlimited deployments',
      'Custom SLM training',
      'Dedicated support',
      'SSO & SAML',
      'SLA guarantee',
      'Custom contracts'
    ],
    cta: 'Contact Sales',
    popular: false
  }
]

export default function Pricing() {
  return (
    <div style={{ 
      padding: '120px 20px',
      background: '#FAFAFA'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <Text span style={{ 
          color: '#6366F1',
          fontSize: '0.875rem',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}>
          Pricing
        </Text>
        <Text h2 style={{ 
          fontSize: '2.5rem',
          marginTop: '1rem',
          marginBottom: '1rem'
        }}>
          Simple, transparent pricing
        </Text>
        <Text p style={{ 
          color: '#6B7280',
          fontSize: '1.125rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Choose the perfect plan for your needs. All plans include unlimited API calls.
        </Text>
      </motion.div>

      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{ width: '320px' }}
          >
            <Card 
              shadow
              style={{ 
                height: '100%',
                border: plan.popular ? '2px solid #6366F1' : '1px solid #E5E7EB',
                position: 'relative'
              }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-13px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#6366F1',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  Most Popular
                </div>
              )}
              
              <Text h4 style={{ marginBottom: '0.5rem' }}>{plan.name}</Text>
              <div style={{ marginBottom: '1rem' }}>
                <Text h2 style={{ 
                  display: 'inline',
                  fontSize: '2.5rem'
                }}>
                  {plan.price}
                </Text>
                {plan.period && (
                  <Text span style={{ color: '#6B7280' }}>
                    {plan.period}
                  </Text>
                )}
              </div>
              <Text p style={{ 
                color: '#6B7280',
                marginBottom: '2rem',
                minHeight: '48px'
              }}>
                {plan.description}
              </Text>

              <Button 
                type={plan.popular ? 'secondary' : 'default'}
                width="100%"
                style={{
                  marginBottom: '2rem',
                  background: plan.popular ? 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)' : undefined,
                  border: plan.popular ? 'none' : undefined
                }}
                icon={plan.popular ? <Zap /> : undefined}
              >
                {plan.cta}
              </Button>

              <div>
                {plan.features.map((feature, j) => (
                  <div 
                    key={j}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                      color: '#374151'
                    }}
                  >
                    <Check size={16} style={{ 
                      marginRight: '0.75rem',
                      color: '#6366F1'
                    }} />
                    <Text span size={14}>{feature}</Text>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
