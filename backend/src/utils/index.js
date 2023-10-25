module.exports = (res, statusCode, data, msg) => {

    res.status(statusCode).json({
        status: statusCode,
        error: false,
        data: data,
        msg: msg
    });}