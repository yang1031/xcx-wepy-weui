const getGoodsList = () => [
    {
        id: 1,
        imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    }, {
        id: 2,
        imgUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
    }, {
        id: 3,
        imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    }, {
        id: 4,
        imgUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
    }
];
const getGoodsDetail = (params) => {
    return {
        picture: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'],
        price: 99.00,
        numbers: 0,
        type: '黑冰',
        technology: '彩印'
    };
};
module.exports = {
    getGoodsList,
    getGoodsDetail
};
