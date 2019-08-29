# Kayak

- Preparing the arduino IDE: https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-mac-and-linux-instructions/    

- Connectivity from RFM95W to ESP32

	GND -> GND  
	MISO -> 19  
	MOSI -> 23  
	SCK -> 18  
	NSS -> 5  
	RESET -> 14   
	DIO2 -> 4  
	DIO1 -> 21  
	DIO0 -> 2  
	3.3V -> 3.3V   
	
	![alt text](https://github.com/haorfani/Kayak/blob/master/esp32lora.jpg)
	


- Saving a log file with nodeJS

	1. First you need to download and install nodeJS to your computer https://nodejs.org/en/download/
	2. ``` $ mkdir log ```
	3. ``` $ cd log ```
	4. ``` $ npm init ```
	5. ``` $ npm install --save ttn ```
	6. ``` $ npm install json2csv ```

	7. You copy index.js file from github to log

	You run it with ``` $ node . ``` and then you will be able to see a file with SF and BW with a timestamp
	 
	Note: If you want to modify nodeJS there is an example here https://www.thethingsnetwork.org/docs/applications/nodejs/quick-start.html and the API is located here https://www.thethingsnetwork.org/docs/applications/nodejs/api.html
