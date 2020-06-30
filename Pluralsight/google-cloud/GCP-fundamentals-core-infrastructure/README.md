#[Google Cloud Platform Fundamentals - Core Infrastructure](https://app.pluralsight.com/library/courses/google-cloud-platform-fundamentals-core-infrastructure/table-of-contents) 


## Getting started with compute engine 
    - gcloud compute zones list | grep us-central1
    - gcloud config set compute/zone us-central1-c 
    - gcloud compute instances create "my-vm-2" \
        --machine-type "n1-standard-1" \
        --image-project "debian-cloud" \
        --image "debian-9-stretch-v20190213" \
        --subnet "default" 
    - sudo apt-get install nginx-light -y c


## Getting started with cloud storage and cloud SQL
    - Compute Engine -> VM Instance 
    - 