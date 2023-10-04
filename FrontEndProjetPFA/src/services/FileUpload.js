import axios from "../custom/axios";

export const FilesUpload = (files = [], folder = "general") => {
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("file", files[i]);
  }
  return axios.post(`/files/${folder}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
