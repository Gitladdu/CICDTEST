// api.js
const axios = require('axios');  // Use axios for making the HTTP request

// API URL
const url = "https://mfd-uat-02.ssnc-corp.cloud/v2/data/core/health_check";

// Request Headers
const headers = {
    "Authorization-api-key": "tTa6KuwA58tY5LTRWRNzlVXxtJOY6I92",          // API Key
    "Authorization-instance-id": "da4a7a4a-a82d-40ca-a4a4-fe814900fbf5",       // Instance ID
    "Content-Type": "application/json",         // Content type
};

// Function to make the GET request
const fetchHealthCheckData = async () => {
    try {
        const response = await axios.get(url, { headers: headers });
        return response;
    } catch (error) {
        console.error("Error during API request:", error);
        throw error;  // Throw error to handle in test file
    }
};

module.exports = fetchHealthCheckData;  // Export the function to use in test file
