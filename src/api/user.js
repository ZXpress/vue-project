import request from "@/utils/request";

export function login(params) {
  // 返回一个axios对象 => promise  // 返回了一个promise对象
  return request({
    url: "/v2/login",
    method: "post",
    params,
  });
}

export function getInfo(token) {}

export function logout() {}
