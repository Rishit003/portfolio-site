import { motion, useSpring } from 'framer-motion'
import { useCursor } from '../hooks/useCursor'

export default function Cursor() {
  const { pos, clicking } = useCursor()

  const x = useSpring(pos.x, { stiffness: 800, damping: 40 })
  const y = useSpring(pos.y, { stiffness: 800, damping: 40 })

  // Update springs when pos changes
  x.set(pos.x)
  y.set(pos.y)

  return (
    <motion.div
      style={{ x, y }}
      animate={{ scale: clicking ? 2.5 : 1 }}
      transition={{ scale: { duration: 0.1 } }}
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-[10px] h-[10px] -translate-x-1/2 -translate-y-1/2 bg-green shadow-[0_0_12px_#00ff88]"
    />
  )
}
