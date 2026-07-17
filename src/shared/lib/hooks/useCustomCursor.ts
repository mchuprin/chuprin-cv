import { useState, useRef, useEffect, useLayoutEffect, useCallback, RefObject } from 'react'

interface UseCustomCursorProps {
    inputRef: RefObject<HTMLInputElement | null>
    value: string
}

export function useCustomCursor({ inputRef, value }: UseCustomCursorProps) {
    const measureRef = useRef<HTMLSpanElement>(null)
    const [caretLeft, setCaretLeft] = useState(0)
    const [cursorPos, setCursorPos] = useState(0)

    const measureCaret = useCallback(() => {
        if (measureRef.current) {
            setCaretLeft(measureRef.current.offsetWidth)
        }
    }, [])

    useEffect(() => {
        inputRef.current?.focus()
        measureCaret()
    }, [inputRef, value, cursorPos, measureCaret])

    useLayoutEffect(() => {
        if (inputRef.current) {
            inputRef.current.selectionStart = cursorPos
            inputRef.current.selectionEnd = cursorPos
        }
    }, [inputRef, cursorPos])

    return { measureRef, caretLeft, cursorPos, setCursorPos }
}
