pipeline {
    environment {
        registry = "trance0/notenextra"
        version = "1.0"
    }
    
    agent any

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
                script {
                    echo "Building docker image ${registry}:${version}.${env.BUILD_ID}"
                    def customImage = docker.build("${registry}:${version}.${env.BUILD_ID}")
                    
                    echo "Pushing docker image ${registry}:${version}.${env.BUILD_ID}"
                    customImage.push()
                }
            }
        }
    }
}