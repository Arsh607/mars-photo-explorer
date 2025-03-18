Breakpoint 1: Before Making the API Request

Explanation of Breakpoint:
At this point, the program is preparing to send a request to the NASA API for photos taken on a specific date. The date and API_KEY are the key parameters.

State Before Stepping Through:

The date is "2021-10-02", and API_KEY is correctly set.
The URL to be requested is: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-10-02&api_key=fQaKtrXUE5IscIzFhdiweDsAO7ZOWZ1E9C4tvGqV.
State After Stepping Through:

The API request is made successfully. The response should contain a JSON object with photo data.
What Changed: The request was sent, and now we are waiting for the response.
Breakpoint 2: After Parsing the API Response

Explanation of Breakpoint:
After receiving the response from the API, the code parses the response as JSON to extract the list of photos.

State Before Stepping Through:

response contains the raw API response.
The program will parse it using response.json().
State After Stepping Through:

The data object now contains the parsed JSON, and data.photos holds the list of photos returned by the API.
What Changed: The response is now in a usable format, and we have an array of photos ready to display.
Breakpoint 3: When Dynamically Updating the DOM

Explanation of Breakpoint:
Here, the program is appending the photo elements to the DOM, which will make them visible in the browser.

State Before Stepping Through:

The photoCard element is created with an image and caption based on the photo data.
State After Stepping Through:

The photoCard is appended to the photoGallery div.
What Changed: The DOM is updated with the new photo, and the user can now see the fetched photo on the page.
