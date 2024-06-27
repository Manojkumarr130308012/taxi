const errorHandler = require('../utils/error.handler');
const db = require("../middleware/middleware");
require('dotenv').config();
const enquirySchema = db.enquiry;
const { Op } = require('sequelize');
const sendEmail = require("../utils/smtp_function")


class UserController {

    async add(body) {
        try {
            // let taxiCreate = await enquirySchema.create(body);
            // let response = await enquirySchema.findByPk(taxiCreate.id);
            sendEmail(body.countryCode,body.email,body.firstName,body.phone,body.message,body.selectedPlan);
            return {
                status: "success", msg:"Mail Sent successfully"
            }
        } catch (err) {
            console.log(err);
            return {
                status: 'error',
                msg: 'User creation failed'
            }
        }
    }

    async fetch(email) {
        try {
            var condition = email ? { email: { [Op.iLike]: `%${email}%` } } : null;
            let response = await enquirySchema.findAll({ where: condition });
            return { status: "success",   msg:"data get successfully", result: response };
        } catch (error) {
            return {
                status: "error",
                error: errorHandler.parseMongoError(error)
            };
        }
    }


    async fetchdata(id) {
        try {
            let response = await enquirySchema.findByPk(id);
            return response;
        } catch (error) {
            return {
                status: "error",
                error: errorHandler.parseMongoError(error)
            };
        }
    }

    async delete(id) {
        try {
            let response = await enquirySchema.destroy({
                where: { id: id }
            });
            return { status: "success",   msg:"data Deleted successfully", result: response };
        } catch (error) {
            return {
                status: "error",
                error: errorHandler.parseMongoError(error)
            };
        }
    }

    async update(id, body) {
        try {
            let updateResponse = await taxiSchema.update(body, {
                where: { id: id }
            });
            let response = await taxiSchema.findByPk(id);
            return { status: "success", msg: "User Updated successfully", result: response };
        } catch (error) {
            return { status: "error", error: error };
        }

    }


}

module.exports = new UserController();