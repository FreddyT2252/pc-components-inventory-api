# pc-components-inventory-api
A simple PC components inventory REST API using Node.js, Docker, and AWS.

## Project Overview
PC Components Inventory API is a simple REST API
for managing computer component inventory.

## Technology Stack
- Node.js and Express.js
- Docker
- Amazon EC2
- Amazon ECR
- PostgreSQL (planned database)

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /products | Create product |
| GET | /products | Get all products |
| PUT | /products/:id | Update product |
| DELETE | /products/:id | Delete product |

Note: Only GET /products is implemented in the starter code.

## Deployment Plan
1. Prepare an EC2 instance.
2. Install Docker on EC2.
3. Clone the GitHub repository.
4. Build the Docker image.
5. Push the image to Amazon ECR.
6. Run the Docker container on EC2.
7. Test API connectivity.
