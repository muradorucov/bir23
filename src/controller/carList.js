const readFromFile = require("../helpers/reFromFile")

const getCarList = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    let starIndex = (page - 1) * 20;
    let endIndex = page * 20;
    // limit, skip,
    // pageNumber
    const data = readFromFile("plateNumberList");
    const totalPages = Math.ceil(data.length / 20);
    const formattedList = data.filter((_, index) => {
        return index >= starIndex && index < endIndex;
    });

    return res.status(200).json({
        carlist: formattedList,
        totalPages,
        currentPage: data.length ? page : 0,
        totalCar: data.length
    })
}

module.exports = { getCarList }