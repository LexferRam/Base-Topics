# Comandos utils Kubernetes

**VER DETALLES DE UN POD:**
kubectl describe pod budgets-backend-portal-5f958fcc8-dc2l -n development-piramide

**VER LOGS DE UN POD:**
``kubectl logs treasury-backend-portal-74c595647-6g4wd -n development-piramide``

**VER CONTENIDO DE UN ARCHIVO:**
``cat kustomization.yml``

**VER LOS NODOS DEL CLUSTER:**
``kubectl get nodes``

``kubectl describe svc db-piramide-development -n development-piramide ===> credenciales pods``

**VER LOGS DE UN POD Y SEGUIRLOS EN TIEMPO REAL:**
``kubectl logs -f budgets-backend-portal-5f958fcc8-dc2l --tail=50 -n development-piramide``

``kubectl logs -f deploy/<nombre-de-tu-deployment> --tail=50 -n <nombre-de-tu-namespace>``

**Ver los logs de TODAS las réplicas a la vez:**

1. Primero obtén la etiqueta (label) común:

   `kubectl get pods --show-labels -n <namespace>`

2. Ejecuta el comando de logs: Suponiendo que la etiqueta sea app=mi-app, el comando es:

   `kubectl logs -f -l app=mi-app --all-containers=true --max-log-requests=10 -n <namespace>`
