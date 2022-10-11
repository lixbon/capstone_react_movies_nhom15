import {
  CHON_GHE,
  DAT_VE,
  SET_ROOMTICKET,
  XOA_CHON_GHE,
} from "../constants/constantRoomTicket";
let initialState = {
  chiTietPhongVe: {},
  danhSachGheDangDat: [],
  danhSachPhimDaDat: [],
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
    case XOA_CHON_GHE: {
      state.danhSachGheDangDat = [];
      return { ...state };
    }
    case DAT_VE:
      let danhSachPhimDaDatCapNhat = [...state.danhSachPhimDaDat];
      let index = danhSachPhimDaDatCapNhat.findIndex(
        (phim) => phim.maLichChieu === action.payload.maLichChieu
      );
      if (index != -1) {
        danhSachPhimDaDatCapNhat[index].danhSachVe.push(
          ...action.payload.danhSachVe
        );
      } else {
        danhSachPhimDaDatCapNhat.push(action.payload);
      }
      state.danhSachGheDangDat = [];
      state.danhSachPhimDaDat = action.payload;
      return { ...state, danhSachPhimDaDat: danhSachPhimDaDatCapNhat };

    default:
      return { ...state };
  }
};
