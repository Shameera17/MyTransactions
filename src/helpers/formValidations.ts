export const validateConfirmPassword = ({ getFieldValue }: any) => ({
  validator(_: any, value: any) {
    if (getFieldValue("newPassword") === value) {
      return Promise.resolve();
    } else {
      return Promise.reject(new Error("Passwords do not match."));
    }
  }
});
