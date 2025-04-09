const readFromFile = require("../helpers/reFromFile");
const writeToFile = require("../helpers/writeTofile");

const setProfilePhoto = (req, res) => {
    const { photoPath } = req.body;
    const { platenumber } = req.params;

    const data = readFromFile("plateNumberList");
    const foundCar = data.find((item) => item.plateNumber === platenumber);
    foundCar.profilePhoto = photoPath;
    writeToFile("plateNumberList", data);

    res.status(200).json({
        message: "Profile photo updated successfully",
        data: foundCar
    })
}


module.exports = setProfilePhoto;