import axios from "axios";
import { BASE_URL, https, TOKEN_CYBERSOFT } from "./configURL";
import { localServ } from "./localService";

export const placeOrderService = {
  getRoomTicketbyID: (malichchieu) => {
    let uri = `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${malichchieu}`;
    return https.get(uri);
  },
  placeOrderTicket: (thongTinDatVe) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyDatVe/DatVe`,
      method: "POST",
      data: thongTinDatVe,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localServ.user.get().accessToken,
      },
    });
  },
};
