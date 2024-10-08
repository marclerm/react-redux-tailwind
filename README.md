# **User Dashboard with GeoMap and Tailwind CSS**

This is a React project that displays a list of users fetched from an API in a dashboard format. The dashboard shows user information filtered by name, email, and website. Additionally, a GeoMap is included, where user locations are plotted based on their geographical coordinates. When hovering over a point on the map, a tooltip shows the name of the user.

## **Table of Contents**

1. [Features](#features)
2. [Technologies](#technologies)
3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Customization](#customization)
7. [License](#license)

---

## **Features**

- Display user data with filtering capabilities on name, email, and website.
- Visualize user locations on a simple grid-based geographical map.
- Tooltips on hover over geo points, showing the name of the user.
- Responsive design with Tailwind CSS for styling.
- The map auto-calculates positions based on latitude and longitude.
- Users are displayed in stacked cards with filters and limited to top 5 results.

## **Technologies**

- **React.js** - For building user interfaces.
- **Tailwind CSS** - For rapid UI design and customization.
- **Axios** - For making HTTP requests.
- **JavaScript (ES6+)** - Core logic.
  
## **Project Structure**

UserDashboard/ │ ├── public/ │ └── index.html // Entry point for the React app ├── src/ │ ├── components/ │ │ ├── UserCard.js // Displays filtered user data in cards │ │ ├── UserTable.js // Table for displaying user info by columns │ │ ├── GeoMap.js // Displays user locations on a map grid │ │ └── UserDashboard.js // Main dashboard component │ ├── App.js // Main application entry │ ├── index.js // React entry point │ └── App.css // Global styles └── README.md // Project documentation


## **Installation**

To run this project locally, follow the steps below:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/user-dashboard.git
   cd user-dashboard
   npm install
   npm start

## **Usage**
Once the project is running:

The dashboard will display three cards, each showing filtered user information by Name, Email, and Website, limited to the top 5 users.
In the GeoMap, you can hover over a user’s point to see their name in a tooltip.

## **Customization**
### **Change User API Source**
By default, user data is fetched from the placeholder API: https://jsonplaceholder.typicode.com/users.
To change the source:
- Open UserDashboard.js.
- Modify the API endpoint inside the fetchUsers function.
- Modify Tooltip Appearance
- Tooltips in the GeoMap component can be styled by editing the classes in the tooltip div.
- You can adjust its position by tweaking the transform and tooltipOffset values.

### **Modify the Dashboard UI**
The design is powered by Tailwind CSS. You can easily modify padding, colors, font sizes, and other styles using Tailwind’s utility classes in the respective components (UserDashboard.js, GeoMap.js, etc.).

## **License**
This project is open-source and available under the MIT License.
