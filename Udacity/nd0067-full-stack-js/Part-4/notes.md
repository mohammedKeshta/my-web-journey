# Notes

```shell

aws s3 cp --recursive --acl public-read ./build s3://092384029384random/

```

Navigate to the CircleCI dashboard.
Go to the "project details" page of the project you are using.
Click on "project details" and navigate to "environment variables".
Add values for AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY. You can also add a value for AWS_DEFAULT_REGION. This should normally reflect the region where you have started your services.
Refer back to the "To create access keys for an IAM user" on this link if you don't remember how to create your access key.
