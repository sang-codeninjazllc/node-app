// src/handlers/getLeaseDetails.js

exports.handler = async (event) => {
    // Example response for lease details
    const leaseDetails = {
        leaseId: event.queryStringParameters?.leaseId || "unknown",
        tenantName: "John Doe",
        propertyAddress: "123 Main St, Springfield",
        leaseStartDate: "2025-01-01",
        leaseEndDate: "2025-12-31",
    };

    return {
        statusCode: 200,
        body: JSON.stringify(leaseDetails),
    };
};