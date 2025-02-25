  import commonAPI from "./commonAPI";

export const uploadVideo = async (video) => {
  return await commonAPI("post", "/videos", video);
};

export const getAllVideo = async () => {
  return await commonAPI("get", "/videos", "");
};

export const addHistory = async (videoDetails) => {
  return await commonAPI("post", "/history", videoDetails);
};

export const getAllHistory = async () => {
  return await commonAPI("get", "/history", "");
};

export const deleteHistory = async (id) => {
  return await commonAPI("delete", `/history/${id}`, {});
};

export const deleteVideo = async (id) => {
  return await commonAPI("delete", `/videos/${id}`, {});
};

export const createCategory = async (categoryDetails) => {
  return await commonAPI("post", `/category`, categoryDetails);
};

export const getCategory = async () => {
  return await commonAPI("get", "/category", "");
};

export const deleteCategory = async (id) => {
  return await commonAPI("delete", `/category/${id}`, {});
};

export const getSingleVideo = async (id) => {
  return await commonAPI("get", `/videos/${id}`, "");
};

export const updateCatgory = async (id, categoryDetails) => {
  return await commonAPI("put", `/category/${id}`, categoryDetails);
};

export const getSingleCategory = async(id)=>{
  return await commonAPI("get",`/category/${id}`,"")
};
