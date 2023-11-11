#include "methan.h"
bool readmethan; 

Methan *methan;

void setup() {
  Serial.begin(9600);
  readmethan = false;
  methan = new Methan ();
}

void loop() {
  if (readmethan){
    Serial.println ("Methan = " + String(methan->getValue()));
    /*
    int value = analogRead(A0);
    Serial.println ("Methan = (" + String(value) + ") " + String(5*(1024.0 - value)/value));
*/    
    readmethan = false;
  }
}

void serialEvent() {
  if (Serial.available ()){
    char symbol = Serial.read();
    switch (symbol){
      case 'g':
        readmethan = true;
      break;
    }
  }    
}
