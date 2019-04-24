import {
  NativeModules,
} from 'react-native';

var CKGallery = NativeModules.CKGalleryManager;

async function getAlbumsWithThumbnails() {
  return await CKGallery.getAlbumsWithThumbnails();
}

async function getImageUriForId(imageId, imageQuality) {
  const {images} = await CKGallery.getImagesForIds([imageId], imageQuality);
  if (!images) {
    return;
  }
  if (images.length === 1) {
    return {uri: images[0].uri, mediaType: images[0].mediaType};
  }
  return;
}

async function getImagesForIds(imagesId = [], imageQuality) {
  return await CKGallery.getImagesForIds(imagesId, imageQuality);
}

async function getImageForTapEvent(nativeEvent) {
  let selectedImageId;
  let uri;
  let mediaType;
  if (nativeEvent.selectedId) {
    selectedImageId = nativeEvent.selectedId;
    uri = nativeEvent.selected;
  } else {
    selectedImageId = nativeEvent.selected;
    const data = await getImageUriForId(selectedImageId);
    uri = data.uri;
    mediaType = data.mediaType
  }
  return {selectedImageId, uri, width: nativeEvent.width, height: nativeEvent.height, mediaType};
}

async function getImagesForCameraEvent(event) {
  return event.captureImages || [];
}

async function resizeImage(image = {}, quality = 'original') {
  if (quality === 'original') {
    return images;
  }

  return await CKGallery.resizeImage(image, quality);
}

async function checkDevicePhotosAuthorizationStatus() {
  return await CKGallery.checkDevicePhotosAuthorizationStatus();
}

async function requestDevicePhotosAuthorization() {
  return await CKGallery.requestDevicePhotosAuthorization();
}


export default {
  getAlbumsWithThumbnails,
  getImageUriForId,
  getImagesForIds,
  getImageForTapEvent,
  getImagesForCameraEvent,
  checkDevicePhotosAuthorizationStatus,
  requestDevicePhotosAuthorization,
  resizeImage
}
