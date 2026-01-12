# NestJS Course

1. Installation of NestJS CLI: ```npm i -g @nestjs/cli```
2. Create a new project: ```nest new project-name```
3. Run the development server (whatch mode): ```npm run start:dev```

    * Modules: Organizan la aplicación en bloques lógicos.
    * Controllers: Manejan las solicitudes entrantes y devuelven respuestas.
    * Services: Contienen la lógica de negocio y se inyectan en los controladores
    * Providers: Cualquier clase que se pueda inyectar como dependencia.
    * Decorators: Anotaciones que agregan metadatos a clases, métodos o propiedades.
    * Middleware: Funciones que se ejecutan antes de que una solicitud llegue al controlador.
    * Pipes: Transforman y validan datos entrantes.
    * Guards: Controlan el acceso a rutas y recursos.
    * Interceptors: Manipulan las solicitudes y respuestas.
    * Exception Filters: Manejan errores y excepciones de manera centralizada.
    * Dependency Injection: Patrón para gestionar dependencias entre clases.
    * Routing: Definición de rutas para manejar solicitudes HTTP.
    * DTOs (Data Transfer Objects): Objetos que definen la estructura de los datos que se transfieren entre el cliente y el servidor.
  
4. Create a new module: ```nest generate module module-name // nest g mo module-name```
5. Create a new controller: ```nest generate controller controller-name // nest g co controller-name --no-spec```
6. Create a new service: ```nest generate service service-name```






7. Dependency Injection: Use the `@Injectable()` decorator for services and inject them into controllers via the constructor.
8. Middleware: Create middleware by implementing the `NestMiddleware` interface and applying it in the module.
9.  Pipes: Use pipes for data transformation and validation by implementing the `PipeTransform` interface.
10. Guards: Implement guards for authorization by using the `CanActivate` interface.
11. Interceptors: Use interceptors for logging, caching, and transforming responses by implementing the `NestInterceptor` interface.
12. Exception Filters: Create custom exception filters by implementing the `ExceptionFilter` interface.
13. Configuration Management: Use the `@nestjs/config` package to manage application configuration.
14. Database Integration: Use TypeORM or Mongoose for database integration with NestJS.
15. Testing: Write unit and end-to-end tests using Jest, which is integrated with NestJS by default.
16. Deployment: Build the application using `npm run build` and deploy the generated files in the `dist` folder.
17. Documentation: Use Swagger for API documentation by integrating the `@nestjs/swagger` package.
18. WebSockets: Implement real-time communication using the `@nestjs/websockets` package.
19. Microservices: Create microservices using the `@nestjs/microservices` package for distributed systems.
20. GraphQL: Integrate GraphQL using the `@nestjs/graphql` package for building APIs.
21. Logging: Use the built-in logging module or integrate with third-party logging libraries.
22. Caching: Implement caching strategies using the `@nestjs/cache-manager` package.
23. Security: Implement security best practices using the `@nestjs/passport` and `@nestjs/jwt` packages for authentication and authorization.
24. Internationalization: Use the `@nestjs/i18n` package for supporting multiple languages in your application.
25. Monitoring: Integrate monitoring tools like Prometheus or Grafana for application performance tracking.
26. Versioning: Implement API versioning using the built-in versioning features of NestJS.
27. Custom Decorators: Create custom decorators to encapsulate common logic and reuse it across the application.
28. CLI Commands: Use the NestJS CLI to generate various components and manage the application lifecycle efficiently.
29. Environment Variables: Manage environment-specific configurations using `.env` files and the `@nestjs/config` package.
30. File Uploads: Handle file uploads using the `@nestjs/platform-express` package and Multer middleware.
31. Scheduled Tasks: Implement scheduled tasks using the `@nestjs/schedule` package for cron jobs and time-based operations.
32. Health Checks: Use the `@nestjs/terminus` package to implement health checks for your application.
33. Custom Modules: Create reusable custom modules to encapsulate specific functionality and share it across different projects.
34. API Gateway: Implement an API Gateway using NestJS to manage and route requests to multiple microservices.
35. Event-Driven Architecture: Use the `@nestjs/event-emitter` package to implement event-driven architecture in your application.
36. File System Operations: Use the `fs` module in Node.js to handle file system operations within your NestJS application.
37. Async/Await: Leverage async/await syntax for handling asynchronous operations in a clean and readable manner.
38. Logging Middleware: Create custom logging middleware to log incoming requests and responses for debugging and monitoring purposes.
39. Custom Validation: Implement custom validation logic using the `class-validator` package for complex data validation scenarios.
40. API Rate Limiting: Use the `@nestjs/throttler` package to implement rate limiting for your APIs to prevent abuse.
41. Webhooks: Set up webhooks to handle external events and integrate with third-party services.
42. File Streaming: Implement file streaming capabilities for large file downloads and uploads using NestJS.