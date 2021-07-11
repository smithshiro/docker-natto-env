FROM node:14

ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ARG AWS_REGION
RUN echo ${AWS_ACCESS_KEY_ID}
RUN apt-get update
RUN apt-get install -y \
    python3-pip \
    jq

RUN pip3 install awscli --upgrade --user
RUN pip3 install yq

RUN apt-get install -y awscli
RUN npm install -g serverless
RUN npm install -g serverless-offline
RUN npm install -g serverless-websockets-plugin
RUN npm i -g wscat

RUN aws configure set region ${AWS_REGION}
RUN sls config credentials --provider aws --key ${AWS_ACCESS_KEY_ID} --secret ${AWS_SECRET_ACCESS_KEY}

EXPOSE 3000
COPY startup.sh /opt/startup.sh
RUN chmod 777 /opt/startup.sh
CMD ["/bin/bash", "/opt/startup.sh"]
