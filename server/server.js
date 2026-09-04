const express = require("express");
const pool = require("./db");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        message: "EduBridge backend is running",
    });
});

app.get("/api/db-test", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");

        res.json({
            status: "ok",
            databaseTime: result.rows[0].now,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            status: "error",
            message: "Database connection failed",
        });
    }
});
app.post("/api/enquiries", async (req, res) => {
    try {
        const { parent_name, student_name, email, subject, message } = req.body;

        if (
            !parent_name?.trim() ||
            !student_name?.trim() ||
            !email?.trim() ||
            !subject?.trim()
        ) {
            return res.status(400).json({
                message: "Please fill all required fields.",
            });
        }

        if (parent_name.length < 2 || student_name.length < 2) {
            return res.status(400).json({
                message: "Name must be at least 2 characters.",
            });
        }

        if (!/^[A-Za-z\s]+$/.test(parent_name) || !/^[A-Za-z\s]+$/.test(student_name)) {
            return res.status(400).json({
                message: "Names can contain only letters and spaces.",
            });
        }

        if (!/^[^\s@]+@gmail\.com$/.test(email)) {
            return res.status(400).json({
                message: "Please enter a valid Gmail address.",
            });
        }

        if (message && message.length > 500) {
            return res.status(400).json({
                message: "Message cannot exceed 500 characters.",
            });
        }

        const result = await pool.query(
            `INSERT INTO enquiries
            (parent_name, student_name, email, subject, message)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`,
            [parent_name, student_name, email, subject, message]
        );

        res.status(201).json({
            message: "Enquiry saved successfully",
            enquiry: result.rows[0],
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to save enquiry",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});