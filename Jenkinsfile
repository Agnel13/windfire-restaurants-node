pipeline {
    options {
        // set a timeout of 60 minutes for this pipeline
        timeout(time: 60, unit: 'MINUTES')
    }
    agent any
    /*agent {
      node {
        //TODO: Add label for the Maven jenkins agent
      }
    }*/

    environment {
        APP_NAME = "windfire-restaurants-backend"
        DEV_PROJECT = "windfire"
        STAGE_PROJECT = "youruser-movies-stage"
        APP_GIT_URL = "https://github.com/robipozzi/windfire-restaurants-node"
    }

    stages {
        stage('Compilation Check') {
            steps {
                echo '### Checking for compile errors ###'
                // sh '''
                //        cd ${APP_NAME}
                //        mvn -s settings.xml -B clean compile
                //   '''
            }
        }

        stage('Run Unit Tests') {
            steps {
                echo '### Running unit tests ###'
                //sh '''
                //        cd ${APP_NAME}
                //        mvn -s settings.xml -B clean test
                //   '''
            }
        }

        stage('Static Code Analysis') {
            steps {
                echo '### Running pmd on code ###'
                //sh '''
                //        cd ${APP_NAME}
                //        mvn -s settings.xml -B clean pmd:check
                //   '''
            }
        }

        stage('Launch new app in DEV env') {
            steps {
                echo '### Cleaning existing resources in DEV env ###'
                /*sh '''
                        oc delete all -l app=${APP_NAME} -n ${DEV_PROJECT}
                        oc delete all -l build=${APP_NAME} -n ${DEV_PROJECT}
                        sleep 5
                        oc new-build java:8 --name=${APP_NAME} --binary=true -n ${DEV_PROJECT}
                   '''*/

                echo '### Creating a new app in DEV env ###'
                /*script {
                    openshift.withCluster() {
                      openshift.withProject(env.DEV_PROJECT) {
                        openshift.selector("bc", "${APP_NAME}").startBuild("--from-file=${APP_NAME}/target/${APP_NAME}.jar", "--wait=true", "--follow=true")
                      }
                    }
                }*/
                // TODO: Create a new OpenShift application based on the ${APP_NAME}:latest image stream
                // TODO: Expose the ${APP_NAME} service for external access
            }
        }
    }
}