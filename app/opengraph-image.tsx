import { ImageResponse } from 'next/og'

export const alt = 'GENBRIK — AI, Technology & Robotics'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** Default Open Graph card, generated at build time (spec §5.4). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          background: '#07070A',
          padding: '60px 68px',
          color: '#E8E9ED',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 24,
            letterSpacing: '-0.01em',
            fontWeight: 600,
          }}
        >
          <span>GENBRIK</span>
          <span style={{ fontSize: 14, color: '#6B6D74' }}>genbrik.com</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              height: 1,
              width: 110,
              background:
                'linear-gradient(90deg, rgba(232,233,237,0.75), rgba(232,233,237,0.02))',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 66,
              lineHeight: 1.02,
              fontWeight: 600,
              letterSpacing: '-2.2px',
              marginTop: 32,
            }}
          >
            <span>Technology we build.</span>
            <span style={{ color: '#B9BCC4' }}>Intelligence we engineer.</span>
          </div>
          <div style={{ display: 'flex', fontSize: 19, color: '#8B8E96', marginTop: 30 }}>
            AI · Robotics · Chips · Surveillance
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.10)',
            paddingTop: 20,
            fontSize: 13,
            color: '#5B5C63',
          }}
        >
          <span>AI · software · robotics</span>
          <span>Chips · surveillance · automation</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
