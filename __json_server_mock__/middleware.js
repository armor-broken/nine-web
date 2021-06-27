/*
 * @Description: 
 * @Author: RuraLiu
 * @Date: 2021-06-27 22:53:48
 * @LastEditTime: 2021-06-27 22:59:54
 * @LastEditors: RuraLiu
 */
module.exports = (req, res, next) => {
    if (req.method === 'POST' && req.path === '/login') {
        if (req.body.username === "admin" && req.body.password === '123') {
            return res.status(200).json({
                user: {
                    token: 'axbcgljj'
                }
            })
        } else {
            return res.status(400).json({ message: '用户名或者密码错误' })
        }
    }
    next()
}