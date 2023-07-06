# Smart-Traffic-Manipulator
This project is developed by Team Glitch for Hackfest 2021 organized by IIT (ISM) Dhanbad

PROBLEM TO SOLVE:

In the ever-growing population of our planet earth, there comes the problem of managing the huge population which is becoming difficult to handle as time passes on. One of the most head aching problems of our planet is the problem of handling the traffic of the moving masses from one point to other. With people migrating to bigger cities, the problem of traffic in ourworld is growing in an indeterministic way which needs to be solved or at least try to reduce it. People lose a lot of time waiting for the red light to become green. It is estimated that an average person spends over 200 hours stuck in traffic in a year which is unbelievably a massive waste of time. 

APPROACH TO PROBLEM: 

We have seen the way of the regular traffic signal systems around theworld specially India, where the lights go on and off at regular intervals of time. There are many times the priority for a particular way in a traffic junction increases due to several factors such as hospital emergencies, fire emergencies, more traffic on one way as compared to the other etc. which is ignored by the current system of traffic system installed in our country. What if we build a system, which can judge the coming traffic from each way associated to the particular junction, and decides and prioritize the coming traffic and let the traffic move according to the priorities set by the system rather than regular intervals of the on and off system. As a result, we can optimize the traffic system way more as compared to what we experience today. As an additional feature, we can integrate the path of the ambulances, fire emergencies and all sort of emergencies which can monitor the paths of these vehicles and prioritize the path of that particular vehicle and let the vehicle move through the traffic seamlessly and to minimize the time that it spends on the traffic junctions on its way to its destination.

IMPLEMENTATION: 

Owing to the mismanagement of people on the roads, there is delay in time of transportation which directly affects the price of the goods, fuel as well comfort of the people. To overcome this problem, we have come across anidea to generate an algorithm to manipulate the traffic lights such that the overall time for transportation becomes the least. This algorithm will take the number of vehicles and the type of vehicles coming from each direction as its input. This input will be recorded by using Object recognition by Computer Vision. Then accordingly it will change the traffic signal dynamically according to the vehicle density in each direction. The algorithm will be implemented using Machine learning and web development for interface and manual control option. A special condition will be mentioned for emergency cases such as ambulance, fire brigade and so on.The following factors were considered while developing the algorithm:
1. The processing time of the algorithm to calculate traffic density and then the green light duration – this decides at what time the image needs to be acquired
2. Number of lanes
3. Total count of vehicles of each class like cars, trucks, motorcycles, etc.
4. Traffic density calculated using the above factors
5. Time added due to lag each vehicle suffers during start-up and the non-linear increase in lag suffered by the vehicles which are at the back.
6. The average speed of each class of vehicle when the green light starts i.e., the average time required to cross the signal by each class of vehicle 
7. The minimum and maximum time limit for the green light duration - to prevent starvation

Our system will also have a website that will be in the controls of the respective traffic controller in that junction (during any unexpected cases) or nearest police station/control station from where they can monitor the traffic in the particular junction and if needed in case of any unexpected case or condition where they feel that the algorithm is not performing according to their need, then they can manually override the algorithm and take the full control of the junction in their hands using the website. The website will provide the officer with live feed from the camera’s setup at the junction which he can monitor remotely. As an additional feature, using the image recognition algorithm, we can detect the specific emergency vehicles stuck in the traffic such as ambulances or fire brigades etc. and control the flow of traffic for easy commutation of the vehicles from one point to another.

Improved Issue Triage: AI models can assist in automatically analyzing and categorizing support tickets or reported issues, helping support leads prioritize and assign problems more efficiently based on predefined criteria or patterns.

Enhanced Problem Diagnosis: AI-powered algorithms can aid in identifying patterns, correlations, and potential root causes within large volumes of data. This can help support leads identify trends, common issues, and hidden dependencies that may contribute to problems.

Accelerated Troubleshooting: AI models can offer intelligent recommendations or suggestions for issue resolution based on historical data, known solutions, or similar cases. This can speed up the troubleshooting process and reduce the time and effort required to find the right solution.

Proactive Issue Prevention: By analyzing application logs, system metrics, and user behavior, AI models can identify anomalies or early warning signs of potential issues. This allows support leads to take proactive measures, such as preventive maintenance or applying patches, to avoid or mitigate problems before they impact users.

Personalized User Support: AI-powered chatbots or virtual assistants can provide instant and personalized support to users, answering common questions, guiding them through troubleshooting steps, or redirecting them to relevant resources. This improves user satisfaction and reduces the support team's workload.

Knowledge Base Enhancement: AI models can automatically analyze and categorize support documentation, user feedback, and resolution outcomes, helping support leads curate and update knowledge bases more effectively. This enables faster access to accurate and up-to-date information for issue resolution.

