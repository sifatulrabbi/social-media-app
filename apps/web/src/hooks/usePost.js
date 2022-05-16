export function usePost() {
  function getMediaUrl(id) {
    return `http://localhost:8080/api/v1/media/${id}`;
  }

  function verifyMimeType(mimeType) {
    const genericType = mimeType.split('/')[0];
    return genericType;
  }

  return {getMediaUrl, verifyMimeType};
}
