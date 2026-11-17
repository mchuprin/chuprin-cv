import { ImageResponse } from 'next/og'
import { routing } from '@_shared/config/i18n/routing'

export const alt = 'Maksim Chuprin — Frontend Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const dynamic = 'force-static'

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

const COLORS = {
    background: '#0a0a0f',
    card: '#12121a',
    border: 'rgba(0, 245, 255, 0.25)',
    foreground: '#e4e4e7',
    muted: '#5a6080',
    accent: '#00f5ff',
    primary: '#ff006e',
    green: '#39ff14',
    red: '#ff5f56',
    yellow: '#ffbd2e',
    dotGreen: '#27c93f'
}

// Latin-only text: the default ImageResponse font has no guaranteed Cyrillic support
export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    padding: 48,
                    background: COLORS.background
                }}
            >
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        border: `2px solid ${COLORS.border}`,
                        borderRadius: 16,
                        background: COLORS.card
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            padding: '20px 28px',
                            borderBottom: `2px solid ${COLORS.border}`
                        }}
                    >
                        {[COLORS.red, COLORS.yellow, COLORS.dotGreen].map((color) => (
                            <div
                                key={color}
                                style={{ width: 18, height: 18, borderRadius: 9, background: color }}
                            />
                        ))}
                        <div style={{ marginLeft: 16, fontSize: 24, color: COLORS.muted }}>
                            chuprin@cv: ~
                        </div>
                    </div>

                    <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: '0 64px',
                            gap: 20
                        }}
                    >
                        <div style={{ display: 'flex', fontSize: 34, color: COLORS.muted }}>
                            <span style={{ color: COLORS.primary, marginRight: 16 }}>$</span>
                            whoami
                        </div>
                        <div style={{ fontSize: 88, fontWeight: 700, color: COLORS.accent }}>
                            Maksim Chuprin
                        </div>
                        <div style={{ fontSize: 40, color: COLORS.foreground }}>
                            Frontend Developer · 6+ years
                        </div>
                        <div style={{ fontSize: 32, color: COLORS.green }}>
                            Vue · React · TypeScript · Next.js
                        </div>
                    </div>
                </div>
            </div>
        ),
        size
    )
}
