import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  data: null,
  error: null,
};

export default function character(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@LIST_CHARACTERS/REQUEST': {
        draft.loading = true;
        break;
      }
      case '@LIST_CHARACTERS/SUCCESS': {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      case '@LIST_CHARACTERS/FAILURE': {
        draft.loading = false;
        draft.error = action.payload.error;
        break;
      }
      case '@LIST_CHARACTERS_BY_NAME/REQUEST': {
        draft.loading = false;
        break;
      }
      case '@LIST_CHARACTERS_BY_NAME/SUCCESS': {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      case '@LIST_CHARACTERS_BY_NAME/FAILURE': {
        draft.loading = false;
        draft.error = action.payload.error;
        break;
      }
      default:
    }
  });
}
