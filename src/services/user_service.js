import {validate} from "../validation/validation.js";
import {registerValidation} from "../validation/user_validation.js";
import {prisma} from "../application/db.js";
import {ResponseError} from "../error/error_response.js";
import bcrypt from "bcrypt";

const userService = async (request) => {
    const user = validate(registerValidation, request);

    const countUser = await prisma.user.count({
        where: {
            username: user.username
        }
    })

    if (countUser === 1) {
        throw new ResponseError(400, "Username already exists");
    }

    user.password = await bcrypt.hash(user.password, 12);

    return  prisma.user.create({
        data: user,
        select: {
            username: true,
            name: true,
        }
    })

}

export default {
    userService
}