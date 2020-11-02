import { createGlobalState } from 'react-hooks-global-state';

const { useGlobalState } = createGlobalState({
  season: 1,
  episode: 1,
});

export default useGlobalState;