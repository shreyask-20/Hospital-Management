const roles = {
  admin: [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Patient", path: "/patient-management" },
    { name: "Doctors", path: "/doctors-management" },
    { name: "Appointments", path: "/appointments" },
    { name: "Pharmacy", path: "/pharmacy" },
    { name: "Profile Settings", path: "/profile-settings" },
    { name: "Logout", path: "/logout" },
  ],
  doctor: [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Appointments", path: "/appointments" },
    { name: "Patient Management", path: "/patient-management" },
    { name: "Profile Settings", path: "/profile-settings" },
    { name: "Logout", path: "/logout" },
  ],
  patient: [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Appointments", path: "/appointments" },
    { name: "Profile Settings", path: "/profile-settings" },
    { name: "Logout", path: "/logout" },
  ],
};

const getNavigationLinksByRole = (role) => {
  return roles[role] || [];
};

module.exports = { getNavigationLinksByRole };
