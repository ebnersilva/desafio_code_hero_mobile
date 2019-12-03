export function actionListCharactersRequest(apikey, hash, offset, limit) {
  return {
    type: '@LIST_CHARACTERS/REQUEST',
    payload: {
      apikey,
      hash,
      offset,
      limit,
    },
  };
}

export function actionListCharactersSuccess(data) {
  return {
    type: '@LIST_CHARACTERS/SUCCESS',
    payload: {
      data,
    },
  };
}

export function actionListCharactersFailure(error) {
  return {
    type: '@LIST_CHARACTERS/FAILURE',
    payload: {
      error,
    },
  };
}

export function actionListCharactersByNameRequest(
  apikey,
  hash,
  offset,
  limit,
  name,
) {
  return {
    type: '@LIST_CHARACTERS_BY_NAME/REQUEST',
    payload: {
      apikey,
      hash,
      offset,
      limit,
      name,
    },
  };
}

export function actionListCharactersByNameSuccess(data) {
  return {
    type: '@LIST_CHARACTERS_BY_NAME/SUCCESS',
    payload: {
      data,
    },
  };
}

export function actionListCharactersByNameFailure(error) {
  return {
    type: '@LIST_CHARACTERS_BY_NAME/FAILURE',
    payload: {
      error,
    },
  };
}
