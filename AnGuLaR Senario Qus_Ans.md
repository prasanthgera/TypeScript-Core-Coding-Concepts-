=========================================================

&nbsp;Scenario-Based Interview Questions \& Answers



&nbsp;Author: Prasanth Gera

=========================================================



**1. What is the difference between var, let, and const in real scenarios?**

var is function-scoped — accessible anywhere in its function.

let and const are block-scoped — only available inside {}.

In real scenarios, use let for variables that can change, const for constants, and avoid var to prevent scope-related bugs.



**2. What happens if you declare the same variable name using var inside a block?**



It overrides the outer variable because var is not block-scoped.

In real projects, this can cause data overwrite issues when variables are reused accidentally.



**3. What is a closure and when do you use it in projects?**

A closure is when an inner function remembers variables from its outer function even after the outer function has finished execution.\\



You use it for:

Data privacy (like private variables in services).

Function factories.

Delayed operations (like event handlers that remember initial data).



**4. What is currying and why is it useful?**

Currying transforms a function with multiple arguments into a sequence of functions each taking one argument.

In real projects, it’s used for:

Code reusability (e.g., getTaxRate(country)(amount)).

Function customization (e.g., pre-filling values).



**5. What are higher-order functions and where are they used?**

A higher-order function is one that takes another function as an argument or returns one.

Array operations (map, filter, reduce).

Middleware logic.

Reusable utilities in Angular services.



**6. What are pure and impure functions?**

Pure function: Returns same output for same input, doesn’t modify external state.

Impure function: Changes or depends on external variables.

In Angular, pipes are pure by default for performance optimization.



**7. What is hoisting and how does it impact your code?**

Hoisting means variables and function declarations are moved to the top of their scope before execution.

Real scenario issue:

Using var before declaration doesn’t throw an error (but value is undefined), while let and const throw a ReferenceError — helps prevent logic errors.



**8. Difference between shallow copy and deep copy?**

Shallow copy: Copies only the first level of an object (nested objects share references).

Deep copy: Copies everything recursively.

Real use: In Angular state management (NgRx), deep copy ensures immutability.



**9 What is the difference between synchronous and asynchronous code?**

Synchronous: Executes line by line — blocks further execution until current one finishes.

Asynchronous: Doesn’t block — uses callbacks, Promises, or async/await.



Used in:

API calls (asynchronous).

Calculations or UI logic (synchronous).



**10. What are Promises and why do we use them?**

A Promise represents the eventual completion (or failure) of an asynchronous operation.

Used to handle:

HTTP requests (e.g., fetch, HttpClient).

File reading or background tasks.

They replace callback hell with cleaner syntax.



**11. What is the difference between call(), apply(), and bind()?**

All change the this context of a function:

call() — passes arguments individually.

apply() — passes arguments as an array.

bind() — returns a new function with bound this.

Used in:

Reusing methods across objects.

Event handling with specific contexts.



**12. What is the event loop in JavaScript?**

The event loop manages asynchronous operations — it checks the call stack and message queue, executing tasks one by one.

Real world: Ensures UI doesn’t freeze while waiting for an API call.



**13. What is the difference between == and ===?**

&nbsp;== performs type conversion before comparison.

&nbsp;=== checks both value and type strictly.

Best practice: Always use === to avoid unexpected results.



**14. What is a callback function and when is it used?**

A callback is a function passed into another function to be executed later.

Used in:

Event listeners.

Async tasks like file uploads or database operations.



**15. What is destructuring in TypeScript?**

It allows extracting values from arrays or objects into variables.

Used for cleaner code — e.g., extracting response data:

const { name, age } = user;



**16. What is the use of this keyword in JavaScript?**

this refers to the object that currently owns the code being executed.

Varies based on:

Global scope → window object.

Object method → that object.

Event handler → DOM element.



**17. What are arrow functions and their real use?**

Arrow functions provide a shorter syntax and lexically bind this, meaning they don’t change the context.

Used in callbacks, RxJS pipes, and array methods for cleaner code.



**18. What are TypeScript interfaces and when should you use them?**

Interfaces define the shape of an object.

Used for:

Strong typing.

Defining model structures (e.g., API response).

Making code predictable and self-documented.



**19. What is the difference between null and undefined?**

undefined: Variable declared but not assigned.

null: Assigned explicitly to represent “no value.”

Used to differentiate between “not set yet” and “intentionally empty.”



**20. What is immutability and why is it important?**

Immutability means you never modify existing data — instead, you create a new copy.

It helps:

Prevent side effects.

Maintain predictable state in Angular, especially with NgRx.



***21. What happens when a component is created in Angular?***

When a component is created:

Angular initializes its constructor.

Then it triggers lifecycle hooks:

ngOnInit() → component initialization logic.

ngDoCheck() → custom change detection.

ngAfterViewInit() → when view is loaded.

The template is rendered and data bindings are applied.

Finally, Angular listens for user interactions or observable updates.



***22. What is the difference between ngOnInit and constructor?***



