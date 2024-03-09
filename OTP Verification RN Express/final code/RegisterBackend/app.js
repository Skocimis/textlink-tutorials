const express = require('express');
var bodyParser = require('body-parser')
const textlink = require("textlink-sms")

textlink.useKey("iLbxR0yX4XnvOaMek35hFQi1IsATACcrk5gtJgThnP09GJPxbNJekVDB640ZXgoy");

const app = express();

class User {
    static list = {}
    constructor(email, phoneNumber, password) {
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
    static add(email, password, phoneNumber) {
        if (!email || this.list[email])
            return false;

        this.list[email] = new User(email, phoneNumber, password);
        return true;
    }
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", async (req, res) => {
    const { email, phoneNumber, password, code } = req.body

    const result = await textlink.verifyCode(phoneNumber, code);

    if (!result.ok)
        return res.status(400).json({ success: false });

    if (User.add(email, phoneNumber, password))
        return res.status(200).json({ success: true });

    return res.status(400).json({ success: false });
})

app.post("/verify", async (req, res) => {
    const { phoneNumber } = req.body

    const result = await textlink.sendVerificationSMS(phoneNumber);

    if (result.ok) // Send code here
        return res.status(200).json({ success: true });

    return res.status(400).json({ success: false });
})

app.listen(2000);