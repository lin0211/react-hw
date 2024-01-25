import PocketBase from "pocketbase";

const url = "https://jfam.pockethost.io/";
export const pb = new PocketBase(url);

export const getPbImageURL = (item) => {
  return `https://jfam.pockethost.io/api/files/${item.collectionName}/${item.id}/${item.image}`;
};
