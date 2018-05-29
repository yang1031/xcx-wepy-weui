function get(url, success, fail) {
    wx.request({
        url: url,
        header: {},
        method: 'GET',
        success: function(res) {
            if (res.data.code === 2000) {
                return res.data;
            } else if (res.data.code) {
                console.log(res);
                wx.showToast({
                    title: res.data.message,
                    icon: 'none',
                    duration: 2000
                });
            } else {
                wx.showToast({
                    title: '请求失败，请刷新重试',
                    icon: 'none',
                    duration: 2000
                });
            }
        },
        fail: function (res) {
            if (fail) fail(res.data);
        }
    });
}
function post(url, data, success, fail) {
    wx.request({
        url: url,
        data: data,
        header: {},
        method: 'POST',
        success: function(res) {
            if (res.data.code === 2000) {
                success(res.data);
            } else if (res.data.code) {
                console.log(res);
                wx.showToast({
                    title: res.data.message,
                    icon: 'none',
                    duration: 2000
                });
            } else {
                wx.showToast({
                    title: '请求失败，请刷新重试',
                    icon: 'none',
                    duration: 2000
                });
            }
        },
        fail: function (res) {
            if (fail) fail(res.data);
        }
    });
}
module.exports = {
    requestGet: get,
    requestPost: post,
}
