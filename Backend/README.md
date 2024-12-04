# API Documentation: POST /users/register

## Endpoint Description
The `/users/register` endpoint allows new users to register by providing their details. It validates the input, hashes the password, creates a user in the database, and returns an authentication token.

---

## Request Method
**POST**

---

## Endpoint URL
`http://localhost:4004/users/register`

---

## Request Body
The request body must be in JSON format and include the following fields:

| Field       | Type   | Description                          |
|-------------|--------|--------------------------------------|
| fullname    | Object | User's full name, with two subfields:|
| &nbsp;&nbsp;firstname | String | The first name of the user       |
| &nbsp;&nbsp;lastname  | String | The last name of the user        |
| email       | String | The user's email address            |
| password    | String | The user's password                 |

### Example Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securePassword123"
}
```

---

## Response
The response will be in JSON format and include the following fields:

| Field    | Type   | Description                                      |
|----------|--------|--------------------------------------------------|
| success  | Boolean| Indicates if the operation was successful       |
| data     | Object | Contains the user details and authentication token |
| &nbsp;&nbsp;token  | String | Authentication token for the user        |
| &nbsp;&nbsp;user   | Object | User details                             |
| &nbsp;&nbsp;&nbsp;&nbsp;id   | String | Unique identifier of the user        |
| &nbsp;&nbsp;&nbsp;&nbsp;firstname | String | First name of the user             |
| &nbsp;&nbsp;&nbsp;&nbsp;lastname  | String | Last name of the user              |
| &nbsp;&nbsp;&nbsp;&nbsp;email     | String | Email address of the user          |

### Example Success Response
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "64c9d1234a567890",
      "firstname": "John",
      "lastname": "Doe",
      "email": "johndoe@example.com"
    }
  }
}
```

---

## Error Responses
The following error responses may occur:

### Validation Errors
**Status Code**: `400 Bad Request`

**Response Body**:
```json
{
  "success": false,
  "errors": [
    {
      "msg": "Invalid value",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Missing `fullname`
**Status Code**: `400 Bad Request`

**Response Body**:
```json
{
  "success": false,
  "message": "Fullname must include 'firstname' and 'lastname'."
}
```

---

## Notes
- Ensure all fields are validated before sending the request.
- Passwords must be sufficiently strong and will be hashed before being stored.
- Use the returned token for authenticating subsequent API requests.

---
