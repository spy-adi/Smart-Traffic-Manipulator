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

