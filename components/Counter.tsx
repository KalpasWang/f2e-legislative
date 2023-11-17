import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type Props = {
  value: number;
  damping?: number;
  restDelta?: number;
};

export default function Counter({
  value,
  damping = 30,
  restDelta = 0.001,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const v = useMotionValue(0);
  const springValue = useSpring(v, {
    stiffness: 100,
    damping,
    restDelta,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      v.set(value);
    }
  }, [v, isInView, value]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            latest.toFixed(0)
          );
        }
      }),
    [springValue]
  );

  return <span ref={ref} />;
}
