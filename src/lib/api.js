import httpService from './httpService';
import { getGoodsList,
    getGoodsDetail } from '../mocks/mocks';

const host = '192.0.0.1';

// // 获取商品列表
// const getGoodsList = () => httpService.requestGet(`${host}/goodsList`);

module.exports = {
    getGoodsList,
    getGoodsDetail
}
