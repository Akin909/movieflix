import { FETCH_REQUESTED } from './../constants/index';
export function beginFetch() {
  return {
    type: FETCH_REQUESTED,
  };
}
