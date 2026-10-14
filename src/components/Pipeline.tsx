import { motion, useReducedMotion } from "motion/react";

/**
 * Главный момент сайта: розовая каракуля (грязные данные) превращается
 * в ровную линию с узлами – слоями хранилища. Играет один раз при загрузке главной.
 *
 * Линии рисуются в SVG (viewBox 1000x120, растягивается по ширине),
 * узлы и подписи – обычный HTML поверх, чтобы текст не масштабировался вместе с SVG.
 */

const SCRIBBLE =
  "M0 82 C 25 10, 55 140, 85 58 S 140 8, 170 80 S 225 150, 255 70 S 305 30, 340 80";
const LINE = "M340 80 H 1000";

// Позиции узлов на линии (в % ширины) и их подписи
const nodes = [
  { x: 40, label: "raw" },
  { x: 58, label: "clean" },
  { x: 76, label: "modelled" },
  { x: 94, label: "BI-ready" },
];

const SCRIBBLE_TIME = 1.7;
const LINE_START = 1.45;
const LINE_TIME = 1.0;

function nodeDelay(x: number) {
  // Узел появляется, когда линия до него дорисовалась
  const progress = (x - 34) / 66;
  return LINE_START + progress * LINE_TIME;
}

export default function Pipeline() {
  const reduce = useReducedMotion();
  const skip = !!reduce;

  return (
    <div className="relative h-28 w-full sm:h-32" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
      >
        <motion.path
          d={SCRIBBLE}
          fill="none"
          stroke="var(--accent-bright)"
          strokeWidth={3.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={skip ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: SCRIBBLE_TIME, ease: "easeInOut" }}
        />
        <motion.path
          d={LINE}
          fill="none"
          stroke="var(--blue)"
          strokeWidth={3.2}
          strokeLinecap="round"
          initial={skip ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: LINE_START, duration: LINE_TIME, ease: "easeOut" }}
        />
      </svg>

      {nodes.map((n) => (
        <motion.div
          key={n.label}
          className="absolute -translate-x-1/2"
          style={{ left: `${n.x}%`, top: "66.667%" }}
          initial={skip ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: nodeDelay(n.x), duration: 0.3 }}
        >
          <motion.span
            className="absolute left-1/2 top-0 block h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue"
            style={{ boxShadow: "0 0 0 4px var(--bg)" }}
            initial={skip ? false : { scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: nodeDelay(n.x), type: "spring", stiffness: 420, damping: 18 }}
          />
          <span className="font-display absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap text-[0.8125rem] text-muted sm:text-sm">
            {n.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
