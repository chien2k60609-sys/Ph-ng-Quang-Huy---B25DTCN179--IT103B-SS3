const customerName = "Tran Minh Duc";
const customerAge = 20;
const membershipTier = "GOLD";
const movieName = "Dune: Part Two";
const movieAgeRating = 16;
const seatTypeCode = 2;
const isWeekday = true;
const basePrice = 100000;

let isValid = true;

if (typeof basePrice !== "number" || Number.isNaN(basePrice) || basePrice <= 0) {
  console.error("Giá vé gốc không hợp lệ (phải là số nguyên dương lớn hơn 0)!");
  isValid = false;
}

if (typeof customerAge !== "number" || Number.isNaN(customerAge) || customerAge <= 0 || !Number.isInteger(customerAge)) {
  console.error("Tuổi khách hàng không hợp lệ (phải là số nguyên dương lớn hơn 0)!");
  isValid = false;
}

if (isValid) {
  if (customerAge < movieAgeRating) {
    console.warn(`Khách hàng ${customerName} (${customerAge} tuổi) không đủ điều kiện xem phim "${movieName}" (Yêu cầu độ tuổi tối thiểu: ${movieAgeRating}+). Giao dịch bị hủy bỏ!`);
    isValid = false;
  }
}

let seatTypeName = "";
let seatSurcharge = 0;

if (isValid) {
  switch (seatTypeCode) {
    case 1:
      seatTypeName = "Standard";
      seatSurcharge = 0;
      break;
    case 2:
      seatTypeName = "VIP";
      seatSurcharge = 15000;
      break;
    case 3:
      seatTypeName = "Couple";
      seatSurcharge = 35000;
      break;
    default:
      console.error(`Mã loại ghế ${seatTypeCode} không hợp lệ trong hệ thống rạp! Vui lòng chọn (1: Ghế thường, 2: Ghế VIP, 3: Ghế đôi).`);
      isValid = false;
  }
}

let discountPercent = 0;
let discountReason = "Không áp dụng giảm giá";

if (isValid) {
  if (customerAge <= 12 || customerAge >= 60) {
    discountPercent = 30;
    discountReason = "Trẻ em / Người cao tuổi";
  } else if (customerAge > 12 && customerAge <= 22 && isWeekday === true) {
    discountPercent = 20;
    discountReason = "Học sinh/Sinh viên ngày thường";
  } else {
    discountPercent = 0;
    discountReason = "Không áp dụng giảm giá";
  }
}

let pointRate = 0;
let membershipGift = "Không có";

if (isValid) {
  switch (membershipTier) {
    case "DIAMOND":
      pointRate = 0.10;
      membershipGift = "Combo 1 Bắp Rang + 2 Nước Ngọt";
      break;
    case "GOLD":
      pointRate = 0.07;
      membershipGift = "1 Phần Nước Ngọt Lớn";
      break;
    case "SILVER":
      pointRate = 0.05;
      membershipGift = "Không có";
      break;
    case "STANDARD":
      pointRate = 0.03;
      membershipGift = "Không có";
      break;
    default:
      pointRate = 0;
      membershipGift = "Không có";
  }
}

if (isValid) {
  const boardingLane = (membershipTier === "DIAMOND" || membershipTier === "GOLD") 
    ? "Lối Vào Ưu Tiên (VIP Priority Lane)" 
    : "Lối Vào Tiêu Chuẩn (Standard Lane)";

  const discountAmount = basePrice * (discountPercent / 100);
  const discountedTicketPrice = basePrice - discountAmount;
  const finalPayment = discountedTicketPrice + seatSurcharge;
  const rewardPoints = finalPayment * pointRate;

  const ageRatingLabel = movieAgeRating === 0 ? "P" : `C${movieAgeRating}`;
  const dayTypeLabel = isWeekday ? "Ngày thường (Thứ 2 - Thứ 6)" : "Cuối tuần (Thứ 7 - CN)";

  console.log(`Khách hàng          : ${customerName}`);
  console.log(`Độ tuổi             : ${customerAge} tuổi`);
  console.log(`Hạng thành viên     : ${membershipTier}`);
  console.log(`Phim                : ${movieName} (Phân loại: ${ageRatingLabel})`);
  console.log(`Loại ghế            : ${seatTypeName}`);
  console.log(`Ngày chiếu          : ${dayTypeLabel}`);
  console.log(`Giá vé gốc          : ${basePrice.toLocaleString()} VNĐ`);
  console.log(`Mức giảm giá        : ${discountPercent}% (${discountReason})`);
  console.log(`Số tiền được giảm   : ${discountAmount.toLocaleString()} VNĐ`);
  console.log(`Phụ thu loại ghế    : ${seatSurcharge.toLocaleString()} VNĐ`);
  console.log(`TỔNG THANH TOÁN     : ${finalPayment.toLocaleString()} VNĐ`);
  console.log("QUYỀN LỢI CRM & DỊCH VỤ:");
  console.log(`Quà tặng kèm        : ${membershipGift}`);
  console.log(`Điểm thưởng tích lũy: ${rewardPoints.toLocaleString()} điểm (Tỷ lệ: ${pointRate * 100}%)`);
  console.log(`Lối soát vé         : ${boardingLane}`);
}