import { animated, config, useSpring } from 'react-spring';

import styles from './SplashScreen.module.css';
import { useState } from 'react';

let isInitial = true;
function Icon() {
  const [flip, setFlip] = useState(false);
  const { background, x } = useSpring({
    from: { background: '#0a192f', x: 0 },
    x: 1,
    reverse: flip,
    config: config.molasses,
    onRest: () => {
      if (isInitial) {
        setFlip(!flip);
        isInitial = false;
      }
    },
  });

  return (
    <div className={styles.splash}>
      <animated.svg
        fill={background}
        style={{ width: '10rem', height: '10rem', margin: 'auto' }}
        viewBox="0 0 66 62"
        strokeWidth="1"
        stroke="rgb(255, 255, 255)"
        strokeDasharray={192}
        strokeDashoffset={x.to((x: number) => (1 - x) * 192)}
      >
        <path
          d={
            'M41.897 56.417V33.932H22.1v8.77c0 2.337-2.057 4.233-4.593 4.233-2.535 0-4.591-1.896-4.591-4.234V5.82C5.077 11.195 0 19.8 0 29.499 0 45.79 14.326 59 31.999 59c3.513 0 6.893-.523 10.056-1.486a3.936 3.936 0 01-.158-1.097zM64 29.5c0 9.7-5.078 18.306-12.917 23.682V15.708c0-2.338-2.056-4.234-4.593-4.234s-4.593 1.896-4.593 4.234v9.757H22.1V2.582c0-.379-.054-.745-.156-1.096A34.472 34.472 0 0131.999 0C49.674 0 64 13.209 64 29.499z'
          }
        />
      </animated.svg>
    </div>
  );
}

export default Icon;
