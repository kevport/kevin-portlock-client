export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "ap-southeast-2",
        BUCKET: "notes-app-serverless-kp"
    },
    apiGateway: {
        REGION: "ap-southeast-2",
        URL: "https://w3ffpmkmvk.execute-api.ap-southeast-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "ap-southeast-2",
        USER_POOL_ID: "ap-southeast-2_5EHdr6N5d",
        APP_CLIENT_ID: "2dsr0hjbcav03egoo943cbgm8",
        IDENTITY_POOL_ID: "ap-southeast-2:eabd0555-8f85-4d1a-ac5e-45cde4d7c759"
    }
};
