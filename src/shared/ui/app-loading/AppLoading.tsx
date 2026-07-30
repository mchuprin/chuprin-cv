'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import styles from './AppLoading.module.scss'
import { ASCII_LOGO } from '@_shared/model/constants'
import { classNames } from '@_shared/lib/classNames/classNames'

const BOOT_LINES = [
    { delay: 0, text: 'BIOS v2.4.1  ·  VOID SYSTEMS INC.' },
    { delay: 320, text: '[OK] Initializing memory subsystem      ... 8192 MB' },
    { delay: 580, text: '[OK] Loading kernel modules              ... done' },
    { delay: 820, text: '[OK] Mounting encrypted filesystem       ... done' },
    { delay: 1060, text: '[OK] Starting network daemon             ... done' },
    { delay: 1280, text: '[OK] Establishing secure channel         ... done' },
    { delay: 1500, text: '[OK] Loading user profile: chuprin        ... done' },
    { delay: 1720, text: '[OK] System ready' }
]

interface AppLoadingProps {
    onDone: () => void
}

export const AppLoading = ({ onDone }: AppLoadingProps) => {
    const t = useTranslations('loading')
    const [phase, setPhase] = useState<'crt' | 'boot' | 'bar' | 'exit'>('crt')
    const [lines, setLines] = useState<string[]>([])
    const [barPct, setBarPct] = useState(0)
    const skipped = useRef(false)

    const finish = useCallback(() => {
        if (skipped.current) return
        skipped.current = true
        setPhase('exit')
        setTimeout(onDone, 600)
    }, [onDone])

    useEffect(() => {
        const timer = setTimeout(() => setPhase('boot'), 480)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (phase !== 'boot') return
        const timers = BOOT_LINES.map(({ delay, text }) =>
            setTimeout(() => {
                setLines((l) => [...l, text])
                if (text === '[OK] System ready') {
                    setTimeout(() => setPhase('bar'), 280)
                }
            }, delay)
        )
        return () => timers.forEach(clearTimeout)
    }, [phase])

    useEffect(() => {
        if (phase !== 'bar') return
        let pct = 0
        const tick = setInterval(() => {
            pct += Math.random() * 14 + 4
            if (pct >= 100) {
                pct = 100
                clearInterval(tick)
                setTimeout(finish, 300)
            }
            setBarPct(Math.min(pct, 100))
        }, 60)
        return () => clearInterval(tick)
    }, [phase, finish])

    useEffect(() => {
        const h = (e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') finish()
        }
        window.addEventListener('keydown', h)
        return () => window.removeEventListener('keydown', h)
    }, [finish])

    const filled = Math.round((barPct / 100) * 32)
    const isExiting = phase === 'exit'

    return (
        <button type="button" onClick={finish} className={classNames(styles.root, {[styles.exiting]: isExiting})}>
            <div className={classNames(styles.screen, {[styles.crt]: phase === 'crt'}, [])}>
                <pre className={`ascii-logo ${styles.logo}`}>{ASCII_LOGO}</pre>

                <div className={styles.lines}>
                    {lines.map((line) => (
                        <div key={line} className={styles.line}>
                            {line.startsWith('[OK]') ? (
                                <>
                                    <span className={styles.ok}>[OK]</span>
                                    {line.slice(4)}
                                </>
                            ) : (
                                <span className={styles.info}>{line}</span>
                            )}
                        </div>
                    ))}
                </div>

                {(phase === 'bar' || phase === 'exit') && (
                    <div className={styles.progress}>
                        <div className={styles.progressHeader}>
                            <span>{t('interface')}</span>
                            <span className={barPct === 100 ? styles.done : undefined}>
                                {Math.round(barPct)}%
                            </span>
                        </div>
                        <div className={styles.barTrack}>
                            <div className={styles.barFill} style={{ width: `${barPct}%` }} />
                        </div>
                    </div>
                )}

                <div className={styles.skipHint}>{t('skipHint')}</div>
            </div>
        </button>
    )
}
