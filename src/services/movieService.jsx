import { https } from "./configURL";

export const moviesServ = {
  getListMovie: () => {
    let uri = "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03";
    return https.get(uri);
  },
  getMovieByTheater: () => {
    let uri = "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP05";
    return https.get(uri);
  },
  getMovieDetailbyID: (id) => {
    let uri = `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`;
    return https.get(uri);
  },
};
