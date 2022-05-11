import User from '../models/userModels.js'
import generateToken from '../utils/token.js'

//@route POST /api/user
//@desc auth user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    if (name === "" || email === "" || password === "") {
        res.status(400)
        throw new Error('Fill All details')
    }

    const userExist = await User.findOne({ email })
    if (userExist) {
        res.status(400)
        throw new Error('User already exist')
    }

    const user = await User.create({ name, email, password })
    if (user) {
        res.status(201).json({ token: generateToken(user._id, user.name, user.email) })
    } else {
        res.status(400)
        throw new Error('Invalid User data')
    }
}

//@route POST /api/user/login
//@desc auth user
const loginUser = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.status(201).json({ token: generateToken(user._id, user.name, user.email) })
    } else {
        res.status(401)
        throw new Error('incorrect email password')
    }
}

export {
    registerUser,
    loginUser
}