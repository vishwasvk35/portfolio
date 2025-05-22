"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef, useState, CSSProperties } from "react"

interface ElementDimensions {
    width: number;
    height: number;
    top: number;
    left: number;
}

export default function GradientText() {
    const ref = useRef<HTMLParagraphElement>(null)
    const [dimensions, measure] = useElementDimensions(ref)
    const { width, height, top, left } = dimensions
    const gradientX = useMotionValue(0.5)
    const gradientY = useMotionValue(0.5)
    const textGradient = useTransform(
        () =>
            `conic-gradient(from 0deg at calc(${
                gradientX.get() * 100
            }% - ${left}px) calc(${
                gradientY.get() * 100
            }% - ${top}px), #0cdcf7, #ff0088, #fff312, #0cdcf7)`
    )

    return (
        <div
            className="relative inline-flex items-center justify-center w-fit p-5"
            onPointerMove={(e: React.PointerEvent) => {
                gradientX.set(e.clientX / width)
                gradientY.set(e.clientY / height)
            }}
            onPointerEnter={() => measure()}
        >
            <motion.p
                ref={ref}
                style={{
                    backgroundImage: textGradient,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                }}
                className="font-primary text-9xl cursor-default m-0"
            >
                Vishwas Kulkarni
            </motion.p>
        </div>
    )
}

function useElementDimensions<T extends HTMLElement = HTMLElement>(ref: React.RefObject<T | null>): [ElementDimensions, () => void] {
    const [size, setSize] = useState<ElementDimensions>({ width: 0, height: 0, top: 0, left: 0 })

    function measure() {
        if (!ref.current) return
        setSize(ref.current.getBoundingClientRect())
    }

    useEffect(() => {
        measure()
        window.addEventListener("resize", measure)
        return () => window.removeEventListener("resize", measure)
    }, [])

    return [size, measure]
}