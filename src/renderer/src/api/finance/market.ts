import request from '@renderer/utils/request'

// 查询市场列表
export function listMarket(query) {
  return request({
    url: '/finance/market/list',
    method: 'get',
    params: query
  })
}
