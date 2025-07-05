export const loginAPI = async (email: string, password: string) => {
    if (email === "test@test.com" && password === "123456") {
      return {
        token: "fake-jwt-token",
        user: { email },
      };
    } else {
      throw new Error("Invalid credentials");
    }
  };
  