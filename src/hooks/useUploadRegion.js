import axios from "axios";
import { Config } from "../config";

const UserUploadRegion = async (formData) => {
  await axios({
    method: "post",
    url: `${Config.url}/Region/upload`,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  // return data;
};

export default UserUploadRegion;
