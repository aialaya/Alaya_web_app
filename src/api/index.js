import api from '@/network/request';

export const dingyue = data => api.post("/api/v1/data-request", data);
export const zhaopin = data => api.post("/api/v1/rec", data);
export const fileUpload = data => api.upload("/api/v1/upload", data);
export const sendEmail = data => api.post("/api/v1/subscription", data);