constructor: Used for dependency injection and initializing simple variables.

ngOnInit: Called after Angular sets all input bindings  **used for data fetching or API calls.**

In real projects, use ngOnInit for logic that depends on bindings or services.



***23. What is data binding and how many types exist in Angular?***



Data binding connects the TypeScript code (component) with the HTML template.

Four types:

Interpolation: {{ value }} → displays data.

Property binding: \[property]="value" → sets HTML properties.

Event binding: (event)="handler()" → handles events.

Two-way binding: \[(ngModel)]="value" → syncs view and model.



***24. What are Angular lifecycle hooks and when are they used?***

Lifecycle hooks are methods that allow you to tap into key moments of a component’s creation, update, and destruction.

Common ones:

ngOnInit() → initialization.

ngDoCheck() → detects custom changes.

ngAfterViewInit() → when child views are loaded.

ngOnDestroy() → cleanup before component removal.

Used to manage subscriptions, DOM updates, and API calls.



***25. What is Dependency Injection (DI) in Angular?***

Dependency Injection is a design pattern where Angular automatically provides required services or objects to a component or class instead of creating them manually.

Used for:

Service reuse across components.

Loose coupling between modules.

Easy testing and maintainability.



***26. What is the difference between a Service and a Component?***

Component: Manages view (HTML + logic)

Service: Handles business logic, API calls, or data sharing.

Components are for UI, Services are for functionality.

Best practice — keep components lean and delegate heavy logic to services.



***27. What are Angular Directives?***

Directives modify the behavior or appearance of DOM elements.

Three types:

Component Directive – has template + logic.

Structural Directive – changes DOM layout (\*ngIf, \*ngFor).

Attribute Directive – changes element behavior or style (ngClass, ngStyle).



***28. How does Angular handle routing?***

Angular uses the RouterModule for client-side navigation.

Each route maps a URL path to a specific component.

Supports:

Route guards for security.

Lazy loading for better performance.

Parameterized routes for dynamic data (e.g., /user/:id).



***29. What are Route Guards and why are they important?***

Route guards prevent unauthorized or invalid navigation.

Common types:

CanActivate → controls access before route activation.

CanDeactivate → prevents leaving a page.

Resolve → pre-fetches data before navigation.

Used for authentication, unsaved form warnings, and preloading data.



***30. What is Lazy Loading and why do we use it?***

Lazy loading loads modules only when needed, not at app startup.

Improves initial load time and performance.

Used for large apps with many modules (e.g., Admin module, User module).



***31. What is Change Detection in Angular?***

Change Detection updates the DOM when data changes in the component.

Angular automatically checks bindings after every event or async call.

Strategies:

Default: Checks entire tree.

OnPush: Checks only when input changes (used for optimization).

Important for performance tuning.



***32. What are Pipes in Angular?***

Pipes transform data for display in templates.

Example: formatting dates, currency, or text.

Types:

Built-in: date, uppercase, currency.

Custom pipes: Developer-defined transformations.

They are pure functions by default — no side effects.



***33. What is the difference between Template-driven and Reactive Forms?***

Feature	Template-driven	Reactive Forms

Setup	Uses HTML + directives	Uses TypeScript code

Validation	Template-based	Programmatic (FormControl, FormGroup)

Suitable for	Simple forms	Complex forms \& dynamic validation

Reactive forms are preferred for enterprise apps due to scalability and testability.



***34. What are Observables and how are they used in Angular?***

Observables are a core concept of RxJS, representing streams of data over time.

Used for:

Handling asynchronous data (HTTP calls, events).

Real-time updates.

They allow subscribing, mapping, filtering, and combining streams.



***35. What is the difference between Observable and Promise?***

Feature	Promise	Observable

Execution	Eager (runs immediately)	Lazy (runs on subscription)

Values	Single value	Multiple values (stream)

Cancelable	No	Yes (unsubscribe)

Operators	Limited	Many via RxJS

Angular prefers Observables for handling async data (like HTTP responses).



***36. What is ngZone in Angular?***

ngZone detects and triggers change detection after asynchronous operations (e.g., setTimeout, API calls).

If performance is an issue, developers can run code outside Angular’s zone and re-enter only when needed — for optimization.



***37. What are Angular Modules and why are they needed?***

Modules (@NgModule) group related components, directives, pipes, and services.

Organize app features.

Enable lazy loading.

Make app more maintainable.

Example: AppModule, UserModule, SharedModule.



***38. What is Ahead-of-Time (AOT) Compilation?***

AOT compiles Angular templates during build time, not at runtime.

Benefits:

Faster app startup.

Smaller bundle size.

Early template error detection.



***39. How do you handle errors in Angular applications?***

Common strategies:

Using try/catch inside services.

HttpInterceptor for centralized HTTP error handling.

ErrorHandler class for global exceptions.

Displaying user-friendly toast messages.



***40. How do you communicate between parent and child components?***

@Input() → pass data from parent to child.

@Output() with EventEmitter → send data from child to parent.

Services → share data between unrelated components.

