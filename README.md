# cloudFunction-template
!

This template willdescribe a cloudFunction that can be run locally for testing or deployed with gcloud cli. 

Prerequisites:
A. gcp project with billing enabled 
B. glcloud sdk installed
C. API Client like Postman, Insomnia or you can use curl

Glcloud sdk Installation 
1. Install gcloud sdk - https://cloud.google.com/sdk/docs/install
2. Run gcloud init 
3. Deploy app as cloud function (billing must be enabled on project)
    gcloud functions deploy cloudFunction \
    --runtime nodejs16 \
    --trigger-http \
    --allow-unauthenticated \
    --project GCP-PROJECT-NAME 
4. After function deploys you can see http trigger in terminal or 
https://cloud.google.com/functions
5. Use postman/insomnia/curl to make requests locally or to http trigger


Other gcloud Function commands:
gcloud functions describe cloudFunction
gcloud functions logs read cloudFunction
gcloud functions delete cloudFunction
gcloud functions list
gcloud functions deploy cloudFunction --runtime nodejs16 --trigger-topic=trigger_topic
gcloud functions call cloudFunction --data '{\"message\": \"Hello World!\"}' 