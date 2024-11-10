export default function correctphoneNumber(string) {
  let phoneNumber = string;
  if (/^\+/.test(phoneNumber) === false) {
    if (/^8/.test(phoneNumber) === true) {
      phoneNumber = phoneNumber.replace(/^8/, '+7');
    }
  }
  phoneNumber = phoneNumber.replace(/(?!^.*\+.*)\D/g, '');
  return phoneNumber;
}
