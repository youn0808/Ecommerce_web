# E-Commerce website

> E Commerce platform built with the MongoDB, Express, React, NodeJS.

## Features

- Full featured shopping cart
- search product by name
- User profile with orders
- Admin user can manage orders
- Admin User can manage products
- Checkout process (shipping address, payment method)
- Payment option (using Paypal)
- Database seeder (products and users)

## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'random'
PAYPAL_CLIENT_ID =put your personal paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Delete data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

user1@example.com (Customer)
123456

user2@example.com (Customer)
123456
```
