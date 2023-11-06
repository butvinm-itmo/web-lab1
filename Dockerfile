FROM quay.io/wildfly/wildfly
COPY target/web-lab1.war /opt/jboss/wildfly/standalone/deployments/
