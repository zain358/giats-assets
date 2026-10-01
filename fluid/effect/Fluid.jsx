import { forwardRef, useMemo } from 'react';

import FluidEffect from '../effect/FluidEffect';
import { useIsomorphicLayoutEffect } from '../../../../hooks/useIsomorphicLayoutEffect';

const FluidEffectWrapper = forwardRef((props, ref) => {
  const effect = useMemo(() => new FluidEffect(props), [JSON.stringify(props)]);

  useIsomorphicLayoutEffect(
    () => () => {
      if (effect) effect.dispose();
    },
    [effect],
  );

  return <primitive ref={ref} object={effect} />;
});

FluidEffectWrapper.defaultProps = {
  intensity: 1.0,
  fluidColor: '#ffffff',
  backgroundColor: '#000000',
};

export default FluidEffectWrapper;
