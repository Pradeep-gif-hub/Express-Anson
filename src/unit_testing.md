## What is Unit Testing?
**Unit Testing** is the process of testing the **smallest logical units of an application in complete isolation**.

A *unit* refers to:
- A single function
- A method
- A small block of business logic

The primary goal of unit testing is **logical correctness**, not system validation.
---
##  Purpose of Unit Testing
Unit testing answers one simple question:
> **“Given a specific input, does this logic produce the correct output?”**

It does **not** check:
- Whether an API endpoint is reachable
- Whether the database is connected
- Whether authentication works end-to-end

It checks **pure logic only**.
---
##  What Unit Testing is NOT Used For
Unit testing is **NOT** meant for testing:
- ❌ REST APIs
- ❌ HTTP requests / responses
- ❌ MongoDB or SQL databases
- ❌ Network calls
- ❌ File systems
- ❌ External services (OAuth, payment gateways, etc.)

Including these makes tests slow, unreliable, and incorrect for unit testing.
---
##  What Unit Testing IS Used For
Unit testing is used to validate:

- Business logic
- Mathematical calculations
- Conditional flows
- Data transformations
- Validation rules

Example:
```js

function calculateDiscount(price) {
  if (price > 1000) return price * 0.9;
  return price;
}
```
#  Jest Unit Testing in Node.js & MongoDB
> A complete, beginner-to-intermediate guide to understanding **Jest**, its role in **Node.js**, and how it integrates with **MongoDB** for reliable backend testing.
---
## 📌 What is Jest?

**Jest** is a powerful JavaScript testing framework developed by Facebook.  
It is primarily used for **unit testing**, **integration testing**, and **mocking** in modern JavaScript applications.

Jest works out-of-the-box with:
- Node.js
- Express.js
- MongoDB (via mocking or test databases)
- React (frontend)

Its biggest strength is **simplicity + speed + zero configuration**.

---

##  Why Unit Testing Matters

Unit testing ensures:
- Individual functions work correctly
- Bugs are caught early
- Code is safe to refactor
- Production failures are reduced

Without unit tests:
- Small changes can break large systems
- Debugging becomes expensive
- Code reliability decreases
---
##  How Jest Fits into Node.js
In a Node.js backend:
- Business logic lives in **services**
- APIs live in **controllers**
- Database logic lives in **models**
Jest allows you to:
- Test each layer **independently**
- Mock database calls
- Validate API behavior before deployment
---
##  Jest + MongoDB Relationship

MongoDB is **external & asynchronous**, so direct testing is risky.

Jest helps by:
- Mocking MongoDB using `jest.mock()`
- Using in-memory databases (MongoDB Memory Server)
- Preventing real data corruption

This keeps tests:
- Fast
- Predictable
- Isolated
---
### 1️⃣ Install Jest
```bash
npm install --save-dev jest
``` 
# Jest Important Methods & Functions (Unit Testing Notes)
These are the **core Jest APIs** used specifically for **unit testing logical code**  
(no APIs, no databases, no external services).
---
## 1. describe()
Used to **group related unit tests** together.
Improves readability and organizes tests by feature or module.
```js
describe("User Service", () => {});
```
## 2. test() / it()

Defines a single unit test case.
it() is simply an alias of test() and improves readability.
```js
test("adds numbers correctly", () => {});
```

## 3. expect()

Used to assert expected results in a unit test.

Every unit test must contain at least one expect().

```js

expect(result).toBe(5);

```

## 4. toBe()

Checks strict equality (===).
Best used for numbers, strings, and booleans.

## 5. toEqual()

Performs deep comparison of objects or arrays.
Used when comparing non-primitive values.

## 6. toBeDefined()

Ensures a value is not undefined.
Useful for validating function return values.

## 7. toHaveProperty()

Checks whether an object contains a specific property.

```js 
expect(user).toHaveProperty("email");
```
## 8. jest.fn()

Creates a mock function.
Used to replace real functions during unit testing.

```js
const mockFn = jest.fn();
```
## 9. toHaveBeenCalled()
Verifies that a mock function was called at least once.
Used to test interactions, not logic output.
## 10. toHaveBeenCalledWith()
Ensures a mock function was called with specific arguments.
```js
expect(mockFn).toHaveBeenCalledWith(200, "success");
```
## 11. jest.mock()
1.Mocks an entire module or dependency.   
2.Used to isolate logic from:   
3.Databases   
4.APIs   
5.External services
```js
jest.mock("../models/User");
```
## 12. beforeEach()
Runs before every test case.
Commonly used to reset mocks or test data.
## 13. afterEach()
Runs after every test case.
Used for cleanup operations.
## 14. beforeAll()
Runs once before all tests.
Used for global setup logic.
## 15. afterAll()
Runs once after all tests finish.
Used to close connections or free shared resources.

```js 
 npm test
```
## we have to make type: jest



