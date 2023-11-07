FROM quay.io/wildfly/wildfly
COPY backend/target/web-lab1.war /opt/jboss/wildfly/standalone/deployments/
