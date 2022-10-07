import { placeOrderService } from "../../services/placeOrderService";
import {
  CHON_GHE,
  DAT_VE,
  SET_ROOMTICKET,
} from "../constants/constantRoomTicket";

export const setRoomTicket = (roomticket) => {
  return {
    type: SET_ROOMTICKET,
    payload: roomticket,
  };
};
export const pickSeat = (seats) => {
  return {
    type: CHON_GHE,
    payload: seats,
  };
};

export const datVeAction = (
  thongTinDatVe,
  onRegisterSuccess,
  onRegisterFail
) => {
  return () => {
    placeOrderService
      .placeOrderTicket(thongTinDatVe)
      .then((res) => {
        onRegisterSuccess();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        onRegisterFail();
      });
  };
};
