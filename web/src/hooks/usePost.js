export function usePost() {
  function getMediaUrl(id) {
    return `https://prometheus-api-msql.herokuapp.com/api/v1/media/${id}`;
  }

  function verifyMimeType(mimeType) {
    const genericType = mimeType.split('/')[0];
    return genericType;
  }

  return {getMediaUrl, verifyMimeType};
}