Data-driven Insights: AI algorithms can mine support data to generate valuable insights and trends about the application's performance, user behavior, and areas for improvement. Support leads can leverage these insights to identify recurring issues, optimize support processes, and provide feedback for product enhancements.

Continuous Learning and Improvement: AI models can learn from historical support data, user interactions, and resolution outcomes. This enables ongoing refinement and improvement of the support processes, enabling support leads to provide increasingly efficient and effective assistance to users.

https://colab.research.google.com/drive/1BZ_8MGmsTJbaCmk9ZaEWeLphJvfnikNV?usp=sharing

function isStringOfNumbers(str) {
  // Check if the string length is 10
  if (str.length !== 10) {
    return false;
  }

  // Check if each character in the string is a number
  for (let i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i]))) {
      return false;
    }
  }

  return true;
}

function removeHtmlTags(str) {
  return str.replace(/<[^>]*>/g, '');
}

{
  "appenders": {
    "file": {
      "type": "file",
      "filename": "logs/app.log",
      "maxLogSize": 10485760,
      "backups": 3,
      "compress": true
    },
    "console": {
      "type": "console"
    }
  },
  "categories": {
    "default": {
      "appenders": ["file", "console"],
      "level": "debug"
    }
  }
}

https://colab.research.google.com/drive/1wmOqK_TRpd-pVvpJpkSsmikO1d5Y13r5?usp=sharing

<!DOCTYPE html>
<html>
<head>
    <title>Filter Example</title>
</head>
<body>
    <h1>Filter Example</h1>

    <form action="/filter" method="get">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">

        <label for="category">Category:</label>
        <select id="category" name="category">
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
        </select>

        <button type="submit">Apply Filter</button>
    </form>

    <!-- Display the filtered results here -->
    <div id="results">
        <!-- Results will be populated dynamically using Thymeleaf -->
    </div>
</body>
</html>

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
public class FilterController {

    @GetMapping("/filter")
    public String filterResults(@RequestParam(value = "name", required = false) String name,
                                @RequestParam(value = "category", required = false) String category,
                                Model model) {

        // Simulated data source
        List<Item> items = new ArrayList<>();
        items.add(new Item("Item 1", "electronics"));
        items.add(new Item("Item 2", "clothing"));
        items.add(new Item("Item 3", "books"));

        // Apply the filter logic
        List<Item> filteredItems = new ArrayList<>();
        for (Item item : items) {
            if ((name == null || item.getName().contains(name)) &&
                    (category == null || item.getCategory().equals(category))) {
                filteredItems.add(item);
            }
        }

        // Add the filtered items to the model
        model.addAttribute("items", filteredItems);

        // Return the view to display the filtered results
        return "results";
    }
}

<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>Filtered Results</title>
</head>
<body>
    <h1>Filtered Results</h1>

    <table>
        <tr>
            <th>Name</th>
            <th>Category</th>
        </tr>
        <tr th:each="item : ${items}">
            <td th:text="${item.name}"></td>
            <td th:text="${item.category}"></td>
        </tr>
    </table>
</body>
</html>

// Get the search input field and table
var searchInput = document.getElementById("searchInput");
var table = document.getElementById("myTable");
var rows = table.getElementsByTagName("tr");

// Add an event listener to the search input field
searchInput.addEventListener("keyup", function() {
  var filter = searchInput.value.toLowerCase();

  // Loop through all table rows, hide those that don't match the search query
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    var match = false;

    // Loop through all table cells of the current row
    for (var j = 0; j < cells.length; j++) {
      var cell = cells[j];
      if (cell.innerHTML.toLowerCase().indexOf(filter) > -1) {
        match = true;
        break;
      }
    }

    // Show or hide the row based on the match
    if (match) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
});

https://codepen.io/ainalem/pen/xxwxxRE

<div class="chat" onclick="this.classList.toggle('active')">
  <div class="background"></div>
  <svg class="chat-bubble" width="100" height="100" viewBox="0 0 100 100">
    <g class="bubble">
      <path class="line line1" d="M 30.7873,85.113394 30.7873,46.556405 C 30.7873,41.101961
          36.826342,35.342 40.898074,35.342 H 59.113981 C 63.73287,35.342
          69.29995,40.103201 69.29995,46.784744" />
      <path class="line line2" d="M 13.461999,65.039335 H 58.028684 C
            63.483128,65.039335
            69.243089,59.000293 69.243089,54.928561 V 45.605853 C
            69.243089,40.986964 65.02087,35.419884 58.339327,35.419884" />
    </g>
    <circle class="circle circle1" r="1.9" cy="50.7" cx="42.5" />
    <circle class="circle circle2" cx="49.9" cy="50.7" r="1.9" />
    <circle class="circle circle3" r="1.9" cy="50.7" cx="57.3" />
  </svg>
</div>