export const server = "http://localhost:4444";

const apiList = {
  generateCertificate: `${server}/api/generateCertificate`,

  fixeddepositeform: `${server}/api/fixeddeposites`,
  fixedadvice: `${server}/api/generate-pdf`,

  quickFundTransfer: `${server}/api/quickFundTransfer`,
  userAuthVerification: `${server}/api/verify-otp`,
  createVerificationCode: `${server}/api/generate-otp`,
  authenticateOTP: `${server}/api/validate-otp`,

  customerAccountDetails: `${server}/api/userDetails/`,

  userAuthentication: `${server}/api/otpsend`,
  userAuthVerify: `${server}/api/verify-otp`,

  inwardRemittance: `${server}/api/submitForm`,
  taxOTPVerify: `${server}/api/verify-OneTP`,
  taxOTPSend: `${server}/api/send-OneTP`,

  paymentTransaction: `${server}/api/payment-Type`,
  transferTransaction: `${server}/api/transfer-Type`,

  form60OTPSend: `${server}/form60Userdetails/send-otp`,
  form60OtpVerification: `${server}/form60Userdetails/verify-otp`,
  form60UserDetails: `${server}/form60Userdetails/userdetails`,
  updateDomesticLimits: `${server}/api/updateDomesticLimits/`,
  updateInternationalLimits: `${server}/api/updateInternationalLimits/`,
  GenerateCardPin: `${server}/api/generate-Debit-Card-Pin`,
  blockATMCard: `${server}/api/blockCard/`,
  getuserrequesteddetails: `${server}/api/requesteduserdetails`,
  individualrequestedetails: `${server}/api/individualrequesteduserdetails`,
  addAccountDetails: `${server}/api/add-account-details`,
};

export default apiList;
