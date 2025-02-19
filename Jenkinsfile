pipeline {
    
    environment {
        registry = "trance0/notenextra"
        version = "1.0"
    }
      
    agent { dockerfile true }

    stages {
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Build') {
            steps {
                echo "Building docker image ${registry}:${version}.${env.BUILD_ID}"
                customImage = docker.build("${registry}:${version}.${env.BUILD_ID}")
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying docker image ${registry}:${version}.${env.BUILD_ID}"
                customImage.push()
            }
        }
    }
}
