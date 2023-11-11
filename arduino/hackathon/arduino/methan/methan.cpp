#include "methan.h"

/*
class Methan{
  private:
    int value;
    const float factor;
  public:
    Methan ();
    virtual ~Methan ();
    float getMethan();
};
*/

Methan::Methan (){
}

Methan::~Methan(){
  
}

float Methan::getValue(){
  value = analogRead(A0);
  return factor*(1024.0 - value*1.0)/value;
}
