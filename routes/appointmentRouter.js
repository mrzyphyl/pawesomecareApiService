const express  = require('express')
const { 
    getAppointments, 
    addAppointments, 
    deleteAppointments,
    editAppointments,
    getAnAppointment,
    getAppointmentsTicket,
    updateBooleanFields
} = require('../controller/appointmentController')
const router = express.Router()

router.route('/').get(getAppointments).post(addAppointments)

router.route('/:id').delete(deleteAppointments).put(editAppointments).get(getAnAppointment)

router.route('/tickets/:id').get(getAppointmentsTicket)

router.route('/update-bool/:id').put(updateBooleanFields)

module.exports = router