import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Runtime } from 'aws-cdk-lib/aws-lambda';


// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsSecondStackStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsSecondStackQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const myLambda = new  lambda.Function(this, 'izzys-second-lambda', {
      functionName: 'myLambda',
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lib/service/runtime'),
    });

  }
}
