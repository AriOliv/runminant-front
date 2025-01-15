import React from 'react'
import { Text, Button, Grid } from '@geist-ui/core'
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube,
  ExternalLink
} from '@geist-ui/icons'

const footerLinks = {
  Products: [
    { name: 'SLM Models', href: '#' },
    { name: 'Enterprise', href: '#' },
    { name: 'API', href: '#' },
    { name: 'Monitoring', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Integrations', href: '#' }
  ],
  Resources: [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'Examples', href: '#' },
    { name: 'Templates', href: '#' },
    { name: 'Community', href: '#', external: true }
  ],
  Company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Changelog', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Partners', href: '#' }
  ],
  Social: [
    { name: 'GitHub', href: '#', icon: <Github size={16} /> },
    { name: 'Twitter', href: '#', icon: <Twitter size={16} /> },
    { name: 'LinkedIn', href: '#', icon: <Linkedin size={16} /> },
    { name: 'YouTube', href: '#', icon: <Youtube size={16} /> }
  ]
}

export default function Footer() {
  return (
    <footer style={{ 
      background: '#000',
      color: '#fff',
      padding: '80px 20px 40px'
    }}>
      {/* CTA Section */}
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        <div>
          <Text h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>
            Ready to deploy? <Text span style={{ color: '#666' }}>Start building with a free account.</Text>
          </Text>
          <Text p style={{ color: '#666' }}>
            Speak to an expert for your{' '}
            <Text span style={{ color: '#3B82F6' }}>Pro</Text> or{' '}
            <Text span style={{ color: '#8B5CF6' }}>Enterprise</Text> needs.
          </Text>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button auto scale={1.2} type="secondary">Start Deploying</Button>
          <Button auto scale={1.2}>Contact Sales</Button>
        </div>
      </div>

      {/* Links Section */}
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        borderTop: '1px solid #222',
        paddingTop: '60px'
      }}>
        <Grid.Container gap={4}>
          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid xs={24} sm={6} key={category}>
              <div>
                <Text h4 style={{ color: '#fff', marginBottom: '1.5rem' }}>
                  {category}
                </Text>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      style={{ 
                        color: '#666',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.875rem'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                      onMouseOut={(e) => e.currentTarget.style.color = '#666'}
                    >
                      {link.icon && link.icon}
                      {link.name}
                      {link.external && <ExternalLink size={12} />}
                    </a>
                  ))}
                </div>
              </div>
            </Grid>
          ))}
        </Grid.Container>

        {/* Bottom Section */}
        <div style={{ 
          marginTop: '60px',
          paddingTop: '20px',
          borderTop: '1px solid #222',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ 
              width: '8px',
              height: '8px',
              background: '#3B82F6',
              borderRadius: '2px'
            }}></div>
            <Text span small style={{ color: '#666' }}>
              All systems normal
            </Text>
          </div>
          <Text span small style={{ color: '#666' }}>
            © 2024 SLMify, Inc. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  )
}
