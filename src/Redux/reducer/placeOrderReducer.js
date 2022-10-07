import { ThongTinDatVe } from "../../Model/ThongTinDatVe";
import {
  CHON_GHE,
  DAT_VE,
  SET_ROOMTICKET,
} from "../constants/constantRoomTicket";
let initialState = {
  chiTietPhongVe: {},
  danhSachGheDangDat: [],
};
export const placeOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROOMTICKET:
      state.chiTietPhongVe = action.payload;
      return { ...state };
    case CHON_GHE: {
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];
      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.maGhe === action.payload.maGhe
      );
      if (index != -1) {
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.payload);
      }
      return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
    }
    case DAT_VE:
      state.chiTietPhongVe = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};
