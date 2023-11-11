
#include "DHT.h"
#define DHTPIN 2
#define DHTTYPE DHT11

//DHT dht(DHTPIN, DHTTYPE);

DHT *humidity;
bool readtemperature;
bool readhumidity;

void setup() {
  Serial.begin (9800);
  humidity = new DHT (DHTPIN, DHTTYPE);
  humidity->begin();
  readtemperature = false;
  readhumidity = false;
}

void loop() {
  if (readtemperature){
    //delay(20);
    float t = humidity->readTemperature();
    readtemperature = false;
    Serial.println (String(t));
    //Serial.println ("hallowelt");
  }
  if (readhumidity){
    //delay(20);
    float h = humidity->readHumidity();
    readhumidity = false;
    Serial.println (String(h));
    //Serial.println ("hallowelt");
  }
}



void serialEvent() {
  if (Serial.available ()){
    char symbol = Serial.read();
    switch (symbol){
      case 't':
        readtemperature = true;
      break;
      case 'h':
        readhumidity = true;
      break;
    }
  }    
}
