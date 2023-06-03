export const APP_BASE_URL = "";
export const APP_LOGIN_URL = `${APP_BASE_URL}/login`;
export const APP_REGISTER_URL = `${APP_BASE_URL}/register`;
export const APP_FORGOT_PASSWORD_URL = `${APP_BASE_URL}/forgotpassword`;
export const APP_PROFILE_URL = `${APP_BASE_URL}/profile`;
export const APP_DASHBOARD_URL = `${APP_BASE_URL}/`;
export const APP_ADMIN_HOME_URL = `${APP_BASE_URL}/admin/posts`;

const API_BASE_URL = "http://localhost:3000";
export const getLoginURL = () => `${API_BASE_URL}/users/login`;
export const getRegisterURL = () => `${API_BASE_URL}/users/signup`;

export const USER_STORAGE = "__user__";
export const TOKEN_STORAGE = "__token__";
export const COURSES_STORAGE = "__courses__";