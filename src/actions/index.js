import { FETCH_REQUESTED } from './../constants/index';
export function beginFetch() {
  return {
    type: FETCH_REQUESTED,
    meta: {
      offline: {
        effect: { url: '/movies', method: 'GET' },
        commit: { type: 'ACTION_FAILED' },
        rollback: {},
      },
    },
  };
}
