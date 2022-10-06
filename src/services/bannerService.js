import { https } from "./configURL";

export const bannerServ = {
  getBanner: () => {
    let uri = "/api/QuanLyPhim/LayDanhSachBanner";
    return https.get(uri);
  },
};
