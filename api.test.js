// api.test.js
const fetchHealthCheckData = require('./api');  // Import the function from api.js
const assert = require('assert');  // Import Node.js's built-in assert module for assertions

describe('API Health Check Tests', function() {
    it('should return status 200', async function() {
        const response = await fetchHealthCheckData();  // Call the API function
        assert.strictEqual(response.status, 200, "Status Code is not 200");
    });

    it('should contain "ok" in the response body', async function() {
        const response = await fetchHealthCheckData();  // Call the API function
        assert.ok(response.data.includes('ok'), "Response body doesn't contain 'ok'");
    });
});
