#[Google Cloud Platform Fundamentals - Core Infrastructure](https://www.coursera.org/learn/gcp-fundamentals) 

## Demonstration: Getting Started with Cloud Launcher
    - Cloud Launcher 
    - Lamp [search] -> Lamp Certified by Bitnami
    - Launch on Compute Engine
    - Login using ssh 
    - cd /opt/bitnami [change the directory where software installed]
    - sudo cp docs/phpinfo.php appache2/htdocs
    - exit 
    - url/phpinfo.php 

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