import axios from 'axios'

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0'
}

// 2. API 함수들을 정리
function fetchNewsList() {
  // return axios.get(config.baseUrl + '/news/1.json') // ES5 
  return axios.get(`${config.baseUrl}/news/1.json`) // ES6
}

function fetchAsksList() {
  return axios.get(`${config.baseUrl}/ask/1.json`)
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}/jobs/1.json`)
}

function fetchUserInfo(userName) {
  return axios.get(`${config.baseUrl}/user/${userName}.json`)
}

function fetchItemInfo(itemId) {
  return axios.get(`${config.baseUrl}/item/${itemId}.json`)
}

export {
  fetchNewsList,
  fetchAsksList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo,
}