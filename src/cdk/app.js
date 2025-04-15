// src/cdk/app.js
const cdk = require('aws-cdk-lib');
const { Stack, App } = cdk;
const lambda = require('aws-cdk-lib/aws-lambda');
const apigateway = require('aws-cdk-lib/aws-apigateway');

class LeaseApiStack extends Stack {
    constructor(scope, id, props) {
        super(scope, id, props);

        // Define the Lambda function
        const getLeaseDetailsLambda = new lambda.Function(this, 'GetLeaseDetailsHandler', {
            runtime: lambda.Runtime.NODEJS_14_X,
            code: lambda.Code.fromAsset('src/handlers'),
            handler: 'getLeaseDetails.handler',
        });

        // Define the API Gateway
        const api = new apigateway.RestApi(this, 'LeaseApi', {
            restApiName: 'Lease Service',
        });

        // Add a GET method to the API Gateway
        const leaseResource = api.root.addResource('lease');
        leaseResource.addMethod('GET', new apigateway.LambdaIntegration(getLeaseDetailsLambda));
    }
}

const app = new App();
new LeaseApiStack(app, 'LeaseApiStack');
app.synth();