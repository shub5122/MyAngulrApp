pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'sh "npm install"'
      }
    }

    stage('test') {
      parallel {
        stage('test') {
          steps {
            sh 'sh "npm test"'
          }
        }

        stage('sonar') {
          steps {
            sh 'sh "npm test"'
          }
        }

      }
    }

    stage('deploy') {
      steps {
        sh 'echo "i am deploying here"'
      }
    }

  }
}