import userService from "../services/user_service.js";

const register = async (req, res, next) => {

    try {
        const result = await userService.userService(req.body);
        res.status(201).json({
            status: "success",
            data: result
        })
    }catch (e){
        next(e)
    }

}


export default {
    register
}