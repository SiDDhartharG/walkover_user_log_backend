import User from "../models/userModels"
import generateToken from "../utils/token"

//@route POST /api/table/:tableName
//@desc middleware
const addTable = async (req, res) => {
    const tableNameToAdd = req.query.tableName
    if (!tableNameToAdd || tableNameToAdd === '') {
        return res.status(400).json({ message: "Wrong/Empty Table Name" })
    }
    var { _id, email, name, tableName = [] } = req.user
    try {
        await User.findOneAndUpdate({ _id }, { $addToSet: { tableName: tableNameToAdd } })
        res.status(201).json({ token: generateToken(_id, email, name, tableName.push(tableNameToAdd)) })
    } catch (error) {
        res.status(501).json({ error: error.toString() })
    }
}

//@route DELETE /api/table/:tableName
//@desc middleware
const deleteTable = async (req, res) => {
    // delete all entities 
    // pop from user.tableName
}

export {
    addTable,
    deleteTable
}