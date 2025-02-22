pipeline {
    environment {
        registry = "trance0/NoteNextra"
        version = "1.0"
    }
    
    agent any

    stages {
        stage('Test') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS') {
                    sh 'npm install'
                    sh 'npm run build'
                }
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
