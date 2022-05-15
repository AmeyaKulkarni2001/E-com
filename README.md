# View live project at
https://ak-e-com.herokuapp.com/


# PostMan link
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/20974344-04b87ec2-9004-41d7-851e-c99b741a50ce?action=collection%2Ffork&collection-url=entityId%3D20974344-04b87ec2-9004-41d7-851e-c99b741a50ce%26entityType%3Dcollection%26workspaceId%3Db2de5003-4dfe-4128-953d-5fc619972bb1)

User Login -> returns jwt token.

```jsx
http://localhost:5000/api/users/signin /[Post req]
```
Products (Also has categories) → 

```jsx
/api/products
```
View Order

```jsx
/api/orders/{orderId} //orderId //requires jwt
```

Users -> List of user

```jsx
/api/users
```
