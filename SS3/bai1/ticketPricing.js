const BASE_PRICE = 80000;

const customerName = "Tran Thi Mai";
const customerAge = 20;
const movieRating = "T18";
const seatType = "VIP";
const isStudent = true;
const isWeekday = true;

let surcharge = 0;
let seatName = "";
let discountPercent = 0;
let isValidTransaction = true;

if (movieRating === "T18" && customerAge < 18) {
  isValidTransaction = false;
  console.warn("Khach hang duoi 18 tuoi khong duoc phep xem phim nhan T18");
}

if (isValidTransaction) {
  switch (seatType) {
    case "STANDARD":
      surcharge = 0;
      seatName = "Ghe Thuong";
      break;
    case "VIP":
      surcharge = 15000;
      seatName = "Ghe VIP";
      break;
    case "COUPLE":
      surcharge = 40000;
      seatName = "Ghe Doi Couple";
      break;
    default:
      isValidTransaction = false;
      console.error("Loai ghe khong hop le");
  }
}

if (isValidTransaction) {
  if (isStudent === true && isWeekday === true) {
    discountPercent = 20;
  } else {
    discountPercent = 0;
  }

  const ticketPrice = BASE_PRICE + surcharge;
  const discountAmount = (ticketPrice * discountPercent) / 100;
  const finalPayment = ticketPrice - discountAmount;

  const giftMessage = seatType === "COUPLE" ? "Tang 01 ly nuoc ngot co lon" : "Khong ap dung qua tang";

  console.log(`Khach hang: ${customerName}`);
  console.log(`Do tuoi: ${customerAge} | Nhan phim: ${movieRating} (Hop le)`);
  console.log(`Hang ghe: ${seatName}`);
  console.log(`Gia ve co so: ${BASE_PRICE} VND`);
  console.log(`Phu thu ghe: ${surcharge} VND`);
  console.log(`Tong gia ve goc: ${ticketPrice} VND`);
  console.log(`Chiet khau HSSV (${discountPercent}%): -${discountAmount} VND`);
  console.log(`TONG TIEN THANH TOAN: ${finalPayment} VND`);
  console.log(`Uu dai di kem: ${giftMessage}`);
}
