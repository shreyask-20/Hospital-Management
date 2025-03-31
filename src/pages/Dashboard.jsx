import React, { useState, useEffect } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, LineElement, PointElement } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import axios from "axios";
import "./Dashboard.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, LineElement, PointElement);

const Dashboard = () => {
    const [timeframe, setTimeframe] = useState("weekly");
    const [stats, setStats] = useState({ totalPatients: 0, dischargedPatients: 0, underTreatmentPatients: 0 });
    const [doctorCount, setDoctorCount] = useState(null);
    const [appointmentCount, setAppointmentCount] = useState(null);
    const [revenueData, setRevenueData] = useState({ labels: [], datasets: [] });
    const [doctors, setDoctors] = useState([]);
    const [dailyAppointments, setDailyAppointments] = useState([]);
    const [totalPatients, setTotalPatients] = useState([]);
    const [labels, setLabels] = useState([]);
    const [weeklyAppointments, setWeeklyAppointments] = useState([]);
    const [weeklyTotalPatients, setWeeklyTotalPatients] = useState([]);
    const [weekLabels, setWeekLabels] = useState([]);
   
    let StatsPatient = 0;

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/hospital/patient-statistics");
                  console.log("Fetched Data:", res.data); // Debugging output
                setLabels(res.data.dailyData.map(d => d.date));
                setDailyAppointments(res.data.dailyData.map(d => d.newAppointments));
                setTotalPatients(res.data.dailyData.map(d => d.totalPatients));
                setWeekLabels(res.data.weeklyData.map(w => w.week));
                setWeeklyAppointments(res.data.weeklyData.map(w => w.newAppointments));
                setWeeklyTotalPatients(res.data.weeklyData.map(w => w.totalPatients));
                setStats(res.data);
            } catch (error) {
                console.error("Error fetching patient statistics", error);
            }
        };

        const fetchDoctors = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/hospital/total-doctors");
                setDoctorCount(res.data.totalDoctors);
            } catch (error) {
                console.error("Error fetching doctor count", error);
            }
        };

        const fetchAppointments = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/hospital/daily-appointments");
                setAppointmentCount(res.data.totalAppointments || 0);
                StatsPatient=res.data.Patients;
                console.log("Fetched Patients:", StatsPatient); // Debugging output
            } catch (error) {
                console.error("Error fetching appointment count", error);
                setAppointmentCount(0);
            }
        };

        const fetchDoctorDetails = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/hospital/top-doctors");
                setDoctors(res.data);
            } catch (error) {
                console.error("Error fetching doctor details", error);
            }
        };

        fetchStats();
        fetchDoctors();
        fetchAppointments();
        fetchDoctorDetails();
    }, []);

    useEffect(() => {
        setRevenueData({
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
                { label: "Income", data: [400, 500, 600, 700, 800, 900], backgroundColor: "blue" },
                { label: "Expenses", data: [200, 300, 400, 500, 600, 700], backgroundColor: "purple" },
            ],
        });
    }, []);

    const weeklyPatientData = {
        labels: weekLabels,
        datasets: [
            { label: "total Patients", data: weeklyTotalPatients, borderColor: "red", fill: false },
            { label: "New Appointments", data: weeklyAppointments, borderColor: "green", fill: false },
        ],
    };

    const dailyPatientData = {
        labels: labels,
        datasets: [
            { label: "Total Patients", data: totalPatients, borderColor: "red", fill: false },
            { label: "New Appointments", data: dailyAppointments, borderColor: "green", fill: false },
        ],
    };
    const doctorImages = [
    "prof1.jpeg",
    "prof2.jpg",
    "prof3.jpeg",
    "prof4.jpeg",
    "profile.jpg"
];


    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Hospital Admin Dashboard</h1>
            <div className="stats-grid">
                <div className="stat-box stat-patients">Total Patients: {StatsPatient}</div>
                <div className="stat-box stat-doctors">Doctors: {doctorCount}</div>
                <div className="stat-box stat-appointments">Appointments: {appointmentCount}</div>
                <div className="stat-box stat-earnings">Earnings: $56k</div>
            </div>

            <div className="charts-row">
                <div className="chart-container">
                    <h3>Revenue</h3>
                    <Bar data={revenueData} key="bar-chart" />
                </div>

                <div className="chart-container patient-chart">
                    <div className="chart-header">
                        <h3>Patient Statistics</h3>
                        <button className="toggle-button" onClick={() => setTimeframe(timeframe === "weekly" ? "daily" : "weekly")}>
                            {timeframe === "weekly" ? "Show Daily" : "Show Weekly"}
                        </button>
                    </div>
                    <Line data={timeframe === "weekly" ? weeklyPatientData : dailyPatientData} key="line-chart" />
                </div>
            </div>

           <div className="doctors-container">
    <h3>Top Rated Doctors</h3>
    <div className="doctors-grid">
        {doctors.length > 0 ? (
            doctors.map((doctor, index) => (
                <div className="doctor-card" key={index}>
                    <img src={`/assets/${doctorImages[index % doctorImages.length]}`} 
                         alt={doctor.name} 
                         className="doctor-img" />
                    <p><strong>{doctor.name}</strong></p>
                    <p>{doctor.specialization}</p>
                </div>
            ))
        ) : (
            <p>Loading doctor details...</p>
        )}
    </div>
</div>
        </div>
    );
};

export default Dashboard;
