const fs = require('fs');
const path = require('path');

const directories = [
    'components/Dashboard',
    'components/AdminDashboard',
    'components/ManagerDashboard',
    'components/Inventory',
    'components/Orders',
    'components/Suppliers',
    'components/Shipments',
    'components/UserProfile',
    'pages'
];

const files = {
    'components/Dashboard': ['OrderStatistics.jsx', 'ShipmentStatistics.jsx'],
    'components/AdminDashboard': ['AdminStatistics.jsx', 'UserManagement.jsx'],
    'components/ManagerDashboard': ['OrderStatistics.jsx', 'ShipmentStatistics.jsx'],
    'components/Inventory': ['InventoryList.jsx', 'InventoryDetail.jsx'],
    'components/Orders': ['OrderList.jsx', 'OrderDetail.jsx'],
    'components/Suppliers': ['SupplierList.jsx', 'SupplierDetail.jsx'],
    'components/Shipments': ['ShipmentList.jsx', 'ShipmentDetail.jsx'],
    'components/UserProfile': ['UserProfile.jsx'],
    'pages': [
        'AdminDashboardPage.jsx',
        'DashboardPage.jsx',
        'InventoryManagementPage.jsx',
        'ManagerDashboardPage.jsx',
        'OrderManagementPage.jsx',
        'ProfilePage.jsx',
        'SettingsPage.jsx',
        'SupplierTrackingPage.jsx',
        'ShipmentTrackingPage.jsx'
    ]
};

const createDirectories = () => {
    directories.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`Created directory: ${dir}`);
        }
    });
};

const createFiles = () => {
    Object.keys(files).forEach(dir => {
        files[dir].forEach(file => {
            const filePath = path.join(dir, file);
            if (!fs.existsSync(filePath)) {
                fs.writeFileSync(filePath, '', 'utf8');
                console.log(`Created file: ${filePath}`);
            }
        });
    });
};

const setupProject = () => {
    createDirectories();
    createFiles();
};

setupProject();
