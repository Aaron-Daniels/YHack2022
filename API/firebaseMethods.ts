export async function getStorageURL(path: string) {
  //var storage = firebase.storage();
  var storage = firebase.storage();
  var storageRef = storage.ref();

  var imagesRef = storageRef.child('images');

  //console.log("The path was", path);
  if (path != undefined) {
    const url = await storageRef.child(path).getDownloadURL();
    return(url);
  } else {
    return (null)
  }
}
