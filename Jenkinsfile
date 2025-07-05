pipeline {
    environment {
        registry = "trance0/notenextra"
        version = "1.1"
        NODE_OPTIONS = "--max-old-space-size=8192"
    }
    
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[ name: '*/main' ]],
                    userRemoteConfigs: [[
                        url: 'https://github.com/Trance-0/NoteNextra',
                    ]]
                ])
            }
        }
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
                    def customImage = docker.build("${registry}:v${version}.${env.BUILD_ID}")
                    // echo "Logging in to docker hub"
                    // docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-creds') {
                    //     echo "Pushing docker image ${registry}:v${version}.${env.BUILD_ID}"
                    //     customImage.push()
                    // }
                    echo "skipping push due to conflicted servers"
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    def imageTag = "${registry}:v${version}.${env.BUILD_ID}"
                    echo "Deploying docker image ${imageTag}"
                    echo "Stopping existing container"
                    sh 'docker stop notenextra-jenkins || true'
                    echo "Removing existing container"
                    sh 'docker rm notenextra-jenkins || true'
                    echo "Running new docker container"
                    sh "docker run -d -p 13000:3000 --restart=on-failure:10 --name notenextra-jenkins ${imageTag}"
                }
            }
        }
    }
}
