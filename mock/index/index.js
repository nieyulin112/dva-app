import Mock from 'mockjs'
const perfix = '/'
console.log('Mock', Mock)

let dataList = Mock.mock({
    errorCode: '0',
    success: true,
    message: '请求成功',
    data: {
        list: [
            {
                name: 'nyl',
                age: 10,
                sex: '男'
            }
        ]
    }
});
module.exports = {
    // 获取数据
    [`GET ${perfix}/get/list`](req, res) {
        res.status(200).json(dataList)
    }
}