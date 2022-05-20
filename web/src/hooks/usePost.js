export function usePost() {
  function getMediaUrl(id) {
    return `https://cf30-103-129-236-251.in.ngrok.io/api/v1/media/${id}`;
  }

  function verifyMimeType(mimeType) {
    const genericType = mimeType.split('/')[0];
    return genericType;
  }

  return {getMediaUrl, verifyMimeType};
}
