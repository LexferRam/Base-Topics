# Configuracion del path para una aplicacion Next.js en Kubernetes

**En la app de NextJS**
En el nextConfig.js se debe agregar las siguientes lineas:

```typescript
const nextConfig = {
  basePath: '/planincentivo',
  assetPrefix: '/planincentivo',
};
module.exports = nextConfig;
```

En el packege.json se debe agregar para que salga por el puerto 9082:

```json
"scripts": {
    "dev": "next dev -p 9082",
    "start": "next start -p 9082"
  }
```

Todos los archivos estaticos del public se deben referenciar con el path /planincentivo, por ejemplo:

```typescript
  <link rel="icon" href="/planincentivo/favicon.ico" />
```

**En el ingress-controller**
Se debe crear el service y el deployment para la aplicacion NextJS:

```yaml
apiVersion: v1
kind: Service
metadata:
  namespace: sandbox-oceanica
  name: frontend-plan-incentivo
  labels:
    app: frontend-plan-incentivo
spec:
  selector:
    app: frontend-plan-incentivo
  ports:
    - name: http
      protocol: TCP
      port: 3032                 // Puerto expuesto en el cluster
      targetPort: 9082           // Puerto donde corre la app NextJS
---
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: sandbox-oceanica
  name: frontend-plan-incentivo
  labels:
    app: frontend-plan-incentivo
spec:
  replicas: 1
  selector:
    matchLabels:
      app: frontend-plan-incentivo
  template:
    metadata:
      labels:
        app: frontend-plan-incentivo
    spec:
      containers:
      - name: frontend-plan-incentivo-container
        ports:
        - containerPort: 9082
        image: registry.gitlab.com/piramide-portal-3601/piramide-client-v2:1.266-qa-ocea
      imagePullSecrets:
        - name: oceanica-devops-gitlab-registry-key
```

En el ingress se debe agregar la siguiente configuracion:

```yaml
      - backend:
          service:
            name: frontend-plan-incentivo      // Nombre del service creado anteriormente
            port: 
              number: 3032                     // Puerto expuesto en el cluster
        path: /planincentivo                   // Path configurado en el next.config.js
        pathType: ImplementationSpecific
```

**Aplicar el ingress**
``kubectl apply -f nombre-de-tu-archivo-ingress.yaml``

**Verificar cambio**
``kubectl describe ingress <nombre-del-ingress>``

**Edición del ingress**
``kubectl edit ingress <nombre-del-ingress>``
``KUBE_EDITOR="nano" kubectl edit ingress <nombre-ingress>``

**Guardar y Salir**
Presiona ``Presiona Ctrl+O, Enter, y luego Ctrl+X``
