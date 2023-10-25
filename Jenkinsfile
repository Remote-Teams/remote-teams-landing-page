pipeline {
    agent any
    environment { 
        NETWORK_NAME = 'remoteteam'
        PROJECT_QA_CONTEXT = 'remoteteamqa'
        // dockerregistry
        REGISTRY_CREDS = credentials('dockerregistry')
        UPDATE_DELAY="10s"
        UPDATE_ORDER="start-first"
        HOST_PORT="9010"
        CONTAINER_PORT="9010"
    }
   stages {
        
        stage('Create Docker Image') {
            environment { 
                FLOCK_MSG_START="Create Docker Image"
                FLOCK_MSG_END="Create Docker Image"
                FLOCK__CAUSE_ACTION_MSG_START="Creating Docker Image"
                FLOCK__CAUSE_ACTION_MSG_END="Docker Image Created"
            }
            steps {
                sh "curl --header \"Content-Type: application/json\" --request POST --data '{ \"projectName\": \"${JOB_NAME} - ${BUILD_ID} \", \"displayName\": \"${FLOCK_MSG_START}\", \"status\": \"start\", \"runURL\": \"${RUN_DISPLAY_URL}\", \"causeAction\": {  \"isSCM\": false, \"other\": \"${FLOCK__CAUSE_ACTION_MSG_START}\" }}' ${FLOCK_WEBHOOK_URL}"
                echo "Creating Docker Image"
                sh "docker context use default"
                sh "docker image build -t ${DOCKER_REGISTRY}/${JOB_NAME}:${BUILD_ID} -t ${DOCKER_REGISTRY}/${JOB_NAME}:latest ."
                sh "curl --header \"Content-Type: application/json\" --request POST --data '{ \"projectName\": \"${JOB_NAME} - ${BUILD_ID} \", \"displayName\": \"${FLOCK_MSG_END}\", \"status\": \"start\", \"runURL\": \"${RUN_DISPLAY_URL}\", \"causeAction\": {  \"isSCM\": false, \"other\": \"${FLOCK__CAUSE_ACTION_MSG_END}\" }}' ${FLOCK_WEBHOOK_URL}"
            }
        }
        stage('Push Image on DockerRegistry On DockerRegistry') {
            environment { 
                FLOCK_MSG_START="Push Image on DockerRegistry On DockerRegistry"
                FLOCK_MSG_END="Push Image on DockerRegistry On DockerRegistry"
                FLOCK__CAUSE_ACTION_MSG_START="Going to Push docker imagee in docker registry"
                FLOCK__CAUSE_ACTION_MSG_END="Docker Image pushed Successfully"
            }
            steps {
                // login into dokcer registry.
                sh "curl --header \"Content-Type: application/json\" --request POST --data '{ \"projectName\": \"${JOB_NAME} - ${BUILD_ID} \", \"displayName\": \"${FLOCK_MSG_START}\", \"status\": \"start\", \"runURL\": \"${RUN_DISPLAY_URL}\", \"causeAction\": {  \"isSCM\": false, \"other\": \"${FLOCK__CAUSE_ACTION_MSG_START}\" }}' ${FLOCK_WEBHOOK_URL}"
                echo "login in docker registry"
                sh "docker login --username ${REGISTRY_CREDS_USR} --password ${REGISTRY_CREDS_PSW} ${DOCKER_REGISTRY}"
                echo "logged in successfully."
                // push docker image on dockerregistry
                echo "push docker image on docker Regsitry."
                sh "docker image push ${DOCKER_REGISTRY}/${JOB_NAME}:latest"
                sh "docker image push ${DOCKER_REGISTRY}/${JOB_NAME}:${BUILD_ID}"
                echo "images pushed successfully."
                // Delete Image from local docker host.
                echo "deleting docker images from local docker host.."
                sh "docker image rm ${DOCKER_REGISTRY}/${JOB_NAME}:latest"
                sh "docker image rm ${DOCKER_REGISTRY}/${JOB_NAME}:${BUILD_ID}"
                echo "Image deleted successfully."
                sh "curl --header \"Content-Type: application/json\" --request POST --data '{ \"projectName\": \"${JOB_NAME} - ${BUILD_ID} \", \"displayName\": \"${FLOCK_MSG_END}\", \"status\": \"start\", \"runURL\": \"${RUN_DISPLAY_URL}\", \"causeAction\": {  \"isSCM\": false, \"other\": \"${FLOCK__CAUSE_ACTION_MSG_END}\" }}' ${FLOCK_WEBHOOK_URL}"
            }
        }
        
        stage('Deploy on Production Servers') {
            environment { 
                HOST_PORT="80"
                CONTAINER_PORT="80"
                SERVICE_NAME="remoteteam-landingpage"
                FLOCK_MSG_START="Deploy on Production Server"
                FLOCK_MSG_END="Deploy on Production Server"
                FLOCK__CAUSE_ACTION_MSG_START="Going to Deploy on Production Server"
                FLOCK__CAUSE_ACTION_MSG_END="Deployed Successfully..!! Enjoy ;-)"
                PRODUCTION_CONTEXT="rtprod"
            }
            input {
                message "Continue?"
                ok "Yes"
                submitter "remoteteam"
            }
            options {
                timeout(time: 1, unit: 'HOURS') 
            }
            steps {
                sh "curl --header \"Content-Type: application/json\" --request POST --data '{ \"projectName\": \"${JOB_NAME} - ${BUILD_ID} \", \"displayName\": \"${FLOCK_MSG_START}\", \"status\": \"start\", \"runURL\": \"${RUN_DISPLAY_URL}\", \"causeAction\": {  \"isSCM\": false, \"other\": \"${FLOCK__CAUSE_ACTION_MSG_START}\" }}' ${FLOCK_WEBHOOK_URL}"
                echo "Deploying docker image on QA server."
                echo "Change docker context to landing production"
                sh "docker context use ${PRODUCTION_CONTEXT}"
                echo "Creating Overlay network"
                sh "docker network create -d overlay ${NETWORK_NAME} || true"
                sh "docker service create --with-registry-auth -d --update-delay ${UPDATE_DELAY} --update-order ${UPDATE_ORDER} --network ${NETWORK_NAME} -p ${HOST_PORT}:${CONTAINER_PORT} --name ${SERVICE_NAME} ${DOCKER_REGISTRY}/${JOB_NAME}:${BUILD_ID} || docker service update --with-registry-auth --image ${DOCKER_REGISTRY}/${JOB_NAME}:${BUILD_ID}  ${SERVICE_NAME}"
                echo "Code Deployed Successfully, Enjoy :-D"
                sh "curl --header \"Content-Type: application/json\" --request POST --data '{ \"projectName\": \"${JOB_NAME} - ${BUILD_ID} \", \"displayName\": \"${FLOCK_MSG_END}\", \"status\": \"start\", \"runURL\": \"${RUN_DISPLAY_URL}\", \"causeAction\": {  \"isSCM\": false, \"other\": \"${FLOCK__CAUSE_ACTION_MSG_END}\" }}' ${FLOCK_WEBHOOK_URL}"
            }
        }
    }
   post {
        always {
            // TODO: Change docker context to default.
            sh 'docker context use default'
        }
        failure {
            sh "curl --header \"Content-Type: application/json\" --request POST --data '{ \"projectName\": \"${JOB_NAME} - ${BUILD_ID} \", \"displayName\": \"JOB Fail\", \"status\": \"failure\", \"runURL\": \"${RUN_DISPLAY_URL}\", \"causeAction\": {  \"isSCM\": false, \"other\": \"Something went wrong please check logs\" }}' ${FLOCK_WEBHOOK_URL}"            
        }
    }
}