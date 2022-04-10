import * as firebase from 'firebase';

export async function getStorageURL(path: string) {
  //var storage = firebase.storage();
  var storage = firebase.storage();

  var storageRef = storage.ref();
  //console.log("The storage alone is ", storageRef)
  console.log("The storage Reference is ", storageRef.child(path))

  var imagesRef = storageRef.child('images');

  //console.log("The path was", path);
  if (path != undefined) {
    const url = await storageRef.child(path).getDownloadURL();
    //console.log("The storage reference is,", storageRef.child(path))
    return(url);
  } else {
    return (null)
  }
}
