export const validateConfirmPassword = ({ getFieldValue }: any) => ({
  validator(_: any, value: any) {
    if (
      !value ??
      getFieldValue("password") ??
      getFieldValue("newPassword") === value
    ) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Passwords do not match."));
  }
});
